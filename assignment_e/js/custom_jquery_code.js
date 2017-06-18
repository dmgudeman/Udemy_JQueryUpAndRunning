$(function() {



    $("button#btn_1").on("click", function() {
        let inputTxt = $("div#course_name input").val();
            
                    console.log("hi there" + inputTxt);

                $("#statement > h3").text("hi there" + inputTxt);
           
})

});