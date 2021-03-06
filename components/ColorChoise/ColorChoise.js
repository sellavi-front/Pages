const colors = [
  { color: 'Белый', hex: '#fff' },
  { color: 'Серый', hex: '#808080' },
  { color: 'Чёрный', hex: '#000' },
  { color: 'Черный', hex: '#000' },
  { color: 'Коричныевый', hex: '#8B4513' },
  { color: 'Оранжевый', hex: '#FFA500' },
  { color: 'Красный', hex: '#FF0000' },
  { color: 'Жёлтый', hex: '#FFD700' },
  { color: 'Зелёный', hex: '#32CD32' },
  { color: 'Синий', hex: '#0000FF' },
  { color: 'Голубой', hex: '#00BFFF' },
  { color: 'Фиолетовый', hex: '#4B0082' },
  { color: 'Розовый', hex: '#EE82EE' },
  { color: 'Бордовый', hex: '#800000' },
  { color: 'Бирюзовый', hex: '#40E0D0' },
  { color: 'Салатовый', hex: '#00FF7F' },
  { color: 'Светло-телесный', hex: '#e6b8a2' },
  { color: 'Темно-телесный', hex: '#c38e70' },
  { color: 'Тёмно-телесный', hex: '#c38e70' },
  { color: 'Пудровый', hex: '#ffddd2' },
];
export default class ColorChoise {
  constructor(data = colors) {
    this.data = data;
    this.colorChoiseLabels = document.querySelectorAll('#product > div > label');
  }

  setColors(colorLabel) {
    this.data.forEach((el) => {
      colorLabel.forEach((label) => {
        if (el.color.toLowerCase() === label.textContent.toLowerCase()) {
          label.style.background = el.hex;
        }
      });
    });
  }

  clearText(label) {
    label.forEach((el) => (el.textContent = ''))
  }

  render() {
    this.colorChoiseLabels.forEach(label => {
      if (
        document.querySelector('#product > .form-group') &&
        label.textContent.toLowerCase() === 'цвет'
      ) {
        const colorChoiseContainer = label.closest('div');
        colorChoiseContainer.classList.add('color-choise');

        const colorChoise = document.querySelector('.color-choise');
        const colorLabel = colorChoise.querySelectorAll('.custom-control-label');
        this.setColors(colorLabel);
        this.clearText(colorLabel);
      }
    })
  }
}
