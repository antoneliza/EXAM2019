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

        }

});

});