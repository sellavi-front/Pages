import '../../components/HeaderTypeOne/HeaderTypeOne.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend').render();

  /* Remove bootstrap col width seclector */
  const footerWidgetsCol = document.querySelectorAll('.footer-widgets > div > div > div');
  footerWidgetsCol.forEach(el => {
    el.classList.remove('col-md-3');
  })

  /* Add title for soc icons */
  const socIcons = document.querySelector('.soc-icons > div');
  socIcons.insertAdjacentHTML('afterbegin', `<p class="soc-icons__title">Мы в соц.сетях</p>`)

}