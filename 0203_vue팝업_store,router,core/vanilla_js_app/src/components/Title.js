import { Componet } from '../core/coreMovie';
import messageStore from '../store/message';

export default class Title extends Componet {
  constructor() {
    super({
      tagName : 'h1'
    })
    messageStore.subscribe('message',(newVal)=> {
      this.render()
      console.log('newVal : ', newVal);
      
    })
  }
  render() {
    this.el.textContent = `Title : ${messageStore.state.message}`
  }
}