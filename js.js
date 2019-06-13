
jQuery(document).ready(function($){
    
    
    

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
    
    $('.bigseat').on('click',function(){
        if
            ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).attr("src","images/bigseat.png");
                $(".seattextheading").html('- - - -');
        } 
        else {
            $(this).attr('data-click-state', 1)
            $(".bigseat").attr("src","images/bigseat.png");
            $(".smallseat").attr("src","images/smallseat.png");
            $(this).attr("src","images/bigseatchoose.png");
        }
    
    });
    
    $('.smallseat').on('click',function(){
        if
            ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).attr("src","images/smallseat.png");
                $(".seattextheading").html('- - - -');
        } 
        else {
            $(this).attr('data-click-state', 1)
            $(".smallseat").attr("src","images/smallseat.png");
            $(".bigseat").attr("src","images/bigseat.png");
            $(".smallseat").attr("src","images/smallseat.png");
            $(this).attr("src","images/smallseatchoose.png");
        };
    });
    
});
