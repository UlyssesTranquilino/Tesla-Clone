gsap.registerPlugin(ScrollTrigger);

var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();

gsap.to(".orderNow", {
  duration: 0.5,
  scrollTrigger: {
    trigger: ".distance-details",
    // markers: false,
    // markers: {
    //   fontSize: "2rem",
    //   startColor: "white",
    //   endColor: "white"
    // },
    start: "top 70%",
    end: "top 70%",
    toggleActions: "play none reverse none",
    //play pause resume reverse restart reset complete none
    //onEnter   onLeave   onEnterBack  onLeaveBack
  },
  opacity: 1,
});

// tl1.to('.line-rigid-1', {
//     duration: 1.5,
//     height: 150,
//     scrollTrigger: {
//       trigger: ".eleventh-section",
//       start: "top 40%", //when scrolled center of the viewpoert
//       // markers: true //marks start and end
//       end: "top 10%",
//       toggleActions: "play complete restart reverse", //triggered by 4 diff events
//                   //onEnter   onLeave   onEnterBack  onLeaveBack
//                   //play pause resume reverse restart reset complete none
//       markers: {
//           startColor: "purple",
//           endColor: "red",
//           fontSize: "2rem"
//       },
//       toggleClass: "red" //changes the css property of ".square" (bgColor)
//   }
// })
// tl1.to('.line-features', {
//     duration: 0.3,
//     opacity: 1
// })

// gsap.to('.line-rigid-2', {
//     duration: 1.5,
//     height: 130,
// })

// gsap.to('.line-rigid-3', {
//     duration: 1.5,
//     height: 110,
// })

{
  /* <div className='parts-section'>
<div className='rigid'>
  <div className='line-rigid'></div>
  <h3>Rigid Structure</h3>
</div>

<div className='impact'>
  <div className='line-rigid'></div>
  <h3>Impact Protection</h3>
</div>

<div className='roll'>

  <h3>Very Low Rollover Risk</h3>
  <div className='line-rigid'></div>
</div>
</div> */
}
