import json
import os
import sys


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


def extract_tests(path):
	tests = []

	for root, _dirs, files in sorted(os.walk(path)):
		for filename in files:
			if not filename.endswith('.html'):
				continue

			with open(os.path.join(root, filename)) as fh:
				raw = fh.read()

				if '<div id="manualMode">' in raw:
					try:
						data = json.loads(fenced('ATTAcomm(', ') ;', raw))
					except json.JSONDecodeError:
						continue

					for step in data['steps']:
						if step['type'] != 'test':
							continue
						test = {
							'filename': filename,
							'title': data["title"],
							'html': fenced('<body>', '<div id="manualMode">', raw).strip(),
							'name': None,
							'description': None,
							'selector': f'#{step["element"]}',
						}
						for check in step['test'].get('IAccessible2', []):
							if check[1] == 'accName':
								test['name'] = check[3]
							elif check[1] == 'accDescription':
								test['description'] = check[3]
						if len(test) > 4:
							tests.append(test)
				elif 'class="ex"' in raw:
					tests.append({
						'filename': filename,
						'title': fenced('<title>', '</title>', raw),
						'html': fenced('<body>', '<script>', raw).strip(),
						'name': None,
						'description': None,
						'selector': '.ex',
					})
	return tests


def render_tests(name):
	path = os.path.join('wpt-master', name)
	tests = extract_tests(path)
	rendered = json.dumps(tests, indent='\t')
	print(f'window.wpt["{name}"] = {rendered};')


print('window.wpt = window.wpt || {};')
render_tests('accname')
