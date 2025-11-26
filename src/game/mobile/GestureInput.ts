
export class GestureInput {
  sx = 0;
  active = false;

  constructor(canvas?:HTMLElement){
    if(!canvas) return;
    canvas.addEventListener("touchstart", e=>{
      this.active=true;
      this.sx=e.touches[0].clientX;
    });
    canvas.addEventListener("touchmove", e=>{
      const nx=e.touches[0].clientX;
      const dx=nx-this.sx;
      this.sx=nx;
      this.dx = dx;
    });
    canvas.addEventListener("touchend", ()=>{
      this.active=false;
      this.dx=0;
    });
  }

  update(player:any, state:any){
    if(!this.active) return;
    player.x += this.dx * 0.4;
  }
}
