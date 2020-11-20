import '../../fixes/fixes.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';

window.onload = () => {
  const bootstrapClasses = [
    'col-12',
    'col-lg-4',
    'col-xl-3',
    'mb-0',
    'col-12',
    'mb-md-4',
    'col-sm-6'
  ];
  let productsClasses = document.querySelectorAll(".product-item.product-layout")
  const deleteProductsClasses = new DeleteClasses(productsClasses, bootstrapClasses)
  deleteProductsClasses.findAndDelete()
  document.querySelector("#home > div.wrapper.wrapper-closed > header > div").setAttribute("style", "background-color: #fff")

  let elem = $('header.sticky_trigger');
  let doc = $(document);
  function scrolled() {
    let threshold = doc.scrollTop() > 50;
    elem.toggleClass('scrolled', threshold);
    if(document.querySelector("header").classList.contains("scrolled")) {
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").style.cssText = "color: #333"
      document.querySelector("#search > button > i").style.cssText = "color: #333"
      document.querySelector("#cart").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").style.cssText = "color: #333"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").style.cssText = "background-color: #fff"
    } else {
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > button").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(3)").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > a:nth-child(4)").style.cssText = "color: #fff"
      document.querySelector("#search > button > i").style.cssText = "color: #fff"
      document.querySelector("#cart").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(1)").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(2)").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div > a:nth-child(3)").style.cssText = "color: #fff"
      document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo.navbar__block > div > div").style.cssText = "background-color: transparent"
    }
  }

  $(window).on({ scroll: scrolled })

  if(location.href === 'https://store102054.sellavi.com/' || 'https://store102054.sellavi.com/?from_admin') {
    let bannerMain = document.querySelector(".custom_banner")
    bannerMain.insertAdjacentHTML("afterbegin", `
      <div class="video__banner">
          <video autoplay loop muted>
              <source src="https://video-public.canva.com/VAEFIQ7iFMI/v/a2ade3cf84.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>
           <div class="video__banner__text__content">
              <h1 class="video__banner__text__content__header"><a href="#">Новая коллекция</a></h1>
           </div>
      </div>
    `)

    let logo = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div > div.logo")
    let leftMenu = document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky")
    leftMenu.remove()
    logo.classList.add("navbar__block")
    let navbar = `
    <div class="navbar_item dropdown">
      <button class="dropbtn">Меню</button>
      <div class="dropdown-content">
        <a>О бренде</a>
        <a>Контакты</a>
        <a>Доставка</a>
      </div>
    </div>
    <a class="navbar_item" href="https://store102054.sellavi.com/man/">Мужчинам</a>
    <a class="navbar_item" href="https://store102054.sellavi.com/woman/">Женщинам</a>
  `
    logo.insertAdjacentHTML("beforeend", navbar)
    document.querySelector(".search_field>input").placeholder = "";
    document.querySelector(".fa.fa-search").addEventListener('click', function() {
      document.querySelector(".header-search").classList.add("opened")
      document.querySelector(".search_black_screen").classList.add("active")
      document.querySelector("#search > div.search_field > input").focus();
    })
    document.querySelector("#cart > span.cart-norm-qty.d-none.d-lg-inline-block").remove()
  }



  let mainContainer = document.querySelector("#home > div.wrapper.wrapper-closed > div > section > div")
  mainContainer.setAttribute("class", "container-fluid")
  mainContainer.insertAdjacentHTML('afterbegin', `<ul class="cards"></ul>`)
  let cards = document.querySelector(".cards")


  fetch(`https://sellavi-api.000webhostapp.com/102054/getCategories.php`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let categories = json.response.data
      categories.map(category => {
        cards.insertAdjacentHTML("afterbegin", `
            <li class="cards__item">
              <div class="card">
                <div class="card__image">
                  <div class="card__title"><a href="${category.url}">${category.full_name}</a></div>
                </div>
              </div>
            </li>
          `)
      })
    })

  let titleNewCollection = document.querySelector("#home > div.wrapper.wrapper-closed > div > section > div > h2")
  let oldProductRow = document.querySelector("#home > div.wrapper.wrapper-closed > div > section > div > div")
  titleNewCollection.classList.add("title__new__collection")
  let productRowItems = oldProductRow.querySelectorAll(".product-item")

  let productsBlock = `
    <div class="products__block">
        <div class="products__block__banner"><img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1605799557/7E5A1549_kwgjzi.jpg" /></div>
        <div class="products__block__items"><h1>НОВАЯ КОЛЛЕКЦИЯ</h1></div>
    </div>
  `
  titleNewCollection.insertAdjacentHTML("afterend", productsBlock)
  let productRowBlock = document.querySelector(".products__block__items")
  let productBlockItems = document.querySelector(".products__block__items")
  productRowItems.forEach(item => {
    productRowBlock.insertAdjacentHTML("afterbegin", item.outerHTML)
  })

  oldProductRow.remove()

  if(location.href === 'https://store102054.sellavi.com/man/' || location.href === 'https://store102054.sellavi.com/index.php?route=product/category&path=3489') {
    document.querySelector("#search").remove()
    document.querySelector("#cart").style.cssText = 'color: #333'
  }

}