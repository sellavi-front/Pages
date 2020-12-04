export const solutionObj = {
  cafe: {
    title: 'Кафе',
    countPlacesOne: 'Кафе на 10 мест',
    countPlacesTwo: 'Кафе на 30 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/daan-evers-tKN1WXrzQ3s-unsplash_1_qllwp1.png'
  },

  bar: {
    title: 'Бары',
    countPlacesOne: 'Бар на 20 мест',
    countPlacesTwo: 'Бар на 40 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  pizza: {
    title: 'Пиццерия',
    countPlacesOne: 'Пиццерия на 20 мест',
    countPlacesTwo: 'Пиццерия на 40 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  fastFood: {
    title: 'Кафе фаст-фуд',
    countPlacesOne: 'Кафе "Бургер" на 20 мест',
    countPlacesTwo: 'Прилавок Шаурма',
    countPlacesThree: 'Кафе фаст-фуд на 40 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  diningHall: {
    title: 'Столовые',
    countPlacesOne: 'Столовая на 50 мест',
    countPlacesTwo: 'Столовая на 100 мест',
    countPlacesThree: 'Столовая на 200 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  restaurants: {
    title: 'Рестораны',
    countPlacesOne: 'Ресторан на 50 мест',
    countPlacesTwo: 'Ресторан на 100 мест',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  lines: {
    title: 'Линии раздач',
    countPlacesOne: 'Линия раздачи "Патша"',
    countPlacesTwo: 'Линия раздачи "Аста"',
    countPlacesThree: 'Линия раздачи "Премьер"',
    countPlacesFour: 'Линия раздачи "Ривьера"',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },

  shops: {
    title: 'Магазины',
    countPlacesOne: 'Магазин "Прилавок-продавец"',
    countPlacesTwo: 'Магазин "Мини-маркет"',
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: ''
  },
}

console.log(Object.keys(solutionObj).length)

export const solutionsRowLayout = `
<div class="solutions__row">
      <div class="solutions__column">
        <h1>${solutionObj.cafe.title}</h1>
        <p>${solutionObj.cafe.countPlacesOne}</p>
        <p>${solutionObj.cafe.countPlacesTwo}</p>
      </div>

      <div class="solutions__column_links">
        <h1></h1>
        ${solutionObj.cafe.buttonGetSolution}
        ${solutionObj.cafe.buttonGetSolution}
      </div>

      <div class="solutions__column">
        <img src="${solutionObj.cafe.img}" alt="img" />
      </div>
</div>
`


