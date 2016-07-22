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
	}
});

document.getElementById('json-submit').addEventListener('click', function(e) {
	e.preventDefault();
	document.getElementById('json-iframe').src = 'http://95.85.15.16/parking/?json=' + encodeURIComponent(JSON.stringify(JSON.parse(document.getElementById('json-source').textContent)));
})
