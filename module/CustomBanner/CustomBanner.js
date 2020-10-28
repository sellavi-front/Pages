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

  banner.style.background = 'https://res.cloudinary.com/gz-company/image/upload/v1603099813/SSLAB/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.._gyr7wr.jpg';
};

export default CustomBanner;
