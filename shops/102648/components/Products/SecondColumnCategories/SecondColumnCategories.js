import pages from "../../../config/conditions.js"

window.onload= () => {
  if(pages.main) {
    document.querySelector('.page-section').insertAdjacentHTML("afterbegin", `
      <div class='row'>
        <div class="col">
            <div class="categories__block">
                <h1>Categories</h1>
            </div>
        </div>
        <div class="col">

        </div>
      </div>
    `)
  }

}