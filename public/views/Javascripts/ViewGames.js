$(".addButton").click(function(){
    var gameId=$(this).parent().attr("id");
    var gamePrice=$(this).siblings().val();
    console.log(gameId);
    console.log(gamePrice);
});
