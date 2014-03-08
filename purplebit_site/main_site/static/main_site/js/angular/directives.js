// directives

// create url attribute to store the project's url
purplebit.directive('project-url', function() {
	return {
		restrict: "A",
		scope: {
			url: "@"
		}
	}
})


// project modal (pop-up window)
purplebit.directive('projects', function() {
	return {
		restrict: "E",
		scope: {

		},
		link: function(scope, element, attrs) {
			$(document).ready(function() {
				$('.project-item').on('click', function(e){

					var elem = $(this),
						title = elem.find('.project-title').text(),
						link = elem.attr('project-url'),
						descr = elem.find('.project-description').html(),
						slidesHtml = '<ul class="slides">',

						slides = elem.data('images').split(',');

					for (var i = 0; i < slides.length; ++i) {
						slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
					}
					
					slidesHtml = slidesHtml + '</ul>';
					

					$('#project-modal').on('show.bs.modal', function () {
						$(this).find('h1').text(title);
						if (link) {
							$(this).find('.btn').attr('href',link);
						} else {
							$(this).find('.btn').removeAttr('href');
						}
						$(this).find('.project-descr').html(descr);
						$(this).find('.image-wrapper').addClass('flexslider').html(slidesHtml);
						
						setTimeout(function(){
							$('.image-wrapper.flexslider').flexslider({
								slideshowSpeed: 3000,
								animation: 'slide',
								controlNav: false,
								start: function(){
									$('#project-modal .image-wrapper')
									.addClass('done')
									.prev('.loader').fadeOut();
								}
							});
						},1000);
					}).modal();
					
				});

				$('#project-modal').on('hidden.bs.modal', function () {
					$(this).find('.loader').show();
					$(this).find('.image-wrapper')
						.removeClass('flexslider')
						.removeClass('done')
						.html('')
						.flexslider('destroy');
				});


			});
		}
	}
});



// testimonial slider
purplebit.directive('slides', function() {
	return {
		restrict: "A",
		scope: {
			slideContainer: "@",
			slideList: "@"
		},
		link: function(scope, element, attrs) {

		$(document).ready(function() {
			$('#' + scope.slideContainer).addClass('flexslider');
			$('#' + scope.slideList).addClass('slides');

			$('#' + scope.slideContainer).flexslider({
				prevText: '<i class="icon-angle-left"></i>',
				nextText: '<i class="icon-angle-right"></i>',
				slideshowSpeed: 5000,
				useCSS: true,
				controlNav: false, 
				pauseOnAction: false, 
				pauseOnHover: true,
				smoothHeight: false
			});

	}); // ready

		}
	}
})

