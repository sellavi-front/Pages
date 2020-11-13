export default class SenderTypeOne {
  constructor(container, content) {
    this.container = container;
    this.content = content;
  }

  _template() {
    return `
            <div class="footer-col-1">
              <div class="sender">
                <h4 class="sender__title">У нас есть e-mail рассылка</h4>
                <p class="sender__description">
                  Получайте письма с последними новинками, акциями и розыгрышами. Вы можете отписаться в любой момент
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
