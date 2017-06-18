
$(document).ready(function(){
  
$("#steps  li").css("color", "blue");
$(`#steps li:first, 
   #nested li:first, 
   #steps li:nth-child(3)`).css("color", "red");
// $("#nested li:first").css("color", "red")
});


// demonstrating a FILTER 'has'
$(function() {
    $("div:has(p)").css({"border": "3px solid red"});
})

// demonstrating a FILTER 'not'
$(function() {
    $("li:not(.important)").css({"border": "2px solid orange"});
})

// demonstrating using 'not' with 'has'
$(function() {
    $("div:not(:has(:header))").css({"background-color": "lightblue"});
})

// the *= comparetor gets part of a wor
$(function() {
    $("[id*='osing").css({"background-color": "pink"});
})

// the ~= comparetor gets an entire word
$(function() {
    $("[id~=nested-steps").css({"background-color": "yellow"});
})