
// You'll need the below URLs while following along with the lecture for practice.
    // var root = "https://jsonplaceholder.typicode.com/posts/1";
    // var root = "https://jsonplaceholder.typicode.com/comments";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

$(function(){
    $("button").on("click", function() {
        // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";

        // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first"
        var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_tabl.html"
        // $("div.main").load(url);

        $.ajax(url, {
            dataType: "html",
            method: 'GET',
            success: function(response){
               $("div.main").html(response);
            },
            error: function(error, errorType, errorMsg ) {
                alert("error" + errorMsg);
            }
        })
    });

});
