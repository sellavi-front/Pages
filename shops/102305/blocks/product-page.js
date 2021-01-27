import ColorChoise from '../../../components/ColorChoise/ColorChoise.js'

export default class ProductPage {
  renderColor() {
    const colorChoise = new ColorChoise();
    colorChoise.render();
  }

  errorMessage() {
    document.querySelector("#product > div.form-group.col-sm-6.selectpicker-wrapper.required.option-group.color-choise.has-error > div.text-danger").classList.add("clr__picker")
    document.querySelector("#product > div:nth-child(2) > div.text-danger").classList.add("size__picker")
  }
}
