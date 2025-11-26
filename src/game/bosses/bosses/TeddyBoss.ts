
import { randRange } from "../../../game/utils/Random";

export class TeddyBoss {
  x = 320;
  y = -200;
  size = 160;
  emoji = "🧸";
  speed = 70;
  dead = false;
  dropTimer = 0;

  update(dt: number, state: any) {
    this.y += this.speed * (dt / 1000);
    this.dropTimer += dt;

    // 下降途中定期掉落幽灵障碍 & 偶尔掉礼盒
    if (this.dropTimer > 700) {
      this.dropTimer = 0;
      const dropX = this.x + randRange(-80, 80);
      // 80% 概率掉幽灵，20% 掉大礼盒
      if (Math.random() < 0.8) {
        state.obstacles.push({
          x: dropX,
          y: this.y + 40,
          size: 40,
          emoji: "👻",
          speed: randRange(120, 180)
        });
      } else {
        state.lootItems.push({
          x: dropX,
          y: this.y + 40,
          size: 40,
          emoji: "🎁",
          type: "bomb",
          speed: 90
        });
      }
    }

    if (this.y > 520) {
      this.dead = true;
    }
  }
}
