// обработка введения коды
function delDialogError(){
    $("#err").html('Обработка данных...');
	$("#err").css("color", "#007a96");
};


// это для обновление чата
function delDialogEnter(data){
   	if(data==true){
       	$("#err").html("Диалог удален.");
        $("#err").css("color", "#007a96");
        // $("#deldial").css("display", "none");
     //   $(dialogT).css("display", "none");
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

$(".fa-trash").bind("click", function(){
    var deldialog= $(this).data('deldialog');//id обявления
    var key = $(this).data('key');
    var key2 = $(this).data('key2');
    $("#deldial"+deldialog).css("display", "none");
    $.ajax({
		url:"deldialog.php",
		type: "POST",
		data: ({deldialog:deldialog, key:key, key2:key2}),
		dataType: "html",
		beforeSend: delDialogError,
		success:delDialogEnter
	});
});	