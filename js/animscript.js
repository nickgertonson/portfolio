
  var tl = new TimelineMax({onUpdate:updatePercentage});
  var tl2 = new TimelineMax();
  // var tl3 = new TimelineMax();
  // var tl4 = new TimelineMax();


  const controller = new ScrollMagic.Controller();

  tl2.from(".section-pol", 1.5, {opacity: 0});
  tl2.from(".project-visual", 1, {opacity: 0, x:200}, "=-1.5");
  tl2.to(".project-visual", 1, {backgroundPositionY:'100%'});

  // tl4
  //   .from(".pol .gallery-subgrid .pol-1", .5, {opacity: 0, scale: .7})
  //   .from(".pol .gallery-subgrid .pol-2", .5, {opacity: 0, scale: .7}, "=-.32")
  //   .from(".pol .gallery-subgrid .pol-3", .5, {opacity: 0, scale: .7}, "=-.34")
  //   .from(".pol .gallery-subgrid .pol-4", .5, {opacity: 0, scale: .7}, "=-.36")
  //   .from(".pol .gallery-subgrid .pol-5", .5, {opacity: 0, scale: .7}, "=-.38")
  //   .from(".pol .gallery-subgrid .pol-6", .5, {opacity: 0, scale: .7}, "=-.4");


  // tl2.to(".section-pol", 3, {scale: 2});

  // tl2.from(".section-pol", 1, {opacity: 0});
  // t2.from(".project-visual", 2, {x:200, opacity:0});


  // const scene = new ScrollMagic.Scene({
  //   triggerElement: "#pol-start",
  //   triggerHook: "onLeave" 
  //   duration: "100%"
  // })
  //   .setPin("#pol-start")
  //   .setTween(tl)
  //     .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#welcome",
  })
    .setTween(tl2)
      .addTo(controller);


  function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
  }

  // const scene3 = new ScrollMagic.Scene({
  //   triggerElement: "#poetry-out-loud",
  //   triggerHook: "onLeave",
  //   duration: "80%"
  // })
  //   .setPin("#poetry-out-loud")
  //   .setTween(tl3)
  //     .addTo(controller);

      

  function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
  }

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



