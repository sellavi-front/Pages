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
import medColting from './medColting.js'
import urbanEconomy from './urbanEconomy.js';
import plantPage from './plantPage.js'
import medicalFood from './medicalFood.js';
import tourismPage from './tourismPage.js'
import medTech from './medTech.js'
import medService from './medService.js'
import disinfectantsPage from './disinfectantsPage.js'
import aerosolsPage from './aerosolsPage.js'

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

    if (document.querySelector('.information-information-6759')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', medColting());
    }

    if (document.querySelector('.information-information-6762')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', urbanEconomy());
    }

    if (document.querySelector('.information-information-6761')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', plantPage());
    }

    if (document.querySelector('.information-information-6760')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', medicalFood());
    }

    if (document.querySelector('.information-information-6763')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', tourismPage());
    }

    if (document.querySelector('.information-information-6758')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', medTech());
    }

    if (document.querySelector('.information-information-6757')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', medService());
    }

    if (document.querySelector('.information-information-6753')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', disinfectantsPage());
    }

    if (document.querySelector('.information-information-9293')) {
      document.querySelector('.icon-category').insertAdjacentHTML('afterend', aerosolsPage());
    }
  }
})();
