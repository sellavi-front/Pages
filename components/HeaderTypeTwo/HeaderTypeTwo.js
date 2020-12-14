import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
`;

const collapseShow = () => {
  const links = document.querySelectorAll('.mobile_side_nav_menu>.flexy>a');
  //remove attr href
  links.forEach(a => {
    if (a.closest('li').querySelector('.panel-collapse')){
      a.removeAttribute('href')
    }
  });

  //set listeners and show panel-collapse
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const el = e.target.closest('.flexy')

      el.querySelector('.panel-collapse').classList.toggle('show');
    })
  })
}

if (document.querySelector('.wrapper')) {
  headerContainer.classList.add('container')
  headerContainer.classList.remove('container-fluid')

  headerLoginText.remove();

  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();
    headerWidgets.remove();
    collapseShow();
    document.querySelector('.header_widgets').insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

  } else {
    headerContainer.insertAdjacentHTML('beforeend', `<div class="header_widgets">${wishList}${cart.outerHTML}</div>`);
    cart.remove();
  }
}
