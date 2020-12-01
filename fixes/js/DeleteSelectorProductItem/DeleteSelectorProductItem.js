import DeleteClasses from '../../../modules/DeleteClasses/DeleteClasses.js';

const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-md-3',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
  'container'
];

if (document.querySelector('.product-item')) {
  const productItems = document.querySelectorAll('.product-item');

  const deleteSelectors = new DeleteClasses(bootstrapClasses, productItems);
  deleteSelectors.findAndDelete();
}