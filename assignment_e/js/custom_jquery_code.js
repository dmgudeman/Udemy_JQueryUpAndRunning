$(function() {

    $("button#btn_1").on("click", function() {
        let inputTxt = $("div#course_name input").val();
        $("#statement > h3").text("Course Entered: " + inputTxt);
        $("#statement > h3").css({
            "background-color": "green",
            "font-size": "2em",
            "font-weight": "bold",
        })
    })

    $("#courses").children().on("click", function() {
        let inputTxt = $("div#course_name input").val();
        inputTxt = $("<li>" + inputTxt + "</li>");
        inputTxt.css("background-color", "yellow");
        $(this).after(inputTxt);
    });

    $("#courses").children().children().children().on("click", function(event) {
        let inputTxt = $("div#course_name input").val();
        inputTxt = $("<li>" + inputTxt + "</li>");
        inputTxt.css("background-color", "yellow");
        $(this).after(inputTxt);
        event.stopPropagation();
    });

})