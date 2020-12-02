const dataAbout = [
    {
      img: 'https://res.cloudinary.com/gz-company/image/upload/v1606228219/Miru/Miru_1_day_Flat_Pack_pattern-01_1_cg520r.png',
      title: 'О нас',
      ph1: '«Miru» представляет широкий портфель продукции для профилактики и лечения офтальмологических заболеваний.',
      ph2: '«Miru» успешно работает на российском рынке более 25 лет.'
    }
  ]
  
  const imgNearText = new ImgNearText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    aboutData,
  );
  
  imgNearText.render();

  export default dataAbout