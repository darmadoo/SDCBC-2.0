define(function (require) {
    var landingPage = require('../landing-page/landing-page');
	var about = require('../about/about');
	var content = "";

	content += landingPage.getTemplate();
	content += about.getTemplate();

   	$("#main-container").html(content);
});

