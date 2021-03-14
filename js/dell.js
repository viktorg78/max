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
}

//функция обработки введения кода
function regBoot(data){
	if(data==true){
		toggleDiv();
		location.href = "personal_area"; 
	}	
	else{
    	switch (data){
        	case "er1":
     	   		$("#code1").css("border-color", "red");
           		$("#code1").html("");
           		$("#err").html('Поле не может быть пустым!');
          		$("#err").css("color", "red");
                break;
            case "p":
                toggleDiv();
                location.href = "personal_area?p=1";
                break; 
            case "o":
                toggleDiv();
                location.href = "personal_area?p=0";
                break;             
            case "i":
                toggleDiv();
                location.href = "personal_area?p=2";
                break;       
			}
	}
//$("#err").html(data);
}

function dell(id_1, key_1, key2_1, p){
    $.ajax({
        url:"dell.php",
        type: "POST",
        data: ({id:id_1, key:key_1, key2:key2_1, p:p}),
        dataType: "html",
        beforeSend: errorBoot,
        success:regBoot
    });
}

function dell_izb(id_1, key_1, key2_1, p){
    $.ajax({
        url:"dell_izb.php",
        type: "POST",
        data: ({id:id_1, key:key_1, key2:key2_1, p:p}),
        dataType: "html",
        beforeSend: errorBoot,
        success:regBoot
    });
}

$('.dell').on('click', function(){
    let id =$(this).data('id');
    let key =$(this).data('key');
    let key2 =$(this).data('key2');
    let p =$(this).data('p');
    $("#mes").html("Удалить объявление?<br /><br /><button onclick=\"dell("+id+","+key+","+key2+","+p+");\">Да</button> <button onclick=\"toggleDiv();\">Нет</button>");
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

$('.dell_izb').on('click', function(){
    let id =$(this).data('id');
    let key =$(this).data('key');
    let key2 =$(this).data('key2');
    let p =$(this).data('p');
    $("#mes").html("Удалить объявление?<br /><br /><button onclick=\"dell_izb("+id+","+key+","+key2+","+p+");\">Да</button> <button onclick=\"toggleDiv();\">Нет</button>");
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



