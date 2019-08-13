export default class Ship {

  constructor () {
    this.x = 500;
    this.speed = 20;
    this.worldCounter = 0;
    this.move = {
      direction: "none",
    };
    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight') {
          this.move = {
            direction: "right",
          };
        } else if (e.key === 'ArrowLeft') {
          this.move = {
            direction: "left",
          };
        }
    });
    document.addEventListener('keyup', (e) => {
      this.move = {
        direction: "none",
      };
    });
  }

  update() {

    if(this.move.direction === "left") {
      this.x -= this.speed;
    }
    else if(this.move.direction === "right") {
      this.x += this.speed;
    }

  }

}