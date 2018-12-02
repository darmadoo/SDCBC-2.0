function getTemplate(){
	var template = `<div class="about-container">
        <div class="about-container-header">"To make disciples of all nations"</div>
        <div class="about-container-description">As a community, <span>San Diego City Blessing Church</span> is devoted to building an engaged, passionate, spiritually healthy community of people that makes up San Diego. We’re also devoted to engaging and impacting one another and others, believing that Jesus himself set an example of service and that we’ve been given the responsibility to follow it. As a community, we’re devoted to building an engaged, passionate, spiritually healthy community of people that makes up San Diego.</div>
      </div>`
       
    return template;
}

// Export modules 
define(function () {
    return { getTemplate };
});