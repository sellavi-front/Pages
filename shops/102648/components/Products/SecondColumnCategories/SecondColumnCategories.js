import pages from "../../../config/conditions.js"
import DeleteClasses from "../../../../../modules/DeleteClasses/DeleteClasses.js"

const bootstrapClasses = [
  'col-12',
  'col-sm-6',
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4'
];

window.onload= () => {
  if(pages.main) {
    console.log('[Making New Columns..]')

    // Getting categories ...
    let sfMenu = document.querySelector('.sf-menu')
    let newMainPageCategories = sfMenu.cloneNode(true)
    newMainPageCategories.classList.remove('sf-menu')
    newMainPageCategories.add('main-page-categories')
    sfMenu.remove()

    // [Getting product container ...]
    // 1. Delete all necessary classes from product items ...
    const productItems = document.querySelectorAll('.product-item');
    const deleteSelectors = new DeleteClasses(productItems, bootstrapClasses);
    deleteSelectors.findAndDelete();

    // 1.1 Creating new grid classes in product items ...
    let newProductItems = document.querySelectorAll('.product-item')
    Array.from(newProductItems).map(item => {
      item.classList.add('col-4')
    })

    // 2. Copy product container ...
    let oldProductContainer = document.querySelector("#home > div > div.content-area > section > div.container")
    let newProductContainer = oldProductContainer.cloneNode(true)
    let layoutProductContainer = newProductContainer.outerHTML
    oldProductContainer.remove()

    // 3. Creating new structure ...
    document.querySelector('.page-section').insertAdjacentHTML("afterbegin", `
      <div class="container">
        <div class='row'>
            <div class="col-4">
              <div class="categories__menu">
                  <div class="section-title mb-4 mt-4">Категории</div>
                  ${ newMainPageCategories.outerHTML }
              </div>
            </div>
            <div class="col-8">
              ${ layoutProductContainer }
            </div>
        </div>
      </div>
    `)
  }
}