// функция скрытия сообщения
function toggleDiv() {
    $(".parent").css("display", "none");
}
$(function(){
    $('#add_field').on('click', function(){
        $(".fileform:last").clone().val('').appendTo("#additional_fields");     
        var $div = $('div[id^="fileformlabel"]:last');
        var $div2 = $('input[type=file]:last');
        var $div3 = $('div[id^="faf"]:last');
        var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;
        $div.each(function (){
            $(this).attr('id', 'fileformlabel'+num).text('');            
        });
        $div2.each(function (){
            $(this).attr('onchange', 'getName'+num+'(this.value)');
        });
        $div3.each(function (){
            $(this).attr('id', 'faf'+num);            
        });
        if(num >= 9){
            $('#add_field').detach();
        }; 
    });
    
    $('#kontrogent').on('click', function(){
        var $sel = $("#kontrogent :selected").val();
         switch ($sel){
            case '1':
                $(".fiz").hide();
                $(".org").show();  
                $("input[name='name1']").val(""); 
                $("input[name='name2']").val(""); 
                $("input[name='name3']").val("");                 
                break; 
            case '0':
                $(".org").hide();   
                $(".fiz").show();   
                $("input[name='name4']").val("");         
                break;
        }        
    });

 

	$('#my_form').on('submit', function(e){
		e.preventDefault();
		var $that = $(this),
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
                // <span class="sr-only">Loading...</span>');
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
                // $("#err").html('Обработка данных...');
	            // $("#err").css("color", "#007a96");
            },
            error: function(req, text, error){
                $("#err").html('ОШИБКА'+ text + ' | '+ error);
	            $("#err").css("color", "#007a96");
            },
            
			// success: function(json){
			// 	if(json){
			// 		$that.replaceWith(json);
            //     }
            success: function(data){
                if(data==true){
                    $that.replaceWith(data);
                    var url = "personal_area?p=1";
		            $(location).attr('href',url);
                }
                else{            
                    switch (data){
                        case "er14":                            
                            $("#proizvod").css("border-color", "red");
                            $("#proizvod").html("");
                            $("#err").html('Поле ПРИЗВОДИТЕЛЬ, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;                        
                        case "er15":                            
                            $("#model").css("border-color", "red");
                            $("#model").html("");
                            $("#err").html('Поле МОДЕЛЬ, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er12":                            
                            $("#name1").css("border-color", "red");
                            $("#name1").html("");
                            $("#err").html('Поле имя, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er13":
                            $("#name4").css("border-color", "red");
                            $("#name4").html("");
                            $("#err").html('Поле организация, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er1":
                            $("#opis").css("border-color", "red");
                            $("#opis").html("");
                            $("#err").html('Поле описание, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;                          
                        case "er2":
                            $("#telk").css("border-color", "red");
                            $("#telk").html("");
                            $("#err").html('Поле телефон, не может быть пустым!');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er3":
                            $("#faf1").css("border-color", "red");
                            $("#err").html('Фото 1, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er4":
                            $("#faf2").css("border-color", "red");
                            $("#err").html('Фото 2, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er5":
                            $("#faf3").css("border-color", "red");
                            $("#err").html('Фото 3, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er6":
                            $("#faf4").css("border-color", "red");
                            $("#err").html('Фото 4, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "er7":
                            $("#faf5").css("border-color", "red");
                            $("#err").html('Фото 5, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;  
                        case "er8":
                            $("#faf6").css("border-color", "red");
                            $("#err").html('Фото 6, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break; 
                        case "er9":
                            $("#faf7").css("border-color", "red");
                            $("#err").html('Фото 7, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;  
                        case "er10":
                            $("#faf8").css("border-color", "red");
                            $("#err").html('Фото 8, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break; 
                        case "er11":
                            $("#faf9").css("border-color", "red");
                            $("#err").html('Фото 9, больше 1Мб');
                            $("#err").css("color", "red");
                            toggleDiv();
                            break;
                        case "p":    
                            $("#err").html('Объявление добавленно успешно!!!');
                            $("#err").css("color", "#007a96");
                            location.href = "personal_area?p=1"; 
                            toggleDiv();
                            break; 
                        case "o":    
                            $("#err").html('Объявление добавленно успешно!!!');
                            $("#err").css("color", "#007a96");
                            location.href = "personal_area?p=0"; 
                            toggleDiv();
                            break;       
                        default:    
                            $("#err").html('Объявление добавленно успешно!!!');
                            $("#err").css("color", "#007a96");
                            location.href = "personal_area"; 
                            toggleDiv();
                            break;
                        }    
                }                
            }//,
            // complete: function(){
            //     $("#err").html('Объявление добавленно успешно!!!');
            //     $("#err").css("color", "#007a96");
            //     location.href = "personal_area";
            // }
		});
	});
});

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel1");
    uploaded.innerHTML = filename;
}
function getName2 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel2");
    uploaded.innerHTML = filename;
}

function getName3 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel3");
    uploaded.innerHTML = filename;
}

function getName4 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel4");
    uploaded.innerHTML = filename;
}

function getName5 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel5");
    uploaded.innerHTML = filename;
}

function getName6 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel6");
    uploaded.innerHTML = filename;
}

function getName7 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel7");
    uploaded.innerHTML = filename;
}

function getName8 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel8");
    uploaded.innerHTML = filename;
}

function getName9 (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel9");
    uploaded.innerHTML = filename;
}

// $('#my_form').on('submit', function(e){
//     e.preventDefault();
//     var $that = $(this),
//             formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму
//             formData.append('date_upl', new Date()); // добавляем данные, не относящиеся к форме
//     $.ajax({
//         url: $that.attr('action'),
//         type: $that.attr('method'),
//         contentType: false, // важно - убираем форматирование данных по умолчанию
//         processData: false, // важно - убираем преобразование строк по умолчанию
//         data: formData,
//         dataType: 'json',
//         success: function(json){
//             if(json){
//                 $that.replaceWith(json);
//             }
//         }
//     });
// });
