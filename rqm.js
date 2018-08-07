
   $('#author').textContent="Hello World"
$(document).ready(
    function(){
        $('#new-quote').click(
            function(event){
                $.getJSON('https://talaikis.com/api/quotes/random/',function(json){
                   
                   $('#author').innerHTML="Hello World"
                   $('#quote').innerHTML=json.quote;
                })
            }
        )
        $('#author').textContent="Hello World"
    }
)