dist/aria.min.js: dist/aria.js
	uglifyjs $< -c -m > $@

dist/aria.js: index.js lib/*.js
	mkdir -p dist
	browserify $< -o $@ -s aria

clean:
	rm -f dist/aria.js
	rm -f dist/aria.min.js
