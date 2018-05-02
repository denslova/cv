$( document ).ready(function(){

    $( "#gk-genretrans" ).on( "click", function() {
        console.log( "A button with the alert class was clicked!" );
    });
    
    $(".js-video-button").modalVideo({
        youtube:{
            controls: 1,
            nocookie: true, 
            autoplay: 1
        }
    });
    
});