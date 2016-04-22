document.addEventListener("DOMContentLoaded", function() {

	// Remove `no-js` class from <html>
	var html = document.querySelector('html');
	html.classList.remove('no-js');
	html.classList.add('js');

	// Accordionize the sections
	var sections = document.querySelectorAll('section, aside');
	Array.prototype.forEach.call(sections, function(section, i) {
		// Collapse all but the first section
		section
			.querySelector('.section-body')
			.setAttribute('aria-hidden', (i > 0 ? 'true' : 'false'));

		// Add click handler to section titles to toggle active section
		var sectionTitle = section.querySelector('.section-title');
		if (sectionTitle) {
			sectionTitle.addEventListener('click', function() {
				// Collapse active section
				var activeSectionBody = document.querySelector('.section-body[aria-hidden="false"]');
				activeSectionBody && activeSectionBody.setAttribute('aria-hidden', 'true');

				// Show clicked section
				sectionTitle
					.parentNode.querySelector('.section-body')
					.setAttribute('aria-hidden', 'false');
			});
		};
	});

});
