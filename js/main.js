$(document).ready(function(){
   
    $("input").keydown(function(event){
        
        if(event.which == 13){
            $(".element").remove();
            
            var search = $("input").val();
            
            $.ajax({
            url: "https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+search,
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data){
                
                results = data.query.pages;
                
                $.each(results, function(i, item) {
                    $("#content").append("<div class='element'><a class='page "+i+"' href='https://en.wikipedia.org/?curid="+i+"'></a></div>")  
                    $(".page."+i).append("<h1 class='title'>"+item.title+"</h1>");
                    if(item.hasOwnProperty("thumbnail")){
                        
                    $(".page."+i).append("<img src='"+item.thumbnail.source+"'/>");
                    }
                    $(".page."+i).append("<h2 class='extract'>"+item.extract+"</h2>");
                    
                    
                }); 
            }});
        }
    });
});

