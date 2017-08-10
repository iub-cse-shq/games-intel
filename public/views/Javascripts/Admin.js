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

var newGame;

$('#doneButton').click(function (e) {
    
    Game.imageURL=$("#image").val();
    Game.title=$("#title").val();
    Game.description=$("#description").val();
    Game.rating=$("#rating").val();
    Game.developer_name=$("#developer_name").val();
    Game.release_date=$("#release_date").val();
    Game.genre=$("#genre").val();
    
    $.ajax({
      method:"GET",
      url:'/api/games',
    }).done(function(response){
        console.log(response);
        newGame=true;
        for(var i=0;i<response.length;i++)
        {
            if(response[i].title==Game.title && response[i].genre==Game.genre)
            {   
                newGame=false;
                break;
            }
        }
        
        if(newGame==false)$("#errorMessage").css('visibility', 'visible');
        else addNewGame();

    }).fail(function(response){
        $("#errorMessage").css('visibility', 'visible');
        console.log("This is the problem: " + JSON.parse(response.responseText).message);
    });
    
    // console.log("Game image url: "+Game.imgURL);
    // console.log("Game Title: "+Game.title);
    // console.log("Game Description: "+Game.description);
    // console.log("Game Developer Name: "+Game.developer_name);
    // console.log("Game Release Date: "+Game.release_date);
    // console.log("Game Genre: "+Game.genre);
})

function addNewGame() {
    $.ajax({
      method:"POST",
      url:'/api/games',
      data: Game
    }).done(function(response){
      console.log(response);
      alert("Game Added");
    }).fail(function(response){
        $("#errorMessage").css('visibility', 'visible');
        console.log("This is the problem: " + JSON.parse(response.responseText).message);
    });
}