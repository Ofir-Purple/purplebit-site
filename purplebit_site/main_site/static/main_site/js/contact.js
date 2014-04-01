$(document).ready(function() {
	$('#contact-form').submit(function() {
		var buttonWidth=$('#contact-form button').width();
		
		var button = $('#contact-form button')
			buttonCopy = button.data('regular-message') || button.html(),
			errorMessage = button.data('error-message'),
			sendingMessage = button.data('sending-message'),
			okMessage = button.data('ok-message'),
			serverError = button.data('server-error'),
			hasError = false;
		
		button.width(buttonWidth);
		button.data('regular-message', buttonCopy);
		$('#contact-form .error-message').remove();
		
		$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parent().append('<span class="error-message">'+errorText+'.</span>');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parent().append('<span class="error-message">'+invalidEmail+'.</span>');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});
		
		if(hasError) {
			button.html('<i class="icon-remove"></i>'+errorMessage);
			setTimeout(function(){
				button.html(buttonCopy);
				button.width('auto');
			},2000);
		}
		else {
			button.html('<i class="icon-refresh icon-spin"></i>'+sendingMessage);
			
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput)
				.done(function(data){
					button.html('<i class="icon-ok"></i>'+okMessage);
					setTimeout(function(){
						button.html(buttonCopy);
						button.width('auto');
					},5000);
					
				})
				.fail(function(data) {
					button.html('<i class="icon-remove"></i>'+serverError);
				});
		}
		
		return false;	
	});
});