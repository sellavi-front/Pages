import pages from "../../pages/pages.js"

let fixHomeCategories = () => {
  if(pages.home) {
    document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(1) > div > div > a > picture > img").setAttribute("src", "https://cdn.sellavi.com/image/upload/ru/clients/103062/c83ae92794c00af6d4103a65f731cb01381b6835.jpg")
    document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(2) > div > div > a > picture > img").setAttribute("src", "https://cdn.sellavi.com/image/upload/ru/clients/103062/6aa122b875e287c26e941abb67d188136f4d7143.jpg")
    document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(2) > div > div > a > div").remove()
    document.querySelector("#home > div > div.content-area > section > div > div > div:nth-child(1) > div > div > a > div").remove()
    document.querySelector("#home > div > div.content-area > section > div").insertAdjacentHTML("afterbegin", "<h2 class='categories-title'>Категории</h2>")
  }
}

let fixCategory = () => {
  if(pages.productCategory) {
    document.querySelector("#home > div > div.content-area > section.page-section.titles").remove()
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div > div").remove()
  }

  if(location.pathname === "/available/") {
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div").insertAdjacentHTML("afterbegin", "<img alt='img' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1610443474/sellavi/103062/Component_1_2_l9tfby.svg' style='margin-bottom: 15px;'/>")
  } else if(location.pathname === "/joint-procurement/") {
    document.querySelector("#home > div > div.content-area > section.page-section.subcategories_top > div").insertAdjacentHTML("afterbegin", "<img alt='img' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1610443623/sellavi/103062/Component_1_3_kfdq9e.svg' style='margin-bottom: 15px;'/>")
  }
}


export {fixHomeCategories, fixCategory}