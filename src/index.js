import * as PIXI from 'pixi.js'
import ShipModel from "./model/ship"
import ShipView from "./view/ship"

const application = new PIXI.Application({
  width: 1920, height: 1080, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(application.view);


const model = new ShipModel();
const view = new ShipView(application.stage, model);

function render() {
  requestAnimationFrame( () => {
    view.render();
    render();
  } );
}

requestAnimationFrame( render );