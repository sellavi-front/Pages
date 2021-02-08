import pages from "../../../config/conditions.js"

window.onload= () => {
  if(pages.main) {

    let oldProductContainer = document.querySelector("#home > div > div.content-area > section > div.container")
    let newProductContainer = oldProductContainer.cloneNode(true)
    oldProductContainer.remove()

    document.querySelector('.page-section').insertAdjacentHTML("afterbegin", `
      <div class='row'>
        <div class="col">
            <div class="container">
                <div class="categories__menu">
                    <h1>Categories</h1>
                </div>
            </div>
        </div>
        <div class="col">
            ${newProductContainer}
        </div>
      </div>
    `)
  }

}