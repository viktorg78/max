 // функция скрытия сообщения
//  function toggleDiv() {
// 	$(".parent").css("display", "none");
// }

$('.edit').on('click', function(){
    var id =$(this).data('id');
    var key =$(this).data('key');
    var key2 =$(this).data('key2');
    $("#mes").html("<table align=\"center\"><tr><td colspan=\"2\">Редактировать объявление?<br /><br /><td></tr><tr><td><form action=\"edit.php\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"hidden\" name=\"id\" value="+id+"><input type=\"hidden\" name=\"key\" value="+key+"><input type=\"hidden\" name=\"key2\" value="+key2+"><input type=\"submit\" value=\"Дa\"> </form></td><td><button onclick=\"toggleDiv();\">Нет</button></td></tr></table>");
    // <span class="sr-only">Loading...</span>');
    $("#mes").css("background-color", "#a1bfc4");
    $("#mes").css("padding", "10px 5px 10px 5px" );
    $("#mes").css("text-align", "center"); 
    $("#mes").css("border", "4px solid #007a96");
    $("#mes").css("border-radius", "12px");
    $("#mes").css("-webkit-border-radius", "12px");
    $("#mes").css("-moz-border-radius", "12px");
    $("#mes").css("-khtml-border-radius", "12px");
    $(".parent").css("width", "100%");
    $(".parent").css("height", "100%");
    $(".parent").css("position", "fixed");
    $(".parent").css("top", "0");
    $(".parent").css("left", "0");
    $(".parent").css("display", "flex");
    $(".parent").css("align-items", "center");
    $(".parent").css("align-content", "center");
    $(".parent").css("justify-content", "center");
    $(".parent").css("overflow", "auto");  
});

$('.edit_arend').on('click', function(){
    var id =$(this).data('id');
    var key =$(this).data('key');
    var key2 =$(this).data('key2');
    $("#mes").html("<table align=\"center\"><tr><td colspan=\"2\">Редактировать объявление?<br /><br /><td></tr><tr><td><form action=\"edit_arend.php\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"hidden\" name=\"id\" value="+id+"><input type=\"hidden\" name=\"key\" value="+key+"><input type=\"hidden\" name=\"key2\" value="+key2+"><input type=\"submit\" value=\"Дa\"> </form></td><td><button onclick=\"toggleDiv();\">Нет</button></td></tr></table>");
    // <span class="sr-only">Loading...</span>');
    $("#mes").css("background-color", "#a1bfc4");
    $("#mes").css("padding", "10px 5px 10px 5px" );
    $("#mes").css("text-align", "center"); 
    $("#mes").css("border", "4px solid #007a96");
    $("#mes").css("border-radius", "12px");
    $("#mes").css("-webkit-border-radius", "12px");
    $("#mes").css("-moz-border-radius", "12px");
    $("#mes").css("-khtml-border-radius", "12px");
    $(".parent").css("width", "100%");
    $(".parent").css("height", "100%");
    $(".parent").css("position", "fixed");
    $(".parent").css("top", "0");
    $(".parent").css("left", "0");
    $(".parent").css("display", "flex");
    $(".parent").css("align-items", "center");
    $(".parent").css("align-content", "center");
    $(".parent").css("justify-content", "center");
    $(".parent").css("overflow", "auto");  
});

