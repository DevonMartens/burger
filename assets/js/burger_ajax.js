$(document).ready(function(){
   $(".devour-form").on("submit", function(event){
      event.preventDefault()
    var burger_id =  $(this).children(".burger-id").val();
    console.log(burger_id)
    $.ajax({
       method: "PUT",
       url: "/burgers/update/" + burger_id
    }).then(function(data){
       location.reload()
    })
   })
})