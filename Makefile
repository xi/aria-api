outline.js: src/outline.js src/*.js src/lib/*.js
	browserify $< -o $@
