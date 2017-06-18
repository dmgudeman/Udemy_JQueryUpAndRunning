
$(function(){

    $("#books_div > .book").on("click", "button",  function(event) { 
        var price = $(this).closest(".book").data("price");
        var author = $(this).closest(".book").data("author");
        var details = $("<p> price: " + price + "<br> Author: <b>" + author + "</b></p>");
        // $(this).after(details); --OR --v
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({"background-color":"yellow"});
        $(this).remove();

        event.stopPropagation();

    });

    $("div.book").on("click", function(){ 
        alert("hey click the button");
    });

    $("#books_completed > .book").on("click", "button",  function(event) { 
        var date = $(this).closest(".book").data("purchased");
        var author = $(this).closest(".book").data("author");
        var rating = $(this).closest(".book").data("myrating");
        var details = $("<p> purchased Date: " + date + "<br> Author: <b>" + author + "</b><br> Rating: " + rating + "</p>");
        // $(this).after(details); --OR --v
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({"background-color":"yellow"});
        $(this).remove();

        event.stopPropagation();

    });
});