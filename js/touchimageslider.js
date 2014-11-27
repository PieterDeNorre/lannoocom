	$('#intro.btn').click(function() {
		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#intro.fist_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.small_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.bubble_btn').css({'background-color':'rgba(0,0,0,0.1)'});

		$('#tech.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#finishing.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.1)'});


		$('#imageholder.fist').fadeOut('slow');
		$('#imageholder.touch').fadeIn('slow');
		$('#imageholder.bubble').fadeOut('slow');
		$('#imageholder.small').fadeOut('slow');
	});
	$('#intro.fist_btn').click(function() {
		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.fist_btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#intro.small_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.bubble_btn').css({'background-color':'rgba(0,0,0,0.1)'});

		$('#imageholder.fist').fadeIn('slow');
		$('#imageholder.touch').fadeOut('slow');
		$('#imageholder.bubble').fadeOut('slow');
		$('#imageholder.small').fadeOut('slow');
	});
	$('#intro.small_btn').click(function() {
		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.fist_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.small_btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#intro.bubble_btn').css({'background-color':'rgba(0,0,0,0.1)'});

		$('#imageholder.fist').fadeOut('slow');
		$('#imageholder.touch').fadeOut('slow');
		$('#imageholder.bubble').fadeOut('slow');
		$('#imageholder.small').fadeIn('slow');
	});
	$('#intro.bubble_btn').click(function() {
		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.fist_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.small_btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#intro.bubble_btn').css({'background-color':'rgba(0,0,0,0.9)'});

		$('#imageholder.fist').fadeOut('slow');
		$('#imageholder.touch').fadeOut('slow');
		$('#imageholder.bubble').fadeIn('slow');
		$('#imageholder.small').fadeOut('slow');
	});


