
// REPLACES TEXT
$("#btn_main").on("click", function(){
    $(".dope").text("This is new replacement text");
    $("#btn_main").val("Double Click Me");
});
$("#btn_main").on("dblclick", function(){
    $(".dope").text("First Click");
    $("#btn_main").val("Replace");
});

$("#btn_new").on("click", function(){
    $(".dope").html('<b class="cool"> Hey there this is HTML</b>');
});

// SAME ACTION USED TO CAPTURE TEXT
// $("#btn_main").on("click", function(){
//     alert($(".dope").text());
// });
