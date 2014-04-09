"use strict";

angular.module('purplebit').service('projectDetailsSrv', function($sanitize, STATIC_URL) {

		// function append static url for each data image
		var appendStaticUrl = function(dataImages) {
			// if no images supplied, return an empty string
			if ( (dataImages === '') || (dataImages === undefined) ) { return ''; }

			// append to each image static url
			for (var i = 0; i < dataImages.length; i += 1) {
				dataImages[i] = STATIC_URL + dataImages[i];
			}
			return dataImages;
		};

		// project object
		this.Project = function(title, subtitle, displayPopup, desc, technologies, testimonial, link, thumb, logo, projectTags, dataImages) {
			this.projectId = 0;
			this.title = title;
			this.subTitle = subtitle;
            this.displayPopup = displayPopup;
			this.desc = desc;
			this.technologies = technologies;
			this.testimonial = testimonial;
			this.url = link;
			this.thumb = thumb === '' ? thumb : thumb;
			this.logo = logo === '' ? 'main_site/img/logo.png' : logo; // by default load compaty logo
			this.projectTags = projectTags;
			this.dataImages = appendStaticUrl(dataImages);
		};

		// project storage
		this.projectStorage = [];

		// add new project
		this.addProject = function(proj) {
			this.projectStorage.push(proj);

			// reallocate id for each project
			this.reAllocateId();
		};

		// reallocates id's 
		this.reAllocateId = function() {
			for (var i = 0; i < this.projectStorage.length; i +=1 ) {
				this.projectStorage[i].projectId = i;
			}
		};

		this.addProject(new this.Project(
			'Fitblok',
			'A marketplace for trainers and trainees >',
            true,
			'<p>Fitblok is a <strong>Single Page Web-Application</strong> and an <strong>iPad</strong> application that delivers video lessons from trainers to trainees.</p><p>Fitblok provides users with a gym-like experience and enables fitness trainers to develop their own brand and followers within the application. This vision was drilled-down by Purple Bit into technical details, through all the technical decisions and finally into a working, operational product. The application offers features such as managing the trainers&#8217; trainee community and scheduling <strong>video streaming</strong> training sessions online. In addition, the application offers a wide variety of training styles with an intuitive search mechanism and <strong>reputation system</strong> to back it up. Finally, all <strong>billing and accounting</strong> is done through the application.</p><p>Fitblok&#8217;s <strong>RESTful</strong> backend is developed using <strong>Django</strong>, the videos are streamed using <strong>Wowza</strong> video servers over <strong>Amazon EC2</strong> and the front-end itself is developed using <strong>AngularJS</strong>.</p>',
			'<p>Django, TastyPie, Wowza, FFMPEG, AngularJS, Heroku, Amazon S3, Amazon EC2, Redis, Stripe, Facebook SDK, PhantomJS, Celery, LESS.</p>',
			'<p>"I wanted to use the opportunity to say <strong>thank you!</strong> You guys are <strong>absolute rock stars</strong>. I am very fortunate to have found you and know that we wouldn&#8217;t have gotten to a launch without you. You are a <strong>pleasure to work with</strong>. Smart, responsible, responsive, thorough and creative. I am sure that there is a lot I don&#8217;t see in what you encounter on daily basis engineering the guts of the product and overcoming issues and bugs but <strong>I am sure you are doing impressive work because I see the final product</strong>." - Fitblok’s CEO</p>',
			'https://www.fitblok.com',
			'main_site/img/projects/fitblok-thumb-350-230.png',
			'main_site/img/projects/fitblok-logo.png',
			'backend front-end architecture',
			['main_site/img/projects/fitblok-540-310.jpg', 
			'main_site/img/projects/fitblok-search-540-310.jpg', 
			'main_site/img/projects/fitblok-session-540-310.jpg',
			'main_site/img/projects/fitblok-profile-540-310.jpg']
        ));

		// projects (objects)
		this.addProject(new this.Project(
			'SAP',
			'Custom-built internal tool >',
            true,
			'<p>SAP approached us about an internal project for easing several development processes.</p><p>For this project, Purple Bit used its Django skills to build a custom web portal for connecting to various devices remotely.</p>',
			'<p>Python, Django, Perl, Applescript, VNC.</p>',
			'',
			'',
			'main_site/img/projects/sap-thumb-350-230.jpg',
			'main_site/img/projects/sap-logo-200-200.jpg',
			'backend architecture',
			['main_site/img/projects/sap-540-310.png']
        ));

		this.addProject(new this.Project(
			'Autodesk',
			'B2C Consumer site >',
            true,
			'<p>Autodesk required a new, consumer-facing web portal.</p><p>Autodesk retained Purple Bit for our expertise with building complex client-side Single-page Applications.</p><p>In addition to building the SPA, Purple Bit took an active part in helping architect and build the REST-api on which the SPA is built.</p>',
			'<p>Angular.js, Yeoman, Restangular, Amazon AWS (EC2, S3), Scala, REST</p>',
			'',
			'',
			'main_site/img/projects/autodesk-thumb-350-230.png',
			'main_site/img/projects/autodesk-logo-333-200.png',
			'architecture backend front-end',
			['main_site/img/projects/autodesk-540-310.png']
        ));

		this.addProject(new this.Project(
			'DBMotion',
			'Helping build an internal Python team >',
            true,
			'<p>DBMotion, a company that builds Healthcare Interoperability platforms, began using Python/Django as part of their integration solution.</p><p>As experts in Python/Django, Purple Bit helped train the team and provided architectural insight into building the new product.</p><p>Our architectural work involved planning the database store for various pieces of data required for the application, as well as performing research and gaining a deep understanding of the abilities of Django\'s Admin interface in dealing with various specialised product requirements.</p>',
			'<p>Python, Django, SQL Server.</p>',
			'',
			'',
			'main_site/img/projects/dbmotion-logo.png',
			'main_site/img/projects/dbmotion-logo.png',
			'backend architecture training',
			['main_site/img/projects/dbmotion-logo.png']
        ));

		this.addProject(new this.Project(
			'Allscripts',
			'Allscripts >',
            true,
			'<p>Continuing the work Purple Bit did at DBMotion in helping train an internal Python/Django team, Purple Bit helped the continuing development effort at Allscripts.</p><p>The project invovled heavy Django Admin customisation, in order to build an installation configuration and deployment tool.</p>',
			'<p>Django, Django Administration Panel, HTML/CSS/JS</p>',
			'',
			'https://www.allscripts.com/',
			'main_site/img/projects/allscripts-thumb-350-230.jpg',
			'main_site/img/projects/allscripts-logo-300-65.jpg',
			'backend',
			['main_site/img/projects/allscripts-540-310.png']
        ));


		
		this.addProject(new this.Project(
			'AlmaLinks',
			'AlmaLinks CRM >',
            true,
			'<p class="clearfix">AlmaLinks is a nonprofit organization that strengthens the global Jewish community and its connection to Israel by forging relationships between young professionals and successful executives. Purple bit worked closely with AlmaLinks to build a CRM system to support AlmaLinks&#8217; internal processes including acceptance procedures of new members, as well as routine check ups on members&#8217; performance and satisfaction. These automated processes were tailor made to fit the existing methods of the organization.</p>',
			'<p>Django, Heroku, Amazon S3, Bootstrap, jQuery, LESS, LinkedIn API.</p>',
			'',
			'http://almalinks.org/',
			'main_site/img/projects/almalinks-thumb-350-230.jpg',
			'main_site/img/projects/almalinks-logo-small.jpg',
			'front-end backend',
			['main_site/img/projects/almalinks-540-310.jpg']
        ));

		this.addProject(new this.Project(
			'ironSource',
			'Internal Management System >',
            true,
			'<p>ironSource employs its technological skills to develop exceptional solutions for digital distribution, ensuring that content creators prosper &amp; enrich our world. ironSource worked with Purple Bit to execute a project that was outside ironSource&#8217;s core business. As such ironSource developers could focus on the areas they know best and Purple Bit could supply ironSource with a fast turn-key solution saving both developers and management time for ironSource.</p>',
			'<p>Django, Python, Aamazon EC2, Celery.</p>',
			'',
			'http://ironsrc.com',
			'main_site/img/projects/ironsource-thumb-350-230.jpg',
			'main_site/img/projects/ironsource-logo-350-230.jpg',
			'backend front-end',
			['main_site/img/projects/ironsource-540-310.png']
        ));

        this.addProject(new this.Project(
			'Desti',
			'Server Backend & More >',
            true,
			'<p>In the technological world, core in-house programmers sometimes have to take on peripheral yet vital tasks, which use up precious time throughout the project.  In these cases, outsourcing a few tasks can make the difference between reaching the goal on time or not.</p><p>Desti.com hired us at Purple Bit in order to take charge of some of these tasks, and thus to help them reach a crucial deadline ontime. Our team quickly got things under control, from building a landing page for the company, through setting up the server backup solutions and up to getting the server infrastructure to production level.</p>',
			'<p>AWS, Python/Django, HTML5, JavaScript, CSS3/LESS, Munin, Monit, Boto, Fabric, Linux Server Administration, shell scripting.</p>',
			'<p>"Purple Bit were <strong>available and flexible</strong> with timing issues, and the whole logistic process was good. The team was <strong>very accommodating to our needs</strong> regarding timing, office hours, etc.</p><p>The team came with an <strong>excellent approach and can-do attitude</strong>. It was a <strong>joy</strong> to work with them, as this is really not trivial for people who are paid hourly. This is one of the important reasons <strong>we&#8217;d want to work with Purple Bit again</strong>." – Imri Goldberg, CTO at Desti.com</p>',
			'http://www.desti.com',
			'main_site/img/projects/desti-thumb-350-230.png',
			'main_site/img/projects/desti-logo-350-230.png',
			'backend front-end',
            ['main_site/img/projects/desti-website-540-310.jpg',
                'main_site/img/projects/desti-3-540-310.jpg',
            'main_site/img/projects/desti-1-540-310.jpg']
        ));
		
		this.addProject(new this.Project(
			'Toys Alive',
			'Toys Alive >',
            true,
			'<p>Toys Alive, a developer of smart toys, hired Purple Bit to help rebuild their internal sales systems.</p><p>The work we did for Toys Alive involved linking up with Salesforce and internal Excels, which were the systems in use by the sales staff at the time, and processing them to create a consumer and business-user facing website.</p>',
			'<p>Python, Django, Excel processing, Salesforce integration, HTML/CSS/JS.</p>',
			'',
			'http://www.toysalive.com/',
			'main_site/img/projects/toysalive-thumb-350-230.png',
			'main_site/img/projects/toysalive-logo-300-130.png',
			'backend front-end',
			['main_site/img/projects/toysalive-540-310.png']
		));

		this.addProject(new this.Project(
			'$ocial',
			'$ocial >',
            true,
			'<p>$ocial, a startup that connects advertisers to celebrities for a unique advertising opportunity, contracted Purple Bit to help develop their client-facing admin interface, an Angular.js applications.</p><p>Purple Bit\'s experience with developing Django REST Api servers consumed by Restangular allowed quick building and factoring of the application.</p><p>In addition to the front-end components, Purple Bit helped re-architect the server-side makeup of $ocial\'s service.</p>',
			'<p>Python, Django, REST Api, Angular.js, django-rest-framework, Restangular.</p>',
			'',
			'http://www.dollarsocial.com/',
			'main_site/img/projects/social-thumb-350-230.png',
			'main_site/img/projects/social-logo-165-49.png',
			'backend front-end architecture',
			['main_site/img/projects/social-540-310.png']
		));

		this.addProject(new this.Project(
			'Chatty',
			'A chat widget for any site >',
            true,
			'<p>Many website owners find it challenging to increase the average time people spend on site (and in direct relation, their income from advertising). Creating a chat system for online users is an effective way to do so.</p><p>Our main challenge when approaching the Chattybar project was how to create a complex and adaptable chat system, with simple integration.</p><p>The result was a complex backend system chat-room-widget, which works well with any browser and any resolution, added to any website using a single line of code.</p><p>Chattybar is able to support thousands of simultaneous users. On the other hand, the widget enjoys an intuitive User Interface that blends well with the look and feel of different websites.</p>',
			'<p>JavaScript, jQuery, Python, Django, Amazon S3, Facebook API, MySQL.</p>',
			'',
			'http://www.chattybar.com/',
			'main_site/img/projects/chatty-thumb-350-230.png',
			'main_site/img/projects/chatty-logo.png',
			'backend front-end architecture',
			['main_site/img/projects/chatty-540-310.jpg']
        ));

		this.addProject(new this.Project(
			'Combitel',
			'Combitel >',
            false,
			'<p></p>',
			'<p>Django</p>',
			'',
			'https://www.combitel.com.au/',
			'main_site/img/projects/combitel-thumb-350-230.png',
			'main_site/img/projects/combitel-logo-193-45.png',
			'backend front-end',
			['main_site/img/projects/combitel-540-310.png']
        ));
		this.addProject(new this.Project(
			'AtLargeinc.',
			'AtLargeinc. >',
            false,
			'',
			'',
			'',
			'',
			'main_site/img/projects/atlarge-thumb-350-230.jpg',
			'main_site/img/projects/atlarge-logo.jpeg',
			'backend front-end architecture',
			['main_site/img/projects/atlargeinc-540-310.png']
		));

		this.addProject(new this.Project(
			'WireX',
			'WireX >',
            false,
			'',
			'',
			'',
			'',
			'main_site/img/projects/wirex-thumb-350-230.png',
			'main_site/img/projects/wirex-thumb-350-230.png',
			'backend front-end architecture',
			['main_site/img/projects/wirex-540-310.png']
		));




		this.addProject(new this.Project(
			'WaveDeck',
			'WaveDeck >',
            false,
			'',
			'',
			'',
			'http://www.wavedeck.com/',
			'main_site/img/projects/wavedeck-thumb-350-230.png',
			'main_site/img/projects/wavedeck-thumb-350-230.png',
			'backend',
			['main_site/img/projects/wavedeck-540-310.png']
		));

		
		this.addProject(new this.Project(
			'Tel Aviv Pub Data Mining',
			'Data Mining >',
            true,
			'<p>Tel Aviv is known as the gastronomic capital of Israel.  It is a home to thousands of restaurants, coffee shops and pubs all in a short distance from one another.</p><p>On this project, our client requested Business Intelligence regarding the Tel Aviv night life as it was presented online. Within an hour of scripting, we had created a list of all the local bars, and pinpointed them on a virtual map for maximal convenience.</p>',
			'<p>Python, Urllib, sqlite, JavaScript, Google Maps API.</p>',
			'',
			'',
			'main_site/img/projects/tlv-pubs-350-230.jpg',
			'',
			'backend',
			['main_site/img/projects/tlv-pubs-540-310.jpg']
        ));

		this.addProject(new this.Project(
			'REST API w/ AngularJS',
			'Talk @ AngularJS-IL >',
            true,
			'<p>AngularJS-IL is a monthly AgnularJS meetup that atracts hundreds of attendees each month. As a leader and advocates of AngularJS in Israel, Purple Bit&#8217;s CTO, Ofir Ovadia, gave a talk about REST API and AngularJS</p><p>The talk was divided into 4 subjects that are aimed at AngularJS and web development beginners as well as advanced users: The motivation behind REST APIs, Using REST APIs in AngularJS, Authentication using REST APIs and Caching of server objects using AngularJS.</p>',
			'<p>AngularJS, REST APIs, JavaScript.</p>',
			'',
			'https://github.com/purplebit/Rest-API-AngularJS-Presentation',
			'main_site/img/projects/angularjsil-350-230.jpg',
			'',
			'training front-end architecture',
			['main_site/img/projects/angularjsil-540-310.jpg',
                'main_site/img/projects/angularjsil-2-540-310.jpg',
            'main_site/img/projects/angularjsil-3-540-310.jpg']
        ));
});
