export default class InfoBlock {
  constructor(props) {
    this.props = props;
  }

  setText() {
    return
  }

  setContent(data) {
    return `
      <div class="info-block__content d-flex ">
        <img src="${data.image}">
      </div>
      <div class="info-block__content d-flex ">
        <div class="info-block__content-text">
          <h5>${data.title}</h5>
          <div>${data.ph1}</div>
        ${
          data.ph2 !== '' ? `<div>${data.ph2}</div>` : ''
        }
        </div>
      </div>
    `;
  }

  setRow(data) {
    return data.map(row => {
      return `
        <div class="row d-flex">${this.setContent(row)}</div>
      `
    }).join('');
  }

  render() {
    return `
      <div class="info-block d-flex">
         ${this.setRow(this.props)}
      </div>
    `
  }
}