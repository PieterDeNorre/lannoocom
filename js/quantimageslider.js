	$('#quant.btn').click(function() {
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#quant.large_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.tiny_btn').css({'background-color':'rgba(0,0,0,0.1)'});

		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#tech.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#finishing.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.9)'});


		$('#imageholder.quantoveral').fadeIn('slow');
		$('#imageholder.large').fadeOut('slow');
		$('#imageholder.tiny').fadeOut('slow');
	});
	$('#quant.large_btn').click(function() {
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.large_btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#quant.tiny_btn').css({'background-color':'rgba(0,0,0,0.1)'});

		$('#imageholder.quantoveral').fadeOut('slow');
		$('#imageholder.large').fadeIn('slow');
		$('#imageholder.tiny').fadeOut('slow');
	});
	$('#quant.tiny_btn').click(function() {
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.large_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.tiny_btn').css({'background-color':'rgba(0,0,0,0.9)'});

		$('#imageholder.quantoveral').fadeOut('slow');
		$('#imageholder.large').fadeOut('slow');
		$('#imageholder.tiny').fadeIn('slow');
	});
