
$("button").on("click", function(){
    $("input#amount_1").css("display", "block");
    let quant =  $("input#quant_1").val();
    let rate = $("input#rate_1").val();
    $("input#amount_1").val(quant * rate );
});
