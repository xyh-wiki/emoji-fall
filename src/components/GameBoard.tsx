
import React, { useEffect, useRef, useState } from "react";
import { GameEngine } from "../game/core/GameEngine";
import { SpawnManager } from "../game/systems/SpawnManager";
import { LootSystem } from "../game/systems/LootSystem";
import { BuffSystem } from "../game/systems/BuffSystem";
import { CollisionSystem } from "../game/systems/CollisionSystem";
import { ParticleSystem } from "../game/systems/ParticleSystem";
import { RandomEventsSystem } from "../game/systems/RandomEventsSystem";
import { SeasonalEvents } from "../game/systems/SeasonalEvents";
import { BossManager } from "../game/bosses/BossManager";
import { DailyChallenge } from "../game/modes/DailyChallenge";
import { SkinSystem } from "../game/core/SkinSystem";
import { GestureInput } from "../game/mobile/GestureInput";

import BossWarning from "./BossWarning";
import DailyPanel from "./DailyPanel";
import SkinSelector from "./SkinSelector";
import SettingsPanel from "./SettingsPanel";
import GameOverOverlay from "./GameOverOverlay";

const GameBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const [, setRefresh] = useState(0);
  const [showDaily, setShowDaily] = useState(false);
  const [showSkins, setShowSkins] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [sound, setSound] = useState(true);

  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [comboLabel, setComboLabel] = useState("x1.0");


  useEffect(() => {
    const eng = new GameEngine();
    engineRef.current = eng;

    eng.spawn = new SpawnManager();
    eng.loot = new LootSystem();
    eng.buff = new BuffSystem();
    eng.collision = new CollisionSystem(eng.buff, eng.bosses, eng.particles);
    eng.particles = new ParticleSystem();
    eng.randomEvents = new RandomEventsSystem();
    eng.seasonal = new SeasonalEvents();
    eng.bosses = new BossManager();
    eng.daily = new DailyChallenge();
    eng.skins = new SkinSystem();

    const canvas = canvasRef.current!;
    eng.gesture = new GestureInput(canvas);

    const ctx = canvas.getContext("2d")!;

    eng.start(() => {
      const state = eng.state;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // player
      ctx.font = "40px serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(eng.skins.current, eng.player.x, eng.player.y);

      // obstacles
      for (const o of state.obstacles) {
        ctx.font = "38px serif";
        ctx.fillText(o.emoji, o.x, o.y);
      }

      // loot
      for (const l of state.lootItems) {
        ctx.font = "34px serif";
        ctx.fillText(l.emoji, l.x, l.y);
      }

      // boss
      if (eng.bosses.current) {
        const b = eng.bosses.current;
        ctx.font = b.size + "px serif";
        ctx.fillText(b.emoji, b.x, b.y);
      }

      // particles
      eng.particles?.draw?.(ctx);

      setRefresh((v) => v + 1);
    });
  }, []);

  useEffect(() => {
    const eng = engineRef.current;
    const st = eng?.state;
    if (!st || !st.isRunning || st.isGameOver) {
      setComboMultiplier(1);
      setComboLabel("x1.0");
      return;
    }
    const seconds = st.time / 1000;
    let multi = 1;
    if (seconds >= 60) {
      multi = 2;
    } else if (seconds >= 40) {
      multi = 1.5;
    } else if (seconds >= 20) {
      multi = 1.2;
    }
    setComboMultiplier(multi);
    setComboLabel("x" + multi.toFixed(1));
  }, [engineRef.current?.state.time, engineRef.current?.state.isRunning, engineRef.current?.state.isGameOver]);


  const eng = engineRef.current;
  const st = eng?.state;

  const handleRestart = () => {
    eng?.restart();
  };

  return (
    <div className="game-root">
      <div className="hud-bar">
        <div className="hud-item">
          Score: {st ? Math.round(st.score * comboMultiplier) : 0}
          <span className="combo-label"> ({comboLabel})</span>
        </div>
        <div className="hud-item">Speed x{st?.speedMultiplier.toFixed(1) ?? "1.0"}</div>
        <div className="hud-item">Invincible: {st?.isInvincible ? "YES" : "NO"}</div>
        <button className="cute-btn" onClick={() => eng?.startGame()}>
          Start
        </button>
        <button className="cute-btn" onClick={() => eng?.togglePause()}>
          Pause
        </button>
        <button className="cute-btn" onClick={() => setShowDaily(true)}>
          Daily
        </button>
        <button className="cute-btn" onClick={() => setShowSkins(true)}>
          Skins
        </button>
        <button className="cute-btn" onClick={() => setShowSettings(true)}>
          ⚙️
        </button>
      </div>

      <div className="canvas-wrapper">
        <canvas ref={canvasRef} width={640} height={500} />
        <BossWarning show={!!eng?.bosses.current} />
        {st?.isGameOver && (
          <GameOverOverlay show={true} score={st.score} onRestart={handleRestart} />
        )}
      </div>

      {showDaily && (
        <DailyPanel
          objective={eng?.daily.objective}
          progress={eng?.daily.progress}
          target={eng?.daily.target}
          onClose={() => setShowDaily(false)}
        />
      )}
      {showSkins && (
        <SkinSelector
          skins={eng?.skins.unlocked || []}
          current={eng?.skins.current}
          onSelect={(s: string) => {
            if (eng) eng.skins.current = s;
          }}
          onClose={() => setShowSkins(false)}
        />
      )}
      {showSettings && (
        <SettingsPanel
          sound={sound}
          setSound={setSound}
          onClose={() => setShowSettings(false)}
        />
      )}

      
      <div className="game-info">
        <h2>How to play Emoji Fall</h2>
        <p>
          Move your emoji left and right to dodge the falling ghosts and collect cute power-up
          candies. Try to survive as long as possible while chasing a higher score in this relaxing
          browser mini game.
        </p>

        <h3>Controls</h3>
        <ul>
          <li>Desktop: use the ← and → arrow keys to move.</li>
          <li>Mobile: swipe left or right on the game area to move your emoji.</li>
          <li>Use the Pause button to take a short break during longer runs.</li>
        </ul>

        <h3>Power-up emoji &amp; effects</h3>
        <ul>
          <li>
            🍬 Candy &mdash; speed boost. Makes your movement faster for a short time so you can dash
            through tight gaps.
          </li>
          <li>
            🍭 Lollipop &mdash; slow motion. Slows everything down which makes it easier to dodge
            dense ghost patterns.
          </li>
          <li>
            💝 Heart &mdash; shield. Gives you temporary invincibility so touching obstacles will not
            end the run.
          </li>
          <li>
            ⭐ Star &mdash; score bonus. Instantly adds extra points to your score.
          </li>
          <li>
            🎁 Gift &mdash; screen clear. Triggers a bomb that wipes out all current obstacles.
          </li>
          <li>
            🌀 Mystery &mdash; random effect. Can give any of the above buffs, so it is high risk and
            high reward.
          </li>
          <li>
            🎀 Ribbon (from the ribbon boss) &mdash; extra bonus loot. A safe way to farm score if
            you can stay close without being hit.
          </li>
        </ul>

        <h3>Tips &amp; strategy</h3>
        <ul>
          <li>Use speed boosts to escape from boss patterns instead of only dodging slowly.</li>
          <li>Save screen-clearing gifts for the most dangerous moments when the board is crowded.</li>
          <li>Daily Challenge mode adds extra goals if you want more progression and replay value.</li>
        </ul>

        <p className="seo-keywords">
          Free HTML5 emoji falling game, online browser game, casual dodge-and-collect gameplay with
          cute ghosts and emoji power-ups, speed boost candy, slow motion lollipop, shield heart,
          random mystery loot, daily challenge mode, endless survival, keyboard and swipe controls,
          no download required.
        </p>
      </div>
    </div>
  );
};

export default GameBoard;
