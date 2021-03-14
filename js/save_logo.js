$('#save_logo').on('submit', function(e){
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
            },
        error: function(req, text, error){
            $("#err3").html('ОШИБКА'+ text + ' | '+ error);
            $("#err3").css("color", "#007a96");
        },      
        success: function(data){
            if(data==true){
                $that.replaceWith(data);
                let url = "personal_area?p=1";
                $(location).attr('href',url);
            }
            else{            
                switch (data){
                    case "er10":                            
                        $("#err3").html('Логотим слишком большой!');
                        $("#err3").css("color", "red");
                        toggleDiv();
                        break;                        
                    case "er9":                            
                        $("#err3").html('Вы не выбрали логотип');
                        $("#err3").css("color", "red");
                        toggleDiv();
                        break;                    
                    default:    
                        $("#err3").html('Объявление добавленно успешно!!!');
                        $("#err3").css("color", "#007a96");
                        location.href = "personal_area"; 
                        toggleDiv();
                        break;
                    }    
            }                
        }
    });
});
