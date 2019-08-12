var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();



const controller = new ScrollMagic.Controller();

tl1
  .from(".avatar", 1, {opacity: 0, scale: .7, ease: Power2.easeInOut})
  .from(".name", 1, {opacity: 0, scale: 1, ease: Power2.easeInOut}, "=-.5")
  .from(".bio", 1, {opacity: 0, scale: 1, ease: Power2.easeInOut}, "=-.75")
  .from(".intro-nav", 1, {opacity: 0, ease: Power2.easeInOut}, "=-1")
  .from("#toolset", 1, {opacity: 0, y:10, ease: Power1.easeInOut}, "=-.5")
  .from(".tool-item", 1, {opacity: 0, y:5, ease: Power1.easeInOut}, "-=.35")
  .from(".scroll-icon", 1, {opacity: 0, ease: Power2.easeInOut}, "=-.5");

tl2
  .from("#welcome", 1, {opacity: 0, ease: Power3.easeInOut});

tl3
  .from(".section-pol", 1.5, {opacity: 0})
  .from(".project-visual", 1, {opacity: 0, x:100}, "=-1.5")
  .to(".project-visual", 10, {backgroundPositionY:'100%',  ease: Power2.easeInOut});

tl4
  .from(".pol-1", 1, {y:50, opacity: 0})
  .from(".pol-2", 1, {y:50, opacity: 0}, "=-.9")
  .from(".pol-3", 1, {y:50, opacity: 0}, "=-.9")
  .from(".pol-4", 1, {y:50, opacity: 0}, "=-.9")
  .from(".pol-5", 1, {y:50, opacity: 0}, "=-.9")
  .from(".pol-6", 1, {y:50, opacity: 0}, "=-.9");

tl5
.from(".rp1", 2, {marginTop:50, ease: Power4.easeInOut})
.from(".rp2", 2, {marginTop: -50, ease: Power4.easeInOut}, "=-2")
.from("#research-portal", 2, {opacity: 0}, "=-1.5");



// Triggers

const scene1 = new ScrollMagic.Scene({
  triggerElement: "#introduction",
})
  .setTween(tl1)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#welcome",
  triggerHook: .8
})
  .setTween(tl2)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#poetry-out-loud",
  triggerHook: .9
})
  .setTween(tl3)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".pol .gallery-subgrid",
  triggerHook: 0.9
  // offset: 50
})
  .setTween(tl4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#research-portal",
  triggerHook: 0.7
  // offset: 500
})
  .setTween(tl5)
    .addTo(controller);
    

      
// const scene = new ScrollMagic.Scene({
//   triggerElement: "#pol-start",
//   triggerHook: "onLeave" 
//   duration: "100%"
// })
//   .setPin("#pol-start")
//   .setTween(tl)
//     .addTo(controller);



function updatePercentage(){
  tl.progress();
  console.log(tl.progress());
}



