export default class SenderTypeOne {
  contentDefault = {
    title: 'Подписка на новости',
    text: 'Получайте письма с последними новинками, акциями и розыгрышами. Вы можете отписаться в любой момент',
  }

  constructor(container, content = this.contentDefault) {
    this.container = container;
    this.content = content;
  }

  _template() {
    return `
            <div class="footer-col-1">
              <div class="sender">
                <h4 class="sender__title">${this.content.title}</h4>
                <p class="sender__description">
                  ${this.content.text}
                </p>
                <form action="submit" class="sender__form">
                  <input
                    type="email"
                    class="sender__form_input"
                  />
                  <button class="sender__form_btn">
                      Отправить
                  </button>
                </form>
              </div>
              <div class="footer-contact">
                <ul class="footer-contact__contacts"></ul>
              </div>
            </div>`;
  }

  render() {
    this.container.insertAdjacentHTML('afterBegin', this._template());
  }
}
