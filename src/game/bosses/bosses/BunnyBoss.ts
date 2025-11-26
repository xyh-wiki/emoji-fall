
import { randRange } from "../../../game/utils/Random";

export class BunnyBoss {
  x = -200;
  y = 220;
  size = 120;
  emoji = "🐰";
  vx = 320;
  dead = false;
  trailTimer = 0;

  update(dt: number, state: any) {
    this.x += this.vx * (dt / 1000);
    this.trailTimer += dt;

    // 身后留下小炸弹幽灵，形成横向弹幕
    if (this.trailTimer > 450) {
      this.trailTimer = 0;
      state.obstacles.push({
        x: this.x - 40,
        y: this.y + randRange(-20, 20),
        size: 34,
        emoji: "💣",
        speed: randRange(130, 190)
      });
    }

    if (this.x > 860) {
      this.dead = true;
    }
  }
}
