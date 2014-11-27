<div id="imageholder" class="small">
	<div id="oneliner" class="smalltxt">
		<h1>Quit thinking small !</h1>
		<h2 id="dmore" class="link3">Digital is not about Quantities anymore.</h2>
		<h2 id="dmore" class="link2" >Check out our solutions for you.</h2>
	</div>
</div>

<script type="text/javascript">
	// H2 LINK --------------------------------------------------------
	$("#dmore.link2").click(function(){
		navigationFn.goToSection('#container.3finishing');

		$('#intro.fist_btn').delay(400).fadeOut();
		$('#intro.fist_btn').delay(300).fadeOut();
		$('#intro.small_btn').delay(200).fadeOut();
		$('#intro.bubble_btn').delay(100).fadeOut();

		$('#tech.raised_btn').delay(400).fadeOut();
		$('#tech.water_btn').delay(300).fadeOut();
		$('#tech.white_btn').delay(200).fadeOut();
		$('#tech.textured_btn').delay(100).fadeOut();

		$('#finishing.foil_btn').delay(100).fadeIn();
		$('#finishing.crease_btn').delay(200).fadeIn();
		$('#finishing.bind_btn').delay(300).fadeIn();
		$('#finishing.laminate_btn').delay(400).fadeIn();
		$('#finishing.wireo_btn').delay(500).fadeIn();

		$('#quant.large_btn').delay(200).fadeOut();
		$('#quant.tiny_btn').delay(100).fadeOut();

		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#finishing.btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#tech.btn').css({'background-color':'rgba(0,0,0,0.1)'});

	});
</script>

<script type="text/javascript">
	// H2 LINK --------------------------------------------------------
	$("#dmore.link3").click(function(){
		navigationFn.goToSection('#container.4quant');

		$('#intro.fist_btn').delay(400).fadeOut();
		$('#intro.fist_btn').delay(300).fadeOut();
		$('#intro.small_btn').delay(200).fadeOut();
		$('#intro.bubble_btn').delay(100).fadeOut();

		$('#tech.raised_btn').delay(400).fadeOut();
		$('#tech.water_btn').delay(300).fadeOut();
		$('#tech.white_btn').delay(200).fadeOut();
		$('#tech.textured_btn').delay(100).fadeOut();

		$('#finishing.foil_btn').delay(500).fadeOut();
		$('#finishing.crease_btn').delay(500).fadeOut();
		$('#finishing.bind_btn').delay(300).fadeOut();
		$('#finishing.laminate_btn').delay(200).fadeOut();
		$('#finishing.wireo_btn').delay(100).fadeOut();

		$('#quant.large_btn').delay(100).fadeIn();
		$('#quant.tiny_btn').delay(200).fadeIn();

		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#finishing.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.9)'});
		$('#tech.btn').css({'background-color':'rgba(0,0,0,0.1)'});

	});
</script>
