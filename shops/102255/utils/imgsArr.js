let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()
const imgArr = [
  'https://coospir.github.io/Pages/shops/100980/media/categories/dez_sredstv.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/line.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/meh_oborud.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/neutral.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/posud.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/prof-coffee.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/prof_inv.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/teplo.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/torg-oborud.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/pekar.png',
  'https://coospir.github.io/Pages/shops/100980/media/categories/holod.png',
]

export default imgArr