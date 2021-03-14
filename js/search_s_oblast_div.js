$("#search_s_oblast").change(function() {
    let rr = $("select#search_s_oblast").val();
    // alert( "Выбранa область "+rr );
    $.ajax({
		url:"search_m_sity_div.php",
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
                $("#search_m_sity_div").html('ОШИБКА'+ text + ' | '+ error);
                $("#search_m_sity_div").css("color", "#007a96");
            },      
        success: function(data){
                $("#search_m_sity_div").html(data);                
                toggleDiv();                  
            }
	});   

});