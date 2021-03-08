import changeTitleBlogToNews from './changeTitleBlogToNews.js';
import btnWishListToBtnAddToCart from './BtnWishListToBtnAddToCart.js'
import cutSrcImg from './cutSrcImg.js';
import changeTextCategoryBtn from './changeTextCategoryBtn.js';
import pages from '../config/conditions.js';
import setBannerCaption from './setBannerCaption.js';
import renderBanner from "../styles/banner/banner.js"
import renderSlider from "./addSlider.js";

if (document.querySelector('.alert.alert-info')) {
  document.querySelector("#home > div > div > div").childNodes[2].textContent = 'Обратите внимание, чтобы добавить этот продукт в корзину, сначала заполните варианты продукта.';
}

if (document.querySelector('.product-product')) {
  let xes = document.querySelectorAll('#bs-select-1 > ul > li')
  let fles = document.querySelector('.dropdown-menu.show')
  for (let i in xes) {
    xes[i].onclick = () => {
        fles.classList.toggle('show')
    }
}
}

if (pages.all) {
  changeTitleBlogToNews();
}

if (document.querySelector('.product-item')) {
  btnWishListToBtnAddToCart();
}

if (pages.main) {
  addEventListener('click', () => {
    
    let clientName = document.querySelector('#home__form_submit > input:nth-child(2)').value
    let clientPhone = document.querySelector('#home__form_submit > input:nth-child(3)').value
    let clientEmail = document.querySelector('#home__form_submit > input:nth-child(4)').value
    document.querySelector('.banner__submit__form__btn').innerHTML = ''
    document.querySelector('.banner__submit__form__btn').insertAdjacentHTML('afterbegin', `<a href="https://api.whatsapp.com/send?phone=79053688303&text=${clientName}%20${clientPhone}%20${clientEmail}">Получить предложение</a>`)
    })
}

if (pages.main) {
  renderBanner()
}
renderSlider()

