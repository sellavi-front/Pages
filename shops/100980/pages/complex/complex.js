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

    <div class="about__company_requisites">
            <h1>Готовое к эксплуатации решение для вашего бизнеса</h1>
            <p>Бесплатно подберем оборудование, мебель, инвентарь, доставим за 1 день, бесплатно подготовим предложение,
            подготовим проект размещения оборудования при покупке комплексного оснащения, с гарантией на оборудование и монтаж 1 год.
            Доставим бесплатно по Москве.</p>
            <div class="steps__block_container">
                <div class="steps__block_item">
                    <div class="step__item">
                        <img src="" alt="img" />
                        <h6>Подбор и проектирование</h6>
                        <p>Опытные технологи подберут
                        необходимый комплект оборудования
                        под ваши задачи, мебель под ваш
                        интерьер и разработают оптимальную
                        схему расстановки в вашем помещении</p>
                    </div>
                </div>

                <div class="steps__block_item">
                    <div class="step__item">
                        <img src="" alt="img" />
                        <h6>Доставка и установка</h6>
                        <p>Доставка по всей России точно в срок</p>
                        <p>Монтаж и пуско-наладка оборудования</p>
                    </div>
                </div>

                <div class="steps__block_item">
                    <div class="step__item">
                        <img src="" alt="img" />
                        <h6>Обслуживание</h6>
                        <p>Диагностика и ремонт</p>
                        <p>Техническое обслуживание</p>
                        <p>Гарантийное обслуживание</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="requisites__block">
                <h1>Превращаем пустое помещение в работающий бизнес</h1>
                <p>Подбираем оборудование, мебель, посуду, элементы интерьера.</p>
                <p>Проектируем, доставляем, монтируем и обслуживаем.</p>
                <p>В ассортименте более 30 000 наименований товаров от 120 брендов Европы, США, России, Китая и стран СНГ.</p>
            </div>
        </div>
        <div class="form__complex">

        </div>
    </div>
`

let renderComplexTemplate = () => {
  contentOptimizer(complexTemplate, sectionTitles, information)
}

export default renderComplexTemplate