
import type { GameState } from "../core/GameState";
import { randRange } from "../utils/Random";

export class RandomEventsSystem {
  timer = 0;
  nextEvent = 4000;

  update(state: GameState) {
    this.timer += 16;
    if (this.timer < this.nextEvent) return;

    this.timer = 0;
    this.nextEvent = randRange(4000, 8000);

    const r = Math.random();

    // Wind
    if (r < 0.33) {
      state.windDirection = Math.random() < 0.5 ? -1 : 1;
      state.windStrength = randRange(10, 30);
      return;
    }
    // Rain
    if (r < 0.66) {
      state.isRainy = true;
      setTimeout(() => state.isRainy = false, 5000);
      return;
    }
    // Chaos
    state.chaosLevel = randRange(1, 3);
    setTimeout(() => state.chaosLevel = 0, 5000);
  }
}
