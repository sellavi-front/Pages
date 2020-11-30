// Пример реализации через API-запрос на получение категорий
// В этом примере важен только template из insertAdjacentHTML
// Стили применяются из файла BigCategories.css

fetch(`https://sellavi-api.000webhostapp.com/102054/getCategories.php`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let categories = json.response.data
    categories.map(category => {
      cards.insertAdjacentHTML("afterbegin", `
            <li class="cards__item" onclick="location.href='${category.url}'">
              <div class="card">
                <div class="card__image">
                  <div class="card__title"><a href="${category.url}">${category.full_name}</a></div>
                </div>
              </div>
            </li>
          `)
    })
  })