export class Component {
  //export 자기 자신 파일만 보내겠다

  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
    console.log(payload);
  }
  render() {
    //... 값들이 들어온다
  }
}
