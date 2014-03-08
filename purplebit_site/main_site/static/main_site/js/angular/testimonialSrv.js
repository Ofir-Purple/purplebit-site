
purplebit.service("testimonialSrv", function($sanitize) {
	

	// object
	this.Testimonial = function(text, author) {
		this.text = text;
		this.author = author;
	}

	// testimonial list
	this.testimonials  = [];

	// add new testimonial to list
	this.addTestimonial = function(testimon) {
		this.testimonials.push(testimon);
	}

	// creating testimonials
	var fitblok = new this.Testimonial(
		'"I wanted to use the opportunity to say <strong>thank you!</strong> You guys are <strong>absolute rock stars</strong>. I am very fortunate to have found you and know that we wouldn&#8217;t have gotten to a launch without you. You are a <strong>pleasure to work with</strong>. Smart, responsible, responsive, thorough and creative. I am sure that there is a lot I don&#8217;t see in what you encounter on daily basis engineering the guts of the product and overcoming issues and bugs but <strong>I am sure you are doing impressive work because I see the final product</strong>."',
		'- Fitblok’s CEO'
		)

	var desti = new this.Testimonial(
		'"Purple Bit were <strong>available and flexible</strong> with timing issues, and the whole logistic process was good. The team was <strong>very accommodating to our needs</strong> regarding timing, office hours, etc.<br /><br />The team came with an <strong>excellent approach and can-do attitude</strong>. It was a <strong>joy</strong> to work with them, as this is really not trivial for people who are paid hourly. This is one of the important reasons <strong>we&#8217;d want to work with Purple Bit again</strong>."',
		'- Imri Goldberg, CTO at Desti.com'
	)

	// adding testimonials
	this.addTestimonial(fitblok);
	this.addTestimonial(desti);
})