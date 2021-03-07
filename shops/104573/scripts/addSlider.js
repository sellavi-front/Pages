const nexGSlider = () => {

    
    if (document.querySelector('.common-home')) {
        document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container"><div><span>Отзывы</span></div><div class="owl-carousel owl-theme">
        <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1615109104/photo_2021-03-05_17-06-37_3_dltb29.jpg"><div>Татьяна</div><div>г. Сургут</div><div>Получили от вас наш заказ! Очень довольны. Большое вам спасибо за вашу работу! Теперь ваша красота будет и в Сургуте!!!</div></div>
        <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1615109179/photo_2021-03-05_17-06-37_de4ojy.jpg"><div>Вера</div><div>г. Южно-Сахалинск</div><div>Светлана, спасибо большое! Вы – волшебница!!! Получилось просто супер!</div></div>
        <div class="item"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1615109238/photo_2021-03-05_17-06-37_2_xjgcsl.jpg"><div>Кристина</div><div>г. Новокуйбышевск</div><div>Наконец-то высылаю Вам фото нашего окна)) Еще раз огромное Вам спасибо!!! Вы большая молодец!!! Шторы супер, я не перестаю ими любоваться))</div></div>
        </div></div>`)


        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay: true,
            autoplayTimeout: 2000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                768:{
                    items:3,
                    nav: true
                }
            }
        })
    }

   

    


    if (document.querySelector('.common-home')) {
        document.querySelector('#home > div > div.content-area > div.custom_section > div > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-nav.disabled > div.owl-prev').innerHTML = ''
        document.querySelector('#home > div > div.content-area > div.custom_section > div > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-nav.disabled > div.owl-prev').insertAdjacentHTML('afterbegin', '<i class="fas fa-chevron-left"></i>')
        document.querySelector('#home > div > div.content-area > div.custom_section > div > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-nav.disabled > div.owl-next').innerHTML = ''
        document.querySelector('#home > div > div.content-area > div.custom_section > div > div.owl-carousel.owl-theme.owl-loaded.owl-drag > div.owl-nav.disabled > div.owl-next').insertAdjacentHTML('afterbegin', '<i class="fas fa-chevron-right"></i>')
    
        if (screen.width > 480) {
            document.querySelector('.custom_section').insertAdjacentHTML('beforeend', '<img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1615110375/Frame_14_2_kn3zfu.png" style="width: 100%">')
        } else if (screen.width < 480) {
            document.querySelector('.custom_section').insertAdjacentHTML('beforeend', '<img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1615110673/Group_7423592_a0jbrt.png" style="width: 100%">')
        }
    }

      
}



export default nexGSlider;