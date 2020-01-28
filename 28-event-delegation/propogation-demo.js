document.querySelectorAll("*").forEach(function (element) {

  element.addEventListener("click", function (e) {
    console.log(element)

    element.classList.add("bubbling")

    // this is here so we can do the animation
    e.stopPropagation()

    setTimeout(function () {
      element.classList.remove("bubbling")

      // simulate bubbling by triggering a click on the parent
      if (element.parentElement) {
        // "resume" propogation
        element.parentElement.dispatchEvent(e)
      }
    }, 500)
  })

})