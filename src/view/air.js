import * as PIXI from 'pixi.js';
import airImg from '../../res/air.png';

export default class Air {
  constructor(scene, model) {
    this.sprite = new PIXI.Sprite(PIXI.Texture.from(airImg));
    scene.addChild(this.sprite);
    this.model = model;
  }

  render() {
    this.sprite.y = 10;
    this.sprite.x = this.model.x;
  }
}
