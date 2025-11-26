
import type { GameState } from "../core/GameState";
import { TeddyBoss } from "./bosses/TeddyBoss";
import { BunnyBoss } from "./bosses/BunnyBoss";
import { ThunderBoss } from "./bosses/ThunderBoss";
import { RibbonBoss } from "./bosses/RibbonBoss";
import { randRange } from "../../game/utils/Random";

export class BossManager {
  timer = 0;
  nextBoss = 15000;
  current: any = null;

  update(dt: number, state: GameState) {
    // 若有 Boss，在场时驱动其行为
    if (this.current) {
      this.current.update(dt, state);
      if (this.current.dead) {
        this.current = null;
      }
      return;
    }

    // 没有 boss 时计算下次进场
    this.timer += dt;
    if (this.timer < this.nextBoss) return;

    this.timer = 0;
    this.nextBoss = randRange(18000, 26000);

    const r = Math.random();
    if (r < 0.25) this.current = new TeddyBoss();
    else if (r < 0.5) this.current = new BunnyBoss();
    else if (r < 0.75) this.current = new ThunderBoss();
    else this.current = new RibbonBoss();
  }
}
