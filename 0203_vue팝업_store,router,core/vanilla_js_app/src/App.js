import { Componet } from './core/coreMovie';
import Header from './Header';

export default class App extends Componet {
  render() {
    const routerView = document.createElement('router-view');
    this.el.append(new Header().el, routerView)
  }
};