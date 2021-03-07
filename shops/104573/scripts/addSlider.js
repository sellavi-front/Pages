const nexGSlider = () => {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container"><div><span>Отзывы</span></div><div class="owl-carousel owl-theme">
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945483/118360270_156239069452181_1236850886805879660_n_1_iznhwe.png"><div>Синевская Татьяна</div><div>Саратов</div><div>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</div></div>
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945483/118360270_156239069452181_1236850886805879660_n_1_iznhwe.png"><div>Синевская Татьяна</div><div>Саратов</div><div>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</div></div>
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945483/118360270_156239069452181_1236850886805879660_n_1_iznhwe.png"><div>Синевская Татьяна</div><div>Саратов</div><div>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</div></div>
    </div></div>`)


   

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            768:{
                items:3
            }
        }
    })
}

export default nexGSlider;