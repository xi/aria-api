dist/aria.min.js: dist/aria.js
	uglifyjs $< -c -m > $@

dist/aria.js: index.js lib/*.js
	mkdir -p dist
	browserify $< -o $@ -s aria

test/test-name.js: test/src/test-name.js
	browserify -t brfs $< -o $@

test: test/test-name.js
	PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium ./node_modules/.bin/mocha-headless-chrome -a no-sandbox -f test/index.html

install:
	PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm install

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js

.PHONY: clean test
