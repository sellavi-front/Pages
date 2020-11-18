import '../../fixes/fixes.js';
import BigCategories from '../../modules/BigCategories/BigCategories.js';

window.onload = () => {
  document.querySelector("#home > div.wrapper.wrapper-closed > header > div").setAttribute("style", "background-color: #fff")

  let bannerMain = document.querySelector(".custom_banner")
  bannerMain.insertAdjacentHTML("afterbegin", `
      <div class="video__banner">
          <video autoplay loop muted>
              <source src="https://video-public.canva.com/VAEFIQ7iFMI/v/a2ade3cf84.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>
           <div class="video__banner__text__content">
              <h1 class="video__banner__text__content__header">whitemoon.store</h1>
           </div>
      </div>
    `)

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
}