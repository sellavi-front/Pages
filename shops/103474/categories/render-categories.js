import categories from "./categories.js"
let renderCategories = () => {
  let layout = `
  <div class="container">
    <h3 class="categories-title">Категории</h3>
    <div class="categories__container">
        <div class="categories__item">
            <a href="${categories.water.link}"><img src="${categories.water.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.fish.link}"><img src="${categories.fish.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.bakery.link}"><img src="${categories.bakery.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.chocolate.link}"><img src="${categories.chocolate.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.waffles.link}"><img src="${categories.waffles.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.season.link}"><img src="${categories.season.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.snacks.link}"><img src="${categories.snacks.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.humus.link}"><img src="${categories.humus.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.halva.link}"><img src="${categories.halva.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.cakes.link}"><img src="${categories.cakes.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <a href="${categories.other.link}"><img src="${categories.other.img}" alt="category"></a>
        </div>

        <div class="categories__item">
            <img src="${categories.logo.img}" alt="category">
        </div>
    </div>
  </div>
  `

  document.querySelector(".custom_section").insertAdjacentHTML("afterbegin", layout)
}

export default renderCategories