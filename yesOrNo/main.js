$(document).ready(function(){
    
    $(".yes_cover").hover(function(){
        $(".clock_yes img").css("display", "block");
        $(".girlcover").css("opacity", "0");
        $(".clock_blue img").css("animation", "none");
        }, function(){
            $(".clock_yes img").css("display", "none");
            $(".girlcover").css("opacity", "0.4");
            $(".clock_blue img").css("animation", "1.2s linear 0.5s infinite blink");
        
       
    });

    $(".no_cover").hover(function(){
        $(".clock_no img").css("display", "block");
        $(".mancover").css("opacity", "0");
        $(".clock_blue img").css("display", "none");
        }, function(){
            $(".clock_no img").css("display", "none");
            $(".mancover").css("opacity", "0.4");
            $(".clock_blue img").css("display", "block");
            $(".clock_blue img").css("animation", "1.2s linear 0.5s infinite blink");
        
       
    });

    $(".yes_cover").click(function(){        
        $(".main").fadeOut();
        $(".restPage").css("display","block")

    });
        $(".no_cover").click(function(){        
        $(".main").fadeOut();
        $(".workPage").css("display","block")

    });

    $("div.rsc1").hover(function(){
        $(".rsc1_1").css("display", "block");
        }, function(){
            $(".rsc1_1").css("display", "none");
       
    });
    $("div.rsc2").hover(function(){
        $(".rsc2_1").css("display", "block");
        }, function(){
            $(".rsc2_1").css("display", "none");
       
    });
    $("div.rsc3").hover(function(){
        $(".rsc3_1").css("display", "block");
        }, function(){
            $(".rsc3_1").css("display", "none");
       
    });
    $("div.rsc4").hover(function(){
        $(".rsc4_1").css("display", "block");
        }, function(){
            $(".rsc4_1").css("display", "none");
       
    });
    $("div.rsc5").hover(function(){
        $(".rsc5_1").css("display", "block");
        }, function(){
            $(".rsc5_1").css("display", "none");
       
    });
    $(".rsc6").hover(function(){
        $(".rsc6_1").css("display", "block");
        }, function(){
            $(".rsc6_1").css("display", "none");
       
    });

    $(".toy1").hover(function(){
        $(".toy1_1").css("display", "block");
        }, function(){
            $(".toy1_1").css("display", "none");
       
    });
    $("div.toy2").hover(function(){
        $(".toy2_1").css("display", "block");
        }, function(){
            $(".toy2_1").css("display", "none");
       
    });
    $("div.toy3").hover(function(){
        $(".toy3_1").css("display", "block");
        }, function(){
            $(".toy3_1").css("display", "none");
       
    });
    $("div.toy4").hover(function(){
        $(".toy4_1").css("display", "block");
        }, function(){
            $(".toy4_1").css("display", "none");
       
    });
    $("div.toy5").hover(function(){
        $(".toy5_1").css("display", "block");
        }, function(){
            $(".toy5_1").css("display", "none");
       
    });


    $(".btn1_1").click(function(){ 
        $(".main").fadeIn('fast');
        $(".restPage").css("display","none")

    });

    $(".btn4_4").click(function(){ 
        $(".workPage").fadeIn('fast');
        $(".restPage").css("display","none")

    });

    $(".office_btn1_1").click(function(){ 
        $(".main").fadeIn('fast');
        $(".workPage").css("display","none")

    });

    $(".office_btn4_4").click(function(){ 
        $(".restPage").fadeIn('fast');
        $(".workPage").css("display","none")

    });

    function scrollToAnchor(el){
        var top = $(el).offset().top;
        $('html,body').animate({scrollTop: top},'slow');
    }
    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        var top1 = $('div .suitcase').offset().top;
        var top2 = $('.clothes').offset().top - 470;
         
        if(thisTop > top1 && thisTop < top2) {
            $('.btn2_2').hide();
            $('.btn3_3').show();
            $('.restPage').css('background-position', 'center');
            $('.restPage').css({'background-attachment':'fixed'});

        }
            else if(thisTop > top2) {
                $('.btn3_3').hide();
                $('.btn2_2').show();
                $('.restPage').css('background-position', '50% 244%');
                $('.restPage').css({'background-attachment':'scroll'});
                
            }
     });

    function scrollToAnchor(el){
    var top = $(el).offset().top;
    $('html,body').animate({scrollTop: top},'slow');
    }
    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        var top1 = $('div .office').offset().top;
        var top2 = $('.table').offset().top - 470;
         
        if(thisTop > top1 && thisTop < top2) {
            $('.office_btn2_2').hide();
            $('.office_btn3_3').show();
            $('.desk').hide();
            $('.workPage').css('background-position', 'center');
            $('.workPage').css({'background-attachment':'fixed'});
            $('.desk_item1').css('animation','none');
            $('.desk_item2').css('animation','none');
            $('.desk_item3').css('animation','none');
            $('.desk_item4').css('animation','none');
            $('.desk_item5').css('animation','none');
            $('.desk_item6').css('animation','none');
            $('.desk_item7').css('animation','none');
            $('.desk_item8').css('animation','none');
            $('.desk_item9').css('animation','none');
            $('.desk_item10').css('animation','none');

        }
            else if(thisTop > top2) {
                $('.office_btn3_3').hide();
                $('.office_btn2_2').show();
                $('.desk').fadeIn();
                $('.workPage').css('background-position', '50% 77%');
                $('.workPage').css({'background-attachment':'scroll'});
                $('.desk_item1').css('animation','1 0.7s linear alien');
                $('.desk_item2').css('animation','1 0.7s linear apple');
                $('.desk_item3').css('animation','1 0.7s linear car');
                $('.desk_item4').css('animation','1 0.7s linear coffee');
                $('.desk_item5').css('animation','1 0.7s linear fish');
                $('.desk_item6').css('animation','1 0.7s linear Glasses');
                $('.desk_item7').css('animation','1 0.7s linear letter');
                $('.desk_item8').css('animation','1 0.7s linear note');
                $('.desk_item9').css('animation','1 0.7s linear notebook');
                $('.desk_item10').css('animation','1 0.7s linear phone');
                
            }
     });

    $(".btn2_2").click(function(){
        $("html,body").animate({scrollTop:$('.restPage').offset().top},800);
        $(".btn2_2").hide();
        $(".btn3_3").show();
    });
    $(".btn3_3").click(function(){
        $("html,body").animate({scrollTop:$('.clothes').offset().top},800);
        $(".btn2_2").show();
        $(".btn3_3").hide();
    });

    $(".office_btn2_2").click(function(){
        $("html,body").animate({scrollTop:$('.workPage').offset().top},800);
        $(".office_btn2_2").hide();
        $(".office_btn3_3").show();
    });
    $(".office_btn3_3").click(function(){
        $("html,body").animate({scrollTop:$('.table').offset().top},800);
        $(".office_btn2_2").show();
        $(".office_btn3_3").hide();
    });
    

     

    $(".shoes").on("click", '#shoes1, #shoes2, #shoes3, #shoes4, #shoes5', function () {
            let idName = this.getAttribute('id');
            if( idName === 'shoes1'){
                $(".shoes div").removeClass("active")  
                $(this).addClass("active");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L1.png").fadeIn("slow");
                  });
 
            }if(idName === 'shoes2'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇厚底休閒涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L2.png").fadeIn("slow");
                  });
            }if(idName === 'shoes3'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇飾扣厚底涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L3.png").fadeIn("slow");
                  });
            }if(idName === 'shoes4'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇厚底海灘涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L4.png").fadeIn("slow");
                  });
            }if(idName === 'shoes5'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇寬帶楔型涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L5.png").fadeIn("slow");
                  });
                  
            } 
        


    });

        $(".clothes_item").on("click", '#clothes_item1, #clothes_item2, #clothes_item3, #clothes_item4, #clothes_item5', function () {
        let idName = this.getAttribute('id');
        if( idName === 'clothes_item1'){
            $(".clothes_item div").removeClass("active")  
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("刷色無袖丹寧背心");
            $("p#TagWord3").text("一字領雪紡褲裝");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L1.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item2'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("V 領網眼透視上衣");
            $("p#TagWord3").text(" 一字領連身牛仔短褲");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L2.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item3'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("不規則無袖長上衣");
            $("p#TagWord3").text("鬆緊包臀牛仔褲");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L3.png").fadeIn("slow");

                  });
        }if(idName === 'clothes_item4'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("刷色無袖丹寧背心");
            $("p#TagWord3").text("波希米亞雪紡洋裝");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L4.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item5'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $("p#TagWord2").text("不規則無袖長上衣");
            $(".sc3").css("display","none");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L5.png").fadeIn("slow");
                  });
            } 



    });

    $(".tag div").hover(function(){
        $(".tag img").css("display", "block");
        $("p#TagWord").css("display", "block");
        }, function(){
            $(".tag img").css("display", "none");
            $("p#TagWord").css("display", "none");
        
       
    });

        $(".tag2 div").hover(function(){
        $(".tag2 img").css("display", "block");
        $("p#TagWord2").css("display", "block");
        }, function(){
            $(".tag2 img").css("display", "none");
            $("p#TagWord2").css("display", "none");
        
       
    });

        $(".tag3 div").hover(function(){
        $(".tag3 img").css("display", "block");
        $("p#TagWord3").css("display", "block");
        }, function(){
            $(".tag3 img").css("display", "none");
            $("p#TagWord3").css("display", "none");
        
       
    });

 




});
     

        




 