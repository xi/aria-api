dist/aria.min.js: dist/aria.js
	uglifyjs $< -c -m > $@

dist/aria.js: index.js lib/*.js
	mkdir -p dist
	browserify $< -o $@ -s aria

test/test-name.js: test/src/test-name.js
	browserify $< -o $@

test: test/test-name.js
	./node_modules/.bin/phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/index.html

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js

.PHONY: clean test
