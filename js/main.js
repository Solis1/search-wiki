$("#get").click(function(){
        
        $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=hola",function(data){
        console.log(data);     
         
    }); 
        
    });
      
