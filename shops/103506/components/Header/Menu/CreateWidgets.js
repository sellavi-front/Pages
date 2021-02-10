let headerContainer = document.querySelector("body.ltr > div > header > div.header-wrapper > div.container-fluid > div.logo")

// Getting old elements
let oldHeaderCart = document.querySelector(".header-cart")
let oldHeaderSearch = document.querySelector(".header-search")

// Deleting words from cart
document.querySelector("#cart > span.cart-norm-qty.d-none.d-lg-inline-block").remove()

// Creating copy of widgets
let newHeaderCart = oldHeaderCart.cloneNode(true)
let newHeaderSearch = oldHeaderSearch.cloneNode(true)
let wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=login"
      role="link"
    >
      <i class="far fa-heart text-white"></i>
    </a>
`;

let login = `
    <a
      id="login"
      class="position-relative"
      href="https://${location.host}/login/"
      role="link"
    >
      <i class="fas fa-user text-white"></i>
    </a>
`;

let widgetsBlock = `<div class='widgets_block'>
    ${newHeaderSearch.outerHTML}
    ${newHeaderCart.outerHTML}
    ${wishList}
    ${login}
</div>`

headerContainer.insertAdjacentHTML("beforeend", widgetsBlock)

oldHeaderSearch.remove()
oldHeaderCart.remove()





