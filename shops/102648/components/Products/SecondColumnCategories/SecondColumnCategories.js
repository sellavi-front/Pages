import pages from "../../../config/conditions.js"

window.onload= () => {
  if(pages.main) {
    console.log('[Making New Columns..]')
    // Getting categories ...
    let oldCatalog = document.querySelector(".mobile-navigation-wrapper")
    let newCatalog = oldCatalog.cloneNode(true)

    // Getting product container ...
    let oldProductContainer = document.querySelector("#home > div > div.content-area > section > div.container")
    let newProductContainer = oldProductContainer.cloneNode(true)
    let layoutProductContainer = newProductContainer.outerHTML
    oldProductContainer.remove()

    // Creating new structure ...
    document.querySelector('.page-section').insertAdjacentHTML("afterbegin", `
      <div class="container">
        <div class='row'>
            <div class="col">
              <div class="categories__menu">
                  <h1>Categories</h1>
                  ${ newCatalog.outerHTML }
              </div>
            </div>
            <div class="col">
              ${ layoutProductContainer }
            </div>
        </div>
      </div>

    `)
  }
}