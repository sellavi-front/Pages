const data = [
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  },
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  },
  {
    img: 'https://res.cloudinary.com/depgheppz/image/upload/v1610545117/olesia-buyar-HCRYIjtGybs-unsplash_1_upetz1.png',
    title: 'Разработка эскизов и дизайн',
    text: 'Мы можем создать дизайн изделий индивидуально под потребности клиента, разработать интересные и необычные решения по крою. В процессе работы мы предоставим несколько вариантов, из которых Вы сможете выбрать наиболее подходящий для себя.'
  }
]

export default class InfoCardTypeTwo {
  constructor(props) {
    this.props = props;
  }

  setCard() {
    return this.props.map(card => {`
    <div class="info-card__item">
      <div class="info-card__elem">
        <img src="${card.img}" alt="" />
      </div>
      <div class="info-card__elem">
        <h5>${card.title}</h5>
        <p>${card.text}</p>
      </div>
    </div>
    `});
  }

  render() {
    return `
      <div class="info-card">

      </div>
    `
  }
}