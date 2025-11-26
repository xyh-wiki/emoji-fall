
export class SkinSystem {
  current = "🙂";
  unlocked = ["🙂"];

  update(state:any){
    if(state.score>100 && !this.unlocked.includes("🐱")) this.unlocked.push("🐱");
    if(state.score>200 && !this.unlocked.includes("🐤")) this.unlocked.push("🐤");
  }
}
