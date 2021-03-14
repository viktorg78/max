function errorBoot(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
}

//функция обработки введения кода
function regBoot(data){
	if(data==true){
		$("#err").html("Здравствуйте.");
		$("#err").css("color", "#007a96");
		$("#pwd").val("");
		$("#email").val("");
		var url = "index";
		$(location).attr('href',url);
	}	
	else{
    	switch (data){
        	case "er1":
                $("#email").css("border-color", "red");
                $("#pwd").css("border-color", "red");               
           		$("#err").html('Все поля обязательны для заполнения!');
          		$("#err").css("color", "red");
				break;

			case "er2":
                $("#email").css("border-color", "red");
				$("#pwd").val("");
				$("#email").val("");
				$("#err").html('Не правельно введен E-mail');
          		$("#err").css("color", "red");
				break;

			case "er3":
				$("#pwd").css("border-color", "red");
				$("#err").html('Введите пароль!');
				$("#err").css("color", "red");
                break;

            case "er4":
				$("#email").css("border-color", "red");
				$("#pwd").val("");
				$("#err").html('Введите E-mail!');
				$("#err").css("color", "red");
				break; 

			case "er5":
				$("#email").css("border-color", "red");
				$("#pwd").css("border-color", "red");
				$("#email").val("");
				$("#pwd").val("");
				$("#err").html('Не верный логин или пароль!');
				$("#err").css("color", "red");
                break; 	
             
		}	
	}
}




$(document).ready(function(){
	// обработка введения коды
	$("#regData").bind("click", function(){
        var email1=$("#email").val();
        var pwd1=$("#pwd").val();
		$.ajax({
            url:"entrance2.php",
			type: "POST",
			data: ({email:email1, pwd:pwd1}),
			dataType: "html",
			beforeSend: errorBoot,
			success:regBoot
		});
	});
});	


