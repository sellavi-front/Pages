import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';

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
}
