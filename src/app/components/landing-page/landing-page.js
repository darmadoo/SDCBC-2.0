function getTemplate(){
	var template = `<div class="landing-page-container">
        <div class="landing-page-header">
          <i class="landing-page-hb fas fa-bars"></i>
          <div class="landing-page-logo"></div>
        </div>

        <div class="landing-page-content">
          <div class="landing-page-content-title">Are you home?</div>
          <div class="landing-page-content-description">and now these three remains: faith, hope and love. But the greatest of these is love.</div>
          <div class="landing-page-content-button">SERVICE TIMES</div>
        </div>
      </div>`;
       
    return template;
}

// Export modules 
define(function () {
    return { getTemplate };
});