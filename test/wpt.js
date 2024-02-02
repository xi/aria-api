window.wpt = window.wpt || {};
window.wpt["accname"] = [
	{
		"filename": "description_test_case_666-manual.html",
		"title": "Description test case 666",
		"html": "<p>This test examines the ARIA properties for Description test case 666.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\" role=\"presentation\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_756-manual.html",
		"title": "Name test case 756",
		"html": "<p>This test examines the ARIA properties for Name test case 756.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-label-embedded-combobox-manual.html",
		"title": "Name radio-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-combobox.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_one_valid_reference-manual.html",
		"title": "Description test case one valid reference",
		"html": "<p>This test examines the ARIA properties for Description test case one valid reference.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1 t2 t3\">\n  <div id=\"t2\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_754-manual.html",
		"title": "Name test case 754",
		"html": "<p>This test examines the ARIA properties for Name test case 754.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_659-manual.html",
		"title": "Name test case 659",
		"html": "<p>This test examines the ARIA properties for Name test case 659.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\" title=\"bar\"><input id=\"test\" type=\"text\" name=\"test\" title=\"buz\"></label>\n  </form>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-embedded-spinbutton-manual.html",
		"title": "Name file-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-spinbutton.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_664-manual.html",
		"title": "Description test case 664",
		"html": "<p>This test examines the ARIA properties for Description test case 664.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_from_content_of_labelledby_elements_one_of_which_is_hidden-manual.html",
		"title": "Name from content of labelledby elements one of which is hidden",
		"html": "<p>This test examines the ARIA properties for Name from content of labelledby elements one of which is hidden.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div>\n    <input id=\"test\" type=\"text\" aria-labelledby=\"lbl1 lbl2\" aria-describedby=\"descId\" />\n    <span>\n      <span aria-hidden=\"true\" id=\"lbl1\">Important</span>\n      <span class=\"hidden\">\n        <span aria-hidden=\"true\" id=\"lbl2\">stuff</span>\n      </span>\n    </span>\n  </div>\n  <div class=\"hidden\">\n    <div id=\"descId\">\n      <span aria-hidden=\"true\"><i> Hello, </i></span>\n      <span>My</span> name is\n      <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n      <span role=\"presentation\" aria-label=\"Eli\">\n        <span aria-label=\"Garaventa\">Zambino</span>\n      </span>\n      <span>the weird.</span>\n      (QED)\n      <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n      <table>\n        <tr>\n          <td>Where</td>\n          <td style=\"visibility:hidden;\"><div>in</div></td>\n          <td><div style=\"display:none;\">the world</div></td>\n          <td>are my marbles?</td>\n        </tr>\n      </table>\n    </div>\n  </div>",
		"name": "Important stuff",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-embedded-menu-manual.html",
		"title": "Name file-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-menu.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"name": "Flash the screen times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_757-manual.html",
		"title": "Name test case 757",
		"html": "<p>This test examines the ARIA properties for Name test case 757.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_602-manual.html",
		"title": "Name test case 602",
		"html": "<p>This test examines the ARIA properties for Name test case 602.</p>\n    <div id=\"test\" role=\"button\" title=\"Tag\" style=\"outline:medium solid black; width:2em; height:1em;\">\n  </div>",
		"name": "Tag",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_738-manual.html",
		"title": "Name test case 738",
		"html": "<p>This test examines the ARIA properties for Name test case 738.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"password\" value=\"baz\" id=\"test\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_733-manual.html",
		"title": "Name test case 733",
		"html": "<p>This test examines the ARIA properties for Name test case 733.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"password\" id=\"test\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_600-manual.html",
		"title": "Name test case 600",
		"html": "<p>This test examines the ARIA properties for Name test case 600.</p>\n    <div id=\"test\">Div with text</div>",
		"name": "",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_562-manual.html",
		"title": "Name test case 562",
		"html": "<p>This test examines the ARIA properties for Name test case 562.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img aria-labelledby=\"ID1 ID2 ID3\" id=\"test\" src=\"foo.jpg\"/>",
		"name": "peanuts popcorn apple jacks",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_731-manual.html",
		"title": "Name test case 731",
		"html": "<p>This test examines the ARIA properties for Name test case 731.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_606-manual.html",
		"title": "Name test case 606",
		"html": "<p>This test examines the ARIA properties for Name test case 606.</p>\n    <a href=\"test.html\" id=\"test\" aria-labelledby=\"test ID1\" aria-label=\"Tag\"></a>\n  <p id=\"ID1\">foo</p>",
		"name": "Tag foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-label-embedded-select-manual.html",
		"title": "Name radio-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-select.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-label-embedded-select-manual.html",
		"title": "Name password-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-select.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-title-manual.html",
		"title": "Name password-title",
		"html": "<p>This test examines the ARIA properties for Name password-title.</p>\n    <input type=\"password\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_749-manual.html",
		"title": "Name test case 749",
		"html": "<p>This test examines the ARIA properties for Name test case 749.</p>\n    <input type=\"checkbox\" id=\"test\" title=\"crazy\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_726-manual.html",
		"title": "Name test case 726",
		"html": "<p>This test examines the ARIA properties for Name test case 726.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"name": "States:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-label-embedded-spinbutton-manual.html",
		"title": "Name radio-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-spinbutton.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\"  type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_551-manual.html",
		"title": "Name test case 551",
		"html": "<p>This test examines the ARIA properties for Name test case 551.</p>\n    <input type=\"text\" id=\"test\" title=\"crazy\" value=\"baz\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_543-manual.html",
		"title": "Name test case 543",
		"html": "<p>This test examines the ARIA properties for Name test case 543.</p>\n    <input type=\"reset\" id=\"test\"/>",
		"name": "Reset",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_from_content_of_labelledby_element-manual.html",
		"title": "Name from content of labelledby element",
		"html": "<p>This test examines the ARIA properties for Name from content of labelledby element.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input id=\"test\" type=\"text\" aria-labelledby=\"lblId\" />\n  <div id=\"lblId\" >\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n    </span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n    <table>\n      <tr>\n        <td>Where</td>\n        <td style=\"visibility:hidden;\"><div>in</div></td>\n        <td><div style=\"display:none;\">the world</div></td>\n        <td>are my marbles?</td>\n      </tr>\n    </table>\n  </div>",
		"name": "My name is Eli the weird. (QED) Where are my marbles?",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_544-manual.html",
		"title": "Name test case 544",
		"html": "<p>This test examines the ARIA properties for Name test case 544.</p>\n    <input type=\"button\" id=\"test\" value=\"foo\"/>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_619-manual.html",
		"title": "Name test case 619",
		"html": "<p>This test examines the ARIA properties for Name test case 619.</p>\n    <input type=\"password\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_612-manual.html",
		"title": "Name test case 612",
		"html": "<p>This test examines the ARIA properties for Name test case 612.</p>\n    <input type=\"password\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_762-manual.html",
		"title": "Name test case 762",
		"html": "<p>This test examines the ARIA properties for Name test case 762.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_721-manual.html",
		"title": "Name test case 721",
		"html": "<p>This test examines the ARIA properties for Name test case 721.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"password\" id=\"test\"/>",
		"name": "States:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_563-manual.html",
		"title": "Name test case 563",
		"html": "<p>This test examines the ARIA properties for Name test case 563.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1\" src=\"foo.jpg\"/>",
		"name": "l peanuts",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-embedded-combobox-manual.html",
		"title": "Name file-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-combobox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1 </li>\n    <li role=\"option\">2 </li>\n    <li role=\"option\">3 </li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_737-manual.html",
		"title": "Name test case 737",
		"html": "<p>This test examines the ARIA properties for Name test case 737.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_758-manual.html",
		"title": "Name test case 758",
		"html": "<p>This test examines the ARIA properties for Name test case 758.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"password\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-owned-combobox-owned-listbox-manual.html",
		"title": "Name file-label-owned-combobox-owned-listbox",
		"html": "<p>This test examines the ARIA properties for Name file-label-owned-combobox-owned-listbox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash <span aria-owns=\"id1\">the screen</span> times.</label>\n  <div>\n    <div id=\"id1\" role=\"combobox\" aria-owns=\"id2\">\n      <div role=\"textbox\"></div>\n    </div>\n  </div>\n  <div>\n    <ul id=\"id2\" role=\"listbox\" style=\"list-style-type: none;\">\n      <li role=\"option\" >1 </li>\n      <li role=\"option\" aria-selected=\"true\">2 </li>\n      <li role=\"option\">3 </li>\n    </ul>\n  </div>",
		"name": "Flash the screen 2 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_548-manual.html",
		"title": "Name test case 548",
		"html": "<p>This test examines the ARIA properties for Name test case 548.</p>\n    <label for=\"test\">\n  crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_740-manual.html",
		"title": "Name test case 740",
		"html": "<p>This test examines the ARIA properties for Name test case 740.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_611-manual.html",
		"title": "Name test case 611",
		"html": "<p>This test examines the ARIA properties for Name test case 611.</p>\n    <input id=\"test\" type=\"text\"/>\n  <label for=\"test\">foo</label>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_from_content-manual.html",
		"title": "Name from content",
		"html": "<p>This test examines the ARIA properties for Name from content.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div id=\"test\" role=\"link\" tabindex=\"0\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n    </span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n    <table>\n      <tr>\n        <td>Where</td>\n        <td style=\"visibility:hidden;\"><div>in</div></td>\n        <td><div style=\"display:none;\">the world</div></td>\n        <td>are my marbles?</td>\n      </tr>\n    </table>\n  </div>",
		"name": "My name is Eli the weird. (QED) Where are my marbles?",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-title-manual.html",
		"title": "Name checkbox-title",
		"html": "<p>This test examines the ARIA properties for Name checkbox-title.</p>\n    <input type=\"checkbox\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_621-manual.html",
		"title": "Name test case 621",
		"html": "<p>This test examines the ARIA properties for Name test case 621.</p>\n    <input type=\"file\" id=\"test\">\n  <label for=\"test\">foo <input type=\"text\" value=\"bar\"> baz</label>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_772-manual.html",
		"title": "Description test case 772",
		"html": "<p>This test examines the ARIA properties for Description test case 772.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "description_test_case_665-manual.html",
		"title": "Description test case 665",
		"html": "<p>This test examines the ARIA properties for Description test case 665.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\" style=\"display:none\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_546-manual.html",
		"title": "Name test case 546",
		"html": "<p>This test examines the ARIA properties for Name test case 546.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"text\" id=\"test\"/>",
		"name": "States:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_1.0_combobox-focusable-manual.html",
		"title": "Description 1.0 combobox-focusable",
		"html": "<p>This test examines the ARIA properties for Description 1.0 combobox-focusable.</p>\n    <div id=\"test\" role=\"combobox\" tabindex=\"0\" title=\"Choose your language.\">\n    <span> English </span>\n  </div>",
		"name": null,
		"description": "",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_739-manual.html",
		"title": "Name test case 739",
		"html": "<p>This test examines the ARIA properties for Name test case 739.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-label-embedded-menu-manual.html",
		"title": "Name radio-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-menu.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"name": "Flash the screen times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_558-manual.html",
		"title": "Name test case 558",
		"html": "<p>This test examines the ARIA properties for Name test case 558.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"test\">\n  <img aria-labelledby=\"test\" src=\"foo.jpg\"/>",
		"name": "",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_link-mixed-content-manual.html",
		"title": "Name link-mixed-content",
		"html": "<p>This test examines the ARIA properties for Name link-mixed-content.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div id=\"test\" role=\"link\" tabindex=\"0\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\"><span aria-label=\"Garaventa\">Zambino</span></span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n  </div>",
		"name": "My name is Eli the weird. (QED)",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_561-manual.html",
		"title": "Name test case 561",
		"html": "<p>This test examines the ARIA properties for Name test case 561.</p>\n    <img id=\"test\" aria-labelledby=\"test\" aria-label=\"1\" src=\"foo.jpg\"/>",
		"name": "1",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-title-manual.html",
		"title": "Name radio-title",
		"html": "<p>This test examines the ARIA properties for Name radio-title.</p>\n    <input type=\"radio\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_744-manual.html",
		"title": "Name test case 744",
		"html": "<p>This test examines the ARIA properties for Name test case 744.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-textbox-manual.html",
		"title": "Name checkbox-label-embedded-textbox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-textbox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"textbox\" contenteditable>1</div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_730-manual.html",
		"title": "Name test case 730",
		"html": "<p>This test examines the ARIA properties for Name test case 730.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_751-manual.html",
		"title": "Name test case 751",
		"html": "<p>This test examines the ARIA properties for Name test case 751.</p>\n    <input type=\"file\" id=\"test\" title=\"crazy\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-inline-block-styles-manual.html",
		"title": "Name file-label-inline-block-styles",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-block-styles.</p>\n    <style>\n    label:before { content: \"This\"; display: block; }\n    label:after { content: \".\"; }\n  </style>\n  <label for=\"test\">is a test</label>\n  <input type=\"text\" id=\"test\"/>",
		"name": "This is a test.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_link-with-label-manual.html",
		"title": "Description link-with-label",
		"html": "<p>This test examines the ARIA properties for Description link-with-label.</p>\n    <a id=\"test\" href=\"#\" aria-label=\"California\" title=\"San Francisco\" >United States</a>",
		"name": null,
		"description": "San Francisco",
		"selector": "#test"
	},
	{
		"filename": "name_file-label-embedded-select-manual.html",
		"title": "Name file-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-select.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_734-manual.html",
		"title": "Name test case 734",
		"html": "<p>This test examines the ARIA properties for Name test case 734.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_605-manual.html",
		"title": "Name test case 605",
		"html": "<p>This test examines the ARIA properties for Name test case 605.</p>\n    <a href=\"test.html\" id=\"test\" aria-labelledby=\"ID1\" aria-label=\"Tag\">foo</a>\n  <p id=\"ID1\">bar</p>",
		"name": "bar",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_566-manual.html",
		"title": "Name test case 566",
		"html": "<p>This test examines the ARIA properties for Name test case 566.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img id=\"test\" aria-label=\"\" aria-labelledby=\"test ID1 ID2 ID3\" alt=\"\" title=\"t\" src=\"foo.jpg\"/>",
		"name": "t peanuts popcorn apple jacks",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-label-embedded-spinbutton-manual.html",
		"title": "Name text-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-spinbutton.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_759-manual.html",
		"title": "Name test case 759",
		"html": "<p>This test examines the ARIA properties for Name test case 759.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_image-title-manual.html",
		"title": "Name image-title",
		"html": "<p>This test examines the ARIA properties for Name image-title.</p>\n    <input type=\"image\" src=\"test.png\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-label-embedded-combobox-manual.html",
		"title": "Name text-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-combobox.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_608-manual.html",
		"title": "Name test case 608",
		"html": "<p>This test examines the ARIA properties for Name test case 608.</p>\n    <a href=\"test.html\" id=\"test\" title=\"Tag\"></a>",
		"name": "Tag",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_1.0_combobox-focusable-alternative-manual.html",
		"title": "Name 1.0 combobox-focusable-alternative",
		"html": "<p>This test examines the ARIA properties for Name 1.0 combobox-focusable-alternative.</p>\n    <input id=\"test\" role=\"combobox\" type=\"text\" title=\"Choose your language\" value=\"English\">",
		"name": "Choose your language",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-title-manual.html",
		"title": "Name file-title",
		"html": "<p>This test examines the ARIA properties for Name file-title.</p>\n    <input type=\"file\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_615-manual.html",
		"title": "Name test case 615",
		"html": "<p>This test examines the ARIA properties for Name test case 615.</p>\n    <input type=\"file\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-label-embedded-slider-manual.html",
		"title": "Name text-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-slider.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_596-manual.html",
		"title": "Name test case 596",
		"html": "<p>This test examines the ARIA properties for Name test case 596.</p>\n    <div id=\"test\" aria-labelledby=\"ID1\">foo</div>\n  <span id=\"ID1\">bar</span>",
		"name": "bar",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_broken_reference-manual.html",
		"title": "Description test case broken reference",
		"html": "<p>This test examines the ARIA properties for Description test case broken reference.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">",
		"name": null,
		"description": "",
		"selector": "#test"
	},
	{
		"filename": "name_file-label-embedded-slider-manual.html",
		"title": "Name file-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-slider.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-owned-combobox-manual.html",
		"title": "Name file-label-owned-combobox",
		"html": "<p>This test examines the ARIA properties for Name file-label-owned-combobox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash <span aria-owns=\"id1\">the screen</span> times.</label>\n  <div id=\"id1\">\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1 </li>\n    <li role=\"option\">2 </li>\n    <li role=\"option\">3 </li>\n      </ul>\n    </div>\n  </div>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-label-embedded-menu-manual.html",
		"title": "Name password-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-menu.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"name": "Flash the screen times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-combobox-manual.html",
		"title": "Name checkbox-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-combobox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-label-embedded-combobox-manual.html",
		"title": "Name password-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-combobox.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_539-manual.html",
		"title": "Name test case 539",
		"html": "<p>This test examines the ARIA properties for Name test case 539.</p>\n    <input type=\"button\" aria-label=\"Rich\" id=\"test\">",
		"name": "Rich",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_616-manual.html",
		"title": "Name test case 616",
		"html": "<p>This test examines the ARIA properties for Name test case 616.</p>\n    <input type=\"image\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_559-manual.html",
		"title": "Name test case 559",
		"html": "<p>This test examines the ARIA properties for Name test case 559.</p>\n    <img id=\"test\" aria-labelledby=\"test\" src=\"foo.jpg\"/>",
		"name": "",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_760-manual.html",
		"title": "Name test case 760",
		"html": "<p>This test examines the ARIA properties for Name test case 760.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_748-manual.html",
		"title": "Name test case 748",
		"html": "<p>This test examines the ARIA properties for Name test case 748.</p>\n    <input type=\"password\" id=\"test\" title=\"crazy\" value=\"baz\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_607-manual.html",
		"title": "Name test case 607",
		"html": "<p>This test examines the ARIA properties for Name test case 607.</p>\n    <a href=\"test.html\" id=\"test\">ABC</a>",
		"name": "ABC",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_564-manual.html",
		"title": "Name test case 564",
		"html": "<p>This test examines the ARIA properties for Name test case 564.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1 ID2\" src=\"foo.jpg\"/>",
		"name": "l peanuts popcorn",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_752-manual.html",
		"title": "Name test case 752",
		"html": "<p>This test examines the ARIA properties for Name test case 752.</p>\n    <input type=\"image\" src=\"foo.jpg\" id=\"test\" title=\"crazy\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_728-manual.html",
		"title": "Name test case 728",
		"html": "<p>This test examines the ARIA properties for Name test case 728.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-listbox-manual.html",
		"title": "Name checkbox-label-embedded-listbox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-listbox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <ul role=\"listbox\" style=\"list-style-type: none;\">\n      <li role=\"option\" aria-selected=\"true\">1</li>\n      <li role=\"option\">2</li>\n      <li role=\"option\">3</li>\n    </ul>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-label-embedded-slider-manual.html",
		"title": "Name password-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-slider.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_553-manual.html",
		"title": "Name test case 553",
		"html": "<p>This test examines the ARIA properties for Name test case 553.</p>\n    <style type=\"text/css\">\n    [data-after]:after { content: attr(data-after); }\n  </style>\n  <label for=\"test\" data-after=\"test content\"></label>\n  <input type=\"text\" id=\"test\">",
		"name": "test content",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_password-label-embedded-spinbutton-manual.html",
		"title": "Name password-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-spinbutton.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_609-manual.html",
		"title": "Name test case 609",
		"html": "<p>This test examines the ARIA properties for Name test case 609.</p>\n    <input id=\"test\" type=\"text\" aria-labelledby=\"ID1 ID2 ID3\">\n  <p id=\"ID1\">foo</p>\n  <p id=\"ID2\">bar</p>\n  <p id=\"ID3\">baz</p>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_745-manual.html",
		"title": "Name test case 745",
		"html": "<p>This test examines the ARIA properties for Name test case 745.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_541-manual.html",
		"title": "Name test case 541",
		"html": "<p>This test examines the ARIA properties for Name test case 541.</p>\n    <div id=\"ID1\">Rich's button</div>\n  <input type=\"button\" aria-label=\"bar\" aria-labelledby=\"ID1\" id=\"test\"/>",
		"name": "Rich's button",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_736-manual.html",
		"title": "Name test case 736",
		"html": "<p>This test examines the ARIA properties for Name test case 736.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-multiple-label-alternative-manual.html",
		"title": "Name checkbox-label-multiple-label-alternative",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-multiple-label-alternative.</p>\n    <label for=\"test\">a test</label>\n  <label>This <input type=\"checkbox\" id=\"test\" /> is</label>",
		"name": "a test This is",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_610-manual.html",
		"title": "Name test case 610",
		"html": "<p>This test examines the ARIA properties for Name test case 610.</p>\n    <input id=\"test\" type=\"text\" aria-label=\"bar\" aria-labelledby=\"ID1 test\">\n  <div id=\"ID1\">foo</div>",
		"name": "foo bar",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_540-manual.html",
		"title": "Name test case 540",
		"html": "<p>This test examines the ARIA properties for Name test case 540.</p>\n    <div id=\"ID1\">Rich's button</div>\n  <input type=\"button\" aria-labelledby=\"ID1\" id=\"test\">",
		"name": "Rich's button",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-spinbutton-manual.html",
		"title": "Name checkbox-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-spinbutton.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_title-same-element-manual.html",
		"title": "Description title-same-element",
		"html": "<p>This test examines the ARIA properties for Description title-same-element.</p>\n    <div><input aria-label=\"Name\" id=\"test\" title=\"Title\" aria-describedby=\"ID1\" type=\"text\"></div>\n  <div id=\"ID1\">Description</div>",
		"name": null,
		"description": "Description",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_603-manual.html",
		"title": "Name test case 603",
		"html": "<p>This test examines the ARIA properties for Name test case 603.</p>\n    <div id=\"ID1\">foo</div>\n  <a id=\"test\" href=\"test.html\" aria-labelledby=\"ID1\">bar</a>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_597-manual.html",
		"title": "Name test case 597",
		"html": "<p>This test examines the ARIA properties for Name test case 597.</p>\n    <div id=\"test\" aria-label=\"Tag\">foo</div>",
		"name": "Tag",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_727-manual.html",
		"title": "Name test case 727",
		"html": "<p>This test examines the ARIA properties for Name test case 727.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"password\" id=\"test\" value=\"baz\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_838-manual.html",
		"title": "Description test case 838",
		"html": "<p>This test examines the ARIA properties for Description test case 838.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\" style=\"visibility:hidden\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_660-manual.html",
		"title": "Name test case 660",
		"html": "<p>This test examines the ARIA properties for Name test case 660.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\" title=\"bar\"><input id=\"test\" type=\"password\" name=\"test\" title=\"buz\"></label>\n  </form>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_663a-manual.html",
		"title": "Name test case 663a",
		"html": "<p>This test examines the ARIA properties for Name test case 663a.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"image\" src=\"foo.jpg\" name=\"test\" title=\"bar\"></label>\n  </form>",
		"name": "foo baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_from_content_of_describedby_element-manual.html",
		"title": "Description from content of describedby element",
		"html": "<p>This test examines the ARIA properties for Description from content of describedby element.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input id=\"test\" type=\"text\" aria-label=\"Important stuff\" aria-describedby=\"descId\" />\n  <div>\n    <div id=\"descId\">\n      <span aria-hidden=\"true\"><i> Hello, </i></span>\n      <span>My</span> name is\n      <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n      <span role=\"presentation\" aria-label=\"Eli\">\n        <span aria-label=\"Garaventa\">Zambino</span>\n      </span>\n      <span>the weird.</span>\n      (QED)\n      <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n      <table>\n        <tr>\n          <td>Where</td>\n          <td style=\"visibility:hidden;\"><div>in</div></td>\n          <td><div style=\"display:none;\">the world</div></td>\n          <td>are my marbles?</td>\n        </tr>\n      </table>\n    </div>\n  </div>",
		"name": null,
		"description": "My name is Eli the weird. (QED) Where are my marbles?",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_545-manual.html",
		"title": "Name test case 545",
		"html": "<p>This test examines the ARIA properties for Name test case 545.</p>\n    <input src=\"baz.html\" type=\"image\" id=\"test\" alt=\"foo\"/>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_547-manual.html",
		"title": "Name test case 547",
		"html": "<p>This test examines the ARIA properties for Name test case 547.</p>\n    <label for=\"test\">\n  foo\n  <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_617-manual.html",
		"title": "Name test case 617",
		"html": "<p>This test examines the ARIA properties for Name test case 617.</p>\n    <input type=\"checkbox\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_662-manual.html",
		"title": "Name test case 662",
		"html": "<p>This test examines the ARIA properties for Name test case 662.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"radio\" name=\"test\" title=\" bar \"></label>\n  </form>",
		"name": "foo baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_761-manual.html",
		"title": "Name test case 761",
		"html": "<p>This test examines the ARIA properties for Name test case 761.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_link-with-label-manual.html",
		"title": "Name link-with-label",
		"html": "<p>This test examines the ARIA properties for Name link-with-label.</p>\n    <a id=\"test\" href=\"#\" aria-label=\"California\" title=\"San Francisco\" >United States</a>",
		"name": "California",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-multiple-label-manual.html",
		"title": "Name checkbox-label-multiple-label",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-multiple-label.</p>\n    <label>This <input type=\"checkbox\" id=\"test\" /> is</label>\n  <label for=\"test\">a test</label>",
		"name": "This is a test",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_614-manual.html",
		"title": "Name test case 614",
		"html": "<p>This test examines the ARIA properties for Name test case 614.</p>\n    <input type=\"radio\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_743-manual.html",
		"title": "Name test case 743",
		"html": "<p>This test examines the ARIA properties for Name test case 743.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"password\" id=\"test\" value=\"baz\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_735-manual.html",
		"title": "Name test case 735",
		"html": "<p>This test examines the ARIA properties for Name test case 735.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-slider-manual.html",
		"title": "Name checkbox-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-slider.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_729-manual.html",
		"title": "Name test case 729",
		"html": "<p>This test examines the ARIA properties for Name test case 729.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "foo David",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_557-manual.html",
		"title": "Description test case 557",
		"html": "<p>This test examines the ARIA properties for Description test case 557.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\" alt=\"a\" title=\"t\"/>",
		"name": null,
		"description": "t",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_750-manual.html",
		"title": "Name test case 750",
		"html": "<p>This test examines the ARIA properties for Name test case 750.</p>\n    <input type=\"radio\" id=\"test\" title=\"crazy\"/>",
		"name": "crazy",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-label-embedded-select-manual.html",
		"title": "Name text-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-select.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_599-manual.html",
		"title": "Name test case 599",
		"html": "<p>This test examines the ARIA properties for Name test case 599.</p>\n    <div id=\"test\" aria-labelledby=\"ID0 ID1\" aria-label=\"Tag\">foo</div>\n  <span id=\"ID0\">bar</span>\n  <span id=\"ID1\">baz</span>",
		"name": "bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_723-manual.html",
		"title": "Name test case 723",
		"html": "<p>This test examines the ARIA properties for Name test case 723.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"name": "States:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_radio-label-embedded-slider-manual.html",
		"title": "Name radio-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-slider.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"name": "foo 5 baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-title-manual.html",
		"title": "Name text-title",
		"html": "<p>This test examines the ARIA properties for Name text-title.</p>\n    <input type=\"text\" id=\"test\" title=\"foo\" />",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_556-manual.html",
		"title": "Name test case 556",
		"html": "<p>This test examines the ARIA properties for Name test case 556.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\"/>",
		"name": "1",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_620-manual.html",
		"title": "Name test case 620",
		"html": "<p>This test examines the ARIA properties for Name test case 620.</p>\n    <input type=\"radio\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_725-manual.html",
		"title": "Name test case 725",
		"html": "<p>This test examines the ARIA properties for Name test case 725.</p>\n    <label for=\"test\">File:</label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "File:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_613-manual.html",
		"title": "Name test case 613",
		"html": "<p>This test examines the ARIA properties for Name test case 613.</p>\n    <input type=\"checkbox\" id=\"test\">\n  <label for=\"test\">foo</label></body>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_773-manual.html",
		"title": "Description test case 773",
		"html": "<p>This test examines the ARIA properties for Description test case 773.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\" style=\"display:none\">foo</div>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_742-manual.html",
		"title": "Name test case 742",
		"html": "<p>This test examines the ARIA properties for Name test case 742.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-inline-hidden-elements-manual.html",
		"title": "Name file-label-inline-hidden-elements",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-hidden-elements.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input type=\"file\" id=\"test\" />\n  <label for=\"test\">\n    <span class=\"hidden\">1</span><span>2</span>\n    <span style=\"visibility: hidden;\">3</span><span>4</span>\n    <span hidden>5</span><span>6</span>\n    <span aria-hidden=\"true\">7</span><span>8</span>\n    <span aria-hidden=\"false\" class=\"hidden\">9</span><span>10</span>\n  </label>",
		"name": "2 4 6 8 10",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_604-manual.html",
		"title": "Name test case 604",
		"html": "<p>This test examines the ARIA properties for Name test case 604.</p>\n    <a id=\"test\" href=\"test.html\" aria-label=\"Tag\">ABC</a>",
		"name": "Tag",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_from_content_of_label-manual.html",
		"title": "Name from content of label",
		"html": "<p>This test examines the ARIA properties for Name from content of label.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input type=\"text\" id=\"test\" />\n  <label for=\"test\" id=\"label\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n   </span>\n   <span>the weird.</span>\n   (QED)\n   <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n   <table>\n     <tr>\n       <td>Where</td>\n       <td style=\"visibility:hidden;\"><div>in</div></td>\n       <td><div style=\"display:none;\">the world</div></td>\n       <td>are my marbles?</td>\n    </tr>\n   </table>\n  </label>",
		"name": "My name is Eli the weird. (QED) Where are my marbles?",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_557-manual.html",
		"title": "Name test case 557",
		"html": "<p>This test examines the ARIA properties for Name test case 557.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\" alt=\"a\" title=\"t\"/>",
		"name": "1",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_1.0_combobox-focusable-manual.html",
		"title": "Name 1.0 combobox-focusable",
		"html": "<p>This test examines the ARIA properties for Name 1.0 combobox-focusable.</p>\n    <div id=\"test\" role=\"combobox\" tabindex=\"0\" title=\"Choose your language.\">\n    <span> English </span>\n  </div>",
		"name": "Choose your language.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-menu-manual.html",
		"title": "Name checkbox-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-menu.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n        <span role=\"menuitem\" hidden>2</span>\n    <span role=\"menuitem\" hidden>3</span>\n      </span>\n      times.\n  </label>",
		"name": "Flash the screen times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_heading-combobox-focusable-alternative-manual.html",
		"title": "Name  heading-combobox-focusable-alternative",
		"html": "<p>This test examines the ARIA properties for Name  heading-combobox-focusable-alternative.</p>\n    <h2 id=\"test\">\n  Country of origin:\n  <input role=\"combobox\" type=\"text\" title=\"Choose your country.\" value=\"United States\">\n  </h2>",
		"name": "Country of origin: United States",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_753-manual.html",
		"title": "Name test case 753",
		"html": "<p>This test examines the ARIA properties for Name test case 753.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"password\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_text-label-embedded-menu-manual.html",
		"title": "Name text-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-menu.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"name": "Flash the screen times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_file-label-inline-block-elements-manual.html",
		"title": "Name file-label-inline-block-elements",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-block-elements.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">W<i>h<b>a</b></i>t<br>is<div>your<div>name<b>?</b></div></div></label>",
		"name": "What is your name?",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_724-manual.html",
		"title": "Name test case 724",
		"html": "<p>This test examines the ARIA properties for Name test case 724.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "States:",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_741-manual.html",
		"title": "Name test case 741",
		"html": "<p>This test examines the ARIA properties for Name test case 741.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_746-manual.html",
		"title": "Name test case 746",
		"html": "<p>This test examines the ARIA properties for Name test case 746.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_598-manual.html",
		"title": "Name test case 598",
		"html": "<p>This test examines the ARIA properties for Name test case 598.</p>\n    <div id=\"test\" aria-labelledby=\"ID1\" aria-label=\"Tag\">foo</div>\n  <span id=\"ID1\">bar</span>",
		"name": "bar",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_560-manual.html",
		"title": "Name test case 560",
		"html": "<p>This test examines the ARIA properties for Name test case 560.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"test\">\n  <img aria-labelledby=\"test\" aria-label=\"1\" src=\"foo.jpg\"/>",
		"name": "",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_552-manual.html",
		"title": "Name test case 552",
		"html": "<p>This test examines the ARIA properties for Name test case 552.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"text\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "description_test_case_774-manual.html",
		"title": "Description test case 774",
		"html": "<p>This test examines the ARIA properties for Description test case 774.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <span id=\"t1\" role=\"presentation\">foo</span>",
		"name": null,
		"description": "foo",
		"selector": "#test"
	},
	{
		"filename": "name_test_case_618-manual.html",
		"title": "Name test case 618",
		"html": "<p>This test examines the ARIA properties for Name test case 618.</p>\n    <input type=\"text\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"name": "foo bar baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_661-manual.html",
		"title": "Name test case 661",
		"html": "<p>This test examines the ARIA properties for Name test case 661.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"checkbox\" name=\"test\" title=\" bar \"></label>\n  </form>",
		"name": "foo baz",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_565-manual.html",
		"title": "Name test case 565",
		"html": "<p>This test examines the ARIA properties for Name test case 565.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1 ID2 ID3\" alt= \"a\" title=\"t\" src=\"foo.jpg\"/>",
		"name": "l peanuts popcorn apple jacks",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_checkbox-label-embedded-select-manual.html",
		"title": "Name checkbox-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-select.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"name": "Flash the screen 1 times.",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_747-manual.html",
		"title": "Name test case 747",
		"html": "<p>This test examines the ARIA properties for Name test case 747.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_755-manual.html",
		"title": "Name test case 755",
		"html": "<p>This test examines the ARIA properties for Name test case 755.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"radio\" id=\"test\"/>",
		"name": "fancy fruit",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_550-manual.html",
		"title": "Name test case 550",
		"html": "<p>This test examines the ARIA properties for Name test case 550.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"name": "crazy 4",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_549-manual.html",
		"title": "Name test case 549",
		"html": "<p>This test examines the ARIA properties for Name test case 549.</p>\n    <label for=\"test\">\n    crazy\n     <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n     </div>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"name": "crazy Monday",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "name_test_case_601-manual.html",
		"title": "Name test case 601",
		"html": "<p>This test examines the ARIA properties for Name test case 601.</p>\n    <div id=\"test\" role=\"button\">foo</div>",
		"name": "foo",
		"description": null,
		"selector": "#test"
	},
	{
		"filename": "comp_tooltip.html",
		"title": "Name Comp: Tooltip",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_tooltip\">#comp_tooltip</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<a href=\"#\" title=\"label\" data-expectedlabel=\"label\" data-testname=\"link label from tooltip\" class=\"ex\"><img src=\"#\" alt=\"\"></a>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_tooltip -->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_hidden_not_referenced.html",
		"title": "Name Comp: Hidden Not Referenced",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_hidden_not_referenced\">#comp_hidden_not_referenced</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h2 class=\"ex\" data-expectedlabel=\"heading label\" data-testname=\"heading with interior hidden node\">\n  heading\n  <span hidden>bogus</span>\n  label\n</h2>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_hidden_not_referenced -->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_label.html",
		"title": "Name Comp: Label",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_label\">#comp_label</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<div aria-label=\"label\" data-expectedlabel=\"label\" data-testname=\"label valid on group\" role=\"group\" class=\"ex\">x</div>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_label -->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_name_from_content.html",
		"title": "Name Comp: Name From Content",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_name_from_content\">#comp_name_from_content</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h1 data-expectedlabel=\"label\" data-testname=\"heading name from content\" class=\"ex\">label</h1>\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_name_from_content\n  - comp_name_from_content_reset\n  - comp_name_from_content_pseudo_element\n  - comp_name_from_content_pseudo_element_before\n  - comp_name_from_content_pseudo_element_after\n  - comp_name_from_content_for_each_child\n  - comp_name_from_content_for_each_child_set_current\n  - comp_name_from_content_for_each_child_recursion\n  - comp_for_each_child_append\n  - comp_name_from_content_return\n\nTodo: test all remaining *recursive* cases in https://w3c.github.io/accname/#comp_recursive_name_from_content\n\n-->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_labelledby.html",
		"title": "Name Comp: Labelledby",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_labelledby\">#comp_labelledby</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<div role=\"group\" aria-labelledby=\"h\" class=\"ex\" data-expectedlabel=\"div group label\" data-testname=\"div group explicitly labelledby heading\">\n  <h2 id=\"h\">div group label</h2>\n  <p>text inside div group</p>\n</div>\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_labelledby\n  - comp_labelledby_reset\n  - comp_labelledby_foreach\n  - comp_labelledby_set_current\n  - comp_labelledby_recursion\n  - comp_labelledby_append\n  - comp_labelledby_return\n\n-->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_text_node.html",
		"title": "Name Comp: Text Node",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_text_node\">#comp_text_node</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<!-- I'm not certain whether #comp_text_node requires a lot of testing outside of the #comp_name_from_content contexts, -->\n<!-- but I did think of one example where text node versus comment node may make a difference when joining text nodes with a space vs innerText. -->\n\n<!-- Skipped (class=\"ex\" removed) until https://github.com/w3c/accname/issues/193 is resolved -->\n<h2 class=\"ex-skipped\" data-expectedlabel=\"heading label\" data-testname=\"heading with text/comment/text nodes, no space\">\n  heading<!-- with non-text node splitting concatenated text nodes -->label<!-- [sic] no extra spaces around first comment -->\n</h2>\n\n\n<h2 class=\"ex\" data-expectedlabel=\"heading label\" data-testname=\"heading with text/comment/text nodes, with space\">\n  heading\n  <!-- comment node between text nodes with leading/trailing whitespace -->\n  label\n</h2>\n\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_text_node -->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_embedded_control.html",
		"title": "Name Comp: Embedded Control",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_embedded_control\">#comp_embedded_control</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<label>\n  <input type=\"checkbox\" data-expectedlabel=\"Flash the screen 3 times\" data-testname=\"checkbox label with embedded textfield\" class=\"ex\">\n  Flash the screen\n  <input value=\"3\" aria-label=\"number of times\" data-expectedlabel=\"number of times\" data-testname=\"label of embedded textfield inside checkbox label\" class=\"ex\"> times\n</label>\n\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_embedded_control\n - comp_embedded_control_textbox\n - comp_embedded_control_combobox_or_listbox\n - comp_embedded_control_range\n - comp_embedded_control_range_valuetext\n - comp_embedded_control_range_valuenow\n - comp_embedded_control_range_host_language_value\n\n-->",
		"name": null,
		"description": null,
		"selector": ".ex"
	},
	{
		"filename": "comp_host_language_label.html",
		"title": "Name Comp: Host Language Label",
		"html": "<h1>AccName: Host Language Label Tests</h1>\n<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_host_language_label\">#comp_host_language_label</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h2>HTML input with value, alt, etc.</h2>\n<input type=\"button\" value=\"button label\" data-expectedlabel=\"button label\" data-testname=\"html: input[type=button]\" class=\"ex\">\n<input type=\"image\" src=\"#\" alt=\"image input label\" data-expectedlabel=\"image input label\" data-testname=\"html: input[type=image]\" class=\"ex\">\n<input type=\"reset\" value=\"reset label\" data-expectedlabel=\"reset label\" data-testname=\"html: input[type=reset]\" class=\"ex\">\n<input type=\"submit\" value=\"submit label\" data-expectedlabel=\"submit label\" data-testname=\"html: input[type=submit]\" class=\"ex\">\n\n\n<h2>HTML input label/for</h2>\n<!-- above: input[type=button] -->\n<label for=\"cb\">checkbox label</label><input id=\"cb\" type=\"checkbox\" data-expectedlabel=\"checkbox label\" data-testname=\"html: label[for] input[type=checkbox]\" class=\"ex\"><br>\n<label for=\"co\">color label</label><input id=\"co\" type=\"color\" data-expectedlabel=\"color label\" data-testname=\"html: label[for] input[type=color]\" class=\"ex\"><br>\n<label for=\"da\">date label</label><input id=\"da\" type=\"date\" data-expectedlabel=\"date label\" data-testname=\"html: label[for] input[type=date]\" class=\"ex\"><br>\n<label for=\"dtl\">datetime-local label</label><input id=\"dtl\" type=\"date\" data-expectedlabel=\"datetime-local label\" data-testname=\"html: label[for] input[type=datetime-local]\" class=\"ex\"><br>\n<label for=\"em\">email label</label><input id=\"em\" type=\"email\" data-expectedlabel=\"email label\" data-testname=\"html: label[for] input[type=email]\" class=\"ex\"><br>\n\n<!-- todo: results for input[type=file] currently differ in all engines -->\n<!--\n<label for=\"fi\">file label</label><input id=\"fi\" type=\"file\" data-expectedlabel=\"file label\" data-testname=\"html: label[for] input[type=file]\" class=\"ex\"><br>\n-->\n\n<!-- skipped: input[type=hidden] for/id n/a -->\n<!-- above: input[type=image] -->\n<label for=\"mo\">month label</label><input id=\"mo\" type=\"month\" data-expectedlabel=\"month label\" data-testname=\"html: label[for] input[type=month]\" class=\"ex\"><br>\n<label for=\"n\">number label</label><input id=\"n\" type=\"number\" data-expectedlabel=\"number label\" data-testname=\"html: label[for] input[type=number]\" class=\"ex\"><br>\n<label for=\"pw\">password label</label><input id=\"pw\" type=\"password\" data-expectedlabel=\"password label\" data-testname=\"html: label[for] input[type=password]\" class=\"ex\"><br>\n<label for=\"ra\">radio label</label><input id=\"ra\" type=\"radio\" data-expectedlabel=\"radio label\" data-testname=\"html: label[for] input[type=radio]\" class=\"ex\"><br>\n<label for=\"rng\">range label</label><input id=\"rng\" type=\"range\" data-expectedlabel=\"range label\" data-testname=\"html: label[for] input[type=range]\" class=\"ex\"><br>\n<!-- input[type=reset] above -->\n<label for=\"search\">search label</label><input id=\"search\" type=\"search\" data-expectedlabel=\"search label\" data-testname=\"html: label[for] input[type=search]\" class=\"ex\"><br>\n<!-- input[type=submit] above -->\n<label for=\"tel\">tel label</label><input id=\"tel\" type=\"tel\" data-expectedlabel=\"tel label\" data-testname=\"html: label[for] input[type=tel]\" class=\"ex\"><br>\n<label for=\"t\">textfield label</label><input id=\"t\" type=\"text\" data-expectedlabel=\"textfield label\" data-testname=\"html: label[for] input[type=text]\" class=\"ex\"><br>\n<label for=\"time\">time label</label><input id=\"time\" type=\"time\" data-expectedlabel=\"time label\" data-testname=\"html: label[for] input[type=time]\" class=\"ex\"><br>\n<label for=\"url\">url label</label><input id=\"url\" type=\"url\" data-expectedlabel=\"url label\" data-testname=\"html: label[for] input[type=url]\" class=\"ex\"><br>\n<label for=\"week\">week label</label><input id=\"week\" type=\"week\" data-expectedlabel=\"week label\" data-testname=\"html: label[for] input[type=week]\" class=\"ex\"><br>\n\n\n<h2>HTML input label encapsulation</h2>\n<!-- above: input[type=button] -->\n<label><input type=\"checkbox\" data-expectedlabel=\"checkbox label\" data-testname=\"html: label input[type=checkbox] encapsulation\" class=\"ex\">checkbox label</label><br>\n<label><input type=\"color\" data-expectedlabel=\"color label\" data-testname=\"html: label input[type=color] encapsulation\" class=\"ex\">color label</label><br>\n<label><input type=\"date\" data-expectedlabel=\"date label\" data-testname=\"html: label input[type=date] encapsulation\" class=\"ex\">date label</label><br>\n<label><input type=\"datetime-local\" data-expectedlabel=\"datetime-local label\" data-testname=\"html: label input[type=datetime-local] encapsulation\" class=\"ex\">datetime-local label</label><br>\n<label><input type=\"email\" data-expectedlabel=\"email label\" data-testname=\"html: label input[type=email] encapsulation\" class=\"ex\">email label</label><br>\n\n<!-- todo: results for input[type=file] currently differ in all engines -->\n<!--\n<label><input type=\"file\" data-expectedlabel=\"file label\" data-testname=\"html: label input[type=file] encapsulation\" class=\"ex\">file label</label><br>\n-->\n\n<!-- skipped: input[type=hidden] n/a -->\n<!-- above: input[type=image] -->\n<label><input type=\"month\" data-expectedlabel=\"month label\" data-testname=\"html: label input[type=month] encapsulation\" class=\"ex\">month label</label><br>\n<label><input type=\"number\" data-expectedlabel=\"number label\" data-testname=\"html: label input[type=number] encapsulation\" class=\"ex\">number label</label><br>\n<label><input type=\"password\" data-expectedlabel=\"password label\" data-testname=\"html: label input[type=password] encapsulation\" class=\"ex\">password label</label><br>\n<label><input type=\"radio\" data-expectedlabel=\"radio label\" data-testname=\"html: label input[type=radio] encapsulation\" class=\"ex\">radio label</label><br>\n<label><input type=\"range\" data-expectedlabel=\"range label\" data-testname=\"html: label input[type=range] encapsulation\" class=\"ex\">range label</label><br>\n<!-- above: input[type=reset] -->\n<label><input type=\"search\" data-expectedlabel=\"search label\" data-testname=\"html: label input[type=search] encapsulation\" class=\"ex\">search label</label><br>\n<!-- above: input[type=submit] -->\n<label><input type=\"tel\" data-expectedlabel=\"tel label\" data-testname=\"html: label input[type=tel] encapsulation\" class=\"ex\">tel label</label><br>\n<label><input type=\"text\" data-expectedlabel=\"textfield label\" data-testname=\"html: label[for] input[type=text] encapsulation\" class=\"ex\">textfield label</label><br>\n<label><input type=\"time\" data-expectedlabel=\"time label\" data-testname=\"html: label input[type=time] encapsulation\" class=\"ex\">time label</label><br>\n<label><input type=\"url\" data-expectedlabel=\"url label\" data-testname=\"html: label input[type=url] encapsulation\" class=\"ex\">url label</label><br>\n<label><input type=\"week\" data-expectedlabel=\"week label\" data-testname=\"html: label input[type=week] encapsulation\" class=\"ex\">week label</label><br>\n\n\n<!-- skipped: skip textarea for v1 since all engines fail in different ways. need to verify label/textarea is expected. -->\n<!--\n<h2>HTML textarea</h2>\n<label for=\"ta\">textarea label</label><textarea data-expectedlabel=\"textarea label\" data-testname=\"html: label[for] textarea\" class=\"ex\"></textarea><br>\n<label for=\"ta\">textarea label<textarea data-expectedlabel=\"textarea label\" data-testname=\"html: textarea encapsulation\" class=\"ex\"></textarea></label><br>\n-->\n\n\n<h2>HTML select</h2>\n<!-- todo: select for/id -->\n<label for=\"select\">select label</label>\n<select id=\"select\" data-expectedlabel=\"select label\" data-testname=\"html: select for/id\" class=\"ex\">\n  <option>foo</option>\n</select>\n<br>\n<!-- select encapsulation -->\n<label>\n  select label\n  <select data-expectedlabel=\"select label\" data-testname=\"html: select encapsulation\" class=\"ex\">\n    <option>foo</option>\n  </select>\n</label><br>\n<!-- todo: select labeled by selected option. All engines currently fail in different ways. Not sure which is correct. -->\n<!--\n<select data-expectedlabel=\"select label\" data-testname=\"html: select w/selected option\" class=\"ex\">\n  <option>foo</option>\n  <option selected>select label</option>\n  <option>bar</option>\n</select>\n<br>\n-->\n\n\n<h2>HTML img/picture</h2>\n<!-- skipped: img:not([alt]) -->\n<!-- skipped: img[alt=\"\"] -->\n<img src=\"#\" alt=\"image label\" data-expectedlabel=\"image label\" data-testname=\"html: img[alt] (non-empty)\" class=\"ex\">\n<picture>\n  <source srcset=\"#\">\n  <img src=\"#\" alt=\"picture label\" data-expectedlabel=\"picture label\" data-testname=\"html: picture > img[alt] (non-empty)\" class=\"ex\">\n</picture>\n<!-- elsewhere: image map area alt -> ./fragile/area-alt.html -->\n\n\n<h2>HTML fieldset/legend</h2>\n<fieldset data-expectedlabel=\"fieldset legend label\" data-testname=\"html: fieldset > legend\" class=\"ex\">\n  <legend>fieldset legend label</legend>\n  <input type=\"text\"><br>\n</fieldset>\n\n\n<h2>HTML table/caption</h2>\n<table data-expectedlabel=\"table caption label\" data-testname=\"html: table > caption\" class=\"ex\">\n  <caption>table caption label</caption>\n  <tr><th>a</th><th>b</th><th>c</th></tr>\n  <tr><th>1</th><td>2</td><td>3</td></tr>\n</table>\n\n\n<h2>SVG title</h2>\n<svg viewbox=\"0 0 300 100\">\n  <circle cx=\"26\" cy=\"26\" r=\"25\" data-expectedlabel=\"circle label\" data-testname=\"svg: circle > title\" class=\"ex\">\n    <title>circle label</title>\n  </circle>\n\n  <rect x=\"60\" y=\"1\" width=\"50\" height=\"50\" data-expectedlabel=\"rect label\" data-testname=\"svg: rect > title\" class=\"ex\">\n    <title>rect label</title>\n  </rect>\n  <polygon points=\"100,100 150,25 150,75 200,0\" fill=\"none\" stroke=\"black\" data-expectedlabel=\"polygon label\" data-testname=\"svg: polygon > title\" class=\"ex\">\n    <title>polygon label</title>\n  </polygon>\n</svg><br>\n<svg viewbox=\"0 0 200 90\">\n  <g fill=\"white\" stroke=\"green\" stroke-width=\"5\" data-expectedlabel=\"group label\" data-testname=\"svg: g > title\" class=\"ex\">\n    <title>group label</title>\n    <circle cx=\"40\" cy=\"40\" r=\"25\" />\n    <circle cx=\"60\" cy=\"60\" r=\"25\" />\n  </g>\n</svg><br>\n<!-- todo: more SVG tests -->\n\n<!-- todo: Ruby? -->\n<!-- todo: MathML? -->\n<!-- todo: does HTML input[placeholder=\"foo\"] count as a host language labeling mechanism? -->",
		"name": null,
		"description": null,
		"selector": ".ex"
	}
];
