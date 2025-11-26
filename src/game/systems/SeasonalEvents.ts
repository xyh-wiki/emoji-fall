
import type { GameState } from "../core/GameState";

export class SeasonalEvents {
  mode = "normal";

  constructor() {
    const m = new Date().getMonth()+1;
    if (m === 10) this.mode = "halloween";
    if (m === 12) this.mode = "christmas";
    if (m === 2) this.mode = "valentine";
    if (m === 4) this.mode = "sakura";
  }

  update(state: GameState) {
    // could affect visuals, obstacles, loot later
  }
}
