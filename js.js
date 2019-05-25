jQuery(document).ready(function($){

    $('.seat').on('click',function(){
        if
            ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).css('background-color', 'rgba(255, 255, 255, 0)')
        } 
        else {
            $(this).attr('data-click-state', 1)
            $("*").css('background-color', 'rgba(255, 255, 255, 0)')
            $(this).css('background-color', 'green')
            $(".footer").css('background-color', '#FFDB4D')
            $(".submit").css('background-color', '#FFDB4D')
        }
    
    });
    
    if
            ($(".seat").each(function('background-color', 'rgba(255, 255, 255, 0)')) {
                $("seattextheading").html('- - - -')
            })
    

    $('#bigseat1').on('click',function(){
        $(".seattextheading").html('1');
        
        
    });
    
    $('#bigseat2').on('click',function(){
        $(".seattextheading").html('2');
    });
    
    $('#bigseat3').on('click',function(){
        $(".seattextheading").html('3');
    });
    
    $('#bigseat4').on('click',function(){
        $(".seattextheading").html('4');
    });
    
    $('#bigseat5').on('click',function(){
        $(".seattextheading").html('5');
    });
    
    $('#bigseat6').on('click',function(){
        $(".seattextheading").html('6');
    });
    
    $('#bigseat7').on('click',function(){
        $(".seattextheading").html('7');
    });
    
    $('#bigseat8').on('click',function(){
        $(".seattextheading").html('8');
    });
    
    $('#smallseat1').on('click',function(){
        $(".seattextheading").html('9');
    });
    
    $('#smallseat2').on('click',function(){
        $(".seattextheading").html('10');
    });
    
    $('#smallseat3').on('click',function(){
        $(".seattextheading").html('11');
    });
    
    $('#smallseat4').on('click',function(){
        $(".seattextheading").html('12');
    });
    
    $('#smallseat5').on('click',function(){
        $(".seattextheading").html('13');
    });
    
    $('#smallseat6').on('click',function(){
        $(".seattextheading").html('14');
    });
    
    $('#smallseat7').on('click',function(){
        $(".seattextheading").html('15');
    });
    
    $('#smallseat8').on('click',function(){
        $(".seattextheading").html('16');
    });

});
    