$(document).ready(function(){
    // Taking You back to homescreen when clicked
    $("#logo").on("click", function (){
        window.location.reload(true);
    })

    // Contact Form Submit Function
    $("#submit-form").on("click", function(event){     
        // Get User Info
        var name = $("#user-name").val().trim();
        var email = $("#user-email").val().trim();
        var number = $("#user-number").val().trim();
        var message = $("#user-message").val().trim();

        var invalidName = $("#invalid-name");
        var invalidEmail = $("#invalid-email");
        var invalidMessage =$("#invalid-message");

        // Test
        // console.log(name);
        // console.log(email);
        // console.log(number);
        // console.log(message);

        // Posts Error Message if Inputs are invalid
        if(name.length <= 2){
            invalidName.append("<div>Name is  not valid</div>")
            event.preventDefault();
        }
        if(email.length <= 4){
            invalidEmail.append("<div>Email is valid</div>")
            event.preventDefault();
        }
        if(number.length <= 9 && number.length > 13){
            event.preventDefault();
        }
        if(message.length <= 2){
            invalidMessage.append("<div>Please give a brief description of why you're reaching out!</div>");
            event.preventDefault();
        }

        // // Clear Form After being submitted
        // $("#user-name").val("");
        // $("#user-email").val("");
        // $("#user-number").val("");
        // $("#user-message").val("");
    }); 
});