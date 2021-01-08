const FormTags = [
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="name"',
      name: 'name="userName"',
      required: 'required',
      placeholder: 'placeholder="Ваше Имя"',
    },
  },
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="email"',
      name: 'name="email"',
      required: 'required',
      placeholder: 'placeholder="Ваш e-mail"',
    },
  },
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="tel"',
      pattern: 'pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"',
      required: 'required',
      name: 'name="phone"',
      placeholder: 'placeholder="Ваш телефон"',
    },
  },
  {
    name: 'button',
    content: 'Оставить заявку',
    attributes: {
      selector: 'class="form__button"',
      type: 'type="button"',
    },
  },
]

export default FormTags;
