/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/in/satya-keerthi-kotte', extras: 'target="_blank"' },
	'github':   { class: 'github',      use: true, link: 'https://github.com/satyakeerthikotte', icon: 'github', title: 'Fork on Github', extras: 'target="_blank"' },
	'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/satya.keerthi', extras: 'target="_blank"' },
    'email':      { class: 'email',    use: true, link: 'satyakeerthi.kotte@sjsu.edu' },
	'resume':   { class: 'download',      use: true, link: 'img/Satya_Keerthi_Software Engineer_Exp 2Yrs_FullStack.pdf', icon: 'download', title: 'Download my Resume' , extras: 'download' },
  }
});