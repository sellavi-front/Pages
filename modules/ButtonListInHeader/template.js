const defaultIcons = {
  like: '<i class="far fa-heart"></i>',
  cart: '<i class="far fa-shopping-cart"></i>',
  user: '<i class="far fa-user"></i>',
  login: '<i class="far fa-sign-out-alt"></i>'
}

const template = (icons = defaultIcons, host) => {
  return `
  <ul class="button__list list-inline">
  <li class="button__list_elem">
    <a
      id="wishlist"
      class="position-relative"
      href="https://${host}/index.php?route=account/wishlist"
      role="link"
    >
      ${icons.like}
    </a>
  </li>
  <li class="button__list_elem icon-user">
    <a href="https://${host}/account/" role="link">
      <i class="far fa-user"></i>
    </a>
  </li>
  <!-- <li class="button__list_elem icon-form">
    <a href="https://${host}/index.php?route=account/logout" role="link">
      ${icons.login}
    </a>
  </li> -->
  <li class="button__list_elem header-cart sticky" data-product-added-text="Product added to cart">
    <div class="cart-wrapper">
      <div class="dropdown cart_drop_down">
        <a
          tabindex="0"
          href="#"
          id="cart"
          data-toggle="dropdown"
          data-display="static"
          title="Перейти в корзину"
          aria-haspopup="true"
          aria-expanded="false"
          role="link"
        >
          ${icons.cart}

          <span class="cart-qty-circle d-block d-lg-none"> 0</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <div class="cart-items">
            <div class="cart-items-inner overflow-hidden">
              <div class="col-12">
                <div class="cart-content">
                  <div class="row cart-header">
                    <div class="col-12">
                      <p>Ваша корзина, 0 товар/ы</p>
                    </div>
                  </div>

                  <div class="row empty_cart">
                    <div class="col-12">
                      <p>Ваша корзина пуста</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </li>
</ul>`;
};
