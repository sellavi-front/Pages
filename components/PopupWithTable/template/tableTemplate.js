const dataDefault = {
  title: 'Таблица размеров',
  subtitle: 'Общая таблица размеров показывает нашу стандартную размерную линейку.',
  table: [
    {
      selector: 'table-sizes__row_item_title',
      text: ['INT', 'Обхват <br />груди,см', 'Обхват <br />талии, см', 'Обхват <br />бедер, см'],
    },
    {
      selector: 'table-sizes__row_item_title',
      text: ['XXS', '80', '60', '88'],
    },
    {
      selector: 'table-sizes__row_item',
      text: ['XS', '84', '64', '90'],
    },
    {
      selector: 'table-sizes__row_item',
      text: ['S', '88', '68', '96'],
    },
    {
      selector: 'table-sizes__row_item',
      text: ['M', '92', '72', '100'],
    },
    {
      selector: 'table-sizes__row_item',
      text: ['L', '96', '76', '104'],
    },
  ],
  description: {
    title: 'Обмеры изделия',
    content: [
      'Длина изделия: 38см (XXS) 38,5см (XS) 40,5см (S) 40,5см (М) 41cм (L) 41cм (XL)',
      'Обхват груди: 82см (XXS) 86см (XS) 90см (S) 94см (М) 98cм (L) 102cм (XL)',
      'Обхват бедер: 98см (XXS) 102см (XS) 106см (S) 110см (М) 114cм (L) 118cм (XL)',
      'Длина бретели: 29,5см (XXS) 30см (XS) 31см (S) 31,5см (М) 32cм (L) 32,5cм (XL)',
    ],
  },
};

const setRowTables = (data) => {
  return data.map((elem) => {
    if (data.selector === 'table-sizes__row_item_title') {
      return `
        <tr class="table-sizes__row">
        ${elem.text.map(txt => `<th class="${elem.selector}">${txt}</th>`)}
        </tr>`;
    } else {
      return `
        <tr class="table-sizes__row">
          ${elem.text.map(txt => `<td class="${elem.selector}">${txt}</td>`).join('')}
        </tr>`;
    }
  }).join('');
};

setDescription = (data) => {
  return (`
    <h2 class="popup__description_title">${data.title}</h2>
    <div class="popup__description_content">
      ${
        data.content.map(elem => {
          return `
          <p class="popup__description_text">
            ${elem}
          </p>
          `
        }).join('')
      }
    </div>
  `)
}

const tableSize = (data = dataDefault) => {
  return `
        <div class="popup__content_top">
          <h2 class="popup__title">${data.text}</h2>
          <p class="popup__text">
              ${data.subtitle}
          </p>
        </div>
        <table class="table-sizes">
          ${setRowTables(data.table)}
        </table>
        <div class="popup__description">
          ${setDescription(data.description)}
        </div>
      `;
};

// ${data.description.title}

export default tableSize;
