$(document).ready(function(){
   
   
});

$("#get").click(function(){
        
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=hola",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data){
                console.log(data);
            }});
});
