let renderBanner = () => {
  let bannerMain = document.querySelector(".custom_banner")
  bannerMain.insertAdjacentHTML("afterbegin", `
      <div class="video__banner">
          <video autoplay loop muted>
              <source src="https://video-public.canva.com/VAEFIQ7iFMI/v/a2ade3cf84.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>
           <div class="video__banner__text__content">
              <h1 class="video__banner__text__content__header"><a href="/man/">Новая коллекция</a></h1>
           </div>
      </div>
    `)
}

export default renderBanner

