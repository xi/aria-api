import sys
import os
import json

tests = []


def fenced(before, after, s):
	start = s.find(before) + len(before)
	end = s.find(after, start)
	return s[start:end]


def get_value(word, s):
	start = s.find(word)
	if start == -1:
		return None
	return fenced('"is",', ']', s[start + len(word):]).strip().strip('"')


for filename in os.listdir(sys.argv[1]):
	if not filename.endswith('.html'):
		continue

	with open(os.path.join(sys.argv[1], filename)) as fh:
		raw = fh.read()
		test = {
			'filename': filename,
			'title': fenced('<title>', '</title>', raw),
			'html': fenced('<body>', '<div id="manualMode">', raw).strip(),
			'name': get_value('"accName"', raw),
			'description': get_value('"accDescription"', raw),
		}
		tests.append(test)

print('window.wpt = window.wpt || {};')
print('window.wpt.accname = ' + json.dumps(tests, indent='\t'))
