gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tl = gsap.timeline();

tl.from('.img-1', 2, {
    ease: "power4.out",
    y: 40
})
tl.from('.img-2', 4, {
  ease: "power4.out",
  y: 80
}, '>-2')
tl.from('.img-3', 4, {
  ease: "power4.out",
  y: 100
}, '>-4')
tl.from('.img-4', 6, {
  ease: "power4.out",
  y: 300
}, '>-3.5')
tl.from('.header__top', 2, {
  ease: "power4.out",
  y: -100
}, '>-4.5')
tl.from('.header__content', 6, {
  ease: "power4.out",
  opacity: 0
}, '>-1')
tl.from('.img-5', 6, {
  ease: "power4.out",
  opacity: 0
}, '>-6')





// const titles = gsap.utils.toArray('.title')
// const advantagesItem = gsap.utils.toArray('.advantages__item')
// const questionsFormItem = gsap.utils.toArray('.questions__form-item')

// if(ScrollTrigger.isTouch !== 1){
//     ScrollSmoother.create({
//       wrapper: '.scroll-wrapper',
//       content: '.scroll-content',
//       smooth: 1.5,
//       effects: true
//     })
  
//   gsap.fromTo('.img-7',
//   {
//     rotate: 0,
//     x: 0,
//     y: 0
//   },
//   {
//     rotate: 40,
//     x: -120,
//     y: 40,
//     scrollTrigger:{
//       trigger: '.img-7',
//       start: 50,
//       end: 500,
//       scrub: true
//     }
//   })

// }
