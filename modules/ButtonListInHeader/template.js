const defaultIcons = {
  like: '<i class="far fa-heart"></i>',
  cart: '<img src="https://res.cloudinary.com/gz-company/image/upload/v1606402883/Miru/assets/icons/icons8-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0_1_1_gqdqiq.png" alt="cart">',
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
  <!-- <li class="button__list_elem icon-user">
    <a href="https://${host}/account/" role="link">
      <i class="far fa-user"></i>
    </a>
  </li> -->
  <!-- <li class="button__list_elem icon-form">
    <a href="https://${host}/index.php?route=account/logout" role="link">
      ${icons.login}
    </a>
  </li> -->
  ${cart.outerHTML}
</ul>`;
};

export default template;
