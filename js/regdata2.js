function errorBoot(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
}

//функция обработки введения кода
function regBoot(data){
	if(data==true){
		$("#err").html("Регистрация прошла успешно.");
		$("#err").css("color", "#007a96");
		$("#pwd1").val("");
		$("#pwd2").val("");
		$("#email").val("");
		var url = "index";
		$(location).attr('href',url);
	}	
	else{
    	switch (data){
        	case "er1":
                $("#email").css("border-color", "red");
                $("#pwd1").css("border-color", "red");
                $("#pwd2").css("border-color", "red");
                $("#SMScode").css("border-color", "red");                    
                $("#pwd1").val("");
                $("#pwd2").val("");
           		$("#err").html('Все поля обязательны для заполнения!');
          		$("#err").css("color", "red");
				break;

			case "er2":
				$("#email").css("border-color", "red");
				$("#pwd1").val("");
				$("#pwd2").val("");
				$("#email").val("");
				$("#err").html('Не правельно введен E-mail');
          		$("#err").css("color", "red");
				break;

			case "er3":
				$("#pwd1").css("border-color", "red");
				$("#pwd2").css("border-color", "red");
				$("#pwd1").val("");
				$("#pwd2").val("");
				$("#err").html('Пароли не совпалают!');
				$("#err").css("color", "red");
				break;
			case "er4":
				$("#pwd1").css("border-color", "red");
				$("#pwd2").css("border-color", "red");
				$("#pwd1").val("");
				$("#pwd2").val("");
				$("#err").html('Пароли пустые!');
				$("#err").css("color", "red");
				break;
			case "er5":
				$("#pwd1").css("border-color", "red");
				$("#pwd2").css("border-color", "red");
				$("#pwd1").val("");
				$("#pwd2").val("");
				$("#email").val("");
				$("#err").html('Такой адрес уже зарегистрирован!');
				$("#err").css("color", "red");
				break;
		}	
	}
}




$(document).ready(function(){
	// обработка введения коды
	$("#regData").bind("click", function(){
        var email1=$("#email").val();
        var pwd11=$("#pwd1").val();
        var pwd21=$("#pwd2").val();
		$.ajax({
			url:"regdata2.php",
			type: "POST",
			data: ({email:email1, pwd1:pwd11, pwd2:pwd21}),
			dataType: "html",
			beforeSend: errorBoot,
			success:regBoot
		});
	});
});	


