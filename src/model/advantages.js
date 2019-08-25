export default class Advantages {

  constructor () {
    this.item = [];
  }

  add( advantage ) {
    this.item.push(advantage);
  }

  getByName(type) {
    return this.item.find( advantage => advantage.type === type );
  }

}
