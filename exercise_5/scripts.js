$(document).ready(function() {

var bgImages = ["imgs/book_1.jpg","imgs/book_2.jpg", "imgs/book_3.jpg","imgs/book_4.jpg"];
    
    var count = bgImages.length
    var ticker  = 0; 
    var time = 0;
    
    var message = "The Best Books"
    var name = "Jackets 101"
    var date = new  Date();
    
$("#text").text(message + " " + name + "")  
$("#date").text(date)

function screensaver(){
    
    var url ="url(" + bgImages[ticker] + ")";
    $("#screensaver").css("background-image", url)  
    
    var tickerText = ticker + 1 +"/" + count ;
    $("#ticker").text(tickerText);
    
    ticker+=1;
    if(ticker == count){
        ticker = 0;
    }
}
    
    $(document).click(function(){
      screensaver();  
    })
    
    setInterval(function(){
            screensaver();    
                },2000)
    $(document).mousemove(function(){
        ticker=0;
        time=0;
        $("#screensaver").css("opacity",0)
        $("#ticker").css("opacity",0)
    })
    
    setInterval(function(){
        time+=1;
        if(time>2){    
        ticker=0;
        time=0;
        $("#screensaver").css("opacity",1)
        $("#ticker").css("opacity",1)
        }
    },1000)
})
