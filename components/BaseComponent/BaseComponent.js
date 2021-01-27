export default class BaseComponent {
  constructor(...props) {
    this.props = props;
  }

  render(elem) {
    console.log(this.props);

    this.props.container.insertAdjacentHTML(this.props.target, elem);
  }
}
