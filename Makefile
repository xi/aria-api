dist/aria.js: index.js lib/*.js
	mkdir -p dist
	npx browserify $< -o $@ -s aria

test/%.js: test/src/%.js
	npx browserify -t brfs $< -o $@

test: test/test-name.js
	npx mocha-headless-chrome -a no-sandbox -f test/index.html

install:
	npm install

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js

.PHONY: clean test
