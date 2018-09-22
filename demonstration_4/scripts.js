$ (document) .ready(function(){
    
$('#oval').css('background-color','black')
    
$('#triangle').click(function(){
    $('#triangle').css('border-bottom','0vw solid tan');
    $('#triangle').css('border-top','20vw solid tan');
})

                   
$('#cross').mouseenter(function(){
    $('#cross').css('transform','rotate(180deg)');
})

$('#cross').mouseleave(function(){
    $('#cross').css('transform','rotate(0deg)');
})

$('#mouseY').mousemove(function(event){
    var parentOffset = $("#lineX").parent().offset();
    var relY = event.pageY - parentOffset.top +1;
    $('#lineX').css('top', relY);
})

$('#mouseX').mousemove(function(event){
    var parentOffset = $("#lineY").parent().offset();
    var relX = event.pageX - parentOffset.left +1;
    $('#lineY').css('top', relX);
})

$("body").mousemove(function(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    
    $('#dot').css('top', mouseY);
    $('#dot').css('left', mouseX);
})

});
