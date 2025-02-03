import Message from '../components/Message'
import TextFild from '../components/TextField'
import Title from '../components/Title'
import { Componet } from '../core/coreMovie'

export default class Home extends Componet {
  render() {
    this.el.innerHTML = /* html */`
      <h1>Home Page...</h1>
    `
    this.el.append(      
      new TextFild().el,
      new Message().el,
      new Title().el
    )
  }
};