function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/assets/avatar.png')
  } else {
    img.setAttribute("src", "./assets/assets/IMG_20240627_125757_283.png")
  }


}