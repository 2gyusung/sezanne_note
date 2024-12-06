import { Component } from "./core/coreCommon";

export default class App extends Component {
  // export default 통째로 보내는 것 파일
  // constructor() {
  //   super() //상속 받는 부모

  //   // this.el = document.createElement('div');
  //   // this.el.textContent = 'Hello Javascript!!';
  // }
  constructor() {
    super({
      state: {
        textInput : ''
      }
    });
  }
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `<input /> <button>Click me!</button>`;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      this.state.textInput = inputEl.value;
    });
    const button = this.el.querySelector('button')
    button.addEventListener('click',()=> {
      console.log(this.state.textInput);
      
    })
    
  }
}
