$(document).ready(function(){
    
    var originalText = "Native Americans were removed from the lands they had managed for centuries, not only during settlement, as is well known, but during the creation of the national parks and national forests. Indians resisted these moves in an effort to maintain autonomy and access to resources. —Shades of Darkness: Race and Enviromental History by Carolyn Merchent. Published July, 2003 Vol. 8 No. 3" ;
    var splitText = originalText.split(" ");
    console.log(splitText.length)
    var zindex = 0;  
    var ticker = 0;
    var backgrounds = ['background_1.jpg', 'background_2.jpg','background_3.jpg', 'background_4.jpg','background_5.jpg','background_6.jpg', 'background_7.jpg',]
    
    
    $('.flex-item').mouseenter(function(){
        var randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)]
        $('body').css("background-image", "url(img/"+ randomBackground +")");  

        $(this).css("transform", "scale(9)")
        $(this).css("pointer-events", "none")

        $(this).html(splitText[ticker]);
        
        ticker += 1;
        if(ticker>=splitText.length){
            ticker=0;
        }
        
        zindex +=1;
         $(this).css("z-index", 100+zindex)
         
        
    })
    

     
    setInterval(function() {
        $( ".flex-item" ).addClass( "selected" );

        $('.flex-item').animate( { backgroundColor: 'red' }, 100
    )}, 1000);  
    
    
})
    
