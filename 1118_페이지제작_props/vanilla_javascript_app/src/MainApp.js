import { Component } from "./core/coreCommon";

export default class MainApp extends Component {
  // export default 통째로 보내는 것 파일
  // constructor() {
  //   super() //상속 받는 부모

  //   // this.el = document.createElement('div');
  //   // this.el.textContent = 'Hello Javascript!!';
  // }
  constructor() {
    // super({
    //   state: {
    //     textInput : ''
    //   }
    // });
    super({
      state: {
        fruits: [
          { name: "Apple", price: 1000 },
          { name: "BANana", price: 2000 },
          { name: "cherry", price: 10000 },
        ],
      },
    });
  }
  render() {
    // console.log(this.state.fruits); //(3) [{…}, {…}, {…}]
    this.el.innerHTML = /*html*/ `<h1>fruits</h1>
    <ul>
      ${this.state.fruits
        .filter((fruit) => fruit.price < 3000)
        .map((fruit) => {
          return `<li>${fruit.name}</li>`;
        })
        .join("")}
      </ul>`;
    // <li>${this.state.fruits[0].name}</li>
    // <li>${this.state.fruits[1].name}</li>
    // <li>${this.state.fruits[2].name}</li>
  }
}
