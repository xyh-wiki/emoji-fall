
export class InputController {
  direction = 0;

  constructor() {
    window.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") this.direction = -1;
      if (e.key === "ArrowRight") this.direction = 1;
    });
    window.addEventListener("keyup", e => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") this.direction = 0;
    });
  }
}
