function obab1(){
    $("#err").html('Обработка данных');
}
function content1(data){
    if (data == true){
        $("#proizvod").val("");
        $("#model").val("");
        $("#opis").val("");
        $("#stoimost").val("");
        $("#tel").val("");
        // $("#err").css("position", "absolute");
        // $("#err").css("z-index", "2");
        $("#err").html("Ваш товар добпален в корзину");
        $("#err").css("color", "#556A97");           	
    }
    else{
        switch(data){
            case "er1":
                $("#proizvod").css({"border" : "1px solid red"});
                $("#err").html("Все поля обязательны к заполнению!");
                $("#err").css("color", "red");
                
                break;
        }
    }
}
$(document).ready(function(){
	$("#regboot").bind("click", function(){
        var proizvod1=$("#proizvod").val();
        var typTeh1=$("#typTeh").val();
        var model1=$("#model").val();
        var opis1=$("#opis").val();
        var stoimost1=$("#stoimost").val();
        var otvet1=$("#otvet").val();
        var tel1=$("#tel").val();
        var telk_skr1;//="1";
        
              

		$.ajax({
			url:"announcement2.php",
            type: "POST",
            data: ({typTeh:typTeh1, proizvod:proizvod1, model:model1, opis:opis1, stoimost:stoimost1, otvet:otvet1, tel:tel1, telk_skr:telk_skr1, message_pri:message_pri1, site:site1, file:files}),
            dataType: "html",
			beforeSend: obab1,
			success:content1
        });
        
       
	});
});