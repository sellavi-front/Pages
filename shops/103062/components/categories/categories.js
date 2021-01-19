import pages from "../../pages/pages.js"

let fixHomeCategories = () => {
  if(pages.home) {
    /*document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(2) > div > div > a > div").remove()
    document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(1) > div > div > a > div").remove()*/
    document.querySelector("#home > div > div.content-area > section > div").insertAdjacentHTML("afterbegin", "<h2 class='categories-title'>Категории</h2>")
  }
}

let fixCategory = () => {
  if(pages.productCategory) {
    document.querySelector("#home > div > div.content-area > section.page-section.titles").remove()
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div > div").remove()
  }

  if(location.pathname === "/available/") {
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div").insertAdjacentHTML("afterbegin", "<img alt='img' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1610443474/sellavi/103062/Component_1_2_l9tfby.svg' style='margin-bottom: 25px;'/>")
  } else if(location.pathname === "/joint-procurement/") {
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div").insertAdjacentHTML("afterbegin", "<img alt='img' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1610443623/sellavi/103062/Component_1_3_kfdq9e.svg' style='margin-bottom: 25px;'/>")
  }
}


export {fixHomeCategories, fixCategory}