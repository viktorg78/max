$("#check5").click(function(){   
    // аренда 
    let $c1=$('#check1').is(':checked');

    // продажа
    let $c2=$('#check2').is(':checked');

    // цена от
    let $c4=$('#search_m_name1').val();

    // цена до
    let $c5=$('#search_m_name2').val();

    // тип техники
    let $c6=$('#search_m_typTeh').val();

    // округ
    let $c7=$('#search_m_region').val();

    // область
    let $c8=$('#search_s_oblast').val();

    // город
    let $c9=$('#search_m_sity').val();

    // частные
    let $c10=$('#check5').is(':checked');

    // организации
    let $c11=$('#check6').is(':checked');   
     
    if ($c1) $c1="on"
        else $c1=""
    if ($c2) $c2="on"
        else $c2=""

    if ($c11) $c11="on"
        else $c11=""
    if ($c10) $c10="on"
        else $c10=""    
    // alert($c1); 
    $.ajax({
        url:"search_m.php",
        type: "POST",
        data: ({search_m_1:$c1, search_m_2:$c2, search_m_3:$c10, search_m_4:$c11, search_m_typTeh:$c6, search_m_name1:$c4, search_m_name2:$c5, search_m_region:$c7, search_s_oblast:$c8, search_m_sity:$c9}),
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

$("#check6").click(function(){   
    // аренда 
    let $c1=$('#check1').is(':checked');

    // продажа
    let $c2=$('#check2').is(':checked');

    // цена от
    let $c4=$('#search_m_name1').val();

    // цена до
    let $c5=$('#search_m_name2').val();

    // тип техники
    let $c6=$('#search_m_typTeh').val();

    // округ
    let $c7=$('#search_m_region').val();

    // область
    let $c8=$('#search_s_oblast').val();

    // город
    let $c9=$('#search_m_sity').val();

    // частные
    let $c10=$('#check5').is(':checked');

    // организации
    let $c11=$('#check6').is(':checked');   
     
    if ($c1) $c1="on"
        else $c1=""
    if ($c2) $c2="on"
        else $c2=""

    if ($c11) $c11="on"
        else $c11=""
    if ($c10) $c10="on"
        else $c10=""    
    // alert($c1); 
    $.ajax({
        url:"search_m.php",
        type: "POST",
        data: ({search_m_1:$c1, search_m_2:$c2, search_m_3:$c10, search_m_4:$c11, search_m_typTeh:$c6, search_m_name1:$c4, search_m_name2:$c5, search_m_region:$c7, search_s_oblast:$c8, search_m_sity:$c9}),
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
