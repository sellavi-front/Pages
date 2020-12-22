import socIconsData from "../utils/socIconsData.js"
import SocialIconsTypeOne from "../../../components/SocialIconsTypeOne/SocialIconsTypeOne.js"

export default class Footer {
  addIcons() {
    if (document.querySelector('.wrapper')) {
      const footerContainer = document.querySelector('.footer-widgets>div>div');

      new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

      const socIconsContainer = document.querySelector('.soc-icons>.container');
      socIconsContainer.insertAdjacentHTML('afterbegin', `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`);

      const socIcons = document.querySelector('.soc-icons');
      socIcons.classList.add('col-md-3');
    }
  }
}