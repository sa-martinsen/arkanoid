import * as PIXI from 'pixi.js'
import ShipModel from "./model/ship"
import ShipView from "./view/ship"
import AirModel from "./model/air"
import AirView from "./view/air"

const application = new PIXI.Application({
  width: 1920, height: 1080, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(application.view);

const UPS = 50;

const startttmp = window.performance.now();
let worldCounter = 0;
setInterval( function () {
  const current = window.performance.now();
  const count = (current - startttmp) * UPS / 1000 - worldCounter;
  for (let i = 0; i < count; i ++ ) {
    worldCounter ++ ;
    model.update();
  }
}, 10 );


const model = new ShipModel();
const view = new ShipView(application.stage, model);

function render() {
  requestAnimationFrame( () => {
    view.render();
    render();
  } );
}

requestAnimationFrame( render );