$(document).ready(function(){
    $("#logo").on("click", function (){
        window.location.reload(true);
    })

    $("#background").on("click", function(){
        $(".snowflake").stop(stopAll,goToEnd);
    })
});