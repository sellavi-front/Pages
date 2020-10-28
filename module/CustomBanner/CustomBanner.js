const CustomBanner = (doc, obj) => {
  const banner = doc.querySelector('.custom_banner');

  banner.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image"></div>
          <div class="banner__caption">
            <h1>${obj.title}</h1>
            <a href="${obj.link}">
              ${obj.linkContent}
            </a>
          </div>
        </div>
      </div>`,
  );

  banner.style.background.cssText = `background: url(${obj.urlImg})`;
};
