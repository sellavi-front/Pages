import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import BigBanner from "../../modules/BigBanner/BigBanner.js";

window.onload = () => {
  /* Deleting burger */
  //document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky").remove()

  /* Setting logo */
  let logo = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo")
  logo.classList.add("navbar__block")
  let navbar = `
    <a class="navbar_item" href="#">Все товары</a>
    <a class="navbar_item" href="#">О компании</a>
    <a class="navbar_item" href="#">Доставка</a>
    <a class="navbar_item" href="#">Оплата и возврат</a>
    <a class="navbar_item" href="#">Комплексное оснащение</a>
    <a class="navbar_item" href="#">Готовые решения</a>
    <a class="navbar_item" href="#">Контакты</a>
  `
  logo.insertAdjacentHTML("beforeend", navbar)


  const objBanner = {
    title: 'Проектируем, оснащаем оборудованием и запускаем кулинарные пространства',
    link: '#',
    urlImg: 'https://tequip.ru/wp-content/uploads/2020/08/photo-min.jpg',
    linkContent: 'Получить предложение',
  }

  const bigBanner = new BigBanner(document, objBanner);
  bigBanner.render();
}
