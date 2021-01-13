import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class BaseSender {
  constructor(container, target, title = 'Остались вопросы?', data = undefined) {
    this.target = target;
    this.container = container;
    this.data = data;
    this.title = title;
  }

  setTemplate() {
    return `
              <div class="sender">
                <h4 class="sender__title">${this.title}</h4>
                <p class="sender__description">
                </p>
                <form action="submit" class="sender__form">
                  <input
                    type="number"
                    class="sender__form_input"
                    placeholder="Ваш телефон"
                  />
                  <button class="sender__form_btn">
                      Отправить
                  </button>
                </form>
              </div>
              <div class="footer-contact">
                <ul class="footer-contact__contacts"></ul>
              </div>
            `;
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}
