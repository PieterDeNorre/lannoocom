var navigationFn = {
    goToSection: function(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);
    }
}


$("#intro.btn").click(function(){
	navigationFn.goToSection('#container.1touch');
});

$("#tech.btn").click(function(){
	navigationFn.goToSection('#container.2tech');
});

$("#finishing.btn").click(function(){
	navigationFn.goToSection('#container.3finishing');
});
$("#quant.btn").click(function(){
	navigationFn.goToSection('#container.4quant');
});

