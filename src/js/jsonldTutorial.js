var drake = dragula([document.getElementById('drag'), document.getElementById('json-source')], {
	invalid: function(el, handle) {
		return el.classList.contains('replace');
	}
});

drake.on('drop', function(el, target, source, sibling) {
	if (sibling.classList.contains('replace')) {
		sibling.classList.remove('tag');
		sibling.classList.add('empty');
		sibling.textContent = '';
	};
	// submit the frame
	document.getElementById('json-iframe').src = '//95.85.15.16/parking/?json=' + encodeURIComponent(JSON.stringify(JSON.parse(document.getElementById('json-source').textContent)));
});
