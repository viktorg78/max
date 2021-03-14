$('#fa_times').on('click', function(){
    $("#chatv").val("");
});

$('#fa_times2').on('click', function(){
    $("#chatv2").val("");
});

function errorBootHat(){
    // $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
}

//функция обработки введения кода
function regBootHat(data){
	var diolog=$("#dialjg").html(); 
	if(data==true){
		$("#mess_").load("hablon/chat_mess.php?mes="+diolog);
		// $("#err").html("======");
		$("#err").css("color", "#007a96");
		$("#chatv").val("");
	}	
	else{
    	switch (data){
        	case "er1":
				$("#chatv").css("border-color", "red");
     	   		$("#err").html('Поле сообщения, не может быть пустым!');
          		$("#err").css("color", "red");
				break;
			case "er2":
				$("#chatv2").css("border-color", "red");
				$("#err").html('Вы забыли выбрать диалог');
				$("#err").css("color", "red");
				break;					
		}
	}
}


	// обработка введения коды
	$("#fa_paper_plane").bind("click", function(){
		var mess=$("#chatv").val();
		var diolog=$("#dialjg").html();
		var key = $(this).data('key');
		var key2 = $(this).data('key2');
        $.ajax({
			url:"chat.php",
			type: "POST",
			data: ({mess:mess, diolog:diolog, key:key, key2:key2}),
			dataType: "html",
			beforeSend: errorBootHat,
			success:regBootHat
		});
	});		

