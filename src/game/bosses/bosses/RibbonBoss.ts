
import { randRange } from "../../../game/utils/Random";

export class RibbonBoss {
  x = 320;
  y = 150;
  size = 150;
  emoji = "🎀";
  dead = false;
  t = 0;
  giftTimer = 0;

  update(dt: number, state: any) {
    this.t += dt / 1000;
    this.giftTimer += dt;

    // 水平摆动轨迹
    this.x = 320 + Math.sin(this.t * 1.1) * 180;

    // 在路径上撒出奖励 loot
    if (this.giftTimer > 650) {
      this.giftTimer = 0;
      state.lootItems.push({
        x: this.x + randRange(-24, 24),
        y: this.y + 40,
        size: 34,
        emoji: "🎀",
        type: "bonus",
        speed: 80
      });
    }

    // 存在时间到达后离场
    if (this.t > 8) {
      this.dead = true;
    }
  }
}
