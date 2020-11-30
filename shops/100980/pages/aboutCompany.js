import contentOptimizer from "./contentOptimizer.js";


let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")
const aboutCompanyTemplate = `
  <div class="">
  </div>

`

let renderAboutCompanyTemplate = () => {
  contentOptimizer(aboutCompanyTemplate, sectionTitles, information)
}

export default renderAboutCompanyTemplate