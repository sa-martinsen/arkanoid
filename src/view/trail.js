import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
import ballImg from '../../res/ball.svg';

let prevRender;
export default class TrailView {
  constructor (scene, model) {
    this.model = model;
    this.pointer = new PIXI.Point(model.x, model.y);
    this.emitterPos = this.pointer.clone();

    const texture = PIXI.Texture.from(ballImg);
    this.emitter = new particles.Emitter(scene, [texture], {
      autoUpdate: true,
      alpha: {
        start: 0.8,
        end: 0.2,
      },
      scale: {
        start: 1,
        end: 0.2,
        minimumScaleMultiplier: 1,
      },
      color: {
        start: '#ff6600',
        end: '#ff3399',
      },
      speed: {
        start: 300,
        end: 50,
        minimumSpeedMultiplier: 1,
      },
      acceleration: {
        x: 0,
        y: 0,
      },
      maxSpeed: 0,
      startRotation: {
        min: 0,
        max: 360,
      },
      noRotation: true,
      rotationSpeed: {
        min: 0,
        max: 0,
      },
      lifetime: {
        min: 0.2,
        max: 0.8,
      },
      blendMode: 'normal',
      frequency: 0.001,
      emitterLifetime: -1,
      maxParticles: 150,
      pos: {
        x: 42,
        y: 42,
      },
      addAtBack: false,
      spawnType: 'point',
    });
    this.emitter.updateOwnerPos(this.emitterPos.x, this.emitterPos.y);
  }


  render () {
    const now = window.performance.now();
    const delta = now - (prevRender || now);
    prevRender = now;

    this.pointer.copyFrom(this.model);

    if (!this.emitterPos.equals(this.pointer)) {

      const dt = 1 - Math.pow(0.7, delta);
      const dx = this.model.x - this.emitterPos.x;
      const dy = this.model.y - this.emitterPos.y;

      this.emitterPos.x += dx * dt;
      this.emitterPos.y += dy * dt;

      this.emitter.updateOwnerPos(this.emitterPos.x, this.emitterPos.y);
    }

  }
}
