$(document).ready(function(){
    
    $('.flex-item').mouseenter(function(){
        
        $(this).css("transform", "scale(20)")
        
    })
    

     
    setInterval(function() {
        $( ".flex-item" ).addClass( "selected" );

        $('.flex-item').animate( { backgroundColor: 'red' }, 300
    )}, 3000);  
    
    
})
    
