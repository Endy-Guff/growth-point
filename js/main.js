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
tl.fromTo('.header__content', 6, {
  ease: "power4.out",
  opacity: 0
},{
opacity: 1
}, '>-1')
tl.from('.img-5', 6, {
  ease: "power4.out",
  opacity: 0
}, '>-6')

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.program__arrow');
for (let elm of elements) {
  observer.observe(elm);
}



// const titles = gsap.utils.toArray('.title')
// const advantagesItem = gsap.utils.toArray('.advantages__item')
// const questionsFormItem = gsap.utils.toArray('.questions__form-item')

const faqItem = gsap.utils.toArray('.faq__item')

if(ScrollTrigger.isTouch !== 1){
    ScrollSmoother.create({
      wrapper: '.scroll-wrapper',
      content: '.scroll-content',
      smooth: 1.5,
      effects: true
    })
    gsap.fromTo('.about__title',
  {
    y: 80
  },
  {
    y: 0,
    scrollTrigger:{
      trigger: '.about__title',
      start: 150,
      end: 450,
      scrub: true
    }
  })

  gsap.fromTo('.about__text',
  {
    opacity: 0
  },
  {
    opacity: 1,
    scrollTrigger:{
      trigger: '.about__text',
      start: 250,
      end: 550,
      scrub: true
    }
  })

  gsap.fromTo('.program__item',
  {
    opacity: 0
  },
  {
    opacity: 1,
    scrollTrigger:{
      trigger: '.program__item',
      start: 550,
      end: 750,
      scrub: true
    }
  })

  gsap.fromTo('.program__title',
  {
    y: 80
  },
  {
    y: 0,
    scrollTrigger:{
      trigger: '.program__title',
      start: 450,
      end: 750,
      scrub: true
    }
  })

  gsap.fromTo('.rate__title',
  {
    y: 80
  },
  {
    y: 0,
    scrollTrigger:{
      trigger: '.rate__title',
      start: 950,
      end: 1250,
      scrub: true
    }
  })

  gsap.fromTo('.rate__item-title',
  {
    opacity: 0
  },
  {
    opacity: 1,
    scrollTrigger:{
      trigger: '.rate__item-title',
      start: 1050,
      end: 1350,
      scrub: true
    }
  })

  gsap.fromTo('.rate__list',
  {
    scale: 0.9,
    y:25,
    opacity: 0
  },
  {
    scale: 1,
    y:0,
    opacity: 1,
    scrollTrigger:{
      trigger: '.rate__list',
      start: 1350,
      end: 1550,
      scrub: true
    }
  })

  gsap.fromTo('.faq__title',
  {
    y: 80
  },
  {
    y: 0,
    scrollTrigger:{
      trigger: '.faq__title',
      start: 1650,
      end: 1850,
      scrub: true
    }
  })

  faqItem.forEach(item=>{
    gsap.fromTo(item,
  {
    scale: 0.9,
    y:25,
    opacity: 0
  },
  {
    scale: 1,
    y:0,
    opacity: 1,
    scrollTrigger:{
      trigger: item,
      end: 2000,
      scrub: true
    }
  })
  })
}
//   gsap.fromTo('.program__arrow',
//   {
//     drawSVG: 0
//   },
//   {
//     drawSVG: '100%',
//     scrollTrigger:{
//       trigger: '.program__arrow',
//       scrub: true
//     }
//   })

