import contentOptimizer from "../contentOptimizer.js";

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

let complexTemplate = `
  <div class="container-fluid inner-page">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a> > <a href="/complex/" class="active__page">Комплексное оснащение</a>
    </div>
    <div class="about__company_container">
        <h1>Комплексное оснащение</h1>
        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606748087/WhatsApp_Image_2020-11-30_at_17.50.42_qqcz5l.jpg" alt="about"/>
    </div>

    <div class="complex__block">
            <h1>Готовое к эксплуатации решение для вашего бизнеса</h1>
            <p>Бесплатно подберем оборудование, мебель, инвентарь, доставим за 1 день, бесплатно подготовим предложение,
            подготовим проект размещения оборудования при покупке комплексного оснащения, с гарантией на оборудование и монтаж 1 год.
            Доставим бесплатно по Москве.</p>
            <div class="steps__block_container">
                <div class="steps__block_item">
                    <div class="steps__item">
                        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606815821/Component_1_cotwlc.png" alt="img" />
                        <h6>Подбор и проектирование</h6>
                        <p class="desc">Опытные технологи подберут
                        необходимый комплект оборудования
                        под ваши задачи, мебель под ваш
                        интерьер и разработают оптимальную
                        схему расстановки в вашем помещении</p>
                    </div>
                </div>

                <div class="steps__block_item">
                    <div class="steps__item">
                        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606815821/Component_2_lcjvqn.png" alt="img" />
                        <h6>Доставка и установка</h6>
                        <p class="desc">Доставка по всей России точно в срок</p>
                        <p class="desc">Монтаж и пуско-наладка оборудования</p>
                    </div>
                </div>

                <div class="steps__block_item">
                    <div class="steps__item">
                        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606815821/Component_3_ezjzya.png" alt="img" />
                        <h6>Обслуживание</h6>
                        <p class="desc">Диагностика и ремонт</p>
                        <p class="desc">Техническое обслуживание</p>
                        <p class="desc">Гарантийное обслуживание</p>
                    </div>
                </div>
            </div>
            <div class="description__block">
                <h1>Превращаем пустое помещение в работающий бизнес</h1>
                <p class="desc">- Подбираем оборудование, мебель, посуду, элементы интерьера.</p>
                <p class="desc">- Проектируем, доставляем, монтируем и обслуживаем.</p>
                <p class="desc">- В ассортименте более 30 000 наименований товаров от 120 брендов Европы, США, России, Китая и стран СНГ.</p>
            </div>
        </div>
    </div>
    <div class="form__container">
       <div class="form__container_body">
            <div class="form__container_text">
                <h1>При покупке комплексного оснащения
                в подарок инвентарь на 10000 рублей</h1>
                <p>Заполните форму ниже и Вы получите
                расчет стоимости коммерческого предложения бесплатно</p>
            </div>
            <form class="complex__submit__form">
                <input class="complex_submit__form__input" name="complex__form_name" type="text" placeholder="Ваше имя">
                <input class="complex_submit__form__input" name="complex__form_phone" type="text" placeholder="Ваш телефон">
                <input class="complex_submit__form__input" name="complex__form_email" type="text" placeholder="Ваш E-Mail">
                <input class="complex_submit__form__input" name="complex__form_square" type="number" placeholder="Площадь помещения">
                <input class="complex_submit__form__input" name="complex__form_count_seats" type="number" placeholder="Кол-во посадочных мест">
                <button type="button" class="complex__submit__form__btn">Рассчитать бесплатно</button>
            </form>
       </div>
    </div>
`



let renderComplexTemplate = () => {
  contentOptimizer(complexTemplate, sectionTitles, information)
}

export default renderComplexTemplate