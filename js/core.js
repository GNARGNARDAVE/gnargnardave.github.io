

window.onload = (event) => {

	new fullpage('#fullpage', {
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		onLeave: function( origin, destination, direction){
			if (origin.index >= 0) {
				$('body')
					.removeClass(`v${origin.index}`)
					.addClass(`v${destination.index}`);
				
			}
		}
	});

	fullpage_api.setAllowScrolling(false);
};

