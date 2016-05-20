//Add Stuff Here!
// var selector=document.querySelector('h1');
// selector.textContent = "Hello World";

$('h1').text("Hello World");

   function whenClickedFunction(){
        $('h1').append("clicked!");
    }
    
$('h1').click(
    whenClickedFunction
    );
    
 