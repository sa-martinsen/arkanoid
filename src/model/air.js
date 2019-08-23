import Model from './model';

export default class Air extends Model {
  constructor({ x, y }) {
    super();
    this.x = x;
    this.y = y;
    this.worldCounter = 0;
  }

  update() {}
}
