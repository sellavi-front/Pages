const CustomBanner = (doc, title, linkContent) => {
  const banner = doc.querySelector('.custom_banner');

  banner.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image"></div>
          <div class="banner__caption">
            <h1>${title}</h1>
            <a href="#">
              ${linkContent}
            </a>
          </div>
        </div>
      </div>`,
  );
};
