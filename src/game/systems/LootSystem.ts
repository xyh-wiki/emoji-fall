
import { randRange, randChoice } from "../utils/Random";
import type { GameState } from "../core/GameState";

const LOOT = [
  { emoji: "🍬", type: "speedUp" },
  { emoji: "🍭", type: "slowDown" },
  { emoji: "💝", type: "invincible" },
  { emoji: "⭐", type: "bonus" },
  { emoji: "🌀", type: "mystery" },
  { emoji: "🎁", type: "bomb" }
];

export class LootSystem {
  timer = 0;

  update(dt: number, state: GameState) {
    // 所有已有的道具，每一帧都要下落
    for (const l of state.lootItems as any[]) {
      l.y += l.speed * (dt / 1000);
    }

    // 控制生成频率
    this.timer += dt;
    if (this.timer < 3500) return;
    this.timer = 0;

    const drop = randChoice(LOOT);
    state.lootItems.push({
      x: randRange(40, 600),
      y: -40,
      size: 38,
      ...drop,
      speed: 80
    });
  }
}
