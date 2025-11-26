
import { randRange } from "../../../game/utils/Random";

export class ThunderBoss {
  x = randRange(80, 560);
  y = 40;
  size = 80;
  emoji = "🌩️";
  dead = false;
  warningTime = 900; // 预警时间
  fired = false;

  update(dt: number, state: any) {
    this.warningTime -= dt;

    // 发射雷击：在当前列生成一串高速障碍
    if (!this.fired && this.warningTime <= 0) {
      this.fired = true;
      for (let i = 0; i < 4; i++) {
        state.obstacles.push({
          x: this.x + randRange(-20, 20),
          y: -40 - i * 60,
          size: 36,
          emoji: "⚡",
          speed: randRange(220, 260)
        });
      }
    }

    // 雷云慢慢飘走
    this.y += 20 * (dt / 1000);
    if (this.y > 520 || (this.fired && this.warningTime < -1200)) {
      this.dead = true;
    }
  }
}
