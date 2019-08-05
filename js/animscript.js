
  var tl1 = new TimelineMax({delay:.5});
  var tl2 = new TimelineMax();
  var tl3 = new TimelineMax();
  // var tl3 = new TimelineMax({onUpdate:updatePercentage});
  // var tl4 = new TimelineMax();


  const controller = new ScrollMagic.Controller();

  tl1
    .from(".avatar", 1, { opacity: 0, y:20})
    .from(".name", 1, {opacity: 0, y:10}, "=-.25")
    .from(".bio", 1, {opacity: 0, y:10}, "=-.75")
    .from(".intro-nav", 1, {opacity: 0, scale: .95});

  // tl1
  //   .from(".toolset-subgrid.tool-item .a", 1, {opacity: 0});
  //   // .from(".toolset-subgrid .tool-item .b", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .c", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .d", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .e", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .f", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .g", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .h", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .i", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .j", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .k", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .l", 1, {opacity: 0})
  //   // .from(".toolset-subgrid .tool-item .m", 1, {opacity: 0});



  tl3.from(".section-pol", 1.5, {opacity: 0});
  tl3.from(".project-visual", 1, {opacity: 0, x:200}, "=-1.5");
  tl3.to(".project-visual", 1, {backgroundPositionY:'100%'});

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


  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#introduction",
  })
    .setTween(tl1)
      .addTo(controller);



  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#welcome",
  })
    .setTween(tl3)
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



