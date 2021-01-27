export default class BaseComponent {
  constructor(props) {
    this.props = props;
  }

  render(elem) {

    this.props.container.insertAdjacentHTML(this.props.target, elem);
  }
}
