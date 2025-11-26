
import { randRange, randChoice } from "../utils/Random";
import type { GameState } from "../core/GameState";

// remove 🌀 from obstacles to avoid confusion with mystery loot
const OBSTACLE_EMOJIS = ["😵","😰","👻","🎃","💣","😱"];

export class SpawnManager {
  timer = 0;
  interval = 1200; // ms

  update(dt: number, state: GameState) {
    this.timer += dt;
    if (this.timer < this.interval) return;
    this.timer = 0;

    const emoji = randChoice(OBSTACLE_EMOJIS);
    const x = randRange(40, 600);
    const speed = randRange(60, 120);

    state.obstacles.push({
      x,
      y: -40,
      size: 40,
      emoji,
      speed
    });
  }
}
