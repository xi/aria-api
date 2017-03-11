all: test/test.build.js index.build.js

test/test.build.js: test/test.js test/test-*.js test/*/*.html
	browserify $< -o $@

index.build.js: index.js lib/*.js
	browserify $< -o $@ -s aria
