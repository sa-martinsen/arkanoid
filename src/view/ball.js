import * as PIXI from 'pixi.js';
import ballImg from '../../res/ball.svg';
import View from './view';

const Sprite = PIXI.Sprite,
  Texture = PIXI.Texture;

export default class Ball extends View {
  constructor(scene, model) {
    super(scene, model);
    this.sprite = new Sprite(Texture.from(ballImg));
    scene.addChild(this.sprite);
    this.model = model;
  }

  render() {
    this.sprite.y = this.model.y;
    this.sprite.x = this.model.x;
  }
}
