export const data = [
  {
    quote: {
      text:
        '«Мода – это не то, что существует только в платьях. Мода в небе, на улице. Мода имеет дело с идеями: как мы живём и что вокруг нас происходит»',
      author: 'Коко Шанель',
    },
    rows: [
      [
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
      ],
      [
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
      ],
    ],
  },
  {
    quote: {
      text:
        '«Мода – это не то, что существует только в платьях. Мода в небе, на улице. Мода имеет дело с идеями: как мы живём и что вокруг нас происходит»',
      author: 'Коко Шанель',
    },
    rows: [
      [
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
      ],
      [
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
        {
          src:
            'https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png',
          alt: '',
          selectors: ['w-50'],
        },
      ],
    ],
  },
];

export class GridImgWithQuote {
  constructor(props) {
    this.props = props;
  }

  setSelectors(obj) {}

  setQuote(quote) {
    return `
      <blockquote class="quote w-100 text-center">
        <p class="">
          ${quote.text}
        </p>
        <figcaption><cite> ${quote.author}</cite></figcaption>
      </blockquote>
    `;
  }

  setRowImg(rows) {
    return rows.map(row => {
      return `<div class="row d-flex flex-nowrap">${this.setImg(row)}</div>`
    }).join('');
  }

  setImg(images) {
    return images
      .map((img) => {
        return `<img class="${img.selectors.map(sel => sel).join(' ')}" src="${img.src}" alt="${img.alt}">`;
      })
      .join('');
  }

  setTemplate() {
    return this.props
        .map((row) => {
          return `
          <div class="d-flex">
            <div class="col">
              <div class="photo-grid w-100 d-flex flex-column">
                ${this.setRowImg(row.rows)}
              </div>
            </div>
            <div class="col">
              ${this.setQuote(row.quote)}
            </div>
          </div>
          `;
        })
        .join('')
  }

  render() {
    return `
    <div class="gallery d-flex">
      ${this.setTemplate()}
  </div>
    `;
  }
}
