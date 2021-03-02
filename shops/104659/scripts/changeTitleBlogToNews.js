import pages from "../config/conditions.js";

const changeTitleBlogToNews = (() => {
  const changesText = [document.querySelector("#home > nav.navigation.mobile_side_nav > ul > li.flexy > a"), document.querySelector("body .wrapper > header > div.navigation-wrapper > div > nav > ul > li.flexy.no_children > a")]

  changesText.forEach(el => {
    if (el && el.textContent.trim().toLowerCase() === 'блог') {
      el.textContent = 'Новости';
    }
  })

  if (pages.blog) {
    const title = document.querySelector('title');
    title.textContent = title.textContent.replace(/Блог/gi, 'Новости')
    document.querySelector("#home > div > div.content-area > section.page-section.titles > div > div > h1").textContent = 'Новости'
  }
})();

export default changeTitleBlogToNews;