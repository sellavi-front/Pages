
export default class InfoCardTypeTwo {
  constructor(props) {
    this.props = props;
  }

  setCard() {
    return this.props.map(card => {`
    <div class="info-card__item">
      <div class="info-card__elem">
        <img src="${card.img}" alt="" />
      </div>
      <div class="info-card__elem">
        <h5>${card.title}</h5>
        <p>${card.text}</p>
      </div>
    </div>
    `});
  }

  render() {
    return `
      <div class="info-card">
        ${this.setCard()}
      </div>
    `
  }
}