function chatResetError(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
};


// это для обновление чата
function chatResetEnter(data){
    var diolog=$("#dialjg").html(); 
    $("#fa_refresh_plane").css("display","inline");
	if(data==true){
        $("#mess_").load("hablon/chat_mess.php?mes="+diolog);
		 $("#err").html("");
		$("#err").css("color", "#007a96");
	}	
	else{
    	switch (data){
        	case "er2":
				$("#chatv2").css("border-color", "red");
				$("#err").html('Диалог не выбран');
				$("#err").css("color", "red");
				$("#mess_").val("");
				break;					
		}
	}
}

// выбор диалого с обновлением чата
$(".eappBoot").bind("click", function(){

    // вывод на экран модель
    var model= $(this).data('model');  
    var diolog = $(this).data('id');   
    $("#eapp").html(model);
    $("#dialjg").html(diolog);
    $.ajax({
        url:"chat2.php",
        type: "POST",
        data: ({diolog:diolog}),// по идентификатору вывести чат
        dataType: "html",
        beforeSend: chatResetError,
        success:chatResetEnter 
    });
});

// кнопку сделать обновление чата
$("#fa_refresh_plane").bind("click", function(){
    var diolog=$("#dialjg").html();    
    $.ajax({
        url:"chat2.php",
        type: "POST",
        data: ({diolog:diolog}),
        dataType: "html",
        beforeSend: chatResetError,
        success:chatResetEnter 
    });
});
