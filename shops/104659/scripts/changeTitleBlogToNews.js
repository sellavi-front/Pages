import pages from '../config/conditions.js';

const changeTitleBlogToNews = () => {
  const changesText = [
    document.querySelector('#home > nav.navigation.mobile_side_nav > ul > li.flexy > a'),
    document.querySelector(
      '#home > div > header > div > div.container-fluid > nav > ul > li.flexy.no_children > a',
    ),
  ];

  changesText.forEach((el) => {
    if (el && el.textContent.trim().toLowerCase() === 'блог') {
      el.textContent = 'Оздоровительные программы';
    }
  });

  if (pages.blog) {
    const title = document.querySelector('title');
    title.textContent = title.textContent.replace(/Блог/gi, 'Оздоровительные программы');
    document.querySelector(
      '#home > div > div.content-area > section.page-section.titles > div > div > h1',
    ).textContent = 'Оздоровительные программы';
  }
};

export default changeTitleBlogToNews;
