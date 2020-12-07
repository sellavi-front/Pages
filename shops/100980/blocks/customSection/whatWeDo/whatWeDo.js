let whatWeDoLayout  = `
  <div class="container why__choose__us">
    <h1>Что мы делаем</h1>
    <div class="why__choose_us_row">
        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342141/Component_4_wc6bm9.png" alt="img"/>
            <p>Разработка дизайн проекта
            и проектной документации</p>
        </div>

        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342130/Component_5_vrrhtb.png" alt="img"/>
            <p>Разработка меню
            и фирменного стиля</p>
        </div>

        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342130/Component_6_bo2g4n.png" alt="img"/>
            <p>Оснащение оборудованием</p>
        </div>
    </div>

    <div class="why__choose_us_row">
        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342130/Component_7_texdwd.png" alt="img"/>
            <p>Строительно-монтажные
            работы в помещении</p>
        </div>

        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342130/Component_8_rbqhcn.png" alt="img"/>
            <p>Оформление прикассовой зоны</p>
        </div>

        <div class="why__choose_us_column">
            <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607342130/Component_9_fnomly.png" alt="img"/>
            <p>Техническое обслуживание</p>
        </div>
    </div>
  </div>
`

let renderWhatWeDo = () => {
  document.querySelector(".custom_section").insertAdjacentHTML("beforeend", whatWeDoLayout)
}

export default renderWhatWeDo