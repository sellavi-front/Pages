import ColorChoise from '../../../components/ColorChoise/ColorChoise.js'

export default class ProductPage {
  renderColor() {
    const colorChoise = new ColorChoise();
    colorChoise.render();
  }
}
