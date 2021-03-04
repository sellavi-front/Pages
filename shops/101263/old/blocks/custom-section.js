import customSectionLayout from "../layouts/custom-section-layout.js"
import renderCategories from "../categories/render-categories.js"

export default class CustomSection {
  render() {

    renderCategories()

    if(screen.width <= 768) {
      document.querySelector(".custom_section").insertAdjacentHTML("beforeend", customSectionLayout.mobile)
    } else if(screen.width > 768) {
      document.querySelector(".custom_section").insertAdjacentHTML("beforeend", customSectionLayout.desktop)
    }
  }
}