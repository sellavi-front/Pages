window.onload = () => {

    /* Trasnlation footer */
    const widget = $('.footer-widgets>.container>.row>.col-md-3:first>.widget')
    const widTitle = widget.find('.widget-title');
    const widCat = widget.find('.widget-categories>ul>li:first-child>a');
    let textTrans = 'About us ';
    let textRus = 'О нас';

    if (widTitle.html() === textTrans || widCat.html() === textTrans) {
      widTitle.text(textRus);
      widCat.text(textRus);
    }
    /* End */

    /* Custom Banner */
    let bannerMainEl = document.querySelector(".custom_banner")
    let bannerMainLayout = `
        <div class="banner__main__block">
            <div class="banner__main__img">

            </div>
            <div class="banner__main__description">
                <h1>Ателье Красоты</h1>
                <p>Безупречная эко-косметика</p>
                <a class="text-center" href="https://${location.host}/about-master/">Подробнее</a>
            </div>
        </div>
    `

    if(location.href === 'https://atelye1.com/' || location.href === 'https://atelye1.com/?from_admin') {
      console.log(321)
      bannerMainEl.insertAdjacentHTML("afterbegin", bannerMainLayout)
    }



    if(`https://${location.host}/about-master/`) {
      let aboutMasterLayout = `
        <div class="description">
          <div class="description__item">
            <p>Я - Ольга, косметолог-эстетист. </p>
            <p>Я помогаю справляться с эстетическими проблемами,с помощью косметических процедур и индивидуального
            подбора профессиональной и эко косметики.  Для меня моя работа-не только: пилинг, массаж и чистка лица. В моем кабинете вы получаете
            уверенность в себе,положительные эмоции и релакс.</p>
            <p>Будьте прекрасны! Жду вас.</p>
          </div>
          <div class="description__item">
            <img class="container__about__master__box" src="https://res.cloudinary.com/rostislavsellavi/image/upload/v1605521021/WhatsApp_Image_2020-11-14_at_09.03.11_3_gfm8v1.jpg"/>
          </div>
        </div>
        <div class="text-center"><h3>Мои услуги</h3></div>
      `

      document.querySelector("#content").insertAdjacentHTML("afterbegin", aboutMasterLayout)

      fetch('https://sellavi-api.000webhostapp.com/101885/getProducts.php')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          let categories = json.products
          console.log(categories)
          let services = document.querySelector("#content > div.text-center")
          services.insertAdjacentHTML("afterend", `
            <ul class="cards">
              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">${categories[7].product_description[5].name}</div>
                    <p class="card__text">
                    <br>Ручная чистка кожи лица - очищение забитых пор - удаление камедонов угрей, профилактика и лечение акне.
                    Делается пальцами или специальной петлёй-после удаление, лечение дарсенвалем и противоспалительная успокаивающая маска.
                    Некоторое время после ручной чистки на коже могут быть покраснения и шелушение, которые исчезают за 1-2 дня.
                    В результате кожа становится здоровой и чистой. </p>
                    <p>Цена: ${categories[7].price_formated}</p>
                    <a href="${categories[7].product_url}"><b>Подробнее</b></a>
                  </div>
                </div>
              </li>

              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">${categories[0].product_description[5].name}</div>
                    <p class="card__text">
                    <br>С помощью воздействия ультразвука можно получить отличный эффект совершенно безболезненно.
                    Процедуру проводят специальным прибором – ультразвуковым излучателем-скрабером. Прибор настраивают на необходимую частоту
                    и воздействуют волнами на кожу, водя по ее поверхности.</p>
                    <p>Процедура выполняется быстро, последующий период не нарушает привычный ритм жизни, зато
                    выраженный эффект сохраняется на длительное время.
                    Выполнять УЗ пилинг можно раз в 10 суток.
                    Эффект от УЗ чистки виден уже сразу после сеанса, но наиболее заметен будет через три дня.</p>
                    <p><ul>
                    <li>-поверхность кожи становится гладкой и чистой;</li>
                    <li>-очищаются сальные железы, поры, и кожа начинает лучше дышать;</li>
                    <li>-убирается старый роговой слой, и проявляются молодые клетки;</li>
                    <li>-разглаживаются морщины;</li>
                    <li>-ускоряется клеточный обмен веществ;</li>
                    <li>-улучшается тонус кожи;</li>
                    <li>-активизируется регенерация клеток.</li>
                    </ul></p>
                    <p>Испускаемые УЗ волны вызывают в поверхностных слоях, в свою очередь, высокочастотные колебания, которые способствуют механическому отделению ороговевших старых клеток и загрязнений от работающих живых клеток.
                    Мощность ультразвука настроена так, что никаких повреждений живым клеткам воздействие короткой волны нанести не может. Она проникает в глубину на 0,2 мм. Поэтому по сравнению с другими методами чистки лица (механической, вакуумной) пилинг ультразвуком нетравматичен
                    </p>
                    <p>Цена: ${categories[0].price_formated}</p>
                    <a href="${categories[0].product_url}"><b>Подробнее</b></a>
                  </div>
                </div>
              </li>


                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">${categories[8].product_description[5].name}</div>
                      <p class="card__text">
                        <br>Трехступенчатая неинвазивная процедура основана на дозированном введении углекислого газа поверхностно или подкожно в косметических и лечебных целях. Использование углекислого газа улучшает кровообращение, регенерирует ткани, стимулирует работу фибробластов, выводит из организма токсины и расщепляет жиры.
                        Рекомендуемый курс от 5 процедур.
                        1 процедура - 2000р (Лицо). <br>1 процедура - 2500р (Лицо,шея). <br> 1 процедура - 3000р (Лицо,шея,декольте). <br>
                        Эффект заметен после 1-го сеанса. </p>
                      <p>Карбокситерапия решает сразу ряд проблем:
                      <ul>
                        <li>Уменьшает количество и глубину морщин;</li>
                        <li>Повышает плотность кожи и улучшает эластичность;</li>
                        <li>Сжигает жир, ускоряет лимфодренаж, выводит межклеточную жидкость;</li>
                        <li>Усиливает регенерацию и синтез коллагена;</li>
                        <li>Осветляет пигментацию;</li>
                        <li>Выравнивает тон кожи;</li>
                        <li>Улучшает микроциркуляцию;</li>
                        <li>Повышает активность лечебных препаратов;</li>
                        <li>Рассасывает инфильтраты;</li>
                        <li>Устраняет застойные пятна;</li>
                        <li>Уменьшает количество чёрных точек.</li>
                      </ul> </p>
                      <p>Активные ингредиенты:<br>
                      Альгины — способствуют увлажнению кожи, улучшают микроциркуляцию; <br>
                      Бикарбонат натрия — разрыхляет роговой слой кожи и размягчает комедоны; <br>
                      Ниацинамид — блокирует транспорт меланосом в кератиноциты, регулирует синтез кожного сала; <br>
                      Витамин С — снижает синтез меланина, стимулирует синтез коллагена и укрепляет кожу; <br>
                      Лимонная кислота — предотвращает появление пигментации; <br>
                      Экстракт портулака — антиоксидант, оказывает успокаивающее действие.
                      </p>
                      <p>Цена: ${categories[8].price_formated}</p>
                      <a href="${categories[8].product_url}"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">${categories[6].product_description[5].name}</div>
                      <p class="card__text">
                        <br>Миндальная кислота относится к категории кислот AHA (Alpha-Hydroxy Acids), обладающая высокой эффективностью.
                        Это один из самых безопасных, но эффективных разновидностей химического пилинга, поскольку способен за короткие сроки и с минимальным риском вреда для кожи достигнуть желаемого результата.
                        Рекомендуемый курс от 6-8 процедур с интервалом 10 дней. <br>
                        1 процедура - 1100р (Лицо). <br>1 процедура - 1500р (Лицо,шея). <br> 1 процедура - 2000р (Лицо,шея,декольте). <br>
                        Эффект заметен после 1-го сеанса:<br>

                      - способен разгладить поверхность кожи после лечения прыщей и выровнять ее цвет.<br>
                      - помогает избавиться от неглубоких морщинок.<br>
                      - вернуть коже упругость и эластичность.<br>
                      - стимулирует синтез коллагена и эластина в дерме.<br>
                      - благодаря интенсивному клеточному обновлению, на лице в значительной степени становится меньше пигментных пятен.<br>
                      - отшелушивание омертвевших клеток и выравнивание микрорельефа кожи.<br>
                      - уменьшение жирного блеска и сужение пор.<br>
                      - растворение комедонов (черных точек).<br>
                      - лечение акне и более тяжелой формы кистозное акне.<br>
                      - подходит всем типам кожи: включая даже самую тонкую и чувствительную.<br>
                      - эксфолиация может проводиться также на теле.<br>
                      - проведение процедуры возможно независимо от сезона года.<br>
                      - подходит в качестве подготовке к более агрессивным процедурам, например, лазерной шлифовке лица.<br>
                      Пилинг Южная Корея V45
                      </p>
                      <p>Цена: ${categories[6].price_formated}</p>
                      <a href="${categories[6].product_url}"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">${categories[5].product_description[5].name}</div>
                      <p class="card__text">
                        <br>Осветляет пигментные пятна, предупреждает их повторное появление, улучшает естественный баланс, уменьшает глубину морщин.
                        Рекомендуемый курс от 6-8 процедур с интервалом 10 дней. <br><br>
                        1 процедура - 1100р (Лицо). <br>1 процедура - 1500р (Лицо,шея). <br>1 процедура - 2000р (Лицо,шея,декольте)<br><br>
                        Уже после первой процедуры наблюдается значительный положительный эффект. Кожа выглядит свежей, посветлевшей, гладкой, увлажненной. <br><br>
                        Эффекты: <br>

                        - Осветление и предотвращение повторной гиперпигментации, выравнивание тона кожи<br>
                        - Стойкий лифтинг-эффект<br>
                        - Восстановление и нормализация барьерных свойств кожи<br>
                        - Защита от негативного воздействия окружающей среды.<br>

                      Пилинг отpбеливающий Peelling melaless V45 состав:
                      Молочная кислота (13%), Гликолевая кислота (3%), Миндальная кислота (4%), Транексамовая кислота (3%), Лимонная кислота, Винная кислота, Ниацинамид, Трипептид меди.
                      </p>
                      <p>Цена: ${categories[5].price_formated}</p>
                      <a href="${categories[5].product_url}"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">${categories[4].product_description[5].name}</div>
                      <p class="card__text">
                        Осветляет пигментные пятна, предупреждает их повторное появление, улучшает естественный баланс, уменьшает глубину морщин.
                        Рекомендуемый курс от 6-8 процедур с интервалом 10 дней. </p>
                        1 процедура - 1100р (Лицо). <br>1 процедура - 1500р (Лицо,шея). <br>1 процедура - 2000р (Лицо,шея,декольте)<br>
                        Уже после первой процедуры наблюдается значительный положительный эффект. Кожа выглядит свежей, посветлевшей, гладкой, увлажненной. </p>
                      <p>Эффекты:
                      <ul>
                        <li>- очень мягко очищает кожу</li>
                        <li>- отшелушивает ороговевшие клеточки</li>
                        <li>- растворяет загрязнения, скопившиеся в порах</li>
                        <li>- улучшает клеточное дыхание и, соответственно, обменные процессы, делает лицо гладким и нежным, сужает поры, матирует кожу, устраняет следы от пост-акне, веснушки, пигментацию</li>
                      </ul> </p>
                      <p>После пилинга кожа становится упругой, сияющей и здоровой.
                      Активные компоненты пилинга: Экстракт Папайи отшелушивает излишки мертвых клеток, не вызывая при этом раздражения.
                      Экстракт портулака огородного, гилауроновая кислота помогают увлажнить, ослабить раздражение и сохранить вашу кожу молодой и плотной. Также содержит Аргинин, Бетаин и Аллантоин.
                      DOUBLE PEELING GEL Подходит для всех типов кожи. </p>
                      Рекомендуемый курс от 2-3 процедуры в неделю. <br>
                      1 процедура - 500р (Лицо). <br>1 процедура - 700р (Лицо,шея). <br>1 процедура - 1000 (Лицо,шея,декольте)
                      </p>
                      <p>Цена: ${categories[4].price_formated}</p>
                      <a href="${categories[4].product_url}"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>

                <li class="cards__item">
                  <div class="card">
                    <div class="card__content">
                      <div class="card__title">${categories[3].product_description[5].name}</div>
                      <p class="card__text">Это высокоэффективное процедура 3 в 1.</p>
                      <p>Эффекты:
                      <ul>
                        <li>- Глубоко очищает кожу за счёт удаления рогового слоя эпидермиса, выведения токсинов</li>
                        <li>- Увлажнение, питание, повышения эластичности кожи.  Насыщение кожи комплексом макро - и микроэлементов</li>
                        <li>- Предотвращает и разглаживает мимические и возрастные морщины</li>
                      </ul></p>
                      <p>Вся процедура проходит с элементами массажа.
                      Программа соединяет в себе достоинства концентратов водорослей ламинарии,фукуса. </p>
                      Время процедуры: <br>1 час, цена -  Лицо 1500р<br>
                      Лицо и декольте - 1800р<br>
                      Рекомендуем сделать 3-5 процедур с интервалом 10 дней<br>
                      </p>
                      <p>Цена: ${categories[3].price_formated}</p>
                      <a href="${categories[3].product_url}"><b>Подробнее</b></a>
                    </div>
                  </div>
                </li>
            </ul>
          `)
        });
    }
}