import { Component } from './core/coreCommon';

export default class Fruits extends Component {
  constructor(payload) {
    console.log('payload', payload); //{props: {…}}
    
    super({
      tagName : 'li',
      props : payload.props
    })
  }
  render() {
    // this.el.textContent = this.props.name
    this.el.innerHTML = /*html*/`<span>${this.props.name}</span> : <span>${this.props.price}</span>`
    this.el.addEventListener('click',()=> {
      console.log(this.props.name , this.props.price);
      
    })
  }
}