
import type { GameState } from "../core/GameState";
import type { Player } from "../core/Player";

export class CollisionSystem {
  buff: any;
  bosses: any;
  particles: any;

  constructor(buffSystem: any, bossManager?: any, particleSystem?: any) {
    this.buff = buffSystem;
    this.bosses = bossManager;
    this.particles = particleSystem;
  }

  update(state: GameState, player: Player) {
    // obstacles: falling ghosts, bombs etc.
    for (const o of state.obstacles) {
      o.y += o.speed * (state.speedMultiplier * 0.018);
      if (Math.abs(o.x - player.x) < 34 && Math.abs(o.y - player.y) < 34) {
        if (!state.isInvincible) {
          state.isGameOver = true;
          // 爆光粒子：被撞时在玩家位置爆一圈红色光点
          this.particles?.spawn?.(player.x, player.y, "rgba(255,80,80,0.9)");
        }
      }
    }

    // loot: pick up items -> buff + cute burst
    for (let i = state.lootItems.length - 1; i >= 0; i--) {
      const l: any = state.lootItems[i];
      if (Math.abs(l.x - player.x) < 36 && Math.abs(l.y - player.y) < 36) {
        this.buff.apply(l.type, state);

        // 根据道具类型给不同颜色的拾取特效
        let color = "rgba(255,215,0,0.95)"; // default gold
        if (l.type === "speedUp") color = "rgba(135,206,250,0.95)"; // sky blue
        if (l.type === "slowDown") color = "rgba(186,85,211,0.95)"; // purple
        if (l.type === "invincible") color = "rgba(144,238,144,0.95)"; // green
        if (l.type === "bonus") color = "rgba(255,182,193,0.98)"; // pink
        if (l.type === "bomb") color = "rgba(255,140,0,0.98)"; // orange
        if (l.type === "mystery") color = "rgba(72,61,139,0.98)"; // dark violet

        this.particles?.spawn?.(l.x, l.y, color);

        state.lootItems.splice(i, 1);
      }
    }

    // boss body as a big hazard
    if (this.bosses?.current) {
      const b = this.bosses.current;
      const dx = (b.x ?? 0) - player.x;
      const dy = (b.y ?? 0) - player.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = (b.size ?? 120) * 0.45;
      if (dist < radius) {
        if (!state.isInvincible) {
          state.isGameOver = true;
          this.particles?.spawn?.(player.x, player.y, "rgba(255,80,80,0.9)");
        }
      }
    }
  }
}
