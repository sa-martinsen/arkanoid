import * as PIXI from 'pixi.js'


export default class Ship {

  constructor (scene, model) {
    this.sprite = new PIXI.Sprite(PIXI.Texture.from("./res/ship.png"));
    scene.addChild(this.sprite);
    this.model = model;
  }

  render() {
    this.sprite.y = 900;
    this.sprite.x = this.model.x;
  }

}