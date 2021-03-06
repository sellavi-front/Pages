const rulesTemplate = `
<div class="rules__container">
    <div class="terms__block">
        <h3><b>Термины, используемые в настоящих Правилах:</b></h3>
        <p>Покупатель — гражданин, юридическое лицо, индивидуальный предприниматель, приобретающие товары для использования в предпринимательской деятельности или иных целях, не связанных с личным, семейным, домашним и подобным использованием;</p>
        <p>Потребитель — гражданин, юридическое лицо, индивидуальный предприниматель приобретающие товары исключительно для личных, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности;</p>
        <p>Поставщик/продавец — организация, индивидуальный предприниматель, реализующие товары потребителям/покупателям по договору купли-продажи/поставки;</p>
        <p>Товары — оборудование, посуда, инвентарь;</p>
        <p>Недостаток товара — несоответствие товара требованиям, предусмотренным законом либо в установленном им порядке, или условиям договора (при их отсутствии или неполноте условий обычно предъявляемым требованиям), или целям, для которых товар такого рода обычно используется, или образцу и (или) описанию при продаже товара по образцу и (или) по описанию;</p>
        <p>Существенный недостаток товара — неустранимый недостаток или недостаток, который не может быть устранен без несоразмерных расходов или затрат времени, или выявляется неоднократно, или проявляется вновь после его устранения, и других подобных недостатков.</p>

        <h5><b>Законодательные акты, используемые в настоящих Правилах:</b></h5>
        <ul>
            <li class="terms__items">Гражданский кодекс Российской Федерации (часть вторая) от 26.01.1996 № 14-ФЗ (ред. от 29.06.2015, с изм. и доп., вступ. в силу с 01.07.2015) Глава 30. Купля-продажа: §1. Общие положения о купле-продаже (ст.ст. 454-491) §2. Розничная купля-продажа (ст.ст. 492-505) §3. Поставка товаров (ст.ст.506-524) §4. Поставка товаров для государственных или муниципальных нужд (ст.ст.525-534)</li>
            <li class="terms__items">Закон Российской Федерации от 07.02.1992 № 2300-1 (ред. от 13.07.2015) «О защите прав потребителей»;</li>
            <li class="terms__items">Постановление Правительства РФ от 19.01.1998 № 55 (ред. от 23.12.2015) «Об утверждении Правил продажи отдельных видов товаров, перечня товаров длительного пользования, на которые не распространяется требование покупателя о безвозмездном предоставлении ему на период ремонта или замены аналогичного товара, и перечня непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации»;</li>
            <li class="terms__items">Постановление Правительства РФ от 27.09.2007 № 612 (ред. от 04.10.2012) «Об утверждении Правил продажи товаров дистанционным способом»;</li>
            <li class="terms__items">Постановление Правительства РФ от 10.11.2011 № 924 «Об утверждении перечня технически сложных товаров».</li>
            <li class="terms__items">Приказ Министерства РФ по антимонопольной политике и поддержке предпринимательства от 20.05.1998 № 160 (ред. от 11.03.1999) «Об утверждении разъяснений „О некоторых вопросах, связанных с применением Закона Российской Федерации «О защите прав потребителей“</li>
        </ul>
        <h5><b>I. Возврат/обмен товара надлежащего качества Покупателем</b></h5>
        <h5><i><b>Товар надлежащего качества обмену и возврату не подлежит, если иное не предусмотрено договором между покупателем и поставщиком, а также в случаях:</b></i></h5>
        <ul>
            <li class="first__return_item">товар не соответствует ассортименту (п.3 ст.468 ГК РФ);</li>
            <li class="first__return_item">товар не соответствует качеству (п.2 ст.475 ГК РФ);</li>
            <li class="first__return_item">товар не соответствует комплекту (п.2 ст.480 ГК РФ);</li>
            <li class="first__return_item">товар не соответствует установленной таре (ст. 482 ГК РФ)</li>
        </ul>
        <h5><i><b>Кроме того, не подлежит возврату товар:</b></i></h5>
        <ul>
            <li class="second__return_item">изготовленный по индивидуальным размерам, цвету, фасону и т.п. покупателя (не стандартный товар);</li>
            <li class="second__return_item">стандартный товар, но с индивидуальными вырезами, разрезами и т.п., что нарушает целостность товара;</li>
            <li class="second__return_item">товар, не являющийся складской позицией.</li>
        </ul>
    </div>
    <div class="acts__block">
        <h3><b>Порядок действий при возврате нового товара</b></h3>
        <p><b>1. Привезти товар на склад или в сервисный центр компании (предварительно согласовывается с отделом рекламаций).</p>

        <p>2. Заполнить типовое заявление на возврат товара с указанием причин.</p>

        <p>3. Получить документы, подтверждающие прием товара, отсутствие следов эксплуатации или дефектов/повреждений.</p>

        <p>4. Выбрать товар на замену, оплатить разницу в цене (если она есть) или получить денежные средства тем же способом, которым производилась оплата.</b></p>
        <h5><b>II. Возврат/обмен товара надлежащего качества Потребителем</b></h5>
        <p>Потребитель вправе обменять товар надлежащего качества, если указанные товар не подошел по форме, габаритам, фасону, расцветке, размеру или комплектации, в течение 14 (четырнадцати) дней, не считая дня покупки. Обмен товара надлежащего качества проводится, если указанный товар не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки, а также имеется товарный/кассовый чек, либо иной подтверждающий оплату указанного товара документ (п. 1 ст. 25 Закона «О защите прав потребителей», ст. 502 ГК РФ)</p>
        <p>В случае, если аналогичный товар отсутствует в продаже на день обращения потребителя к продавцу, потребитель вправе отказаться от исполнения договора купли-продажи и потребовать возврата уплаченной за указанный товар денежной суммы. Требование потребителя о возврате уплаченной за указанный товар денежной суммы подлежит удовлетворению в течение 3 (трех) дней со дня возврата указанного товара. По соглашению потребителя с продавцом обмен товара может быть предусмотрен при поступлении аналогичного товара в продажу. Продавец обязан незамедлительно сообщить потребителю о поступлении аналогичного товара в продажу. (п. 2 ст. 25 Закона «О защите прав потребителей»).</p>
        <p>При дистанционном способе продажи товаров (п. 4 ст. 497 ГК РФ) Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара — в течение семи дней при условии возмещения продавцу необходимых расходов, понесенных в связи с совершением действий по исполнению договора.</p>
        <p>Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара. При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через 10 (десять) дней со дня предъявления потребителем соответствующего требования (ст. 26.1 Закона «О защите прав потребителей, п. 21 Правил продажи товаров дистанционным способом).</p>
        <p>Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем, не является товаром складского запаса (ст. 26.1 Закона «О защите прав потребителей).</p>
        <p>В соответствии с Перечнем непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации, утвержденный Постановлением Правительства РФ от 19.01.1998 N 55 не подлежат возврату:</p>
        <p>изделия и материалы, контактирующие с пищевыми продуктами, из полимерных материалов, в том числе для разового использования (посуда и принадлежности столовые и кухонные, емкости и упаковочные материалы для хранения и транспортирования пищевых продуктов) — п. 6 Перечня.</p>
        <h5><b>III. Возврат/обмен товара ненадлежащего качества покупателями/потребителями</b></h5>
        <p>Под товаром ненадлежащего качества понимается товар, который неисправен и не может обеспечить исполнение своих функциональных качеств. Отличие элементов дизайна или оформления от заявленных в описании не является неисправностью или нефункциональностью товара.</p>
        <p>При выборке товара на складе поставщика/продавца (самовывоз) внешний вид и комплектность товара проверяются покупателем в момент получения товара, после получения товара претензии к внешним дефектам товара, его количеству, комплектности и товарному виду не принимаются, если иное не предусмотрено договором между покупателем и поставщиком/продавцом (ст. 513 ГК РФ). В остальных случаях внешний вид и комплектность товара проверяются покупателем в течение 10 (десяти) дней с момента получения товара.</p>
        <p>В соответствии со ст. ст.475 (503, 518) Гражданского кодекса РФ покупатель/потребитель вправе:</p>
        <p>в случае, если недостатки товара не были оговорены поставщиком/продавцом потребовать от продавца безвозмездного устранения недостатков товара в разумный срок (ремонт) или возмещения своих расходов на устранение недостатков товара;
        в случае существенного нарушения требований к качеству товара отказаться от исполнения договора купли-продажи и потребовать возврата уплаченной за товар денежной суммы или потребовать замены товара ненадлежащего качества товаром, соответствующим договору.
        Покупатель/потребитель вправе обменять, возвратить товар ненадлежащего качества или потребовать возврата уплаченной за товар денежной суммы в течение гарантийного срока товара, при подтверждении наличия недостатка.</p>
    </div>
    <div class="steps__brak_block">
        <h3><b>Порядок действий при ремонте, возврате/обмене товара ненадлежащего качества (брака):</b></h3>
        <p><b>1. Привезти товар на склад или в Сервисный центр компании (предварительно согласовывается с отделом рекламаций).</p>
        <p>2. Заполнить типовое заявление на возврат товара с указанием причин.</p>
        <p>3. Получить документы, подтверждающие прием товара на экспертизу, срок проведения экспертизы — до 20 рабочих дней. Ремонт отечественного оборудования осуществляется до 30 рабочих дней, импортного оборудования до 60 рабочих дней при наличии запчастей у производителя, при отсутствии запчастей — по договоренности сторон срок ремонта может быть увеличен.</p>
        <p>4. Замена или возврат денежных средств осуществляется в течение 7 (семи) рабочих дней, если иное не предусмотрено договором между покупателем/потребителем и поставщиком/продавцом.</b></p>
        <p><b>Порядок составления рекламации</b></p>

        <h5><b>Рекламация должна содержать следующие данные:</b></h5>
        <p>1. № товарной накладной и дата товарной накладной, в соответствии с которой данный товар был отгружен.</p>
        <p>2. Артикул, точное наименование неотгруженного (излишне отгруженного, дефектного, некомплектного) товара.</p>
        <p>3. Заводской номер изделия, номер партии, дата производства, если данная информация присутствует на оборудовании, либо упаковке изделия.</p>
        <p>4. Описание (перечень) заявленных дефектов (при их наличии).</p>
        <p>5. Количество, согласно товарной накладной (заполняется в прилагаемом Акте разногласий).</p>
        <p>6. Фактическое количество (при недогрузе) (заполняется в прилагаемом Акте разногласий).</p>
        <p>7. Отсутствующие элементы комплектации (при недокомплекте).</p>
        <p>8. Количество излишков (при излишней отгрузке) (заполняется в прилагаемом Акте разногласий).</p>
        <p>9. Требования заявителя по урегулированию рекламации (замена, возврат, ремонт и т.д.).</p>
        <p>10. Причина возврата.</p>
        <p>11. Приложения: фотографии (обязательны для рекламаций по дефектам, пересортице, бою, излишкам (при невозможности их идентифицировать).</p>
        <p>12. Подпись и печать (при ее наличии) заявителя.</p>
        <h5><b>Рекомендации по проведению фотографирования рекламационного объекта:</b></h5>
        <p>1. Фотография должна иметь достаточное разрешение и качество, чтобы можно было адекватно оценить степень повреждений и возможную причину их появления.</p>
        <p>2. Фотографирование дефекта должно производится с разных ракурсов, непосредственно в момент обнаружения дефекта для проведения объективного анализа.</p>
        <p>3. На фотографиях кроме непосредственно места механического дефекта, либо конструктивного брака должно отображаться изделие в целом, а также место нахождения изделия и тип объекта на котором должен производиться монтаж.</p>
        <p>4. Фотографии для рекламаций по пересортице в обязательном порядке сопровождаются фотографиями шильд, где просматриваются парт-номера, данные по товару, а также упаковки изделия.</p>
        <p>5. Фотографии для рекламаций по качеству работы, а также недокомплектации сложно-технического оборудования в обязательном порядке должны сопровождаться фотографиями шильд, где просматриваются парт-номера, данные по товару.</p>
        <p>6. Фотографии механических дефектов (боя) в обязательном порядке должны сопровождаться фотографиями упаковки.</p>
        <h5><b>или по электронной почте: info@tradequip.ru. Подробнее узнавайте по телефону: 8 (495) 989-98-28</b></h5>
    </div>
</div>

`

export default rulesTemplate