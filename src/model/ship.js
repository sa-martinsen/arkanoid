export default class Ship {

  constructor () {
    this.x = 500;
    this.worldCounter = 0;
      document.addEventListener('keydown', (e) => {
          if(e.key == 'ArrowRight') {
              this.x += 50;
              console.log(this.x);
          } else if (e.key == 'ArrowLeft') {
              this.x -= 50;
          }
          return false;

      });
  }

  update() {


  }

}