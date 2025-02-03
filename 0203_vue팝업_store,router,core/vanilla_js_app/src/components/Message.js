import { Componet } from '../core/coreMovie';
import messageStore from '../store/message';

export default class Message extends Componet {
  constructor(){
    super();
    messageStore.subscribe('message',()=> {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /*html*/`
    <h2 style="color : orange;">
      ${messageStore.state.message}
    </h2>
    `
  } 
}