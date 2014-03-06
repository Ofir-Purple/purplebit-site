// directives

purplebit.directive('projectView', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
				$(element).click(function() {
					// TODO: prevent default behavior

					title = element.find('.project-title').text(),
					link = element.attr('href'),
					descr = element.find('.project-description').html(),
					slidesHtml = '<ul class="slides">',
					slides = element.data('images').split(',');

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
			}
	}
})