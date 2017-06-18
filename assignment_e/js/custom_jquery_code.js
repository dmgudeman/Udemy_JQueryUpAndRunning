$(function() {

    $("button#btn_1").on("click", function() {
        let inputTxt = $("div#course_name input").val();
        $("#statement > h3").text(inputTxt);
        $("#statement > h3").css({
            "background-color": "green",
            "font-size": "2em",
            "font-weight": "bold",
        })
    })

    $("#courses").children().on("click", function() {
        let inputTxt = $("div#course_name input").val();
        inputTxt = $("<li>" + inputTxt + "</li>");
        $(this).after(inputTxt);
    });

    $("#courses").children().children().children().on("click", function(event) {
        let inputTxt = $("div#course_name input").val();
        inputTxt = $("<li>" + inputTxt + "</li>");
        $(this).after(inputTxt);
        event.stopPropagation();
    });

})