let contentOptimize = (containerTemplate, ...rmv) => {
  if(containerTemplate && rmv) {
    rmv.forEach(rm => {
      rm.remove()
    })

    let contentArea = document.querySelector(".content-area")
    contentArea.insertAdjacentHTML("afterbegin", containerTemplate)
  }


}

export default contentOptimize

