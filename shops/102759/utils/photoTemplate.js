export default class GridImgWithQuote {
  constructor() {}

  render() {
    return `
    <div class="d-flex">
    <div class="col p3">
      <div class="photo-grid w-100" d-flex flex-wrap>
        <img src="https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png" alt="" class="w-50">
        <img src="https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png" alt="" class="w-50">
        <img src="https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png" alt="" class="w-50">
        <img src="https://res.cloudinary.com/depgheppz/image/upload/v1610453170/02640A45-9C29-4E65-AA27-C02FB8A32FFC_jzbqw2.png" alt="" class="w-50">
      </div>
    </div>
    <div class="col p3">
      <blockquote class="quote w-100 text-center">
        <p class="">
          «Мода – это не то, что существует только в платьях. Мода в небе, на улице. Мода имеет
          дело с идеями: как мы живём и что вокруг нас происходит»
        </p>
        <figcaption><cite> Коко Шанель</cite></figcaption>
      </blockquote>
    </div>
  </div>
    `;
  }
}
