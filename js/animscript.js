var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax({onUpdate:updatePercentage});
var tl8 = new TimelineMax();
var tl9 = new TimelineMax();
var tl10 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl1
  .to(".avatar", 1, {opacity: 1, scale: .8, ease: Power2.easeInOut})
  .to(".name", 1, {opacity: 1, scale: 1, ease: Power2.easeInOut}, "=-.5")
  .to(".bio", 1, {opacity: 1, scale: 1, ease: Power2.easeInOut}, "=-.75")
  .to(".intro-nav", 1, {opacity: 1, ease: Power2.easeInOut}, "=-1")
  .to("#toolset", 1, {opacity: 1, y:10, ease: Power1.easeInOut}, "=-.5")
  .to(".tool-item", 1, {opacity: 1, y:5, ease: Power1.easeInOut}, "-=.4")
  .to(".scroll-icon", 1, {opacity: 1, ease: Power2.easeInOut}, "=-.5");

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
.from("#research-portal", 2, {opacity: 0})
.from(".rp1", 2, {marginTop: 50, marginBottom: -50, ease: Power4.easeInOut}, "=-1")
.from(".rp2", 2, {marginTop: -50, marginBottom: 50, ease: Power4.easeInOut}, "=-2");


tl6
.from("#triquarterly", 2, {opacity: 0, ease: Power4.easeInOut});

tl7
.from("#triquarterly .gallery-subgrid .toppy", 10, {xPercent: 5, ease: Sine.easeInOut})
.from("#triquarterly .gallery-subgrid .botty", 10, {xPercent: -5, ease: Sine.easeInOut}, "=-10");

tl8
.from("#triquarterly .desktop-gallery", 1, {opacity: 0, y: 30, ease: Power1.easeInOut});

tl9
.from("#my-damn-jam", 2, {opacity: 0, ease: Power4.easeInOut})
.from("#my-damn-jam .deco", 2, {scale: .5, rotation: 90, ease: Power1.easeInOut}, "=-1.5");

tl10
// .call(function() {$('.clappingbutton').addClass("clapping");});
.set(".clappingbutton", {className:'+=clapping'});



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
  // offset: 200
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
  triggerHook: 0.9
  // offset: 500
})
  .setTween(tl5)
    .addTo(controller);
    

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#triquarterly",
  triggerHook: 1,
  offset: -50
})
  .setTween(tl6)
    .addTo(controller);
        
const scene7 = new ScrollMagic.Scene({
  triggerElement: "#triquarterly",
  triggerHook: 1,
  duration: "100%"
})
  .setTween(tl7)
    .addTo(controller);
       
const scene8 = new ScrollMagic.Scene({
  triggerElement: "#triquarterly .desktop-gallery",
  triggerHook: 1
})
  .setTween(tl8)
    .addTo(controller);

const scene9 = new ScrollMagic.Scene({
  triggerElement: "#my-damn-jam",
  triggerHook: 1
})
  .setTween(tl9)
    .addTo(controller);

const scene10 = new ScrollMagic.Scene({
  triggerElement: ".clapper",
  triggerHook: .8
})
  .setTween(tl10)
    .addTo(controller);
    


function updatePercentage(){
  tl.progress();
  console.log(tl.progress());
}