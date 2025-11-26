
import { createInitialState, type GameState } from "./GameState";
import { Player } from "./Player";
import { InputController } from "./Input";
import { randRange } from "../utils/Random";

export class GameEngine {
  state: GameState = createInitialState();
  player = new Player();
  input = new InputController();
  last = 0;
  running = false;
  onTick: () => void = () => {};

  // systems
  spawn: any;
  loot: any;
  buff: any;
  collision: any;
  particles: any;
  bosses: any;
  randomEvents: any;
  seasonal: any;
  daily: any;
  skins: any;
  gesture: any;

  // helper: 上一帧是否已经 GameOver，用于触发一次性动画/粒子
  lastGameOver = false;

  constructor() {}

  start(loop: () => void) {
    this.onTick = loop;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this.loop);
  }

  startGame() {
    this.state = createInitialState();
    this.player = new Player();
    this.state.isRunning = true;
    this.state.isGameOver = false;
    this.lastGameOver = false;
  }

  restart() {
    this.startGame();
  }

  togglePause() {
    if (this.state.isGameOver) return;
    this.state.isRunning = !this.state.isRunning;
  }

  private loop = (t: number) => {
    if (!this.running) return;
    const dt = t - this.last;
    this.last = t;

    if (this.state.isRunning && !this.state.isGameOver) {
      this.state.time += dt;

      // player movement
      this.player.update(dt, this.state, this.input.direction);

      // random events, seasonal etc.
      this.randomEvents?.update?.(this.state);
      this.seasonal?.update?.(this.state);

      // spawn / loot / collision / bosses
      this.spawn?.update(dt, this.state);
      this.loot?.update(dt, this.state);
      this.collision?.update?.(this.state, this.player);
      this.bosses?.update?.(dt, this.state);
      this.daily?.update?.(dt, this.state);
      this.skins?.update?.(this.state);
      this.gesture?.update?.(this.player, this.state);
      this.buff?.update?.(dt, this.state);

      // cute trail: 随机在玩家附近生成软萌粒子
      if (this.particles && Math.random() < 0.12) {
        this.particles.spawn(
          this.player.x,
          this.player.y + 4,
          "rgba(255,182,193,0.85)"
        );
      }

      // update particles
      this.particles?.update?.(dt);

      // basic scoring
      this.state.score += dt * 0.01;

      if (this.state.isGameOver) {
        this.state.isRunning = false;
      }
    } else {
      // 即使暂停/结束，也让粒子慢慢消失
      this.particles?.update?.(dt);
    }

    this.onTick();
    this.lastGameOver = this.state.isGameOver;
    requestAnimationFrame(this.loop);
  };
}
