export default class PopupWithTable {
  constructor(data, container, template) {
    this.data = data;
    this.container = container;
    this.template = template;
  }

  createButton() {
    this.container.insertAdjacentHTML(
      'beforeend',
      `
      <button class="table-sizes__btn">
        <span>
          <img src="https://res.cloudinary.com/gz-company/image/upload/v1608468514/%D0%9A%D0%BE%D1%80%D1%81%D0%B5%D1%82%D1%8B/icons8-%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0_1_f5txn3.svg">
        </span>
          Таблица размеров
      </button>
    `,
    );
  }

  setPopup() {
    return `
      <div class="popup d-none">
        <div class="popup-wrapper"></div>
        <div class="popup__content">
          ${this.template(this.data)}
        </div>
        <div class="popup__close">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
              fill="white"
            />
            <path
              d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    `;
  }

  eventHandler(e) {
    console.log(e.target);
    if (e.target.closets('button').classList.contains('open-popup')) {
      this.container.querySelector('popup').classList.remove('d-none');
    }

    if (
      e.target.closest('div').classList.contains('popup__close') ||
      e.target.closest('div').classList.contains('popup-wrapper')
    ) {
      this.container.querySelector('popup').classList.add('d-none');
    }
  }

  render() {
    this.createButton();
    this.container.insertAdjacentHTML('beforeend', this.setPopup(this.data));

    this.container.addEventListener('click', (e) => this.eventHandler(e));
  }
}
