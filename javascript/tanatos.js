

$(function(){
    'use strict';





    // header
   
    var h =$(window).height();
    var w =$(window).width()
    if (w>800){
        $('.header').height(h);
    }
   

    $('.header .arrow i').click (function(){
      var x=$('.featur').offset();
       $(window).scrollTop(x.top);
    });


    //drop
    $('.drop').height($(window).height());
    $('.header .navbar .link i').click (function(){
        $('.drop').toggle();
    });
    

 


    //show
    $('.show').click(function(){
        $('.hidden,.show .a,.show .b').toggle();
    });



    //client 
    $('.say .fgh').click(function(){
        if ($('.client1').is(':visible'))  {
            $('.client2').show();
            $('.client1').hide();
            $('.client3').hide();
            $('.say .fgh').css({"opacity":"1" ,"cursor":"pointer"});
            $('.say i:first-of-type ').css({"opacity":"1" ,"cursor":"pointer"});
        }
        else if ($('.client2').is(':visible'))  {
            $('.client3').show();
            $('.client1').hide();
            $('.client2').hide();
            $('.say .fgh').css({"opacity":".1" ,"cursor":"context-menu"});
            $('.say i:first-of-type ').css({"opacity":"1" ,"cursor":"pointer"});
            
       }
    });
    
    $('.say i:first-of-type ').click(function(){
        if ($('.client3').is(':visible'))  {
             $('.client2').show();
             $('.client1').hide();
             $('.client3').hide();
             $('.say .fgh').css({"opacity":"1" ,"cursor":"pointer"});
             $('.say .i:first-of-type ').css({"opacity":"1" ,"cursor":"pointer"});
        }
        else   {
            $('.client2').hide();
            $('.client1').show();
            $('.client3').hide();
            $('.say i:first-of-type ').css({"opacity":".1" ,"cursor":"context-menu"});
            $('.say .fgh').css({"opacity":"1" ,"cursor":"pointer"});
        }

    });
});


