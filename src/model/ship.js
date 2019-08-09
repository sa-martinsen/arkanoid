export default class Ship {

  constructor () {
    this.x = 500;
    this.worldCounter = 0;
  }

  update() {
    this.worldCounter ++ ;

    if(this.worldCounter % 1000 > 500) {
      this.x += 1;
    }
    else {
      this.x -= 1;
    }

  }

}