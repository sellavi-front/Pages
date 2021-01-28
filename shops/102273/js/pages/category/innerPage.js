import FormBasic from '../../../../../components/FormBasic/FormBasic.js'
import Category from '../../components/Category.js'

import senderData from '../../constants/senderData.js'
import FormTags from '../../constants/FormTags.js'
import categoryData from '../../utils/categoryData.js'

export default (function () {
  if (document.querySelector('.product-category')) {
    const container = document.querySelector('.content-area > .page-section.color.information > #content > .row > div');
    container.removeChild()

    new FormBasic(container, 'beforeend', senderData, FormTags).render()
    new Category(container, 'afterbegin', categoryData).setTemplate()

  }
})();
