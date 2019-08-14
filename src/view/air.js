import * as PIXI from 'pixi.js';
import airImg from '../../res/air.png';

const SPRITE = PIXI.Sprite,
  TEXTURE = PIXI.Texture;
export default class Air {
  constructor(scene, model) {
    this.sprite = new SPRITE(TEXTURE.from(airImg));
    scene.addChild(this.sprite);
    this.model = model;
  }

  render() {
    this.sprite.y = 10;
    this.sprite.x = this.model.x;
  }
}
