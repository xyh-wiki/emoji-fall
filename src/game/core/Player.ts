
import type { GameState } from "./GameState";

export class Player {
  x = 320;
  // 原来是 360，稍微下移一点，靠近画面底部更符合躲避感觉
  y = 420;
  speed = 260;

  update(dtMs: number, state: GameState, inputDir: number) {
    const dt = dtMs / 1000;
    this.x += inputDir * this.speed * dt;
    if (this.x < 20) this.x = 20;
    if (this.x > 620) this.x = 620;
  }
}
