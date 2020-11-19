const data = [
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605777459/Water%20Filter/bwt_zciuz2.png',
    alt: 'BWT'
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605777459/Water%20Filter/atoll_mtwiy3.png',
    alt: 'Atoll'
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605777459/Water%20Filter/geizer_tt8fwx.png',
    alt: 'Geizer'
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605777459/Water%20Filter/aquaphor_iye7qg.png',
    alt: 'Aquaphor'
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605777459/Water%20Filter/barier_ttgpor.png',
    alt: 'Barier'
  },
];

const customSection = document.querySelector('.custom_section');

const slider = new SmallImgSlider(data, customSection);

slider.setTemplate();
slider.setOptions(optionSlider);
