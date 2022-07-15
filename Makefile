dist/aria.js: index.js lib/*.js
	mkdir -p dist
	npx browserify $< -o $@ -s aria

wpt-master:
	wget https://github.com/web-platform-tests/wpt/archive/refs/heads/master.zip -O wpt-master.zip
	unzip wpt-master.zip

test/wpt-accname.js: wpt.py wpt-master
	python wpt.py wpt-master/accname/ > $@

test: test/wpt-accname.js
	PUPPETEER_EXECUTABLE_PATH=$$(which chromium) npx mocha-headless-chrome -a no-sandbox -f test/index.html

install:
	PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm install

install-chromium:
	npm install -f --no-save puppeteer

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js

.PHONY: clean test
