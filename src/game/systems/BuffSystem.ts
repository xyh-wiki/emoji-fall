
import type { GameState } from "../core/GameState";

export class BuffSystem {
  timers = {
    speedUp: 0,
    slowDown: 0,
    invincible: 0
  };

  apply(type: string, state: GameState) {
    if (type === "speedUp") {
      this.timers.speedUp = 5000;
      state.speedMultiplier = 1.8;
    }
    if (type === "slowDown") {
      this.timers.slowDown = 5000;
      state.speedMultiplier = 0.5;
    }
    if (type === "invincible") {
      this.timers.invincible = 5000;
      state.isInvincible = true;
    }
    if (type === "bonus") {
      state.score += 200;
    }
    if (type === "bomb") {
      state.obstacles = [];
    }
    if (type === "mystery") {
      const m = ["speedUp","slowDown","invincible","bonus","bomb"];
      this.apply(m[Math.floor(Math.random()*m.length)], state);
    }
  }

  update(dt: number, state: GameState) {
    const d = dt;

    if (this.timers.speedUp > 0) {
      this.timers.speedUp -= d;
      if (this.timers.speedUp <= 0) state.speedMultiplier = 1;
    }

    if (this.timers.slowDown > 0) {
      this.timers.slowDown -= d;
      if (this.timers.slowDown <= 0) state.speedMultiplier = 1;
    }

    if (this.timers.invincible > 0) {
      this.timers.invincible -= d;
      if (this.timers.invincible <= 0) state.isInvincible = false;
    }
  }
}
