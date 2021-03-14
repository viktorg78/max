function chat_messError(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
};


// это для обновление чата
function chat_messEnter(data){
    location.href = "personal_area"; 
  	if(data==true){
       	// $("#err").html("Код верен.");
		$("#err").css("color", "#007a96");
	}	
	else{
    	switch (data){
        	case "er1":
				$("#chatv2").css("border-color", "red");
				$("#err").html('Диалог не выбран');
				$("#err").css("color", "red");
				$("#mess_").val("");
				break;					
		}
	}
}


// обработка введения коды
$("#hat").bind("click", function(){
    var id_mess= $(this).data('c');//id обявления
    var key = $(this).data('key');
	var key2 = $(this).data('key2');
    $.ajax({
		url:"chat_mess_.php",
		type: "POST",
		data: ({id_mess:id_mess, key:key, key2:key2}),
		dataType: "html",
		beforeSend: chat_messError,
		success:chat_messEnter
	});
});		
