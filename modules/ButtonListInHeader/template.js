const defaultIcons = {
  like: '<i class="far fa-heart"></i>',
  cart: '<i class="far fa-shopping-cart"></i>',
  user: '<i class="far fa-user"></i>',
  login: '<i class="far fa-sign-out-alt"></i>'
}

const template = (icons = defaultIcons, cart, host) => {
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
  <!-- <li class="button__list_elem icon-form">
    <a href="https://${host}/index.php?route=account/logout" role="link">
      ${icons.login}
    </a>
  </li> -->
  ${cart.outerHTML}
</ul>`;
};

export default template;
