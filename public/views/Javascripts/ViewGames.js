  var addGame=
{   
    gameID:"",
    // storeID:"",
    price:""
}

$(".addButton").click(function(){
    var gameId=$(this).parent().attr("id");
    var gamePrice=$(this).siblings().val();
    console.log(gameId);
    console.log(gamePrice);
    
    addGame.gameID=gameId;
    // addGame.storeID
    addGame.price=gamePrice;
    
    if(gamePrice>0)
    {
        $.ajax({
            method:"POST",
            url:'/api/prices',
            data: addGame
        }).done(function(response){
            console.log(response);
    //   window.location.replace("/products/"+response._id);
        }).fail(function(response){
    //   $("#error").text(JSON.parse(response.responseText).message);
        console.log("This is the problem: " + JSON.parse(response.responseText).message);
        });   
    }
});
