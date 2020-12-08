import '../../components/HeaderTypeOne/HeaderTypeOne.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend').render();

}