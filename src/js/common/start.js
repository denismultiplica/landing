// Imports
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const startWrapper = document.getElementById('start')
const layerOne = document.querySelector('.js-parallax.layer-1')
const layerTwo = document.querySelector('.js-parallax.layer-2')
const layerThree = document.querySelector('.js-parallax.layer-3')
const gradient = document.querySelector('.start-gradient-two')
let startWidth

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#start",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
})

const layersLoaded = () => {
  return new Promise(res => {
    layerThree.onload = () => res()
  })
}

const getStartWidth = () => {
  startWidth = startWrapper.offsetWidth
}

const setLayersPosition = () => {
  layerOne.style.top = `-${startWidth * 0.01}px`
  layerTwo.style.top = `${startWidth * 0.25}px`
  layerThree.style.top = `${startWidth * 0.41}px`
  gradient.style.top = `${startWidth * 0.60}px`
}

const start = () => {
  gsap.utils.toArray('.js-parallax').forEach(layer => {
    const depth = layer.dataset.depth
    const movement = -(layer.offsetHeight * depth)
    tl.to(layer, {y: movement, ease: "none"}, 0)
  })
}

const resize = () => {
  getStartWidth()
  setLayersPosition()
  start()
}

// Init
const init = async () => {
  await layersLoaded()
  getStartWidth()
  setLayersPosition()
  start()

  window.addEventListener('resize', resize)
}

export default init
