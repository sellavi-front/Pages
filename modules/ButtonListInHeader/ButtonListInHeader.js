export default class ButtonListInHeader {
  host = location.host;
  list = `
  <ul class="button__list list-inline">
  <li class="button__list_elem">
    <a
      id="wishlist"
      class="position-relative"
      href="https://${this.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
  </li>
  <li class="button__list_elem icon-user">
    <a href="https://${this.host}/account/" role="link">
      <i class="far fa-user"></i>
    </a>
  </li>
  <!-- <li class="button__list_elem icon-form">
    <a href="https://${this.host}/index.php?route=account/logout" role="link">
      <i class="far fa-sign-out-alt"></i>
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
          <i class="far fa-shopping-cart"></i>

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
                  <!--                          <a class="float-right close_popup" data-dismiss="modal" >--><!--?//= $text_close; ?--><!--</a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu toggle button -->
      <div class="fixed_logo" style="display: none">
        <a href="https://${this.host}/" role="link"
          ><img
            src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1604779301/ru/clients/101470/1dc684ae9a6ceb1535feb4e69010c1db276cf473.png"
            title="1981 Маркет"
            alt="1981 Маркет"
        /></a>
      </div>
    </div>
  </li>
</ul>`;

  constructor(container) {
    this.container = container;
  }

  setTemplate() {
    this.container.insertAdjacentHTML('beforeend', this.list);
  }
}
