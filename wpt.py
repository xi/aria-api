import sys
import os
import json

tests = []


def fenced(before, after, s):
	if before not in s or after not in s:
		return ''
	start = s.find(before) + len(before)
	end = s.find(after, start)
	return s[start:end]


def get_value(word, s):
	start = s.find(word)
	if start == -1:
		return None
	return fenced('"is",', ']', s[start + len(word):]).strip().strip('"')


for root, _dirs, files in sorted(os.walk(sys.argv[1])):
	for filename in files:
		if not filename.endswith('.html'):
			continue

		with open(os.path.join(root, filename)) as fh:
			raw = fh.read()
			if '<div id="manualMode">' in raw:
				tests.append({
					'filename': filename,
					'title': fenced('<title>', '</title>', raw),
					'html': fenced('<body>', '<div id="manualMode">', raw).strip(),
					'name': get_value('"accName"', raw),
					'description': get_value('"accDescription"', raw),
					'selector': '#test',
				})
			elif 'class="ex"' in raw:
				tests.append({
					'filename': filename,
					'title': fenced('<title>', '</title>', raw),
					'html': fenced('<body>', '<script>', raw).strip(),
					'name': None,
					'description': None,
					'selector': '.ex',
				})

print('window.wpt = window.wpt || {};')
print('window.wpt.accname = ' + json.dumps(tests, indent='\t'))
