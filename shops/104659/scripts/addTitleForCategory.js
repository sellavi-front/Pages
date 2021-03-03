const addTitleForCategory = (text) => {
  document
    .querySelector('.homefeatured_category > div')
    .insertAdjacentHTML(
      'afterbegin',
      `<h2 class="section-title mb-4 mt-4"><span> ${text} </span></h2>`,
    );
};

export default addTitleForCategory;
