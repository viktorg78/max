function show_tell_error(){
    $("#show_tell_err").html('Загрузка данных...');	
}

//функция обработки введения кода
function show_tell_reg(data){
		$("#show_tell_err").html(data);
}
$(document).ready(function(){
	// обработка введения коды
	$("#show_tell").bind("click", function(){
		let code1=$(this).data('id');
		// let key1;
		// key1= $(this).data('key1');
		// let key2;
		// key2 = $(this).data('key2');
		// if (key1 === '')  key1=0;
		// if (key2 === '')  key2=0;
		
		$.ajax({
			url:"show_tell.php",
			type: "POST",
			data: ({code:code1/*, key1:key1, key2:key2*/}),
			dataType: "html",
			beforeSend: show_tell_error,
			success:show_tell_reg
		});
	});
});	
