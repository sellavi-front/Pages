import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import BigBanner from "../../modules/BigBanner/BigBanner";

window.onload = () => {
  let logo = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo")
  logo.classList.add("navbar__block")
  let navbar = `
    <div class="navbar_item dropdown">
      <button class="dropbtn">О компании</button>
      <div class="dropdown-content">
        <a>Как работаем</a>
        <a>Отзывы</a>
        <a>Контакты</a>
      </div>
    </div>
    <a class="navbar_item" href="https://store102054.sellavi.com/man/">Поставщики</a>
    <a class="navbar_item" href="https://store102054.sellavi.com/woman/">Преимущества</a>
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
