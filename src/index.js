import * as PIXI from 'pixi.js';
import ShipModel from './model/ship';
import ShipView from './view/ship';
import AirModel from './model/air';
import AirView from './view/air';

const application = new PIXI.Application({
  width: 1920,
  height: 1080,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(application.view);

const map = [{ x: 10, y: 10 }, { x: 200, y: 10 }, { x: 400, y: 10 }, { x: 600, y: 10 }];

const UPS = 50;

const models = [];

const startttmp = window.performance.now();
let worldCounter = 0;
setInterval(function() {
  const current = window.performance.now();
  const count = ((current - startttmp) * UPS) / 1000 - worldCounter;
  for (let i = 0; i < count; i++) {
    worldCounter++;
    models.map(model => model.update());
  }
}, 10);

models.push(new ShipModel());

function createModel(data) {
  return new AirModel(data);
}

models.push(...map.map(createModel));

const views = [];

function create(model) {
  if (model instanceof ShipModel) {
    return new ShipView(application.stage, model);
  } else if (model instanceof AirModel) {
    return new AirView(application.stage, model);
  }
}

function render() {
  requestAnimationFrame(() => {
    models.map(model => {
      if (!views.some(view => view.model === model)) {
        views.push(create(model));
      }
    });

    views.map(view => view.render());
    render();
  });
}

requestAnimationFrame(render);
