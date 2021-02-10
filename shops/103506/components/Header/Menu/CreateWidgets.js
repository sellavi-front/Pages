let widgetsBlock = `<div class='widgets_block'></div>`

let headerContainer = document.querySelector("body.ltr > div > header > div.header-wrapper > div.container-fluid")

// Getting old elements
let oldHeaderCart = document.querySelector(".header-cart")
let oldSearchBlackScreen = document.querySelector(".search_black_screen")
let oldHeaderSearch = document.querySelector(".header-search")

// Deleting words from cart
document.querySelector("#cart > span.cart-norm-qty.d-none.d-lg-inline-block").remove()

// Creating copy of widgets
let newHeaderCart = oldHeaderCart.cloneNode(true)
let newSearchBlackScreen = oldSearchBlackScreen.cloneNode(true)
let newHeaderSearch = oldHeaderSearch.cloneNode(true)
let wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
`;

headerContainer.insertAdjacentHTML("beforeend", widgetsBlock)




