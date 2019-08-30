dist/aria.js: index.js lib/*.js
	mkdir -p dist
	npx browserify $< -o $@ -s aria

test/%.js: test/src/%.js
	npx browserify -t brfs $< -o $@

test: test/test-name.js
	PUPPETEER_EXECUTABLE_PATH=$$(which chromium) npx mocha-headless-chrome -a no-sandbox -f test/index.html

install:
	PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm install

install-chromium:
	npm install -f --no-save puppeteer

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js

.PHONY: clean test
