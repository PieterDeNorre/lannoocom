<div id="imageholder" class="fist">
	<div id="oneliner" class="fisttxt">
		<h1>Need more impact ?</h1>

		<h2 id="dmore" class="link">Discover more!</h2>
	</div>
</div>


<script type="text/javascript">
	// H2 LINK --------------------------------------------------------

	$("#dmore.link").click(function(){
		navigationFn.goToSection('#container.2tech');

		$('#intro.fist_btn').delay(400).fadeOut();
		$('#intro.fist_btn').delay(300).fadeOut();
		$('#intro.small_btn').delay(200).fadeOut();
		$('#intro.bubble_btn').delay(100).fadeOut();

		$('#tech.raised_btn').delay(100).fadeIn();
		$('#tech.water_btn').delay(200).fadeIn();
		$('#tech.white_btn').delay(300).fadeIn();
		$('#tech.textured_btn').delay(400).fadeIn();

		$('#finishing.foil_btn').delay(500).fadeOut();
		$('#finishing.crease_btn').delay(400).fadeOut();
		$('#finishing.bind_btn').delay(300).fadeOut();
		$('#finishing.laminate_btn').delay(200).fadeOut();
		$('#finishing.wireo_btn').delay(100).fadeOut();

		$('#quant.large_btn').delay(200).fadeOut();
		$('#quant.tiny_btn').delay(100).fadeOut();

		$('#intro.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#finishing.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#quant.btn').css({'background-color':'rgba(0,0,0,0.1)'});
		$('#tech.btn').css({'background-color':'rgba(0,0,0,0.9)'});
	});

</script>