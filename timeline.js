// select: read more button
// event: click
// modify: expand the height of nearest paragraph

//* function expandHeightOfParagraph(){
    
//    $(this).siblings("p").css(
//        "max-height", "1000px"
//        );
//}
// $(".cd-read-more").click(expandHeightOfParagraph);


$(document).ready(function(){
    $('.cd-read-more').click(function(){
        $(this).siblings('p').animate({
            "max-height": "200px"
        });
    })
})


