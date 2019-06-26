// Adds Confetti and Triggers Sound When Clapper Is Clicked
$(document).ready(function() { 
    $(".clappingbutton").click(function() { 
        console.log('seeeo');
      var homerNum = Math.round(Math.random()*1) + 1;
      var boo = "one";
      if (homerNum == '2'){
        boo = 'one';
      }
      else if (homerNum == '1'){
        boo = 'two';
      }
  
      var countNum = (Math.floor(Math.random() * 100) + 1);
  
      $(this).addClass("clapped").delay(10).queue(function(next){
        $(this).removeClass("clapped");
        next();
      });

  
      $(this).append("<div class='"+countNum+" homer "+boo+"'></div>").delay(1000).queue(function(next){
        $('.'+countNum).remove();
        next();
      });
  
      var audio = document.getElementsByTagName("audio")[0];
      audio.volume = .8;
      audio.play();


    }); 
}); 