export const solutionObj = {
  cafe: {
    title: 'Кафе',
    countPlaces: [
      'Кафе на 10 мест',
      'Кафе на 30 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/daan-evers-tKN1WXrzQ3s-unsplash_1_qllwp1.png'
  },

  bar: {
    title: 'Бары',
    countPlaces: [
      'Бар на 20 мест',
      'Бар на 40 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/helena-yankovska-sJOy9pveFbU-unsplash_1_yxbj2t.png'
  },

  pizza: {
    title: 'Пиццерия',
    countPlaces: [
      'Пиццерия на 20 мест',
      'Пиццерия на 40 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/peter-bravo-de-los-rios-K70I7ecmXqg-unsplash_1_d3xkmq.png'
  },

  fastFood: {
    title: 'Кафе фаст-фуд',
    countPlaces: [
      'Кафе "Бургер" на 20 мест',
      'Прилавок Шаурма',
      'Кафе фаст-фуд на 40 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092993/jonathan-borba-8l8Yl2ruUsg-unsplash_1_jz7bub.png'
  },

  diningHall: {
    title: 'Столовые',
    countPlaces: [
      'Столовая на 50 мест',
      'Столовая на 100 мест',
      'Столовая на 200 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/medina-catering-AdtqezIqv7c-unsplash_1_jrmlel.png'
  },

  restaurants: {
    title: 'Рестораны',
    countPlaces: [
      'Ресторан на 50 мест',
      'Ресторан на 100 мест'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607092992/robert-mathews-xXaLfz6V9rQ-unsplash_1_1_zkvp0f.png'
  },

  lines: {
    title: 'Линии раздач',
    countPlaces: [
      'Линия раздачи "Патша"',
      'Линия раздачи "Аста"',
      'Линия раздачи "Премьер"',
      'Линия раздачи "Ривьера"'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093006/5_1_nnuxdd.png'
  },

  shops: {
    title: 'Магазины',
    countPlaces: [
      'Магазин "Прилавок-продавец"',
      'Магазин "Мини-маркет"'
    ],
    buttonGetSolution: "<a>Получить готовое решение</a>",
    img: 'https://res.cloudinary.com/dd2edlvdy/image/upload/v1607093005/daan-evers-tKN1WXrzQ3s-unsplash_1_qllwp1.png'
  },
}



let renderSolutions = () => {
  let solutionsArr = Object.values(solutionObj)

  solutionsArr.map(item => {
    console.log("item: ", item)
    return `
    <div class="solutions__row">
      <div class="solutions__column">
        <h1>${item.title}</h1>
        ${item.countPlaces}
      </div>

      <div class="solutions__column_links">
        ${item.buttonGetSolution}
      </div>

      <div class="solutions__column">
        <img src="${item.img}" alt="img" />
      </div>
    </div>
    `
  })
}

export default renderSolutions



