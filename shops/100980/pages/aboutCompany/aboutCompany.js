import contentOptimizer from "../contentOptimizer.js";

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

const aboutCompanyTemplate = `
  <div class="container-fluid">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a> > <a href="/about-company/" class="active__page">О компании</a></div>
        <div class="about__company_container">
            <h1>О компании</h1>
            <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3456&q=80" alt="about"/>
        </div>

        <div class="about__company_requisites">
            <h1>Компания Tradequip</h1>
            <p>это эксперт по оснащению оборудованием, инвентарем ресторанов, гипермаркетов, предприятий пищевых производств,
            фудкортов, пекарен и государственных учреждений. Мы можем предложить Вам как готовые решения по комплексному
            оснащению профессиональных кухонь, так и создать индивидуальный проект с подборкой оборудования, оптимально подходящего
            для решения задач, стоящих перед Вашим предприятием.</p>
            <div class="requisites__block">
                <h1>Реквизиты</h1>
                <div class="register_block_item">
                    <p><b>Наименование:</b> ИП Львов Алексей Игоревич </p>
                    <p><b>Юридический адрес:</b> 628680, Ханты-Мансийиский автономный округ-Югра, г. Мегион, ул. Театральный проезд, д.1, кв.20</p>
                    <p><b>Фактический адрес:</b> город Москва, Башня Город столиц, ул. Пресненская набережная д.8 ст.1</p>
                    <p><b>Адрес склада в Москве:</b> г. Люберцы, ул. Смирновская д.30, заезд с улицы Красноармейская. Режим работы: Пн-Чт: 8:00-17:00, Пт: 8:00-16:00</p>
                </div>
                <div class="register_block_item">
                    <p><b>ИНН:</b> 860504050297</p>
                    <p><b>ОКПО:</b> 0188796878</p>
                    <p><b>ОГРН:</b> 312860513900026</p>
                    <p><b>Расчетный счет:</b> 40802810338340000779</p>
                    <p><b>Банк:</b> АО «Альфа-Банк»</p>
                    <p><b>Кор. счет:</b> 30101810100000000964</p>
                    <p><b>БИК:</b> 046577964</p>
                </div>
            </div>
        </div>
    </div>
  </div>
`

let renderAboutCompanyTemplate = () => {
  contentOptimizer(aboutCompanyTemplate, sectionTitles, information)
}

export default renderAboutCompanyTemplate