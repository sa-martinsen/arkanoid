import * as PIXI from 'pixi.js'
import View from "./view"

export default class Ship extends View {

  constructor (scene, model) {
    super(scene, model);
    this.sprite = new PIXI.Sprite(PIXI.Texture.from("./res/ship.png"));
    scene.addChild(this.sprite);
  }

  render() {
    this.sprite.y = 900;
    this.sprite.x = this.model.x;
  }

}