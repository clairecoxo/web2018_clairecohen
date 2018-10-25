$(document).ready(function(){
    
    var originalText = "Native Americans were removed from the lands they had managed for centuries, not only during settlement, as is well known, but during the creation of the national parks and national forests. Indians resisted these moves in an effort to maintain autonomy and access to resources.";
    var splitText = originalText.split(" ");
    
    
    var ticker = 0;
    
    
    
    $('.flex-item').mouseenter(function(){
        $(this).css("transform", "scale(12)")
        $(this).css("z-index", 100+ticker)
        $(this).css("pointer-events", "none")

        $(this).html(splitText[ticker]);
        
        ticker += 1;
        if(ticker>=splitText.length-1){
            ticker=0;
        }
    })
    

     
    setInterval(function() {
        $( ".flex-item" ).addClass( "selected" );

        $('.flex-item').animate( { backgroundColor: 'red' }, 300
    )}, 3000);  
    
    
})
    
