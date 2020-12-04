import contentOptimizer from "../contentOptimizer.js"
import InfoCardTypeOne from "../../../../components/InfoCardTypeOne/InfoCardTypeOne.js"
import "./utils/solutionsObj.js"
import {solutionsRowLayout} from "./utils/solutionsObj.js";

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

let solutionsPageLayout = `
  <div class="container-fluid inner-page">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a> > <a href="/solutions/" class="active__page">Готовые решения</a>
    </div>
    <div class="about__company_container">
        <h1>Готовые решения</h1>
        <p>Получите бесплатное коммерческое предложение подходящего заведения</p>
    </div>

    <div class="solutions__container">

    </div>

  </div>
`

let solutionsContainer = document.querySelector(".solutions__container")
solutionsContainer.insertAdjacentHTML("afterbegin", solutionsRowLayout)


let renderSolutionsTemplate = () => {
  contentOptimizer(solutionsPageLayout, sectionTitles, information)
}

export default renderSolutionsTemplate