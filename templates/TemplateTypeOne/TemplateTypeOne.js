// import '../../components/HeaderTypeOne/HeaderTypeOne.js';
import '../../components/HeaderTypeOne/HeaderTypeOne.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {

  /* Remove bootstrap col width seclector */
  // const footerWidgetsCol = document.querySelectorAll('.footer-widgets > div > div > div');
  // footerWidgetsCol.forEach(el => {
  //   el.classList.remove('col-md-3');
  // })
  /* Add title for soc icons */


  const catergoryBanners = document.querySelector('.homefeatured_category>div');
  if (catergoryBanners) {
    catergoryBanners.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4"><span> Категории </span></h2>`)
  }
}
/** !!!

 paste this component in your shop
                                     **/

// if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
//   const footerContainer = document.querySelector('.footer-widgets>div');

//   new SocialIconsTypeOne(footerContainer, 'beforeend').render();

//   const socIcons = document.querySelector('.soc-icons>.container');
//   socIcons.insertAdjacentHTML('afterbegin', `<p class="soc-icons__title">Мы в соц.сетях</p>`)
// }
