$('#search_m').on('submit', function(e){
    e.preventDefault();
    let $that = $(this),
            formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму
            formData.append('date_upl', new Date()); // добавляем данные, не относящиеся к форме
    $.ajax({
        url: $that.attr('action'),
        type: $that.attr('method'),
        contentType: false, // важно - убираем форматирование данных по умолчанию
        processData: false, // важно - убираем преобразование строк по умолчанию
        data: formData,
        dataType: "html",
        beforeSend: function(){
            $("#mes").html("<i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>");
            $("#mes").css("background-color", "#a1bfc4");
            $("#mes").css("padding", "10px 5px 10px 5px" );
            $("#mes").css("text-align", "center"); 
            $("#mes").css("border", "4px solid #007a96");
            $("#mes").css("border-radius", "12px");
            $("#mes").css("-webkit-border-radius", "12px"); 
            $("#mes").css("-moz-border-radius", "12px");
            $("#mes").css("-khtml-border-radius", "12px");
            $(".parent").css("width", "100%");
            $(".parent").css("height", "100%");
            $(".parent").css("position", "fixed");
            $(".parent").css("top", "0");
            $(".parent").css("left", "0");
            $(".parent").css("display", "flex");
            $(".parent").css("align-items", "center");
            $(".parent").css("align-content", "center");
            $(".parent").css("justify-content", "center");
            $(".parent").css("overflow", "auto");  
            $("#check5_v").css("opacity", "1"); 
            $("#check6_v").css("opacity", "1");           
            },
        error: function(req, text, error){
            $("#Search_n").html('ОШИБКА'+ text + ' | '+ error);
            $("#Search_n").css("color", "#007a96");
        },      
        success: function(data){
            switch (data){
                case "er1":                            
                    $("#Search_n").html('Выберете хоть чтонибудт!');
                    $("#Search_n").css("color", "red");
                    toggleDiv();
                    break; 
                case "er2":                            
                    $("#Search_n").html('Не коректные значения!');
                    $("#Search_n").css("color", "red");
                    toggleDiv();
                    break;                            
                default:
                    $("#Search_n").html(data);
                    $("#Search_n").css("color", "#007a96");
                    toggleDiv();
                    break;
            }        
                   
        }
    });
});

// let rr = $("select#search_m_region").val();
// alert(rr);

$( "#search_m_region" ).change(function() {
    let rr = $("select#search_m_region").val();
    // alert( "Выбран рерион "+rr );

   $.ajax({
		url:"search_s_oblast_div.php",
		type: "POST",
		data: ({rr:rr}),
		dataType: "html",
		beforeSend: function(){
            $("#mes").html("<i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>");
            $("#mes").css("background-color", "#a1bfc4");
            $("#mes").css("padding", "10px 5px 10px 5px" );
            $("#mes").css("text-align", "center"); 
            $("#mes").css("border", "4px solid #007a96");
            $("#mes").css("border-radius", "12px");
            $("#mes").css("-webkit-border-radius", "12px"); 
            $("#mes").css("-moz-border-radius", "12px");
            $("#mes").css("-khtml-border-radius", "12px");
            $(".parent").css("width", "100%");
            $(".parent").css("height", "100%");
            $(".parent").css("position", "fixed");
            $(".parent").css("top", "0");
            $(".parent").css("left", "0");
            $(".parent").css("display", "flex");
            $(".parent").css("align-items", "center");
            $(".parent").css("align-content", "center");
            $(".parent").css("justify-content", "center");
            $(".parent").css("overflow", "auto");                
            },
        error: function(req, text, error){
                $("#search_s_oblast_div").html('ОШИБКА'+ text + ' | '+ error);
                $("#search_s_oblast_div").css("color", "#007a96");
            },      
        success: function(data){
            switch (data){
                case "er1":                            
                    $("#search_s_oblast_div").html(""); 
                    $("#search_m_sity_div").html("");                   
                    toggleDiv();
                    break;                                    
                default:
                    $("#search_s_oblast_div").html(data);                
                    toggleDiv(); 
                    break;
            }        
                           
        }
	});   
});
    

   

