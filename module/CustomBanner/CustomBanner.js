const CustomBanner = (doc, obj) => {
  const banner = doc.querySelector('.custom_banner');
  banner.innerHTML(
    `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image" style="background: url(${obj.urlImg})"></div>
          <div class="banner__caption">
            <h1>${obj.title}</h1>
            <a href="${obj.link}">
              ${obj.linkContent}
            </a>
          </div>
        </div>
      </div>`,
  );
  console.log('banner', banner);
};

export default CustomBanner;
