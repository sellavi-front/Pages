let contactsLayout = `
<div class="media">
  <i class="float-right fa fa-info"></i>
    <div class="media-body">
      <strong>Реквизиты:</strong><br>
      <p><b>Наименование:</b> ИП Львов Алексей Игоревич</p>
      <p><b>Юридический адрес:</b> 628680, Ханты-Мансийиский автономный округ-Югра, г. Мегион, ул. Театральный проезд, д.1, кв.20</p>
      <p><b>Фактический адрес:</b> город Москва, Башня Город столиц, ул. Пресненская набережная д.8 ст.1</p>
      <p><b>ИНН:</b> 860504050297</p>
      <p><b>ОКПО:</b> 0188796878</p>
      <p><b>ОГРНИП:</b> 312860513900026</p>
      <p><b>Расчетный счет:</b> 40802810338340000779</p>
      <p><b>Банк:</b> АО «Альфа-Банк»</p>
      <p><b>Кор. счет:</b> 30101810100000000964</p>
      <p><b>БИК:</b> 046577964</p>
      <p><a href="/policy/">Политика конфиденциальности →</a></p>
      <p><a href="/terms-of-use/">Пользовательское соглашение →</a></p>
    </div>
</div>
`

let renderContactsLayout = () => {
  document.querySelector(".media-list>.media:nth-child(3)").insertAdjacentHTML("afterend", contactsLayout)
}

export default renderContactsLayout
