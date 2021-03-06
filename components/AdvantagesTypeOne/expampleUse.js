// ./utils/data.js
const d = [
  {
    icon:
      'https://res.cloudinary.com/gz-company/image/upload/v1606138421/Miru/eye-scanner_1_mmtu8g.png',
    text: 'Качество оптики линзы – лидирующее в мире.',
  },
  {
    icon: 'https://res.cloudinary.com/gz-company/image/upload/v1606138444/Miru/view_1_f35d0y.png',
    text: 'Высочайшая устойчивость к дегидратации, т.е. к пересыханию.',
  },
  {
    icon: 'https://res.cloudinary.com/gz-company/image/upload/v1606138421/Miru/eye_1_jo1grj.png',
    text: 'Пластичный материал обеспечивает сниженный коэффициент трения.',
  },
];

export default d;
// end ./utils/data.js

// ./script.js
const clasess = new AdvantagesTypeOne(document.querySelector('.page-section'), d);

clasess.render();