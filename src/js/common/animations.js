// Imports
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// Functions
const fadeIn = () => {
  const el = document.querySelectorAll('.js-fade-in')
  el.forEach( e => {
    gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0 })
  })
}

const fadeInUp = () => {
  const el = document.querySelectorAll('.js-fade-in-up')
  el.forEach( e => {
    gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, y: 100 })
  })
}

const fadeInDown = () => {
  const el = document.querySelectorAll('.js-fade-in-down')
  el.forEach( e => {
    gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, y: -100 })
  })
}

const fadeInLeft = () => {
  const el = document.querySelectorAll('.js-fade-in-left')
  el.forEach( e => {
    gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, x: -100 })
  })
}

const fadeInRight = () => {
  const el = document.querySelectorAll('.js-fade-in-right')
  el.forEach( e => {
    gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, x: 100 })
  })
}

const slideRight = () => {
  const el = document.querySelectorAll('.js-slide-right')
  el.forEach( e => {
    const eWidth = e.offsetWidth
    gsap.from(e, { scrollTrigger: e, duration: 2.5, x: eWidth })
  })
}

// Init
const init = () => {
  fadeIn()
  fadeInUp()
  fadeInDown()
  fadeInLeft()
  fadeInRight()
  slideRight()
}

export default init
