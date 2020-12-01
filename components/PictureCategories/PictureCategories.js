import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';

const selectors = ['col-md-6', 'mt-4'];

if (document.querySelector('.common-home')) {
  const categorie = document.querySelectorAll("body > div.wrapper.wrapper-closed > div.content-area > section.page-section.homefeatured_category > div > div > div");
  console.log(categorie);
  const forDelete = new DeleteClasses(categorie, selectors);
  forDelete.findAndDelete();
}
