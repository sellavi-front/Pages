import FormBasic from '../../../../components/FormBasic/FormBasic.js';
import Category from '../components/Category.js';

import senderData from '../constants/senderData.js';
import FormTags from '../constants/FormTags.js';
import categoryData from '../constants/categoryData.js';
import categoryList from '../constants/categoryList.js';

export default (function () {
  if (
    document.querySelector('.product-category') ||
    document.querySelector('.information-information')
  ) {
    const container = document.querySelector(
      '.content-area > #content > .container > div > #content',
    );
    const pageHeader = document.querySelector('.page-header');

    const props = {
      container: container,
      target: 'afterbegin',
    };
    new FormBasic(container, 'beforeend', senderData, FormTags).render();
    new Category(props, categoryData).setTemplate();

    categoryList.forEach((cat) => {
      if (document.querySelector(cat.class)) {
        pageHeader.insertAdjacentHTML(
          'beforeend',
          `<p class="page-header__descp">
              ${cat.descp}
          </p>`,
        );
      }
    });
  }
})();
