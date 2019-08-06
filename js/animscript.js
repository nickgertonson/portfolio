
  var tl1 = new TimelineMax();
  // var tl2 = new TimelineMax();
  var tl3 = new TimelineMax();
  // var tl3 = new TimelineMax({onUpdate:updatePercentage});
  var tl4 = new TimelineMax();


  const controller = new ScrollMagic.Controller();

  tl1

    .from(".avatar", 1.5, {opacity: 0, scale: .7, ease: Back.easeInOut.config(1.7)})
    .from(".name", 1.5, {opacity: 0, scale: 1, ease: Power3.easeInOut}, "=-.5")
    .from(".bio", 1.5, {opacity: 0, scale: 1, ease: Power3.easeInOut}, "=-1.5")
    .from(".intro-nav", 1.5, {opacity: 0, ease: Power3.easeInOut}, "=-1.2")
    .from("#toolset", 1, {opacity: 0, y:5, ease: Power3.easeInOut}, "=-1")
    .from(".tool-item", 1, {opacity: 0}, "-=.4");



  // tl2
  //   .to(".tool-item.a", 1, {scale: 1})
  //   .to(".tool-item.b", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.c", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.e", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.d", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.f", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.g", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.h", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.i", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.j", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.k", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.l", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.m", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.n", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.o", 1, {scale: 1}, "=-.9")
  //   .to(".tool-item.p", 1, {scale: 1}, "=-.9");



  tl3.from(".section-pol", 1.5, {opacity: 0});
  tl3.from(".project-visual", 1, {opacity: 0, x:200}, "=-1.5");
  tl3.to(".project-visual", 10, {backgroundPositionY:'90%',  ease: Power3.easeInOut});


  tl4.from(".pol-1", 1, {y:50, opacity: 0})
  tl4.from(".pol-2", 1, {y:50, opacity: 0}, "=-.9")
  tl4.from(".pol-3", 1, {y:50, opacity: 0}, "=-.9")
  tl4.from(".pol-4", 1, {y:50, opacity: 0}, "=-.9")
  tl4.from(".pol-5", 1, {y:50, opacity: 0}, "=-.9")
  tl4.from(".pol-6", 1, {y:50, opacity: 0}, "=-.9");





  
  // tl4
  //   .from(".pol .gallery-subgrid .pol-1", .5, {opacity: 0, scale: .7})
  //   .from(".pol .gallery-subgrid .pol-2", .5, {opacity: 0, scale: .7}, "=-.32")
  //   .from(".pol .gallery-subgrid .pol-3", .5, {opacity: 0, scale: .7}, "=-.34")
  //   .from(".pol .gallery-subgrid .pol-4", .5, {opacity: 0, scale: .7}, "=-.36")
  //   .from(".pol .gallery-subgrid .pol-5", .5, {opacity: 0, scale: .7}, "=-.38")
  //   .from(".pol .gallery-subgrid .pol-6", .5, {opacity: 0, scale: .7}, "=-.4");


  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#introduction",
  })
    .setTween(tl1)
      .addTo(controller);


  // const scene2 = new ScrollMagic.Scene({
  //   triggerElement: "#toolset",
  //   triggerHook: 0.9,
  //   offset: 50
  // })
  //   .setTween(tl2)
  //     .addTo(controller);


  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#welcome",
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
    

  // const scene = new ScrollMagic.Scene({
  //   triggerElement: "#pol-start",
  //   triggerHook: "onLeave" 
  //   duration: "100%"
  // })
  //   .setPin("#pol-start")
  //   .setTween(tl)
  //     .addTo(controller);


  // const scene3 = new ScrollMagic.Scene({
  //   triggerElement: "#poetry-out-loud",
  //   triggerHook: "onLeave",
  //   duration: "80%"
  // })
  //   .setPin("#poetry-out-loud")
  //   .setTween(tl3)
  //     .addTo(controller);


  // const scene4 = new ScrollMagic.Scene({
  //   triggerElement: ".gallery-subgrid",
  //   triggerHook: ".7",
  //   // duration: "100%"
  // })
  //   // .setPin("#poetry-out-loud")
  //   .setTween(tl4)
  //     .addTo(controller);

  //   tl.to('.avatar', 5, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
  //   tl.to('.name', 5, {scale: 2, opacity: .4, ease: Elastic.easeOut.config(1, 0.3)}, 2);
  //   tl.to('.bio', 5, {scale: 2, ease: Elastic.easeOut.config(1, 0.3)}, '-=5');
  //   tl.reversed(true);

  // document.getElementById('cta').addEventListener('click', function() {
    
  //   tl.reversed(!tl.reversed());
  //   if (tl.reversed())
  //     tl.reverse();
  //   else
  //     tl.play();
  // });



  function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
  }



