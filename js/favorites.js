function favoritesError(){
    $("#favorites_m").html('Обработка данных...');
	$("#favorites_m").css("color", "#007a96"); 
};



function favoritesEnter(data){
    // location.href = "personal_area"; 
  	// if(data==true){

        $("#favorites_m").html('<button style="background-color: #B22222; border: 2px solid #B22222; color: #fff; cursor:default;">Объявление добавленно в избранное</button>');
	// }	
	// else{
    // 	switch (data){
    //     	case "er1":
	// 			$("#chatv2").css("border-color", "red");
	// 			$("#err").html('Диалог не выбран');
	// 			$("#err").css("color", "red");
	// 			$("#mess_").val("");
	// 			break;					
	// 	}
	// }
}


// обработка введения коды
$("#favorites").bind("click", function(){
    var id_mess= $(this).data('c');//id обявления
    var key = $(this).data('key');
	var key2 = $(this).data('key2');
    $.ajax({
		url:"favorites.php",
		type: "POST",
		data: ({id_mess:id_mess, key:key, key2:key2}),
		dataType: "html",
		beforeSend: favoritesError,
		success:favoritesEnter
	});
});		
