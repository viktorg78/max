 // функция скрытия сообщения
 function toggleDiv() {
	$(".parent").css("display", "none");
}
function errorBoot(){
    $("#mes").html("<i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>");
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
};

function regBoot(data){
    toggleDiv();
    switch (data){
        case "1":
            $("#foto_1").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break;
        case "2":
            $("#foto_2").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break; 
        case "3":
            $("#foto_3").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break; 
        case "4":
            $("#foto_4").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break; 
        case "5":
            $("#foto_5").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break;
        case "6":
            $("#foto_6").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break;
        case "7":
            $("#foto_7").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break;
        case "8":
            $("#foto_8").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break; 
        case "9":
            $("#foto_9").html("<div class=\"fileform\"><div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\"><div id=\"fileformlabel1\"></div><div class=\"selectbutton\">Обзор</div><input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/></div></div>"); 
            break;
    }        


    
    
};

$('.fa-trash').on('click', function(){    
    var code1=$(this).data('id');
    var code2=$(this).data('n');
    var key1=$(this).data('key');
    var key2=$(this).data('key2');
    $.ajax({
        url:"edit2.php",
        type: "POST",
        data: ({code:code1, code2:code2, key1:key1, key2:key2}),
        dataType: "html",
        beforeSend: errorBoot,
        success:regBoot
    });
});