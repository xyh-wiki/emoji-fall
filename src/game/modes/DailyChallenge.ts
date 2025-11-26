
import type { GameState } from "../core/GameState";

export class DailyChallenge {
  objective = "survive";
  target = 60000; // ms
  progress = 0;
  rewardGiven = false;

  constructor(){
    const seed = new Date().getDate() % 3;
    if (seed === 1) this.objective = "collect";
    if (seed === 2) this.objective = "score";
  }

  update(dt:number, state:GameState){
    if(state.isGameOver) return;

    if (this.objective==="survive"){
      this.progress += dt;
      if (this.progress>=this.target && !this.rewardGiven){
        state.score += 500;
        this.rewardGiven = true;
      }
    }
    if (this.objective==="score"){
      if (state.score>=300 && !this.rewardGiven){
        state.score += 200;
        this.rewardGiven = true;
      }
    }
    if (this.objective==="collect"){
      // placeholder for loot count integration
    }
  }
}
