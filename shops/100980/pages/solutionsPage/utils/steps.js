const solutionsStepsLayout = `
  <div class="solutions__steps_container">
    <div class="solutions__steps_row">
        <div class="solutions__steps_item">
            <img class="steps__img" src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607415977/Vector_plchom.png" alt="img" />
            <h6 class="steps__title">Проектирование и расстановка оборудования</h6>
        </div>

        <div class="solutions__steps_item">
            <img class="steps__img" src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607415977/Vector_1_ca4tup.png" alt="img" />
            <h6 class="steps__title">Комплексное оснащение</h6>
        </div>

        <div class="solutions__steps_item">
            <img class="steps__img" src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607415977/Vector_2_mbavi0.png" alt="img" />
            <h6>Монтаж и запуск в эксплуатацию оборудования</h6>
        </div>

        <div class="solutions__steps_item">
            <img class="steps__img" src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1607415977/Vector_3_skex5d.png" alt="img" />
            <h6 class="steps__title">Кредитование и рассрочка</h6>
        </div>
    </div>
  </div>
`

let renderSolutionsStepsLayout = () => {
  document.querySelector(".about__company_container").insertAdjacentHTML("beforeend", solutionsStepsLayout)
}

export default renderSolutionsStepsLayout