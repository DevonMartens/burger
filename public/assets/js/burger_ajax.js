$(document).ready(function(){
   $(".devour-form").on("submit", function(event){
      event.preventDefault()
    var burger_id =  $(this).children(".burger-id").val();
    console.log(burger_id)
   })
})