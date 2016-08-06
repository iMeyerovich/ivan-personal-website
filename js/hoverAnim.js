$(document).ready(function(){
	$("b").hide();

	$(function() {
		$('.github').hover(function() {
			$('#git').fadeOut(function(){
				$('#gitHidden').fadeIn(); 
			}); 
		}, function() { 
    		$('#gitHidden').fadeOut(function(){
    			$('#git').fadeIn();
    		}); 
		});
	});
});