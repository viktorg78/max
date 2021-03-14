$(function(){
	$('#add_field').on('click', function(){
		$('input[type=file]:first')
			.clone()
			.val('')
			.add('<br />')
			.appendTo('#additional_fields');
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
			dataType: 'json',
			success: function(json){
				if(json){
					$that.replaceWith(json);
				}
			}
		});
	});
});