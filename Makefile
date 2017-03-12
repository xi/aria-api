all: test/test.build.js dist/aria.js

test/test.build.js: test/test.js test/test-*.js test/*/*.html
	browserify $< -o $@

dist/aria.js: index.js lib/*.js
	browserify $< -o $@ -s aria
