
export interface CuteParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export class ParticleSystem {
  particles: CuteParticle[] = [];

  spawn(x:number,y:number,color:string){
    for(let i=0;i<10;i++){
      this.particles.push({
        x,
        y,
        vx:(Math.random()-0.5)*60,
        vy:(Math.random()-0.8)*80,
        life: 600,
        maxLife: 600,
        color,
        size: 3+Math.random()*3
      });
    }
  }

  update(dt:number){
    for(let i=this.particles.length-1;i>=0;i--){
      const p=this.particles[i];
      p.life-=dt;
      p.x+=p.vx*(dt/1000);
      p.y+=p.vy*(dt/1000);
      if(p.life<=0) this.particles.splice(i,1);
    }
  }

  draw(ctx:CanvasRenderingContext2D){
    for(const p of this.particles){
      const alpha = p.life / p.maxLife;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}
