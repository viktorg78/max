function errorBoot_select_but(){
    $("#typTeh2").html('Загрузка данных...');
	$("#typTeh2").css("color", "#007a96");
};

function regBoot_select_but(data){
    $("#typTeh2").html();
    $("#typTeh2").html(data);
 
};
 $('#typTeh').on('change', function() {
    let a = this.value;
    //  alert(a);
    // $('#typTeh2').html();

    $.ajax({
        url:"select_but.php",
        type: "POST",
        data: ({a:a}),
        dataType: "html",
        beforeSend: errorBoot_select_but,
        success:regBoot_select_but
    });
  });

