import {Componet} from './core/coreMovie'


export default class App extends Componet {
  render() {
    const routerView = document.createElement('router-view')
    this.el.append(routerView)
  }
}