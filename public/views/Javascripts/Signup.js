
var User=
{   
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
}

var existingEmail;

$('#signin-button').click(function (e) {
    
    User.firstName=$("#fname").val();
    User.lastName=$("#lname").val();
    User.username=$("#username").val();
    User.email=$("#email").val();
    User.password=$("#password").val();

    addNewUser();
    
    // $.ajax({
    //   method:"GET",
    //   url:'/api/user',
    // }).done(function(response){
        // console.log(response);
        // existingEmail=true;
        // for(var i=0;i<response.length;i++)
        // {
        //     if(response[i].title==User.title && response[i].genre==User.genre)
        //     {   
        //         existingEmail=false;
        //         break;
        //     }
        // }
        
        // if(existingEmail==false)$("#errorMessage").css('visibility', 'visible');
        // else addNewUser();

    // }).fail(function(response){
    //     console.log("This is the problem: " + JSON.parse(response.responseText).message);
    // });
})

function addNewUser() {
    $.ajax({
      method:"POST",
      url:'/auth/signups',
      data: User
    }).done(function(response){
      console.log(response);
      window.location.replace('/');
    }).fail(function(response){
        console.log("This is the problem: " + JSON.parse(response.responseText).message);
    });
}