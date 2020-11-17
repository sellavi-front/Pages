function template(c) {
  return c.map((data) => `
      <div class="grid-banner ${data.class}">
        <a href="${data.link}">
          <div class="grid-banner__item">
            <div class="grid-banner__text-container">
              <h2 class="grid-banner__text-container_title">${data.title}</h2>
              <p class="grid-banner__text-container_subtitle">${data.subtitle}</p>
                <button class="grid-banner__text-container_discount">
                  <h3 class="grid-banner__text-container_discount_title">${data.button.title}</h3>
                  <span class="grid-banner__text-container_discount_subtitle"
                    >${data.button.text}</span
                  >
                </button>
            </div>
          </div>
        </a>
      </div>`);
}

function parentBanner(content) {
  return template(content).join('');
}

export { template, parentBanner }
