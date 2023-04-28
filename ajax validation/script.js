$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		$.ajax({
			type: 'POST',
			url: 'validate.php',
			data: {name: name, email: email},
			success: function(response) {
				$('#result').html(response);
			}
		});
	});
});
