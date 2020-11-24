import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class HistoryLine {
  constructor(container, target) {
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
        <div class="grid-photo">
          <div class="container">
          <div class="grid-photo__container">
          </div>
        </div>
      </div>
    `;
//    ${this.setData(this.data).join('')}
  }

  // setData() {
  //   return this.data.map(
  //     (item) => `
  //       <div class="history__item">
  //         <p class="history__item_date">${item.date}</p>
  //         <img class="history__item_line" src="${item.line}">
  //         <img class="history__item_img" src="${item.img}">
  //         <div class="history__item_text">
  //           <p class="history__item_text_title">${item.title}</p>
  //           <p class="history__item_text_text">${item.text}</p>
  //         </div>
  //       </div>
  //     `,
  //   );
  // }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}
