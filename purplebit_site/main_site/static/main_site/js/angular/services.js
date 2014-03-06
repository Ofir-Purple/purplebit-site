"use strict"

purplebit.service('projectDetails', function($sanitize) {

		// django static file prefix
		var staticUrl = '/static/';

		// function append static url for each data image
		var appendStaticUrl = function(dataImages) {
			for (var i = 0; i < dataImages.length; i += 1) {
				dataImages[i] = staticUrl + dataImages[i];
			}
			return dataImages;
		}

		// project object
		this.Project = function(title, subtitle, desc, technologies, testimonial, link, thumb, projectTags, dataImages) {
			this.projectId = 0;
			this.title = title;
			this.subTitle = subtitle;
			this.desc = desc;
			this.technologies = techologies;
			this.testimonial = testimonial;
			this.url = link;
			this.thumb = staticUrl + thumb;
			this.projectTags = projectTags;
			this.dataImages = appendStaticUrl(dataImages);
		};

		// project storage
		this.projectStorage = [];

		this.addProject = function(proj) {
			this.projectStorage.push(proj);

			// reallocate id for each project
			this.reAllocateId();
		}

		// reallocates id's 
		this.reAllocateId = function() {
			for (var i = 0; i < this.projectStorage.length; i +=1 ) {
				this.projectStorage[i].projectId = i;
			}
		}


		// projects (objects)
		var fitblok = new this.Project(
			'Fitblok',
			'A marketplace for trainers and trainees >',
			'<p>Fitblok is a <strong>Single Page Web-Application</strong> and an <strong>iPad</strong> application that delivers video lessons from trainers to trainees.</p><p>Fitblok provides users with a gym-like experience and enables fitness trainers to develop their own brand and followers within the application. This vision was drilled-down by Purple Bit into technical details, through all the technical decisions and finally into a working, operational product. The application offers features such as managing the trainers&#8217; trainee community and scheduling <strong>video streaming</strong> training sessions online. In addition, the application offers a wide variety of training styles with an intuitive search mechanism and <strong>reputation system</strong> to back it up. Finally, all <strong>billing and accounting</strong> is done through the application.</p><p>Fitblok&#8217;s <strong>RESTful</strong> backend is developed using <strong>Django</strong>, the videos are streamed using <strong>Wowza</strong> video servers over <strong>Amazon EC2</strong> and the front-end itself is developed using <strong>AngularJS</strong>.</p>',
			''
			'https://www.fitblok.com',
			'main_site/img/projects/fitblok-700-460.jpg',
			'backend front-end architecture',
			['main_site/img/projects/fitblok-540-310.jpg', 
			'main_site/img/projects/fitblok-search-540-310.jpg', 
			'main_site/img/projects/fitblok-session-540-310.jpg',
			'main_site/img/projects/fitblok-profile-540-310.jpg']
			)
		this.addProject(fitblok);

		var ironSource = new this.Project(
			'ironSource',
			'Internal Management System >',
			'empty',
			'http://ironsrc.com',
			'main_site/img/projects/ironsource-logo-350-230.jpg',
			'backend front-end',
			['main_site/img/projects/ironsource-logo-540-310.jpg']
			)
		this.addProject(ironSource);

		var almaLinks = new this.Project(
			'AlmaLinks',
			'AlmaLinks CRM >',
			'empty',
			'http://almalinks.org/',
			'main_site/img/projects/almalinks-350-230.jpg',
			'front-end backend',
			['main_site/img/projects/almalinks-540-310.jpg']
			)
		this.addProject(almaLinks);

		var desti = new this.Project(
			'Desti',
			'Server Backend & More >',
			'empty',
			'http://www.desti.com',
			'main_site/img/projects/desti-logo-350-230.png',
			'backend front-end',
			['main_site/img/projects/desti-website-540-310.jpg',
			 'main_site/img/projects/desti-3-540-310.jpg',
			 'main_site/img/projects/desti-1-540-310.jpg']
			)
		this.addProject(desti);

		var chattyBar = new this.Project(
			'Chatty',
			'A chat widget for any site >',
			'empty',
			'http://www.chattybar.com/',
			'main_site/img/projects/chatty-230-350.jpg',
			'backend front-end architecture',
			['main_site/img/projects/chatty-540-310.jpg']
			)
		this.addProject(chattyBar);

		var dataMining = new this.Project(
			'Tel Aviv Pub Data Mining',
			'Data Mining >',
			'empty',
			'#',
			'main_site/img/projects/tlv-pubs-350-230.jpg',
			'backend',
			['main_site/img/projects/tlv-pubs-540-310.jpg']
			)
		this.addProject(dataMining);

		var restApiPres = new this.Project(
			'REST API w/ AngularJS',
			'Talk @ AngularJS-IL >',
			'empty',
			'https://github.com/purplebit/Rest-API-AngularJS-Presentation',
			'main_site/img/projects/angularjsil-350-230.jpg',
			'training front-end architecture',
			['main_site/img/projects/angularjsil-540-310.jpg',
			 'main_site/img/projects/angularjsil-2-540-310.jpg',
			 'main_site/img/projects/angularjsil-3-540-310.jpg']
			)
		this.addProject(restApiPres);

		var wordGame = new this.Project(
			'Word Search Game Maker',
			'Custom, printable puzzles for your students >',
			'empty',
			'#',
			'main_site/img/projects/wordsearchgamemaker-350-230.jpg',
			'front-end',
			['main_site/img/projects/wordsearchgamemaker-540-310.jpg']
			)
		this.addProject(wordGame);

		var project9 = new this.Project(
			'Project 9',
			'amazon.com >',
			'empty',
			'#',
			'main_site/img/projects/project-thumb.jpg',
			'front-end',
			['main_site/img/projects/project-slide.jpg',
			'main_site/img/projects/project-slide.jpg',
			'main_site/img/projects/project-slide.jpg']
			)
		this.addProject(project9);
})