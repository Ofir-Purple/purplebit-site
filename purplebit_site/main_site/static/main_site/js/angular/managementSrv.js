"use strict";

angular.module('purplebit').service('managementSrv', function(configSrv) {

	this.Manager = function(picture, fullName, position, facebook, linkedin, about) {
		this.picture = configSrv.staticUrl + picture;
		this.fullName = fullName;
		this.position = position;
		this.facebook = facebook;
		this.linkedin = linkedin;
		this.about = about;
	}

	this.managers = [];

	this.addManager = function(manager) {
		this.managers.push(manager);
	}

	var edan = new this.Manager(
		'main_site/img/about.jpg',
		'Edan Maor',
		'CEO',
		'https://www.facebook.com/edan.maor',
		'http://www.linkedin.com/in/edanmaor',
		'Edan has been programming since the age of 12. He has been working with Python for the last 9 years. After completing "Mamram" programming course in the IDF, he served as a programmer in an elite cyber unit and was promoted to a team leader position. Later on, he turned to completing his BA degree in Computer Science, and opening a small start-up company. Today he is at the helm of Purple Bit.'
		)

	var ofir = new this.Manager(
		'main_site/img/ofir-circle.png',
		'Ofir Ovadia',
		'CTO',
		'https://www.facebook.com/ofiro',
		'http://www.linkedin.com/in/ofirovadia',
		'With over 10 years of hands-on experience in software development of which 4 in Python, Ofir is the CTO and the technological authority at Purple Bit. His experience includes, but is not limited to: The IDF’s "Mamram" programming course; leading a software development team in one of the IDF’s top information security units; and excelling in his Computer Science BA degree studies.'
		)

	this.addManager(edan);
	this.addManager(ofir);
});