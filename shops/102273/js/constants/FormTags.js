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
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
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
