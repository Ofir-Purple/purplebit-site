
purplebit.service('projectDetails', function() {

		// django static file prefix
		var staticUrl = '/static/';

		// project object
		this.Project = function(title, subtitle, link, thumb, projectTags) {
		this.title = title;
		this.subTitle = subtitle;
		this.url = link;
		this.thumb = staticUrl + thumb;
		this.projectTags = projectTags;
	};


		// project storage
		this.projectStorage = [];

		this.addProject = function(proj) {
			this.projectStorage.push(proj);
		}

		var fitblok = new this.Project(
			'Fitblok',
			'A marketplace for trainers and trainees >',
			'https://www.fitblok.com',
			'main_site/img/projects/fitblok-700-460.jpg',
			'backend front-end architecture'
			)
		this.addProject(fitblok);

		var ironSource = new this.Project(
			'ironSource',
			'Internal Management System >',
			'http://ironsrc.com',
			'main_site/img/projects/ironsource-logo-350-230.jpg',
			'backend front-end'
			)
		this.addProject(ironSource);

		var almaLinks = new this.Project(
			'AlmaLinks',
			'AlmaLinks CRM >',
			'http://almalinks.org/',
			'main_site/img/projects/almalinks-350-230.jpg',
			'front-end backend'
			)
		this.addProject(almaLinks);

		var desti = new this.Project(
			'Desti',
			'Server Backend & More >',
			'http://www.desti.com',
			'main_site/img/projects/desti-logo-350-230.png',
			'backend front-end'
			)
		this.addProject(desti);

		var chattyBar = new this.Project(
			'Chatty',
			'A chat widget for any site >',
			'http://www.chattybar.com/',
			'main_site/img/projects/chatty-230-350.jpg',
			'backend front-end architecture'
			)
		this.addProject(chattyBar);

		var dataMining = new this.Project(
			'Tel Aviv Pub Data Mining',
			'Data Mining >',
			'#',
			'main_site/img/projects/tlv-pubs-350-230.jpg',
			'backend'
			)
		this.addProject(dataMining);

		var restApiPres = new this.Project(
			'REST API w/ AngularJS',
			'Talk @ AngularJS-IL >',
			'https://github.com/purplebit/Rest-API-AngularJS-Presentation',
			'main_site/img/projects/angularjsil-350-230.jpg',
			'training front-end architecture'
			)
		this.addProject(restApiPres);

		var wordGame = new this.Project(
			'Word Search Game Maker',
			'Custom, printable puzzles for your students >',
			'#',
			'main_site/img/projects/wordsearchgamemaker-350-230.jpg',
			'front-end'
			)
		this.addProject(wordGame);

		var project9 = new this.Project(
			'Project 9',
			'amazon.com >',
			'#',
			'main_site/img/projects/project-thumb.jpg',
			'front-end'
			)
		this.addProject(project9);
})