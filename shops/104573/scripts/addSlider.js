const nexGSlider = () => {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container"><div>Отзывы</div><div class="owl-carousel owl-theme">
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945483/118360270_156239069452181_1236850886805879660_n_1_iznhwe.png"><div><span>Синевская Татьяна</span><span>Саратов</span><span>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</span></div></div>
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945481/120095693_183858546573712_781689104529491764_n_1_xeo97p.png"><div><span>Синевская Татьяна</span><span>Саратов</span><span>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</span></div></div>
    <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945480/137613110_445067346631267_5280962858511166362_n_1_zzjbp5.png"><div><span>Синевская Татьяна</span><span>Саратов</span><span>Добрый вечер, спасибо большое за ваш труд, за прекрасное оформление! Радует каждый день такая красота.Желаю салона штор "Виктория" дальнейшего процветания и вдохновения!</span></div></div>
    </div></div>`)

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
}

export default nexGSlider;