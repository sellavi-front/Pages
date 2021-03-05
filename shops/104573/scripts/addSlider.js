const nexGSlider = () => {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', `<div class="container"><div>Отзывы</div><div class="owl-carousel owl-theme">
    <div class="item"><h4><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1614945252/Component_1_23_wys8cb.png"></h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
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