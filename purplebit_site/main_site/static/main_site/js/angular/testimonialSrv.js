
purplebit.service("testimonialSrv", function() {
	

	// object
	this.Testimonial = function(text, author) {
		this.text = text;
		this.author = author;
	}

	// testimonial list
	this.testimonials  = [];

	// add new testimonial to list
	this.addTestimonial = function(text, author) {
		var testimon = new this.Testimonial(text, author);
		this.Testimonial.push(testimon);
	}

	// creating testimonials
	var fitblok = new this.Testimonial(
		'"I wanted to use the opportunity to say <strong>thank you!</strong> You guys are <strong>absolute rock stars</strong>. I am very fortunate to have found you and know that we wouldn&#8217;t have gotten to a launch without you. You are a <strong>pleasure to work with</strong>. Smart, responsible, responsive, thorough and creative. I am sure that there is a lot I don&#8217;t see in what you encounter on daily basis engineering the guts of the product and overcoming issues and bugs but <strong>I am sure you are doing impressive work because I see the final product</strong>."',
		'Fitblok’s CEO'
		)

	var 
})