import { Componet } from './core/coreMovie';

export default class Header extends Componet {
  constructor() {
    super({
      tagName : 'header'
    })
  };
  render() {
    this.el.innerHTML = /* html */`
      <a href="#/">Main</a>
      <a href="#/about">About</a>
    `
  }
};