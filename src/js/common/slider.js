const sliderBar = document.querySelector(".js-slider-bar")
const sliderBackground = document.querySelector(".js-slider-background")
const sections = document.querySelectorAll("section")
const sliderBackgroundHeight = sliderBackground.offsetHeight
const sliderBarHeight = sliderBackgroundHeight / 4

const setSliderBarHeight = () => {
  sliderBar.style.height = `${sliderBarHeight}px`
}

const onPageScroll = () => {
  const scrollPosition = window.pageYOffset

  if (
    scrollPosition >= sections[0].offsetTop - 80 &&
    scrollPosition < sections[1].offsetTop - 80
  ) {
    sliderBar.style.height = `${sliderBarHeight}px`
  } else if (
    scrollPosition >= sections[1].offsetTop - 80 &&
    scrollPosition < sections[2].offsetTop - 80
  ) {
    sliderBar.style.height = `${sliderBarHeight * 2}px`
  } else if (
    scrollPosition >= sections[2].offsetTop - 80 &&
    scrollPosition < sections[3].offsetTop - 80
  ) {
    sliderBar.style.height = `${sliderBarHeight * 3}px`
  } else if (
    scrollPosition >= sections[3].offsetTop - 80
  ) {
    sliderBar.style.height = `${sliderBarHeight * 4}px`
  }
}

// Init
const init = () => {
  setSliderBarHeight()
  window.addEventListener("scroll", () => onPageScroll())
}

export default init
