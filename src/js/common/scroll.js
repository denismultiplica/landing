const scrollTo = e => {
  e.preventDefault()
  const scrollTargetId = e.currentTarget.dataset.target
  const scrollTarget = document.getElementById(scrollTargetId)

  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: scrollTarget.offsetTop - 80
  })
}

// Init
const init = () => {
  const scrollButtons = document.querySelectorAll('.js-scroll')

  scrollButtons.forEach( e => e.addEventListener('click', scrollTo, false))
}

export default init
