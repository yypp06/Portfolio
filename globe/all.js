$(document).ready(function(){
    $(".mb_button, .start").click(function(){
        $(".snowman").hide();
        $(".sloganback").hide();
        $(".slogan1").hide();
        $(".slogan2").hide();
        $(".text").hide();
        $(".start").hide();
        $(".mb_button").hide();
        $(".globe img").css("animation","null");
        $(".circle").show();
        $(".question").show();
        $(".snowmonsterflag").show();

 
    });

    $(".startmb img").click(function(){
        $(".questionmb").show();
         
    });
    $(".amb p:first-child").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result').offset().top},800);
        $(".answermb").fadeOut(2500);
        $(".questionmb").hide();
        $(".mobile").hide();
         

    });
    $(".amb p:nth-child(2)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result2').offset().top},800);
        $(".answermb").fadeOut(2500);
        $(".mobile").hide();

    });
    $(".amb p:nth-child(3)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result3').offset().top},800);        
        $(".answermb").fadeOut(2500);
        $(".mobile").hide();

    });
    $(".amb p:nth-child(4)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result4').offset().top},800);
        $(".answermb").fadeOut(2500);
        $(".mobile").hide();

    });


    
    $(".answer p").click(function(){
        $(".question2").show();
        $(".question").hide();
    
    });
    $(".answer2 p").click(function(){
        $(".question3").show();
        $(".question2").hide();
    
    });
    $(".answer3 p").click(function(){
        $(".question4").show();
        $(".question3").hide();
        
    });
    $(".answer4 p:first-child").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result').offset().top},800);
        $(".answermb").fadeOut(2500);
         

    });
    $(".answer4 p:nth-child(2)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result2').offset().top},800);
        $(".answermb").fadeOut(2500);

    });
    $(".answer4 p:nth-child(3)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result3').offset().top},800);        
        $(".answermb").fadeOut(2500);

    });
    $(".answer4 p:nth-child(4)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result4').offset().top},800);
        $(".answermb").fadeOut(2500);

    });
    $(".home").click(function(){
        $(".item").hide();
        $(".snowman").show();
        $(".sloganback").show();
        $(".slogan1").show();
        $(".slogan2").show();
        $(".text").show();
        $(".start").show();
        $(".mb_button").show();
        $(".globe img").css("animation","180s linear 0s infinite rotate");
        $(".globe img").css("-webkit-animation","180s linear 0s infinite rotate");
        $(".snowmonsterflag").hide();
         
    });
 
    function scrollToAnchor(el){
        var top = $(el).offset().top;
        $('html,body').animate({scrollTop: top},'slow');
    }
    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        var itembg = $('.item');
        var top1 = $('.result').offset().top;
        var top2 = $('.result2').offset().top - 110;
        var top3 = $('.result3').offset().top - 110;
        var top4 = $('.result4').offset().top - 110;
        if(thisTop > top1 && thisTop < top2) {
            itembg.css({transition: 'background-color 0.5s linear',background: '#FFDC02'});
        }
            else if(thisTop > top2 && thisTop < top3) {
                itembg.css({transition: 'background-color 0.5s linear',background: '#6cd93c'});
            }
            else if(thisTop > top3 && thisTop < top4) {
                itembg.css({transition: 'background-color 0.5s linear',background: '#ff0000'});
            }
            else if(thisTop > top4 && thisTop ) {
                itembg.css({transition: 'background-color 0.5s linear',background: '#00b9f7'});
            }
    

        
    });


    $( window ).resize(function() {
            if($( window ).width() > 768) {
                $(".mobile").hide();
                $(".background").show();
                 
                
            }
            if($( window ).width() < 768) {
                $(".mobile").show();
                $(".background").hide();
                 
            }

    




    });

    






});
