import FormBasic from '../../../../../components/FormBasic/FormBasic.js';
import Category from '../../components/Category.js';
import Partners from '../../components/Partners.js';

import senderData from '../../constants/senderData.js';
import FormTags from '../../constants/FormTags.js';
import categoryData from '../../constants/categoryData.js';
import categoryList from '../../constants/categoryList.js';

import medSocProg from './medSocProg.js'
import charityPage from './charityPage.js';
import desinfectedFrames from './desinfectedFrames.js'
import partnersData from '../../utils/partnersData.js';
import waterPage from './waterPage.js'
import coffeePage from './coffeePage.js'
import cosmeticsPage from './cosmeticsPage.js';


export default (function () {
  const fWhatCategory = (cont, arr) => {
    arr.forEach((cat) => {
      if (document.querySelector(cat.class)) {
        cont.insertAdjacentHTML(
          'beforeend',
          `<p class="page-header__descp">
              ${cat.descp}
          </p>`,
        );
      }
    });
  }

  if (
    document.querySelector('.product-category') ||
    document.querySelector('.information-information')
  ) {

    const container = document.querySelector(
      '.content-area > #content > .container > div > #content',
    ) || document.querySelector(
      '.content-area > .page-section.information > #content > div > div',
    );
    const pageHeader = document.querySelector('.page-header');

    const props = {
      container: container,
      target: 'afterbegin',
    };

    fWhatCategory(pageHeader, categoryList);

    new FormBasic(container, 'beforeend', senderData, FormTags).render();
    new Category(props, categoryData).setTemplate();

    if (document.querySelector('.product-category-5988')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', medSocProg());
    }

    if (document.querySelector('.product-category-5981')) {
      const props = {
        container: document.querySelector('.icon-category'),
        target: 'afterend',
      }
      new Partners(props, partnersData).setTemplate();
    }

    if (document.querySelector('.product-category-6975')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', charityPage());
    }

    if (document.querySelector('.information-information-6752')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', desinfectedFrames());
    }

    if (document.querySelector('.information-information-6754')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', waterPage());
    }

    if (document.querySelector('.information-information-6755')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', coffeePage());
    }

    if (document.querySelector('.information-information-6756')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', cosmeticsPage());
    }

  }
})();
