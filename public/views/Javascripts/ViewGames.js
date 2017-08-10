  var addGame=
{   
    gameID:"",
    storeID:"",
    price:""
}

$(".addButton").click(function(){
    alert("test");
    var gameId=$(this).parent().attr("id");
    var userID= user._id;
    var gamePrice=$(this).siblings().val();
    console.log(gameId);
    console.log(gamePrice);
    console.log("6666666" + userID);
    
    addGame.gameID=gameId;
    addGame.storeID = userID;
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
