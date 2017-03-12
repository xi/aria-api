all: test/test.build.js dist/aria.min.js

test/test.build.js: test/test.js test/test-*.js test/*/*.html
	browserify $< -o $@

dist/aria.min.js: dist/aria.js
	uglifyjs $< -c -m > $@

dist/aria.js: index.js lib/*.js
	browserify $< -o $@ -s aria

clean:
	rm -f test/test.build.js
	rm -f dist/aria.js
	rm -f dist/aria.min.js
