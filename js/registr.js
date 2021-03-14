function errorBoot(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
}

//функция обработки введения кода
function regBoot(data){
	if(data==true){
		$("#code1").val("");
		$("#err").html("Код верен.");
		$("#err").css("color", "#007a96");
		$("#code1").css({"border": "2px solid #007a96"});
		var url = "regdata";
		$(location).attr('href',url);
	}	
	else{
    	switch (data){
        	case "er1":
     	   		$("#code1").css("border-color", "red");
           		$("#code1").html("");
           		$("#err").html('Поле не может быть пустым!');
          		$("#err").css("color", "red");
				break;
			}
	}
//$("#err").html(data);
}



$(document).ready(function(){
	// обработка введения коды
	$("#regBoot").bind("click", function(){
		var code1=$("#code1").val();
		$.ajax({
			url:"reg2.php",
			type: "POST",
			data: ({code:code1}),
			dataType: "html",
			beforeSend: errorBoot,
			success:regBoot
		});
	});
});	


