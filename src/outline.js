var aria = require('./aria.js');

var createDialog = function() {
	var dialog = document.createElement('dialog');
	dialog.addEventListener('close', function() {
		dialog.parentNode.removeChild(dialog);
	});
	dialog.style = 'max-width: 90vw; max-height: 90vh; overflow: auto;';
	document.body.appendChild(dialog);
	return dialog;
};

var createList = function(items) {
	var ul = document.createElement('ul');
	Array.prototype.forEach.call(items, function(item) {
		var li = document.createElement('li');
		li.appendChild(item);
		ul.appendChild(li);
	});
	return ul;
};

var truncate = function(s, length) {
	if (s.length > length) {
		return s.substr(0, length - 1) + '…';
	} else {
		return s;
	}
};

document.addEventListener('keyup', function(event) {
	if (event.ctrlKey && !event.altKey) {
		var matches, dialog, links;

		if (event.key == 'm') {
			event.preventDefault();

			matches = aria.querySelectorAll(document, 'landmark');
			dialog = createDialog();

			links = Array.prototype.map.call(matches, function(el) {
				var a = document.createElement('a');
				a.href = '#';
				a.addEventListener('click', function(event) {
					event.preventDefault();
					dialog.close();
					el.tabIndex = -1;
					el.focus();
				});
				a.textContent = aria.getRole(el);

				var name = aria.getName(el, null, true);
				var description = aria.getDescription(el);
				if (name) {
					a.textContent += ' (' + name + ')';
				}
				if (description && description != name) {
					a.title = description;
				}
				return a;
			});

			dialog.appendChild(createList(links));
			dialog.showModal();
		} else if (event.key == ',') {
			event.preventDefault();

			matches = aria.querySelectorAll(document, 'heading');
			dialog = createDialog();

			links = Array.prototype.map.call(matches, function(el) {
				var a = document.createElement('a');
				a.href = '#';
				a.addEventListener('click', function(event) {
					event.preventDefault();
					dialog.close();
					el.tabIndex = -1;
					el.focus();
				});
				a.textContent = aria.getName(el);
				return a;
			});

			dialog.appendChild(createList(links));
			dialog.showModal();
		} else if (event.key == '.') {
			event.preventDefault();

			matches = aria.querySelectorAll(document, 'link');
			dialog = createDialog();

			links = Array.prototype.map.call(matches, function(el) {
				var a = document.createElement('a');
				a.href = el.href;
				a.addEventListener('click', function(event) {
					dialog.close();
				});
				a.textContent = aria.getName(el) || el.href;
				return a;
			});

			dialog.appendChild(createList(links));
			dialog.showModal();
		}
	}
});
