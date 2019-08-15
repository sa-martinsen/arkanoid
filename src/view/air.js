import * as PIXI from 'pixi.js';
import airImg from '../../res/air.png';

const Sprite = PIXI.Sprite,
  Texture = PIXI.Texture;
export default class Air {
  constructor(scene, model) {
    this.sprite = new Sprite(Texture.from(airImg));
    scene.addChild(this.sprite);
    this.model = model;
  }

  render() {
    this.sprite.y = 10;
    this.sprite.x = this.model.x;
  }
}
