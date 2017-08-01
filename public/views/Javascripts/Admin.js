
var Game=
{   
    title:"",
    imgURL:"",
    description:"",
    rating:"",
    developer_name:"",
    release_date:"",
    genre:""
}

$('#doneButton').click(function (e) {
    Game.imageURL=$("#image").val();
    Game.title=$("#title").val();
    Game.description=$("#description").val();
    Game.rating=$("#rating").val();
    Game.developer_name=$("#developer_name").val();
    Game.release_date=$("#release_date").val();
    Game.genre=$("#genre").val();
    
    console.log("Game image url: "+Game.imgURL);
    console.log("Game Title: "+Game.title);
    console.log("Game Description: "+Game.description);
    console.log("Game Developer Name: "+Game.developer_name);
    console.log("Game Release Date: "+Game.release_date);
    console.log("Game Genre: "+Game.genre);
    $.ajax({
      method:"POST",
      url:'/api/games',
      data: Game
    }).done(function(response){
      console.log(response);
    //   window.location.replace("/products/"+response._id);
    }).fail(function(response){
    //   $("#error").text(JSON.parse(response.responseText).message);
        console.log("This is the problem: " + JSON.parse(response.responseText).message);
    });
})