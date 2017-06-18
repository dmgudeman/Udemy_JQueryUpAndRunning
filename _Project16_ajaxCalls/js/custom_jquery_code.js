
// You'll need the below URLs while following along with the lecture for practice.
    // var root = "https://jsonplaceholder.typicode.com/posts/1";
    // var root = "https://jsonplaceholder.typicode.com/comments";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

$(function(){
    $("button").on("click", function() {
        // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
        // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:last"
       
       
        // ------SIMPLER THAN AJAX CALL ---------------------------------------------------
        // $("div.main").load(url);
        

        //-------HTML----------------------------------------------------------------------
        // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

        // $.ajax(url, {
        //     dataType: "html",
        //     method: 'GET',
        //     success: function(response){
        //        $("div.main").html(response);
        //     },
        //     error: function(error, errorType, errorMsg ) {
        //         alert("error" + errorMsg);
        //     }
        // })
        //--------JSON---------------------------------------------------------------------
         var root = "https://jsonplaceholder.typicode.com/posts/1";
         var root = "https://jsonplaceholder.typicode.com/comments";

        $.ajax(root, {
            dataType: "json",
            method: 'GET',
            success: function(response){
            // console.log(response);

            var title = response[1].postId;
            var userId= response[1].email;

            var $info = $("<p> title: " + title + "</p>");
            var $info = $("<p></p>");
            $info.html(" postId: " + title + "<br> email: " + userId);
            
               $("div.main").append($info);
               console.log(response);
            },
            error: function(error, errorType, errorMsg ) {
                alert("error" + errorMsg);
            },
            data: {"postId": 1},
            beforeSend: function(){

            },
            complete: function() {
                // runs last
            }
        });

        // ------another method like a simple $ajax() GET -----------------------------
        // $.get(url, success);
    });
});
