import contentOptimizer from "./contentOptimizer.js";

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

const aboutCompanyTemplate = `
  <div class="container-fluid">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a>><a href="/about-company/" class="active__page">О компании</a></div>
    </div>
  </div>
`

let renderAboutCompanyTemplate = () => {
  contentOptimizer(aboutCompanyTemplate, sectionTitles, information)
}

export default renderAboutCompanyTemplate