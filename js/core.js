

window.onload = (event) => {

	new fullpage('#fullpage', {
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		onLeave: function( origin, destination, direction){


			console.info(origin.index, destination.index);
			if (origin.index >= 0) {

				$('body')
					.removeClass(`v${origin.index}`)
					.addClass(`v${destination.index}`);
				
			}
		}
	});

	fullpage_api.setAllowScrolling(true);
};

