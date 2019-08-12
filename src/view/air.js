import * as PIXI from 'pixi.js'

export default class Air {

    constructor (scene, model) {
        this.sprite = new PIXI.Sprite(PIXI.Texture.from("./res/air.png"));
        scene.addChild(this.sprite);
        this.model = model;
    }

    render() {
        this.sprite.y = 10;
        this.sprite.x = this.model.x;
    }

}