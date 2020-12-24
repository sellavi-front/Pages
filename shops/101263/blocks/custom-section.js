import customSectionLayout from "../layouts/custom-section-layout.js"

export default class CustomSection {
  render() {
    if(screen.width <= 768) {
      document.querySelector(".custom_section").insertAdjacentHTML("beforeend", customSectionLayout.mobile)
    } else if(screen.width > 768) {
      document.querySelector(".custom_section").insertAdjacentHTML("beforeend", customSectionLayout.desktop)
    }
  }
}