window.wpt = window.wpt || {};
window.wpt["accname"] = [
	{
		"filename": "description_test_case_666-manual.html",
		"title": "Description test case 666",
		"html": "<p>This test examines the ARIA properties for Description test case 666.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\" role=\"presentation\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_756-manual.html",
		"title": "Name test case 756",
		"html": "<p>This test examines the ARIA properties for Name test case 756.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_radio-label-embedded-combobox-manual.html",
		"title": "Name radio-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-combobox.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "description_test_case_one_valid_reference-manual.html",
		"title": "Description test case one valid reference",
		"html": "<p>This test examines the ARIA properties for Description test case one valid reference.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1 t2 t3\">\n  <div id=\"t2\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_754-manual.html",
		"title": "Name test case 754",
		"html": "<p>This test examines the ARIA properties for Name test case 754.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_test_case_659-manual.html",
		"title": "Name test case 659",
		"html": "<p>This test examines the ARIA properties for Name test case 659.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\" title=\"bar\"><input id=\"test\" type=\"text\" name=\"test\" title=\"buz\"></label>\n  </form>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_file-label-embedded-spinbutton-manual.html",
		"title": "Name file-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-spinbutton.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "description_test_case_664-manual.html",
		"title": "Description test case 664",
		"html": "<p>This test examines the ARIA properties for Description test case 664.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_from_content_of_labelledby_elements_one_of_which_is_hidden-manual.html",
		"title": "Name from content of labelledby elements one of which is hidden",
		"html": "<p>This test examines the ARIA properties for Name from content of labelledby elements one of which is hidden.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div>\n    <input id=\"test\" type=\"text\" aria-labelledby=\"lbl1 lbl2\" aria-describedby=\"descId\" />\n    <span>\n      <span aria-hidden=\"true\" id=\"lbl1\">Important</span>\n      <span class=\"hidden\">\n        <span aria-hidden=\"true\" id=\"lbl2\">stuff</span>\n      </span>\n    </span>\n  </div>\n  <div class=\"hidden\">\n    <div id=\"descId\">\n      <span aria-hidden=\"true\"><i> Hello, </i></span>\n      <span>My</span> name is\n      <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n      <span role=\"presentation\" aria-label=\"Eli\">\n        <span aria-label=\"Garaventa\">Zambino</span>\n      </span>\n      <span>the weird.</span>\n      (QED)\n      <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n      <table>\n        <tr>\n          <td>Where</td>\n          <td style=\"visibility:hidden;\"><div>in</div></td>\n          <td><div style=\"display:none;\">the world</div></td>\n          <td>are my marbles?</td>\n        </tr>\n      </table>\n    </div>\n  </div>",
		"selector": "#test",
		"name": "Important stuff"
	},
	{
		"filename": "name_file-label-embedded-menu-manual.html",
		"title": "Name file-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-menu.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen times."
	},
	{
		"filename": "name_test_case_757-manual.html",
		"title": "Name test case 757",
		"html": "<p>This test examines the ARIA properties for Name test case 757.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_test_case_602-manual.html",
		"title": "Name test case 602",
		"html": "<p>This test examines the ARIA properties for Name test case 602.</p>\n    <div id=\"test\" role=\"button\" title=\"Tag\" style=\"outline:medium solid black; width:2em; height:1em;\">\n  </div>",
		"selector": "#test",
		"name": "Tag"
	},
	{
		"filename": "name_test_case_738-manual.html",
		"title": "Name test case 738",
		"html": "<p>This test examines the ARIA properties for Name test case 738.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"password\" value=\"baz\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_test_case_733-manual.html",
		"title": "Name test case 733",
		"html": "<p>This test examines the ARIA properties for Name test case 733.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"password\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_600-manual.html",
		"title": "Name test case 600",
		"html": "<p>This test examines the ARIA properties for Name test case 600.</p>\n    <div id=\"test\">Div with text</div>",
		"selector": "#test",
		"name": ""
	},
	{
		"filename": "name_test_case_562-manual.html",
		"title": "Name test case 562",
		"html": "<p>This test examines the ARIA properties for Name test case 562.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img aria-labelledby=\"ID1 ID2 ID3\" id=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "peanuts popcorn apple jacks"
	},
	{
		"filename": "name_test_case_731-manual.html",
		"title": "Name test case 731",
		"html": "<p>This test examines the ARIA properties for Name test case 731.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "name_test_case_606-manual.html",
		"title": "Name test case 606",
		"html": "<p>This test examines the ARIA properties for Name test case 606.</p>\n    <a href=\"test.html\" id=\"test\" aria-labelledby=\"test ID1\" aria-label=\"Tag\"></a>\n  <p id=\"ID1\">foo</p>",
		"selector": "#test",
		"name": "Tag foo"
	},
	{
		"filename": "name_radio-label-embedded-select-manual.html",
		"title": "Name radio-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-select.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_password-label-embedded-select-manual.html",
		"title": "Name password-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-select.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_password-title-manual.html",
		"title": "Name password-title",
		"html": "<p>This test examines the ARIA properties for Name password-title.</p>\n    <input type=\"password\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_749-manual.html",
		"title": "Name test case 749",
		"html": "<p>This test examines the ARIA properties for Name test case 749.</p>\n    <input type=\"checkbox\" id=\"test\" title=\"crazy\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_726-manual.html",
		"title": "Name test case 726",
		"html": "<p>This test examines the ARIA properties for Name test case 726.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "States:"
	},
	{
		"filename": "name_radio-label-embedded-spinbutton-manual.html",
		"title": "Name radio-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-spinbutton.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\"  type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_551-manual.html",
		"title": "Name test case 551",
		"html": "<p>This test examines the ARIA properties for Name test case 551.</p>\n    <input type=\"text\" id=\"test\" title=\"crazy\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_543-manual.html",
		"title": "Name test case 543",
		"html": "<p>This test examines the ARIA properties for Name test case 543.</p>\n    <input type=\"reset\" id=\"test\"/>",
		"selector": "#test",
		"name": "Reset"
	},
	{
		"filename": "name_from_content_of_labelledby_element-manual.html",
		"title": "Name from content of labelledby element",
		"html": "<p>This test examines the ARIA properties for Name from content of labelledby element.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input id=\"test\" type=\"text\" aria-labelledby=\"lblId\" />\n  <div id=\"lblId\" >\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n    </span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n    <table>\n      <tr>\n        <td>Where</td>\n        <td style=\"visibility:hidden;\"><div>in</div></td>\n        <td><div style=\"display:none;\">the world</div></td>\n        <td>are my marbles?</td>\n      </tr>\n    </table>\n  </div>",
		"selector": "#test",
		"name": "My name is Eli the weird. (QED) Where are my marbles?"
	},
	{
		"filename": "name_test_case_544-manual.html",
		"title": "Name test case 544",
		"html": "<p>This test examines the ARIA properties for Name test case 544.</p>\n    <input type=\"button\" id=\"test\" value=\"foo\"/>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_619-manual.html",
		"title": "Name test case 619",
		"html": "<p>This test examines the ARIA properties for Name test case 619.</p>\n    <input type=\"password\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_612-manual.html",
		"title": "Name test case 612",
		"html": "<p>This test examines the ARIA properties for Name test case 612.</p>\n    <input type=\"password\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_762-manual.html",
		"title": "Name test case 762",
		"html": "<p>This test examines the ARIA properties for Name test case 762.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_test_case_721-manual.html",
		"title": "Name test case 721",
		"html": "<p>This test examines the ARIA properties for Name test case 721.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"password\" id=\"test\"/>",
		"selector": "#test",
		"name": "States:"
	},
	{
		"filename": "name_test_case_563-manual.html",
		"title": "Name test case 563",
		"html": "<p>This test examines the ARIA properties for Name test case 563.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "l peanuts"
	},
	{
		"filename": "name_file-label-embedded-combobox-manual.html",
		"title": "Name file-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-combobox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1 </li>\n    <li role=\"option\">2 </li>\n    <li role=\"option\">3 </li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_737-manual.html",
		"title": "Name test case 737",
		"html": "<p>This test examines the ARIA properties for Name test case 737.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"image\" id=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_758-manual.html",
		"title": "Name test case 758",
		"html": "<p>This test examines the ARIA properties for Name test case 758.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"password\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_file-label-owned-combobox-owned-listbox-manual.html",
		"title": "Name file-label-owned-combobox-owned-listbox",
		"html": "<p>This test examines the ARIA properties for Name file-label-owned-combobox-owned-listbox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash <span aria-owns=\"id1\">the screen</span> times.</label>\n  <div>\n    <div id=\"id1\" role=\"combobox\" aria-owns=\"id2\">\n      <div role=\"textbox\"></div>\n    </div>\n  </div>\n  <div>\n    <ul id=\"id2\" role=\"listbox\" style=\"list-style-type: none;\">\n      <li role=\"option\" >1 </li>\n      <li role=\"option\" aria-selected=\"true\">2 </li>\n      <li role=\"option\">3 </li>\n    </ul>\n  </div>",
		"selector": "#test",
		"name": "Flash the screen 2 times."
	},
	{
		"filename": "name_test_case_548-manual.html",
		"title": "Name test case 548",
		"html": "<p>This test examines the ARIA properties for Name test case 548.</p>\n    <label for=\"test\">\n  crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_740-manual.html",
		"title": "Name test case 740",
		"html": "<p>This test examines the ARIA properties for Name test case 740.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_test_case_611-manual.html",
		"title": "Name test case 611",
		"html": "<p>This test examines the ARIA properties for Name test case 611.</p>\n    <input id=\"test\" type=\"text\"/>\n  <label for=\"test\">foo</label>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_from_content-manual.html",
		"title": "Name from content",
		"html": "<p>This test examines the ARIA properties for Name from content.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div id=\"test\" role=\"link\" tabindex=\"0\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n    </span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n    <table>\n      <tr>\n        <td>Where</td>\n        <td style=\"visibility:hidden;\"><div>in</div></td>\n        <td><div style=\"display:none;\">the world</div></td>\n        <td>are my marbles?</td>\n      </tr>\n    </table>\n  </div>",
		"selector": "#test",
		"name": "My name is Eli the weird. (QED) Where are my marbles?"
	},
	{
		"filename": "name_checkbox-title-manual.html",
		"title": "Name checkbox-title",
		"html": "<p>This test examines the ARIA properties for Name checkbox-title.</p>\n    <input type=\"checkbox\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_621-manual.html",
		"title": "Name test case 621",
		"html": "<p>This test examines the ARIA properties for Name test case 621.</p>\n    <input type=\"file\" id=\"test\">\n  <label for=\"test\">foo <input type=\"text\" value=\"bar\"> baz</label>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "description_test_case_772-manual.html",
		"title": "Description test case 772",
		"html": "<p>This test examines the ARIA properties for Description test case 772.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "description_test_case_665-manual.html",
		"title": "Description test case 665",
		"html": "<p>This test examines the ARIA properties for Description test case 665.</p>\n    <div>\n    <img id=\"test\" aria-describedby=\"ID1\" src=\"test.png\">\n  </div>\n  <div id=\"ID1\" style=\"display:none\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_546-manual.html",
		"title": "Name test case 546",
		"html": "<p>This test examines the ARIA properties for Name test case 546.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"text\" id=\"test\"/>",
		"selector": "#test",
		"name": "States:"
	},
	{
		"filename": "description_1.0_combobox-focusable-manual.html",
		"title": "Description 1.0 combobox-focusable",
		"html": "<p>This test examines the ARIA properties for Description 1.0 combobox-focusable.</p>\n    <div id=\"test\" role=\"combobox\" tabindex=\"0\" title=\"Choose your language.\">\n    <span> English </span>\n  </div>",
		"selector": "#test",
		"description": ""
	},
	{
		"filename": "name_test_case_739-manual.html",
		"title": "Name test case 739",
		"html": "<p>This test examines the ARIA properties for Name test case 739.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_radio-label-embedded-menu-manual.html",
		"title": "Name radio-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-menu.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen times."
	},
	{
		"filename": "name_test_case_558-manual.html",
		"title": "Name test case 558",
		"html": "<p>This test examines the ARIA properties for Name test case 558.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"test\">\n  <img aria-labelledby=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": ""
	},
	{
		"filename": "name_link-mixed-content-manual.html",
		"title": "Name link-mixed-content",
		"html": "<p>This test examines the ARIA properties for Name link-mixed-content.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <div id=\"test\" role=\"link\" tabindex=\"0\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\"><span aria-label=\"Garaventa\">Zambino</span></span>\n    <span>the weird.</span>\n    (QED)\n    <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n  </div>",
		"selector": "#test",
		"name": "My name is Eli the weird. (QED)"
	},
	{
		"filename": "name_test_case_561-manual.html",
		"title": "Name test case 561",
		"html": "<p>This test examines the ARIA properties for Name test case 561.</p>\n    <img id=\"test\" aria-labelledby=\"test\" aria-label=\"1\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "1"
	},
	{
		"filename": "name_radio-title-manual.html",
		"title": "Name radio-title",
		"html": "<p>This test examines the ARIA properties for Name radio-title.</p>\n    <input type=\"radio\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_744-manual.html",
		"title": "Name test case 744",
		"html": "<p>This test examines the ARIA properties for Name test case 744.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_checkbox-label-embedded-textbox-manual.html",
		"title": "Name checkbox-label-embedded-textbox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-textbox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"textbox\" contenteditable>1</div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_730-manual.html",
		"title": "Name test case 730",
		"html": "<p>This test examines the ARIA properties for Name test case 730.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "name_test_case_751-manual.html",
		"title": "Name test case 751",
		"html": "<p>This test examines the ARIA properties for Name test case 751.</p>\n    <input type=\"file\" id=\"test\" title=\"crazy\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_file-label-inline-block-styles-manual.html",
		"title": "Name file-label-inline-block-styles",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-block-styles.</p>\n    <style>\n    label:before { content: \"This\"; display: block; }\n    label:after { content: \".\"; }\n  </style>\n  <label for=\"test\">is a test</label>\n  <input type=\"text\" id=\"test\"/>",
		"selector": "#test",
		"name": "This is a test."
	},
	{
		"filename": "description_link-with-label-manual.html",
		"title": "Description link-with-label",
		"html": "<p>This test examines the ARIA properties for Description link-with-label.</p>\n    <a id=\"test\" href=\"#\" aria-label=\"California\" title=\"San Francisco\" >United States</a>",
		"selector": "#test",
		"description": "San Francisco"
	},
	{
		"filename": "name_file-label-embedded-select-manual.html",
		"title": "Name file-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-select.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_734-manual.html",
		"title": "Name test case 734",
		"html": "<p>This test examines the ARIA properties for Name test case 734.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_605-manual.html",
		"title": "Name test case 605",
		"html": "<p>This test examines the ARIA properties for Name test case 605.</p>\n    <a href=\"test.html\" id=\"test\" aria-labelledby=\"ID1\" aria-label=\"Tag\">foo</a>\n  <p id=\"ID1\">bar</p>",
		"selector": "#test",
		"name": "bar"
	},
	{
		"filename": "name_test_case_566-manual.html",
		"title": "Name test case 566",
		"html": "<p>This test examines the ARIA properties for Name test case 566.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img id=\"test\" aria-label=\"\" aria-labelledby=\"test ID1 ID2 ID3\" alt=\"\" title=\"t\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "t peanuts popcorn apple jacks"
	},
	{
		"filename": "name_text-label-embedded-spinbutton-manual.html",
		"title": "Name text-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-spinbutton.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_759-manual.html",
		"title": "Name test case 759",
		"html": "<p>This test examines the ARIA properties for Name test case 759.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_image-title-manual.html",
		"title": "Name image-title",
		"html": "<p>This test examines the ARIA properties for Name image-title.</p>\n    <input type=\"image\" src=\"test.png\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_text-label-embedded-combobox-manual.html",
		"title": "Name text-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-combobox.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_608-manual.html",
		"title": "Name test case 608",
		"html": "<p>This test examines the ARIA properties for Name test case 608.</p>\n    <a href=\"test.html\" id=\"test\" title=\"Tag\"></a>",
		"selector": "#test",
		"name": "Tag"
	},
	{
		"filename": "name_1.0_combobox-focusable-alternative-manual.html",
		"title": "Name 1.0 combobox-focusable-alternative",
		"html": "<p>This test examines the ARIA properties for Name 1.0 combobox-focusable-alternative.</p>\n    <input id=\"test\" role=\"combobox\" type=\"text\" title=\"Choose your language\" value=\"English\">",
		"selector": "#test",
		"name": "Choose your language"
	},
	{
		"filename": "name_file-title-manual.html",
		"title": "Name file-title",
		"html": "<p>This test examines the ARIA properties for Name file-title.</p>\n    <input type=\"file\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_615-manual.html",
		"title": "Name test case 615",
		"html": "<p>This test examines the ARIA properties for Name test case 615.</p>\n    <input type=\"file\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_text-label-embedded-slider-manual.html",
		"title": "Name text-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-slider.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_596-manual.html",
		"title": "Name test case 596",
		"html": "<p>This test examines the ARIA properties for Name test case 596.</p>\n    <div id=\"test\" aria-labelledby=\"ID1\">foo</div>\n  <span id=\"ID1\">bar</span>",
		"selector": "#test",
		"name": "bar"
	},
	{
		"filename": "description_test_case_broken_reference-manual.html",
		"title": "Description test case broken reference",
		"html": "<p>This test examines the ARIA properties for Description test case broken reference.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">",
		"selector": "#test",
		"description": ""
	},
	{
		"filename": "name_file-label-embedded-slider-manual.html",
		"title": "Name file-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name file-label-embedded-slider.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_file-label-owned-combobox-manual.html",
		"title": "Name file-label-owned-combobox",
		"html": "<p>This test examines the ARIA properties for Name file-label-owned-combobox.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">Flash <span aria-owns=\"id1\">the screen</span> times.</label>\n  <div id=\"id1\">\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1 </li>\n    <li role=\"option\">2 </li>\n    <li role=\"option\">3 </li>\n      </ul>\n    </div>\n  </div>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_password-label-embedded-menu-manual.html",
		"title": "Name password-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-menu.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen times."
	},
	{
		"filename": "name_checkbox-label-embedded-combobox-manual.html",
		"title": "Name checkbox-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-combobox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_password-label-embedded-combobox-manual.html",
		"title": "Name password-label-embedded-combobox",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-combobox.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <div role=\"combobox\">\n      <div role=\"textbox\"></div>\n      <ul role=\"listbox\" style=\"list-style-type: none;\">\n        <li role=\"option\" aria-selected=\"true\">1</li>\n    <li role=\"option\">2</li>\n    <li role=\"option\">3</li>\n      </ul>\n    </div>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_539-manual.html",
		"title": "Name test case 539",
		"html": "<p>This test examines the ARIA properties for Name test case 539.</p>\n    <input type=\"button\" aria-label=\"Rich\" id=\"test\">",
		"selector": "#test",
		"name": "Rich"
	},
	{
		"filename": "name_test_case_616-manual.html",
		"title": "Name test case 616",
		"html": "<p>This test examines the ARIA properties for Name test case 616.</p>\n    <input type=\"image\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_559-manual.html",
		"title": "Name test case 559",
		"html": "<p>This test examines the ARIA properties for Name test case 559.</p>\n    <img id=\"test\" aria-labelledby=\"test\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": ""
	},
	{
		"filename": "name_test_case_760-manual.html",
		"title": "Name test case 760",
		"html": "<p>This test examines the ARIA properties for Name test case 760.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_test_case_748-manual.html",
		"title": "Name test case 748",
		"html": "<p>This test examines the ARIA properties for Name test case 748.</p>\n    <input type=\"password\" id=\"test\" title=\"crazy\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_607-manual.html",
		"title": "Name test case 607",
		"html": "<p>This test examines the ARIA properties for Name test case 607.</p>\n    <a href=\"test.html\" id=\"test\">ABC</a>",
		"selector": "#test",
		"name": "ABC"
	},
	{
		"filename": "name_test_case_564-manual.html",
		"title": "Name test case 564",
		"html": "<p>This test examines the ARIA properties for Name test case 564.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1 ID2\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "l peanuts popcorn"
	},
	{
		"filename": "name_test_case_752-manual.html",
		"title": "Name test case 752",
		"html": "<p>This test examines the ARIA properties for Name test case 752.</p>\n    <input type=\"image\" src=\"foo.jpg\" id=\"test\" title=\"crazy\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_test_case_728-manual.html",
		"title": "Name test case 728",
		"html": "<p>This test examines the ARIA properties for Name test case 728.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "name_checkbox-label-embedded-listbox-manual.html",
		"title": "Name checkbox-label-embedded-listbox",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-listbox.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <ul role=\"listbox\" style=\"list-style-type: none;\">\n      <li role=\"option\" aria-selected=\"true\">1</li>\n      <li role=\"option\">2</li>\n      <li role=\"option\">3</li>\n    </ul>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_password-label-embedded-slider-manual.html",
		"title": "Name password-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-slider.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_553-manual.html",
		"title": "Name test case 553",
		"html": "<p>This test examines the ARIA properties for Name test case 553.</p>\n    <style type=\"text/css\">\n    [data-after]:after { content: attr(data-after); }\n  </style>\n  <label for=\"test\" data-after=\"test content\"></label>\n  <input type=\"text\" id=\"test\">",
		"selector": "#test",
		"name": "test content"
	},
	{
		"filename": "name_password-label-embedded-spinbutton-manual.html",
		"title": "Name password-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name password-label-embedded-spinbutton.</p>\n    <input type=\"password\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_609-manual.html",
		"title": "Name test case 609",
		"html": "<p>This test examines the ARIA properties for Name test case 609.</p>\n    <input id=\"test\" type=\"text\" aria-labelledby=\"ID1 ID2 ID3\">\n  <p id=\"ID1\">foo</p>\n  <p id=\"ID2\">bar</p>\n  <p id=\"ID3\">baz</p>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_745-manual.html",
		"title": "Name test case 745",
		"html": "<p>This test examines the ARIA properties for Name test case 745.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_test_case_541-manual.html",
		"title": "Name test case 541",
		"html": "<p>This test examines the ARIA properties for Name test case 541.</p>\n    <div id=\"ID1\">Rich's button</div>\n  <input type=\"button\" aria-label=\"bar\" aria-labelledby=\"ID1\" id=\"test\"/>",
		"selector": "#test",
		"name": "Rich's button"
	},
	{
		"filename": "name_test_case_736-manual.html",
		"title": "Name test case 736",
		"html": "<p>This test examines the ARIA properties for Name test case 736.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_checkbox-label-multiple-label-alternative-manual.html",
		"title": "Name checkbox-label-multiple-label-alternative",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-multiple-label-alternative.</p>\n    <label for=\"test\">a test</label>\n  <label>This <input type=\"checkbox\" id=\"test\" /> is</label>",
		"selector": "#test",
		"name": "a test This is"
	},
	{
		"filename": "name_test_case_610-manual.html",
		"title": "Name test case 610",
		"html": "<p>This test examines the ARIA properties for Name test case 610.</p>\n    <input id=\"test\" type=\"text\" aria-label=\"bar\" aria-labelledby=\"ID1 test\">\n  <div id=\"ID1\">foo</div>",
		"selector": "#test",
		"name": "foo bar"
	},
	{
		"filename": "name_test_case_540-manual.html",
		"title": "Name test case 540",
		"html": "<p>This test examines the ARIA properties for Name test case 540.</p>\n    <div id=\"ID1\">Rich's button</div>\n  <input type=\"button\" aria-labelledby=\"ID1\" id=\"test\">",
		"selector": "#test",
		"name": "Rich's button"
	},
	{
		"filename": "name_checkbox-label-embedded-spinbutton-manual.html",
		"title": "Name checkbox-label-embedded-spinbutton",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-spinbutton.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"spinbutton\" type=\"number\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "description_title-same-element-manual.html",
		"title": "Description title-same-element",
		"html": "<p>This test examines the ARIA properties for Description title-same-element.</p>\n    <div><input aria-label=\"Name\" id=\"test\" title=\"Title\" aria-describedby=\"ID1\" type=\"text\"></div>\n  <div id=\"ID1\">Description</div>",
		"selector": "#test",
		"description": "Description"
	},
	{
		"filename": "name_test_case_603-manual.html",
		"title": "Name test case 603",
		"html": "<p>This test examines the ARIA properties for Name test case 603.</p>\n    <div id=\"ID1\">foo</div>\n  <a id=\"test\" href=\"test.html\" aria-labelledby=\"ID1\">bar</a>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_597-manual.html",
		"title": "Name test case 597",
		"html": "<p>This test examines the ARIA properties for Name test case 597.</p>\n    <div id=\"test\" aria-label=\"Tag\">foo</div>",
		"selector": "#test",
		"name": "Tag"
	},
	{
		"filename": "name_test_case_727-manual.html",
		"title": "Name test case 727",
		"html": "<p>This test examines the ARIA properties for Name test case 727.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"password\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "description_test_case_838-manual.html",
		"title": "Description test case 838",
		"html": "<p>This test examines the ARIA properties for Description test case 838.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\" style=\"visibility:hidden\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_660-manual.html",
		"title": "Name test case 660",
		"html": "<p>This test examines the ARIA properties for Name test case 660.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\" title=\"bar\"><input id=\"test\" type=\"password\" name=\"test\" title=\"buz\"></label>\n  </form>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_663a-manual.html",
		"title": "Name test case 663a",
		"html": "<p>This test examines the ARIA properties for Name test case 663a.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"image\" src=\"foo.jpg\" name=\"test\" title=\"bar\"></label>\n  </form>",
		"selector": "#test",
		"name": "foo baz"
	},
	{
		"filename": "description_from_content_of_describedby_element-manual.html",
		"title": "Description from content of describedby element",
		"html": "<p>This test examines the ARIA properties for Description from content of describedby element.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input id=\"test\" type=\"text\" aria-label=\"Important stuff\" aria-describedby=\"descId\" />\n  <div>\n    <div id=\"descId\">\n      <span aria-hidden=\"true\"><i> Hello, </i></span>\n      <span>My</span> name is\n      <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n      <span role=\"presentation\" aria-label=\"Eli\">\n        <span aria-label=\"Garaventa\">Zambino</span>\n      </span>\n      <span>the weird.</span>\n      (QED)\n      <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n      <table>\n        <tr>\n          <td>Where</td>\n          <td style=\"visibility:hidden;\"><div>in</div></td>\n          <td><div style=\"display:none;\">the world</div></td>\n          <td>are my marbles?</td>\n        </tr>\n      </table>\n    </div>\n  </div>",
		"selector": "#test",
		"description": "My name is Eli the weird. (QED) Where are my marbles?"
	},
	{
		"filename": "name_test_case_545-manual.html",
		"title": "Name test case 545",
		"html": "<p>This test examines the ARIA properties for Name test case 545.</p>\n    <input src=\"baz.html\" type=\"image\" id=\"test\" alt=\"foo\"/>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_547-manual.html",
		"title": "Name test case 547",
		"html": "<p>This test examines the ARIA properties for Name test case 547.</p>\n    <label for=\"test\">\n  foo\n  <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "name_test_case_617-manual.html",
		"title": "Name test case 617",
		"html": "<p>This test examines the ARIA properties for Name test case 617.</p>\n    <input type=\"checkbox\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_662-manual.html",
		"title": "Name test case 662",
		"html": "<p>This test examines the ARIA properties for Name test case 662.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"radio\" name=\"test\" title=\" bar \"></label>\n  </form>",
		"selector": "#test",
		"name": "foo baz"
	},
	{
		"filename": "name_test_case_761-manual.html",
		"title": "Name test case 761",
		"html": "<p>This test examines the ARIA properties for Name test case 761.</p>\n    <style>\n    label:after { content:\" fruit\"; }\n  </style>\n  <label for=\"test\">fancy</label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_link-with-label-manual.html",
		"title": "Name link-with-label",
		"html": "<p>This test examines the ARIA properties for Name link-with-label.</p>\n    <a id=\"test\" href=\"#\" aria-label=\"California\" title=\"San Francisco\" >United States</a>",
		"selector": "#test",
		"name": "California"
	},
	{
		"filename": "name_checkbox-label-multiple-label-manual.html",
		"title": "Name checkbox-label-multiple-label",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-multiple-label.</p>\n    <label>This <input type=\"checkbox\" id=\"test\" /> is</label>\n  <label for=\"test\">a test</label>",
		"selector": "#test",
		"name": "This is a test"
	},
	{
		"filename": "name_test_case_614-manual.html",
		"title": "Name test case 614",
		"html": "<p>This test examines the ARIA properties for Name test case 614.</p>\n    <input type=\"radio\" id=\"test\">\n  <label for=\"test\">foo</label>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_743-manual.html",
		"title": "Name test case 743",
		"html": "<p>This test examines the ARIA properties for Name test case 743.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"password\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_test_case_735-manual.html",
		"title": "Name test case 735",
		"html": "<p>This test examines the ARIA properties for Name test case 735.</p>\n    <label for=\"test\">\n    crazy\n    <select name=\"member\" size=\"1\" role=\"menu\" tabindex=\"0\">\n      <option role=\"menuitem\" value=\"beard\" selected=\"true\">clown</option>\n      <option role=\"menuitem\" value=\"scuba\">rich</option>\n    </select>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_checkbox-label-embedded-slider-manual.html",
		"title": "Name checkbox-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-slider.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_test_case_729-manual.html",
		"title": "Name test case 729",
		"html": "<p>This test examines the ARIA properties for Name test case 729.</p>\n    <label for=\"test\">\n    foo\n    <input type=\"text\" value=\"David\"/>\n  </label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "foo David"
	},
	{
		"filename": "description_test_case_557-manual.html",
		"title": "Description test case 557",
		"html": "<p>This test examines the ARIA properties for Description test case 557.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\" alt=\"a\" title=\"t\"/>",
		"selector": "#test",
		"description": "t"
	},
	{
		"filename": "name_test_case_750-manual.html",
		"title": "Name test case 750",
		"html": "<p>This test examines the ARIA properties for Name test case 750.</p>\n    <input type=\"radio\" id=\"test\" title=\"crazy\"/>",
		"selector": "#test",
		"name": "crazy"
	},
	{
		"filename": "name_text-label-embedded-select-manual.html",
		"title": "Name text-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-select.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_599-manual.html",
		"title": "Name test case 599",
		"html": "<p>This test examines the ARIA properties for Name test case 599.</p>\n    <div id=\"test\" aria-labelledby=\"ID0 ID1\" aria-label=\"Tag\">foo</div>\n  <span id=\"ID0\">bar</span>\n  <span id=\"ID1\">baz</span>",
		"selector": "#test",
		"name": "bar baz"
	},
	{
		"filename": "name_test_case_723-manual.html",
		"title": "Name test case 723",
		"html": "<p>This test examines the ARIA properties for Name test case 723.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"checkbox\" id=\"test\"/>",
		"selector": "#test",
		"name": "States:"
	},
	{
		"filename": "name_radio-label-embedded-slider-manual.html",
		"title": "Name radio-label-embedded-slider",
		"html": "<p>This test examines the ARIA properties for Name radio-label-embedded-slider.</p>\n    <input type=\"radio\" id=\"test\" />\n  <label for=\"test\">foo <input role=\"slider\" type=\"range\" value=\"5\" min=\"1\" max=\"10\" aria-valuenow=\"5\" aria-valuemin=\"1\" aria-valuemax=\"10\"> baz\n  </label>",
		"selector": "#test",
		"name": "foo 5 baz"
	},
	{
		"filename": "name_text-title-manual.html",
		"title": "Name text-title",
		"html": "<p>This test examines the ARIA properties for Name text-title.</p>\n    <input type=\"text\" id=\"test\" title=\"foo\" />",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "name_test_case_556-manual.html",
		"title": "Name test case 556",
		"html": "<p>This test examines the ARIA properties for Name test case 556.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\"/>",
		"selector": "#test",
		"name": "1"
	},
	{
		"filename": "name_test_case_620-manual.html",
		"title": "Name test case 620",
		"html": "<p>This test examines the ARIA properties for Name test case 620.</p>\n    <input type=\"radio\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_725-manual.html",
		"title": "Name test case 725",
		"html": "<p>This test examines the ARIA properties for Name test case 725.</p>\n    <label for=\"test\">File:</label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "File:"
	},
	{
		"filename": "name_test_case_613-manual.html",
		"title": "Name test case 613",
		"html": "<p>This test examines the ARIA properties for Name test case 613.</p>\n    <input type=\"checkbox\" id=\"test\">\n  <label for=\"test\">foo</label></body>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "description_test_case_773-manual.html",
		"title": "Description test case 773",
		"html": "<p>This test examines the ARIA properties for Description test case 773.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <div id=\"t1\" style=\"display:none\">foo</div>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_742-manual.html",
		"title": "Name test case 742",
		"html": "<p>This test examines the ARIA properties for Name test case 742.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_file-label-inline-hidden-elements-manual.html",
		"title": "Name file-label-inline-hidden-elements",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-hidden-elements.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input type=\"file\" id=\"test\" />\n  <label for=\"test\">\n    <span class=\"hidden\">1</span><span>2</span>\n    <span style=\"visibility: hidden;\">3</span><span>4</span>\n    <span hidden>5</span><span>6</span>\n    <span aria-hidden=\"true\">7</span><span>8</span>\n    <span aria-hidden=\"false\" class=\"hidden\">9</span><span>10</span>\n  </label>",
		"selector": "#test",
		"name": "2 4 6 8 10"
	},
	{
		"filename": "name_test_case_604-manual.html",
		"title": "Name test case 604",
		"html": "<p>This test examines the ARIA properties for Name test case 604.</p>\n    <a id=\"test\" href=\"test.html\" aria-label=\"Tag\">ABC</a>",
		"selector": "#test",
		"name": "Tag"
	},
	{
		"filename": "name_from_content_of_label-manual.html",
		"title": "Name from content of label",
		"html": "<p>This test examines the ARIA properties for Name from content of label.</p>\n    <style>\n    .hidden { display: none; }\n  </style>\n  <input type=\"text\" id=\"test\" />\n  <label for=\"test\" id=\"label\">\n    <span aria-hidden=\"true\"><i> Hello, </i></span>\n    <span>My</span> name is\n    <div><img src=\"file.jpg\" title=\"Bryan\" alt=\"\" role=\"presentation\" /></div>\n    <span role=\"presentation\" aria-label=\"Eli\">\n      <span aria-label=\"Garaventa\">Zambino</span>\n   </span>\n   <span>the weird.</span>\n   (QED)\n   <span class=\"hidden\"><i><b>and don't you forget it.</b></i></span>\n   <table>\n     <tr>\n       <td>Where</td>\n       <td style=\"visibility:hidden;\"><div>in</div></td>\n       <td><div style=\"display:none;\">the world</div></td>\n       <td>are my marbles?</td>\n    </tr>\n   </table>\n  </label>",
		"selector": "#test",
		"name": "My name is Eli the weird. (QED) Where are my marbles?"
	},
	{
		"filename": "name_test_case_557-manual.html",
		"title": "Name test case 557",
		"html": "<p>This test examines the ARIA properties for Name test case 557.</p>\n    <img id=\"test\" src=\"foo.jpg\" aria-label=\"1\" alt=\"a\" title=\"t\"/>",
		"selector": "#test",
		"name": "1"
	},
	{
		"filename": "name_1.0_combobox-focusable-manual.html",
		"title": "Name 1.0 combobox-focusable",
		"html": "<p>This test examines the ARIA properties for Name 1.0 combobox-focusable.</p>\n    <div id=\"test\" role=\"combobox\" tabindex=\"0\" title=\"Choose your language.\">\n    <span> English </span>\n  </div>",
		"selector": "#test",
		"name": "Choose your language."
	},
	{
		"filename": "name_checkbox-label-embedded-menu-manual.html",
		"title": "Name checkbox-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-menu.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n        <span role=\"menuitem\" hidden>2</span>\n    <span role=\"menuitem\" hidden>3</span>\n      </span>\n      times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen times."
	},
	{
		"filename": "name_heading-combobox-focusable-alternative-manual.html",
		"title": "Name  heading-combobox-focusable-alternative",
		"html": "<p>This test examines the ARIA properties for Name  heading-combobox-focusable-alternative.</p>\n    <h2 id=\"test\">\n  Country of origin:\n  <input role=\"combobox\" type=\"text\" title=\"Choose your country.\" value=\"United States\">\n  </h2>",
		"selector": "#test",
		"name": "Country of origin: United States"
	},
	{
		"filename": "name_test_case_753-manual.html",
		"title": "Name test case 753",
		"html": "<p>This test examines the ARIA properties for Name test case 753.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"password\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_text-label-embedded-menu-manual.html",
		"title": "Name text-label-embedded-menu",
		"html": "<p>This test examines the ARIA properties for Name text-label-embedded-menu.</p>\n    <input type=\"text\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <span role=\"menu\">\n      <span role=\"menuitem\" aria-selected=\"true\">1</span>\n      <span role=\"menuitem\" hidden>2</span>\n      <span role=\"menuitem\" hidden>3</span>\n    </span>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen times."
	},
	{
		"filename": "name_file-label-inline-block-elements-manual.html",
		"title": "Name file-label-inline-block-elements",
		"html": "<p>This test examines the ARIA properties for Name file-label-inline-block-elements.</p>\n    <input type=\"file\" id=\"test\" />\n  <label for=\"test\">W<i>h<b>a</b></i>t<br>is<div>your<div>name<b>?</b></div></div></label>",
		"selector": "#test",
		"name": "What is your name?"
	},
	{
		"filename": "name_test_case_724-manual.html",
		"title": "Name test case 724",
		"html": "<p>This test examines the ARIA properties for Name test case 724.</p>\n    <label for=\"test\">States:</label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "States:"
	},
	{
		"filename": "name_test_case_741-manual.html",
		"title": "Name test case 741",
		"html": "<p>This test examines the ARIA properties for Name test case 741.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_test_case_746-manual.html",
		"title": "Name test case 746",
		"html": "<p>This test examines the ARIA properties for Name test case 746.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"file\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_test_case_598-manual.html",
		"title": "Name test case 598",
		"html": "<p>This test examines the ARIA properties for Name test case 598.</p>\n    <div id=\"test\" aria-labelledby=\"ID1\" aria-label=\"Tag\">foo</div>\n  <span id=\"ID1\">bar</span>",
		"selector": "#test",
		"name": "bar"
	},
	{
		"filename": "name_test_case_560-manual.html",
		"title": "Name test case 560",
		"html": "<p>This test examines the ARIA properties for Name test case 560.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"test\">\n  <img aria-labelledby=\"test\" aria-label=\"1\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": ""
	},
	{
		"filename": "name_test_case_552-manual.html",
		"title": "Name test case 552",
		"html": "<p>This test examines the ARIA properties for Name test case 552.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"text\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "description_test_case_774-manual.html",
		"title": "Description test case 774",
		"html": "<p>This test examines the ARIA properties for Description test case 774.</p>\n    <img src=\"foo.jpg\" id=\"test\" alt=\"test\" aria-describedby=\"t1\">\n  <span id=\"t1\" role=\"presentation\">foo</span>",
		"selector": "#test",
		"description": "foo"
	},
	{
		"filename": "name_test_case_618-manual.html",
		"title": "Name test case 618",
		"html": "<p>This test examines the ARIA properties for Name test case 618.</p>\n    <input type=\"text\" id=\"test\">\n  <label for=\"test\">foo<input type=\"text\" value=\"bar\">baz</label>",
		"selector": "#test",
		"name": "foo bar baz"
	},
	{
		"filename": "name_test_case_661-manual.html",
		"title": "Name test case 661",
		"html": "<p>This test examines the ARIA properties for Name test case 661.</p>\n    <style type=\"text/css\">\n    label:before { content: \"foo\"; }\n    label:after { content: \"baz\"; }\n  </style>\n  <form>\n    <label for=\"test\"><input id=\"test\" type=\"checkbox\" name=\"test\" title=\" bar \"></label>\n  </form>",
		"selector": "#test",
		"name": "foo baz"
	},
	{
		"filename": "name_test_case_565-manual.html",
		"title": "Name test case 565",
		"html": "<p>This test examines the ARIA properties for Name test case 565.</p>\n    <input type=\"text\" value=\"peanuts\" id=\"ID1\">\n  <input type=\"text\" value=\"popcorn\" id=\"ID2\">\n  <input type=\"text\" value=\"apple jacks\" id=\"ID3\">\n  <img id=\"test\" aria-label=\"l\" aria-labelledby=\"test ID1 ID2 ID3\" alt= \"a\" title=\"t\" src=\"foo.jpg\"/>",
		"selector": "#test",
		"name": "l peanuts popcorn apple jacks"
	},
	{
		"filename": "name_checkbox-label-embedded-select-manual.html",
		"title": "Name checkbox-label-embedded-select",
		"html": "<p>This test examines the ARIA properties for Name checkbox-label-embedded-select.</p>\n    <input type=\"checkbox\" id=\"test\" />\n  <label for=\"test\">Flash the screen\n    <select size=\"1\">\n      <option selected=\"selected\">1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n    times.\n  </label>",
		"selector": "#test",
		"name": "Flash the screen 1 times."
	},
	{
		"filename": "name_test_case_747-manual.html",
		"title": "Name test case 747",
		"html": "<p>This test examines the ARIA properties for Name test case 747.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"image\" src=\"foo.jpg\" id=\"test\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_test_case_755-manual.html",
		"title": "Name test case 755",
		"html": "<p>This test examines the ARIA properties for Name test case 755.</p>\n    <style>\n    label:before { content:\"fancy \"; }\n  </style>\n  <label for=\"test\">fruit</label>\n  <input type=\"radio\" id=\"test\"/>",
		"selector": "#test",
		"name": "fancy fruit"
	},
	{
		"filename": "name_test_case_550-manual.html",
		"title": "Name test case 550",
		"html": "<p>This test examines the ARIA properties for Name test case 550.</p>\n    <label for=\"test\">\n    crazy\n    <div role=\"spinbutton\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n    </div>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy 4"
	},
	{
		"filename": "name_test_case_549-manual.html",
		"title": "Name test case 549",
		"html": "<p>This test examines the ARIA properties for Name test case 549.</p>\n    <label for=\"test\">\n    crazy\n     <div role=\"spinbutton\" aria-valuetext=\"Monday\" aria-valuemin=\"1\" aria-valuemax=\"7\" aria-valuenow=\"4\">\n     </div>\n  </label>\n  <input type=\"text\" id=\"test\" value=\"baz\"/>",
		"selector": "#test",
		"name": "crazy Monday"
	},
	{
		"filename": "name_test_case_601-manual.html",
		"title": "Name test case 601",
		"html": "<p>This test examines the ARIA properties for Name test case 601.</p>\n    <div id=\"test\" role=\"button\">foo</div>",
		"selector": "#test",
		"name": "foo"
	},
	{
		"filename": "comp_tooltip.html",
		"title": "Name Comp: Tooltip",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_tooltip\">#comp_tooltip</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<a href=\"#\" title=\"label\" data-expectedlabel=\"label\" data-testname=\"link label from tooltip\" class=\"ex\"><img src=\"#\" alt=\"\"></a>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_tooltip -->",
		"selector": ".ex"
	},
	{
		"filename": "comp_hidden_not_referenced.html",
		"title": "Name Comp: Hidden Not Referenced",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_hidden_not_referenced\">#comp_hidden_not_referenced</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h2 class=\"ex\" data-expectedlabel=\"heading label\" data-testname=\"heading with interior hidden node\">\n  heading\n  <span hidden>bogus</span>\n  label\n</h2>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_hidden_not_referenced -->",
		"selector": ".ex"
	},
	{
		"filename": "comp_label.html",
		"title": "Name Comp: Label",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_label\">#comp_label</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<div aria-label=\"label\" data-expectedlabel=\"label\" data-testname=\"label valid on group\" role=\"group\" class=\"ex\">x</div>\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_label -->",
		"selector": ".ex"
	},
	{
		"filename": "comp_name_from_content.html",
		"title": "Name Comp: Name From Content",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_name_from_content\">#comp_name_from_content</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h1 data-expectedlabel=\"label\" data-testname=\"heading name from content\" class=\"ex\">label</h1>\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_name_from_content\n  - comp_name_from_content_reset\n  - comp_name_from_content_pseudo_element\n  - comp_name_from_content_pseudo_element_before\n  - comp_name_from_content_pseudo_element_after\n  - comp_name_from_content_for_each_child\n  - comp_name_from_content_for_each_child_set_current\n  - comp_name_from_content_for_each_child_recursion\n  - comp_for_each_child_append\n  - comp_name_from_content_return\n\nTodo: test all remaining *recursive* cases in https://w3c.github.io/accname/#comp_recursive_name_from_content\n\n-->",
		"selector": ".ex"
	},
	{
		"filename": "comp_labelledby.html",
		"title": "Name Comp: Labelledby",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_labelledby\">#comp_labelledby</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<div role=\"group\" aria-labelledby=\"h\" class=\"ex\" data-expectedlabel=\"div group label\" data-testname=\"div group explicitly labelledby heading\">\n  <h2 id=\"h\">div group label</h2>\n  <p>text inside div group</p>\n</div>\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_labelledby\n  - comp_labelledby_reset\n  - comp_labelledby_foreach\n  - comp_labelledby_set_current\n  - comp_labelledby_recursion\n  - comp_labelledby_append\n  - comp_labelledby_return\n\n-->",
		"selector": ".ex"
	},
	{
		"filename": "comp_text_node.html",
		"title": "Name Comp: Text Node",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_text_node\">#comp_text_node</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<!-- I'm not certain whether #comp_text_node requires a lot of testing outside of the #comp_name_from_content contexts, -->\n<!-- but I did think of one example where text node versus comment node may make a difference when joining text nodes with a space vs innerText. -->\n\n<!-- Skipped (class=\"ex\" removed) until https://github.com/w3c/accname/issues/193 is resolved -->\n<h2 class=\"ex-skipped\" data-expectedlabel=\"heading label\" data-testname=\"heading with text/comment/text nodes, no space\">\n  heading<!-- with non-text node splitting concatenated text nodes -->label<!-- [sic] no extra spaces around first comment -->\n</h2>\n\n\n<h2 class=\"ex\" data-expectedlabel=\"heading label\" data-testname=\"heading with text/comment/text nodes, with space\">\n  heading\n  <!-- comment node between text nodes with leading/trailing whitespace -->\n  label\n</h2>\n\n\n<!-- Todo: test all remaining cases of https://w3c.github.io/accname/#comp_text_node -->",
		"selector": ".ex"
	},
	{
		"filename": "comp_embedded_control.html",
		"title": "Name Comp: Embedded Control",
		"html": "<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_embedded_control\">#comp_embedded_control</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<label>\n  <input type=\"checkbox\" data-expectedlabel=\"Flash the screen 3 times\" data-testname=\"checkbox label with embedded textfield\" class=\"ex\">\n  Flash the screen\n  <input value=\"3\" aria-label=\"number of times\" data-expectedlabel=\"number of times\" data-testname=\"label of embedded textfield inside checkbox label\" class=\"ex\"> times\n</label>\n\n\n<!--\n\nTodo: test all remaining cases of https://w3c.github.io/accname/#comp_embedded_control\n - comp_embedded_control_textbox\n - comp_embedded_control_combobox_or_listbox\n - comp_embedded_control_range\n - comp_embedded_control_range_valuetext\n - comp_embedded_control_range_valuenow\n - comp_embedded_control_range_host_language_value\n\n-->",
		"selector": ".ex"
	},
	{
		"filename": "comp_host_language_label.html",
		"title": "Name Comp: Host Language Label",
		"html": "<h1>AccName: Host Language Label Tests</h1>\n<p>Tests the <a href=\"https://w3c.github.io/accname/#comp_host_language_label\">#comp_host_language_label</a> portions of the AccName <em>Name Computation</em> algorithm.</p>\n\n<h2>HTML input with value, alt, etc.</h2>\n<input type=\"button\" value=\"button label\" data-expectedlabel=\"button label\" data-testname=\"html: input[type=button]\" class=\"ex\">\n<input type=\"image\" src=\"#\" alt=\"image input label\" data-expectedlabel=\"image input label\" data-testname=\"html: input[type=image]\" class=\"ex\">\n<input type=\"reset\" value=\"reset label\" data-expectedlabel=\"reset label\" data-testname=\"html: input[type=reset]\" class=\"ex\">\n<input type=\"submit\" value=\"submit label\" data-expectedlabel=\"submit label\" data-testname=\"html: input[type=submit]\" class=\"ex\">\n\n\n<h2>HTML input label/for</h2>\n<!-- above: input[type=button] -->\n<label for=\"cb\">checkbox label</label><input id=\"cb\" type=\"checkbox\" data-expectedlabel=\"checkbox label\" data-testname=\"html: label[for] input[type=checkbox]\" class=\"ex\"><br>\n<label for=\"co\">color label</label><input id=\"co\" type=\"color\" data-expectedlabel=\"color label\" data-testname=\"html: label[for] input[type=color]\" class=\"ex\"><br>\n<label for=\"da\">date label</label><input id=\"da\" type=\"date\" data-expectedlabel=\"date label\" data-testname=\"html: label[for] input[type=date]\" class=\"ex\"><br>\n<label for=\"dtl\">datetime-local label</label><input id=\"dtl\" type=\"date\" data-expectedlabel=\"datetime-local label\" data-testname=\"html: label[for] input[type=datetime-local]\" class=\"ex\"><br>\n<label for=\"em\">email label</label><input id=\"em\" type=\"email\" data-expectedlabel=\"email label\" data-testname=\"html: label[for] input[type=email]\" class=\"ex\"><br>\n\n<!-- todo: results for input[type=file] currently differ in all engines -->\n<!--\n<label for=\"fi\">file label</label><input id=\"fi\" type=\"file\" data-expectedlabel=\"file label\" data-testname=\"html: label[for] input[type=file]\" class=\"ex\"><br>\n-->\n\n<!-- skipped: input[type=hidden] for/id n/a -->\n<!-- above: input[type=image] -->\n<label for=\"mo\">month label</label><input id=\"mo\" type=\"month\" data-expectedlabel=\"month label\" data-testname=\"html: label[for] input[type=month]\" class=\"ex\"><br>\n<label for=\"n\">number label</label><input id=\"n\" type=\"number\" data-expectedlabel=\"number label\" data-testname=\"html: label[for] input[type=number]\" class=\"ex\"><br>\n<label for=\"pw\">password label</label><input id=\"pw\" type=\"password\" data-expectedlabel=\"password label\" data-testname=\"html: label[for] input[type=password]\" class=\"ex\"><br>\n<label for=\"ra\">radio label</label><input id=\"ra\" type=\"radio\" data-expectedlabel=\"radio label\" data-testname=\"html: label[for] input[type=radio]\" class=\"ex\"><br>\n<label for=\"rng\">range label</label><input id=\"rng\" type=\"range\" data-expectedlabel=\"range label\" data-testname=\"html: label[for] input[type=range]\" class=\"ex\"><br>\n<!-- input[type=reset] above -->\n<label for=\"search\">search label</label><input id=\"search\" type=\"search\" data-expectedlabel=\"search label\" data-testname=\"html: label[for] input[type=search]\" class=\"ex\"><br>\n<!-- input[type=submit] above -->\n<label for=\"tel\">tel label</label><input id=\"tel\" type=\"tel\" data-expectedlabel=\"tel label\" data-testname=\"html: label[for] input[type=tel]\" class=\"ex\"><br>\n<label for=\"t\">textfield label</label><input id=\"t\" type=\"text\" data-expectedlabel=\"textfield label\" data-testname=\"html: label[for] input[type=text]\" class=\"ex\"><br>\n<label for=\"time\">time label</label><input id=\"time\" type=\"time\" data-expectedlabel=\"time label\" data-testname=\"html: label[for] input[type=time]\" class=\"ex\"><br>\n<label for=\"url\">url label</label><input id=\"url\" type=\"url\" data-expectedlabel=\"url label\" data-testname=\"html: label[for] input[type=url]\" class=\"ex\"><br>\n<label for=\"week\">week label</label><input id=\"week\" type=\"week\" data-expectedlabel=\"week label\" data-testname=\"html: label[for] input[type=week]\" class=\"ex\"><br>\n\n\n<h2>HTML input label encapsulation</h2>\n<!-- above: input[type=button] -->\n<label><input type=\"checkbox\" data-expectedlabel=\"checkbox label\" data-testname=\"html: label input[type=checkbox] encapsulation\" class=\"ex\">checkbox label</label><br>\n<label><input type=\"color\" data-expectedlabel=\"color label\" data-testname=\"html: label input[type=color] encapsulation\" class=\"ex\">color label</label><br>\n<label><input type=\"date\" data-expectedlabel=\"date label\" data-testname=\"html: label input[type=date] encapsulation\" class=\"ex\">date label</label><br>\n<label><input type=\"datetime-local\" data-expectedlabel=\"datetime-local label\" data-testname=\"html: label input[type=datetime-local] encapsulation\" class=\"ex\">datetime-local label</label><br>\n<label><input type=\"email\" data-expectedlabel=\"email label\" data-testname=\"html: label input[type=email] encapsulation\" class=\"ex\">email label</label><br>\n\n<!-- todo: results for input[type=file] currently differ in all engines -->\n<!--\n<label><input type=\"file\" data-expectedlabel=\"file label\" data-testname=\"html: label input[type=file] encapsulation\" class=\"ex\">file label</label><br>\n-->\n\n<!-- skipped: input[type=hidden] n/a -->\n<!-- above: input[type=image] -->\n<label><input type=\"month\" data-expectedlabel=\"month label\" data-testname=\"html: label input[type=month] encapsulation\" class=\"ex\">month label</label><br>\n<label><input type=\"number\" data-expectedlabel=\"number label\" data-testname=\"html: label input[type=number] encapsulation\" class=\"ex\">number label</label><br>\n<label><input type=\"password\" data-expectedlabel=\"password label\" data-testname=\"html: label input[type=password] encapsulation\" class=\"ex\">password label</label><br>\n<label><input type=\"radio\" data-expectedlabel=\"radio label\" data-testname=\"html: label input[type=radio] encapsulation\" class=\"ex\">radio label</label><br>\n<label><input type=\"range\" data-expectedlabel=\"range label\" data-testname=\"html: label input[type=range] encapsulation\" class=\"ex\">range label</label><br>\n<!-- above: input[type=reset] -->\n<label><input type=\"search\" data-expectedlabel=\"search label\" data-testname=\"html: label input[type=search] encapsulation\" class=\"ex\">search label</label><br>\n<!-- above: input[type=submit] -->\n<label><input type=\"tel\" data-expectedlabel=\"tel label\" data-testname=\"html: label input[type=tel] encapsulation\" class=\"ex\">tel label</label><br>\n<label><input type=\"text\" data-expectedlabel=\"textfield label\" data-testname=\"html: label[for] input[type=text] encapsulation\" class=\"ex\">textfield label</label><br>\n<label><input type=\"time\" data-expectedlabel=\"time label\" data-testname=\"html: label input[type=time] encapsulation\" class=\"ex\">time label</label><br>\n<label><input type=\"url\" data-expectedlabel=\"url label\" data-testname=\"html: label input[type=url] encapsulation\" class=\"ex\">url label</label><br>\n<label><input type=\"week\" data-expectedlabel=\"week label\" data-testname=\"html: label input[type=week] encapsulation\" class=\"ex\">week label</label><br>\n\n\n<!-- skipped: skip textarea for v1 since all engines fail in different ways. need to verify label/textarea is expected. -->\n<!--\n<h2>HTML textarea</h2>\n<label for=\"ta\">textarea label</label><textarea data-expectedlabel=\"textarea label\" data-testname=\"html: label[for] textarea\" class=\"ex\"></textarea><br>\n<label for=\"ta\">textarea label<textarea data-expectedlabel=\"textarea label\" data-testname=\"html: textarea encapsulation\" class=\"ex\"></textarea></label><br>\n-->\n\n\n<h2>HTML select</h2>\n<!-- todo: select for/id -->\n<label for=\"select\">select label</label>\n<select id=\"select\" data-expectedlabel=\"select label\" data-testname=\"html: select for/id\" class=\"ex\">\n  <option>foo</option>\n</select>\n<br>\n<!-- select encapsulation -->\n<label>\n  select label\n  <select data-expectedlabel=\"select label\" data-testname=\"html: select encapsulation\" class=\"ex\">\n    <option>foo</option>\n  </select>\n</label><br>\n<!-- todo: select labeled by selected option. All engines currently fail in different ways. Not sure which is correct. -->\n<!--\n<select data-expectedlabel=\"select label\" data-testname=\"html: select w/selected option\" class=\"ex\">\n  <option>foo</option>\n  <option selected>select label</option>\n  <option>bar</option>\n</select>\n<br>\n-->\n\n\n<h2>HTML img/picture</h2>\n<!-- skipped: img:not([alt]) -->\n<!-- skipped: img[alt=\"\"] -->\n<img src=\"#\" alt=\"image label\" data-expectedlabel=\"image label\" data-testname=\"html: img[alt] (non-empty)\" class=\"ex\">\n<picture>\n  <source srcset=\"#\">\n  <img src=\"#\" alt=\"picture label\" data-expectedlabel=\"picture label\" data-testname=\"html: picture > img[alt] (non-empty)\" class=\"ex\">\n</picture>\n<!-- elsewhere: image map area alt -> ./fragile/area-alt.html -->\n\n\n<h2>HTML fieldset/legend</h2>\n<fieldset data-expectedlabel=\"fieldset legend label\" data-testname=\"html: fieldset > legend\" class=\"ex\">\n  <legend>fieldset legend label</legend>\n  <input type=\"text\"><br>\n</fieldset>\n\n\n<h2>HTML table/caption</h2>\n<table data-expectedlabel=\"table caption label\" data-testname=\"html: table > caption\" class=\"ex\">\n  <caption>table caption label</caption>\n  <tr><th>a</th><th>b</th><th>c</th></tr>\n  <tr><th>1</th><td>2</td><td>3</td></tr>\n</table>\n\n\n<h2>SVG title</h2>\n<svg viewbox=\"0 0 300 100\">\n  <circle cx=\"26\" cy=\"26\" r=\"25\" data-expectedlabel=\"circle label\" data-testname=\"svg: circle > title\" class=\"ex\">\n    <title>circle label</title>\n  </circle>\n\n  <rect x=\"60\" y=\"1\" width=\"50\" height=\"50\" data-expectedlabel=\"rect label\" data-testname=\"svg: rect > title\" class=\"ex\">\n    <title>rect label</title>\n  </rect>\n  <polygon points=\"100,100 150,25 150,75 200,0\" fill=\"none\" stroke=\"black\" data-expectedlabel=\"polygon label\" data-testname=\"svg: polygon > title\" class=\"ex\">\n    <title>polygon label</title>\n  </polygon>\n</svg><br>\n<svg viewbox=\"0 0 200 90\">\n  <g fill=\"white\" stroke=\"green\" stroke-width=\"5\" data-expectedlabel=\"group label\" data-testname=\"svg: g > title\" class=\"ex\">\n    <title>group label</title>\n    <circle cx=\"40\" cy=\"40\" r=\"25\" />\n    <circle cx=\"60\" cy=\"60\" r=\"25\" />\n  </g>\n</svg><br>\n<!-- todo: more SVG tests -->\n\n<!-- todo: Ruby? -->\n<!-- todo: MathML? -->\n<!-- todo: does HTML input[placeholder=\"foo\"] count as a host language labeling mechanism? -->",
		"selector": ".ex"
	}
];
window.wpt["wai-aria"] = [
	{
		"filename": "invalid-roles.html",
		"title": "Invalid Role Verification Tests",
		"html": "<p>Verifies Invalid Roles from <a href=\"https://w3c.github.io/aria/#document-handling_author-errors_roles\">9.1 Roles - handling author errors</a></p>\n\n<nav role=\"foo\" data-testname=\"invalid role name foo\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n<nav role=\"foo bar\" data-testname=\"multiple invalid role names\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n\n<!-- todo: additional invalid roles:\n\n- whitespace tests (including line breaks, tabs, zero-width space, braille space)\n- diacritics\n- zero-width joiners (e.g. ZWJ like emoji variants use)\n- non-western chars\n- RTL strings (Hebrew & Arabic)\n- escaped chars, URL-encoded chars\n- backslash closing quote and other obvious hack attempts\n- etc.\n\n-->",
		"selector": ".ex"
	},
	{
		"filename": "list-roles.html",
		"title": "List-related Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#list\">list</a> and related roles.</p>\n\n<div role=\"list\" data-testname=\"first simple list\" data-expectedrole=\"list\" class=\"ex\">\n  <div role=\"listitem\" data-testname=\"first simple listitem\" data-expectedrole=\"listitem\" class=\"ex\">x</div>\n  <div role=\"listitem\" data-testname=\"last simple listitem\" data-expectedrole=\"listitem\" class=\"ex\">x</div>\n</div>",
		"selector": ".ex"
	},
	{
		"filename": "synonym-roles.html",
		"title": "Region Role Verification Tests",
		"html": "<p>Tests synonym roles image/img and none/presentation via <a href=\"https://w3c.github.io/core-aam/#roleMappingComputedRole\">Core-AAM Computed Role</a>.</p>\n\n<!-- spec resolution https://github.com/w3c/core-aam/issues/166 -->\n\n<div role=\"none\" id=\"none\" data-expectedrole=\"none\" data-testname=\"none role == computedrole none\" class=\"ex\">x</div><!-- preferred -->\n<div role=\"presentation\" id=\"presentation\" data-expectedrole=\"none\" data-testname=\"synonym presentation role == computedrole none\" class=\"ex\">x</div><!-- synonym -->\n\n<div role=\"image\" id=\"image\" data-expectedrole=\"image\" data-testname=\"image role == computedrole image\" class=\"ex\">x</div><!-- preferred -->\n<div role=\"img\" id=\"img\" data-expectedrole=\"image\" data-testname=\"synonym img role == computedrole image\" class=\"ex\">x</div><!-- synonym -->\n\n<!-- `directory` synonym deprecated in ARIA 1.2; these examples should all return computedrole `list` -->\n<ul role=\"list\" id=\"list2\" data-expectedrole=\"list\" data-testname=\"list role == computedrole list\" class=\"ex\"><li>x</li></ul>\n<ul role=\"directory\" id=\"directory\" data-expectedrole=\"list\" data-testname=\"directory role == computedrole list\" class=\"ex\"><li>x</li></ul>\n<div role=\"directory\" id=\"div\" data-expectedrole=\"list\" data-testname=\"div w/directory role == computedrole list\" class=\"ex\"><div role=\"listitem\">x</div></div>",
		"selector": ".ex"
	},
	{
		"filename": "region-roles.html",
		"title": "Region Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#region\">region</a> and related roles, as well as the \"name from author\" rule in <a href=\"https://w3c.github.io/aria/#document-handling_author-errors_roles\">9.1 Roles - handling author errors</a>.</p>\n\n<!-- no label -->\n<nav role=\"region\" data-testname=\"region without label\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n\n<!-- w/ label -->\n<nav role=\"region\" data-testname=\"region with label\" data-expectedrole=\"region\" aria-label=\"x\" class=\"ex\">x</nav>",
		"selector": ".ex"
	},
	{
		"filename": "form-roles.html",
		"title": "Form Role Verification Tests",
		"html": "<p>Verifies <a href=\"https://w3c.github.io/aria/#document-handling_author-errors_roles\">9.1 Roles - handling author errors</a> and the <a href=\"https://w3c.github.io/aria/#form\">form</a> role.</p>\n\n\n<!-- no label -->\n<nav role=\"form\" data-testname=\"form without label\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n\n<!-- w/ label -->\n<nav role=\"form\" data-testname=\"form with label\" data-expectedrole=\"form\" aria-label=\"x\" class=\"ex\">x</nav>",
		"selector": ".ex"
	},
	{
		"filename": "listbox-roles.html",
		"title": "Listbox-related Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#listbox\">listbox</a> and related roles.</p>\n\n<div role=\"listbox\" data-testname=\"div role is listbox\" data-expectedrole=\"listbox\" class=\"ex\">\n    <div role=\"option\" data-testname=\"role is option (in div listbox)\" data-expectedrole=\"option\" class=\"ex\">x</div>\n    <div role=\"group\" data-testname=\"role is group (in div listbox)\" data-expectedrole=\"group\" class=\"ex\">\n        <span role=\"option\" data-testname=\"role is option (in group, in div listbox)\" data-expectedrole=\"option\" class=\"ex\">x</span>\n        <span role=\"option\">x</span>\n    </div>\n    <div role=\"option\">x</div>\n</div>\n\n<ul role=\"listbox\" data-testname=\"ul role is listbox\" data-expectedrole=\"listbox\" class=\"ex\">\n    <li role=\"option\" data-testname=\"li role is option (in ul listbox)\" data-expectedrole=\"option\" class=\"ex\">\n        x\n    </li>\n    <li role=\"option\">\n        x\n    </li>\n</ul>\n\n<nav role=\"option\" data-testname=\"orphaned option outside the context of listbox\" data-expectedrole=\"navigation\"\n     class=\"ex\">x\n</nav>",
		"selector": ".ex"
	},
	{
		"filename": "grid-roles.html",
		"title": "Grid Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#grid\">grid</a> and related roles.</p>\n\n  <div role=\"grid\" data-testname=\"role is grid\" data-expectedrole=\"grid\" class=\"ex\">\n    <div role=\"row\" data-testname=\"role is row (in grid)\" data-expectedrole=\"row\" class=\"ex\">\n      <span role=\"columnheader\" data-testname=\"role is columnheader (in row, in grid)\" data-expectedrole=\"columnheader\" class=\"ex\">x</span>\n      <span role=\"columnheader\">x</span>\n    </div>\n    <div role=\"row\">\n      <span role=\"rowheader\" data-testname=\"role is rowheader (in row, in grid)\" data-expectedrole=\"rowheader\" class=\"ex\">x</span>\n      <span role=\"gridcell\" data-testname=\"role is gridcell (in row, in grid)\" data-expectedrole=\"gridcell\" class=\"ex\">x</span>\n    </div>\n  </div>\n\n  <div role=\"grid\">\n    <div role=\"rowgroup\" data-testname=\"role is rowgroup (in grid)\" data-expectedrole=\"rowgroup\" class=\"ex\">\n      <div role=\"row\" data-testname=\"role is row (in rowgroup, in grid)\" data-expectedrole=\"row\" class=\"ex\">\n        <span role=\"columnheader\" data-testname=\"role is columnheader (in row, in rowgroup, in grid)\" data-expectedrole=\"columnheader\" class=\"ex\">x</span>\n        <span role=\"columnheader\">x</span>\n        <span role=\"columnheader\">x</span>\n      </div>\n    </div>\n    <div role=\"rowgroup\">\n      <div role=\"row\">\n        <span role=\"rowheader\" data-testname=\"role is rowheader (in row, in rowgroup, in grid)\" data-expectedrole=\"rowheader\" class=\"ex\">x</span>\n        <span role=\"gridcell\" data-testname=\"role is gridcell (in row, in rowgroup, in grid)\" data-expectedrole=\"gridcell\" class=\"ex\">x</span>\n        <span role=\"gridcell\">x</span>\n      </div>\n    </div>\n  </div>\n\n  <div role=\"gridcell\" data-testname=\"orphaned gridcell outside the context of row\" data-expectedrole=\"none\" class=\"ex\">x</div>\n  <div role=\"rowheader\" data-testname=\"orphaned rowheader outside the context of row\" data-expectedrole=\"none\" class=\"ex\">x</div>\n  <div role=\"columnheader\" data-testname=\"orphaned columnheader outside the context of row\" data-expectedrole=\"none\" class=\"ex\">x</div>",
		"selector": ".ex"
	},
	{
		"filename": "role_none_conflict_resolution.html",
		"title": "Role None Conflict Resolution Verification Tests",
		"html": "<p>Verifies <a href=\"https://w3c.github.io/aria/#conflict_resolution_presentation_none\"></a>conflict resolution</a> requirements for the ARIA <a href=\"https://w3c.github.io/aria/#none\">none</a> and <a href=\"https://w3c.github.io/aria/#presentation\">presentation</a> roles.</p>\n\n<!-- none with label(global) on header -->\n<h1 role=\"none\" data-testname=\"heading role none with global attr aria-label\" data-expectedrole=\"heading\" aria-label=\"x\" class=\"ex\">x</h1>\n\n<!-- none with label(global) on paragraph -->\n<p role=\"none\" data-testname=\"p role none with global attr aria-label (prohibited role)\" data-expectedrole=\"paragraph\" aria-label=\"x\" class=\"ex\">x</p>\n<p role=\"none\" data-testname=\"p role none without global attr aria-label (prohibited role)\" data-expectedrole=\"none\" class=\"ex\">x</p>\n\n<!-- none with focusable header -->\n<h1 role=\"none\" data-testname=\"focusable heading role none with tabindex=0\" data-expectedrole=\"heading\" tabindex=\"0\" class=\"ex\">x</h1>\n<h1 role=\"none\" data-testname=\"focusable heading role none with tabindex=-1\" data-expectedrole=\"heading\" tabindex=\"-1\" class=\"ex\">x</h1>\n<h1 role=\"none\" data-testname=\"non-focusable heading role none\" data-expectedrole=\"none\" class=\"ex\">x</h1>\n\n<!-- none with non-global-->\n<h1 role=\"none\" data-testname=\"none with non-global\" data-expectedrole=\"none\" class=\"ex\" aria-level=\"2\"> Sample Content </h1>",
		"selector": ".ex"
	},
	{
		"filename": "abstract-roles.html",
		"title": "Abstract Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#abstract_roles\">Abstract Roles</a> and related <a href=\"https://w3c.github.io/aria/#document-handling_author-errors_roles\">9.1 Roles - handling author errors</a></p>\n\n  <nav role=\"command\" data-testname=\"command role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"composite\" data-testname=\"composite role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"input\" data-testname=\"input role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"landmark\" data-testname=\"landmark role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"range\" data-testname=\"range role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"roletype\" data-testname=\"roletype role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"section\" data-testname=\"section role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"sectionhead\" data-testname=\"sectionhead role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"select\" data-testname=\"select role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"structure\" data-testname=\"structure role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"widget\" data-testname=\"widget role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n  <nav role=\"window\" data-testname=\"window role\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>",
		"selector": ".ex"
	},
	{
		"filename": "fallback-roles.html",
		"title": "Fallback Role Verification Tests",
		"html": "<p>Tests <a href=\"https://w3c.github.io/aria/#host_general_role\">8.1 Role Attribute</a> role token list selection and <a href=\"https://w3c.github.io/aria/#document-handling_author-errors_roles\">9.1 Roles - handling author errors</a>.</p>\n\n  <!-- known el and two known ARIA 1.0 roles -->\n  <nav role=\"region group\" data-testname=\"fallback role w/ region with no label\" data-expectedrole=\"group\" class=\"ex\">x</nav>\n  <nav role=\"region group\" data-testname=\"fallback role w/ region with label\" aria-label=\"x\" data-expectedrole=\"region\" class=\"ex\">x</nav>\n\n  <!-- known el and known ARIA 1.1 with 1.0 role backup -->\n  <div role=\"switch checkbox\" aria-checked=\"true\" data-testname=\"aria 1.1 switch role w/ fallback to aria 1.0 checkbox role\" aria-label=\"x\" data-expectedrole=\"switch\" class=\"ex\">x</div>\n\n  <!-- known el and invalid role token with valid backup -->\n  <div role=\"foo button\" data-testname=\"div[role=button] ignoring invalid foo role token\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>\n\n  <!-- unknown el and invalid role token with valid backup -->\n  <unknown role=\"foo button\" data-testname=\"unknown[role=button] ignoring invalid foo role token\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</unknown>\n\n  <!-- known el and invalid role(s) -->\n  <button role=\"foo\" data-testname=\"button ignoring single invalid role token\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</unknown>\n  <button role=\"foo bar\" data-testname=\"button ignoring multiple invalid role tokens\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</unknown>\n\n  <!-- known el with invalid punctuation -->\n  <div role=\"invalid, punctuation, tests, link, button\" data-testname=\"div[role=button] ignoring invalid foo role token including punctuation-contaminated known link role\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>\n\n\n\n  <!-- extra line breaks here to account for rendering of unicode diacritic etc char glitch tests -->\n\n\n\n  <div role=\"l\u0337\u0357\u030c\u0303\u035d\u0350\u0314\u031a\u0344\u0316\u033b\u0317\u0324\u033a\u031f\u0331\u035a\u0354\u0347\u034d\u0347\u032b\u0328\u0322\u032b\u031c\u0354\u0317\u031f\u0318\u032b\u031f\u0330\u0321\u033c\u0318i\u0335\u035d\u0342\u0358\u030d\u0350\u0314\u030d\u034c\u0310\u0307\u030f\u030e\u0328\u0332\u0321\u032f\u0320\u032e\u0348\u0356\u0325\u032e\u0332\u0353\u0326\u0317\u0317\u0331\u031e\u034d\u0317\u032a\u0359\u0347\u035an\u0336\u0300\u0342\u0343\u030b\u030a\u031c\u0332\u032b\u0347\u032e\u0349\u032c\u035c\u034e\u034e\u0355\u031d\u0331\u0354\u0319\u0328\u0331\u0326\u0327\u0330\u0326\u0320\u0330\u0322\u0323\u031dk\u0337\u0300\u0352\u0306\u0351\u0312\u0305\u0315\u0351\u0313\u0312\u0342\u033d\u0344\u033d\u0309\u0358\u0340\u035d\u0318\u0333\u0355\u0330\u034e\u032e\u0327\u0320\u0327\u0318\u032a\u0327\u0328\u0347\u0355\u0325\u032d\u035c\u033c\u033c\u031c\u0324\u032b\u0328\u0325\u0328\u033c\u0324\u0330\u0326\u0356\u032a \u0337\u0350\u0342\u0301\u035b\u0303\u0341\u030a\u0308\u034c\u0315\u0304\u0343\u031a\u030c\u0302\u035d\u0308\u0307\u0340\u030c\u0344\u0301\u0300\u0344\u030d\u0344\u0307\u0304\u030a\u0360\u0314\u0352\u033e\u033e\u0307\u0301\u0352\u033d\u0342\u033e\u032e\u0326\u0345\u0318\u0353\u032b\u031c\u0355\u0356\u0330\u035c\u0319\u0318\u0345\u0353\u0321\u033c\u034e\u0333\u0339\u0347\u032e\u035cg\u0338\u034b\u0351\u035d\u0311\u0315\u0343\u035b\u0313\u0309\u0314\u0309\u0351\u0307\u0301\u0344\u0309\u0303\u0301\u0311\u030d\u035d\u031b\u0302\u0315\u0312\u0350\u031a\u035b\u0357\u0311\u030f\u0343\u031a\u033e\u034c\u0308\u0305\u0301\u0307\u033a\u0328\u0326\u0323\u0327\u0347\u0348\u0359\u0347\u0327\u0327\u034e\u0355\u0320\u031e\u0333\u0339\u0345\u0327\u0323r\u0336\u030b\u033e\u0340\u0358\u0360\u0301\u0341\u0312\u0340\u0340\u0351\u0358\u030e\u0340\u030c\u031b\u0308\u0300\u030d\u0360\u0302\u030f\u030a\u030e\u0350\u0358\u0352\u0357\u0357\u0340\u0324\u0332\u0318\u032e\u031f\u032d\u0332o\u0334\u030f\u030a\u034b\u0350\u0310\u0346\u0358\u0308\u033f\u0312\u030a\u0304\u0351\u0344\u0314\u034b\u0314\u0303\u0350\u0343\u0313\u0360\u035b\u0358\u0301\u034a\u0309\u0351\u030a\u0314\u0346\u031e\u031d\u0320\u0319\u0327\u032c\u0321\u0322\u0317\u034d\u034d\u0349\u0321\u033a\u0354\u0359\u0322\u032b\u031d\u0330\u032e\u031c\u0329\u035c\u0319\u0345\u0333\u0349\u033b\u033b\u033c\u034du\u0334\u0307\u0308\u0360\u0352\u0331\u032f\u031e\u031e\u031e\u033a\u033c\u0333\u0333\u035a\u031ep\u0336\u035d\u0302\u0310\u030c\u030f\u034c\u0344\u035d\u0357\u033e\u035d\u034c\u033f\u0313\u0358\u0352\u030b\u0306\u0346\u031a\u033e\u035b\u031b\u0310\u0344\u0343\u034b\u0300\u0349\u032e\u0319\u032f\u032e\u0331\u0349\u0316\u035a\u0349\u0329\u0331\u033a\u0329\u0326\u033a\u0348\u032b\u034d\u0354\u0332\u0323\u0317\u031f\u031c \u0336\u030d\u0344\u0357\u0350\u0300\u030a\u030f\u035b\u0303\u0344\u034b\u035d\u0305\u0354\u035a\u0329\u032c\u0348  button\" data-testname=\"div[role=button] ignoring invalid unicode diacritics etc on link and group role tokens\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>\n\n\n  <!-- known el and known role with whitespace edge cases -->\n  <div role=\" button\" data-testname=\"div[role=button] ignoring tab char\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>\n  <div role=\"\nbutton\" data-testname=\"div[role=button] ignoring line break\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>\n  <div role=\"\u2800 button\" data-testname=\"div[role=button] ignoring braille whitespace char\" aria-label=\"x\" data-expectedrole=\"button\" class=\"ex\">x</div>",
		"selector": ".ex"
	}
];
window.wpt["graphics-aria"] = [
	{
		"filename": "graphics-roles.html",
		"title": "",
		"html": "<p>Tests the concrete roles defined in the <a href=\"https://www.w3.org/TR/graphics-aria-1.0/#role_definitions\">ARIA Graphics Module</a> role definitions.</p>\n\n<div role=\"graphics-document\" data-expectedrole=\"graphics-document\" class=\"ex\">x</div>\n<div role=\"graphics-object\" data-expectedrole=\"graphics-object\" class=\"ex\">x</div>\n<div role=\"graphics-symbol\" data-expectedrole=\"graphics-symbol\" class=\"ex\">x</div>",
		"selector": ".ex"
	}
];
window.wpt["dpub-aria"] = [];
window.wpt["core-aam"] = [
	{
		"filename": "aria-label-manual.html",
		"title": "aria-label",
		"html": "<p>This test examines the ARIA properties for aria-label.</p>\n    <div role='group' id='test' aria-label='hello world'>content</div>",
		"selector": "#test",
		"name": "hello world"
	},
	{
		"filename": "aria-labelledby-manual.html",
		"title": "aria-labelledby",
		"html": "<p>This test examines the ARIA properties for aria-labelledby.</p>\n    <div role='group' id='test' aria-labelledby='label'>content</div>\n  <div id='label'>hello world</div>",
		"selector": "#test",
		"name": "hello world"
	},
	{
		"filename": "aria-describedby-manual.html",
		"title": "aria-describedby",
		"html": "<p>This test examines the ARIA properties for aria-describedby.</p>\n    <div role='group' id='test' aria-describedby='description'>content</div>\n  <div id='description'>hello world</div>",
		"selector": "#test",
		"description": "hello world"
	},
	{
		"filename": "rowgroup-no-name-from-contents-manual.html",
		"title": "rowgroup no name from contents",
		"html": "<p>This test examines the ARIA properties for rowgroup with no author-provided name.</p>\n    <div role='grid'>\n    <div role='rowgroup' id='test'>\n      <div role='row'>\n        <div role='cell'>content</div>\n      </div>\n      <div role='row'>\n        <div role='cell'>content</div>\n      </div>\n    </div>\n  </div>",
		"selector": "#test",
		"name": ""
	}
];
window.wpt["graphics-aam"] = [];
window.wpt["dpub-aam"] = [];
window.wpt["html-aam"] = [
	{
		"filename": "roles.html",
		"title": "HTML-AAM Role Verification Tests",
		"html": "<p>Tests the computedrole mappings defined in <a href=\"https://w3c.github.io/html-aam/\">HTML-AAM</a>. Most test names correspond to a unique ID defined in the spec.<p>\n\n<p>These should remain in alphabetical order, and include all HTML tagnames. If a tag is not tested here, include a pointer to the file where it is tested, such as: <code>&lt;!-- caption -&gt; ./table-roles.html --&gt;</code></p>\n\n\n<!-- a (w/ and w/o href) -> ./roles-contextual.html -->\n<!-- todo: abbr -->\n<address data-testname=\"el-address\" data-expectedrole=\"group\" class=\"ex\">x</address>\n<!-- area -> ./fragile/area-role.html -->\n<article data-testname=\"el-article\" data-expectedrole=\"article\" class=\"ex\">x</article>\n<!-- aside -> ./roles-contextual.html -->\n<!-- todo: audio -->\n<!-- todo: autonomous custom element -->\n<!-- b -> ./roles-generic.html -->\n<!-- base (not mapped) -->\n<!-- bdi -> ./roles-generic.html -->\n<!-- bdo -> ./roles-generic.html -->\n<blockquote data-testname=\"el-blockquote\" data-expectedrole=\"blockquote\" class=\"ex\">x</blockquote>\n<!-- todo: body -->\n<!-- br (not mapped) -->\n<button data-testname=\"el-button\" data-expectedrole=\"button\" class=\"ex\">x</button>\n<!-- todo: canvas -->\n<!-- caption -> ./table-roles.html -->\n<!-- todo: cite -->\n<code data-testname=\"el-code\" data-expectedrole=\"code\" class=\"ex\">x</code>\n<!-- todo: col -->\n<!-- todo: colgroup -->\n<!-- data -> ./roles-generic.html -->\n<!-- todo: datalist -->\n\n<!-- el-dd -->\n<dl>\n  <dt>x</dt>\n  <dd data-testname=\"el-dd\" data-expectedrole=\"definition\" class=\"ex\">x</dd>\n</dl>\n\n<del data-testname=\"el-del\" data-expectedrole=\"deletion\" class=\"ex\">x</del>\n<details data-testname=\"el-details\" data-expectedrole=\"group\" class=\"ex\"><summary>x</summary>x</details>\n<dfn data-testname=\"el-dfn\" data-expectedrole=\"term\" class=\"ex\">x</dfn>\n<!-- div -> ./roles-generic.html -->\n<!-- todo: dl -->\n\n<!-- el-dt -->\n<dl>\n  <dt data-testname=\"el-dt\" data-expectedrole=\"term\" class=\"ex\">x</dt>\n  <dd>x</dd>\n</dl>\n\n<em data-testname=\"el-em\" data-expectedrole=\"emphasis\" class=\"ex\">x</em>\n<!-- todo: embed -->\n<fieldset data-testname=\"el-fieldset\" data-expectedrole=\"group\" class=\"ex\"><legend>x</legend><input></fieldset>\n<!-- todo: figcaption -->\n<figure data-testname=\"el-figure\" data-expectedrole=\"figure\" class=\"ex\"><img src=\"#\" alt=\"x\"><figcaption>x</figcaption></figure>\n<!-- footer -> ./roles-contextual.html -->\n<form data-testname=\"el-form\" data-expectedrole=\"form\" class=\"ex\"><input></form>\n<!-- todo: form-associated custom element -->\n\n<!-- el-h1-h6 -->\n<h1 data-testname=\"el-h1\" data-expectedrole=\"heading\" class=\"ex\">x</h1>\n<h2 data-testname=\"el-h2\" data-expectedrole=\"heading\" class=\"ex\">x</h2>\n<h3 data-testname=\"el-h3\" data-expectedrole=\"heading\" class=\"ex\">x</h3>\n<h4 data-testname=\"el-h4\" data-expectedrole=\"heading\" class=\"ex\">x</h4>\n<h5 data-testname=\"el-h5\" data-expectedrole=\"heading\" class=\"ex\">x</h5>\n<h6 data-testname=\"el-h6\" data-expectedrole=\"heading\" class=\"ex\">x</h6>\n\n<!-- head (not mapped) -->\n\n<!-- header -> ./roles-contextual.html -->\n<hgroup data-testname=\"el-hgroup\" data-expectedrole=\"group\" class=\"ex\"><h1>x</h1></hgroup>\n<hr data-testname=\"el-hr\" data-expectedrole=\"separator\" class=\"ex\">\n<!-- todo: html -->\n<!-- i -> ./roles-generic.html -->\n<!-- todo: iframe -->\n<img src=\"#\" alt=\"x\" data-testname=\"el-img\" data-expectedrole=\"image\" class=\"ex\">\n\n<!-- Implementations might also be valid if ignored rather than returning 'none' for the following images. -->\n<img src=\"#\" alt data-testname=\"el-img-alt-no-value\" data-expectedrole=\"none\" class=\"ex\">\n<img src=\"#\" alt=\"\" data-testname=\"el-img-empty-alt\" data-expectedrole=\"none\" class=\"ex\">\n\n<input type=\"button\" value=\"x\" data-testname=\"el-input-button\" data-expectedrole=\"button\" class=\"ex\">\n<input type=\"checkbox\" data-testname=\"el-input-checkbox\" data-expectedrole=\"checkbox\" class=\"ex\">\n<!-- todo: input type=\"color\" -->\n<!-- todo: input type=\"date\" -->\n<!-- todo: input type=\"datetime\" -->\n<!-- todo: input type=\"datetime-local\" -->\n<input type=\"email\" data-testname=\"el-input-email\" data-expectedrole=\"textbox\" class=\"ex\">\n<!-- todo: input type=\"file\" -->\n<!-- input type=\"hidden\" (not mapped) -->\n<!-- todo: input type=\"month\" -->\n\n<!-- Blocked: HTML-AAM Issue #467 -->\n<!-- <input type=\"number\" data-testname=\"el-input-number\" data-expectedrole=\"spinbutton\" class=\"ex\"> -->\n\n<!-- todo: input type=\"password\" -->\n<input type=\"radio\" data-testname=\"el-input-radio\" data-expectedrole=\"radio\" class=\"ex\">\n<input type=\"range\" data-testname=\"el-input-range\" data-expectedrole=\"slider\" class=\"ex\">\n<input type=\"reset\" value=\"x\" data-testname=\"el-input-reset\" data-expectedrole=\"button\" class=\"ex\">\n<input type=\"search\" data-testname=\"el-input-search\" data-expectedrole=\"searchbox\" class=\"ex\">\n<input type=\"submit\" value=\"x\" data-testname=\"el-input-submit\" data-expectedrole=\"button\" class=\"ex\">\n<input type=\"tel\" data-testname=\"el-input-tel\" data-expectedrole=\"textbox\" class=\"ex\">\n<input type=\"text\" data-testname=\"el-input-text\" data-expectedrole=\"textbox\" class=\"ex\">\n<!-- todo: input (type attribute in the Text, Search, Telephone, URL, or E-mail states with a suggestions source element) -->\n<!-- todo: input type=\"time\" -->\n<input type=\"url\" data-testname=\"el-input-url\" data-expectedrole=\"textbox\" class=\"ex\">\n<!-- todo: input type=\"week\" -->\n<ins data-testname=\"el-ins\" data-expectedrole=\"insertion\" class=\"ex\">x</ins>\n<!-- todo: kbd -->\n<!-- todo: label -->\n<!-- todo: legend -->\n\n<!-- el-li -->\n<!-- li (orphaned) -> ./roles-generic.html -->\n<ul><li data-testname=\"el-li-in-ul\" data-expectedrole=\"listitem\" class=\"ex\">x</li><li>x</li></ul>\n<ol><li data-testname=\"el-li-in-ol\" data-expectedrole=\"listitem\" class=\"ex\">x</li><li>x</li></ol>\n\n<!-- link (not mapped) -->\n<main data-testname=\"el-main\" data-expectedrole=\"main\" class=\"ex\">x</main>\n<!-- map (not mapped) -->\n<mark data-testname=\"el-mark\" data-expectedrole=\"mark\" class=\"ex\">x</mark>\n<!-- todo: math -->\n<menu data-testname=\"el-menu\" data-expectedrole=\"list\" class=\"ex\"><li>x</li></menu>\n<!-- meta (not mapped) -->\n<meter data-testname=\"el-meter\" data-expectedrole=\"meter\" class=\"ex\" min=\"0\" max=\"100\" low=\"20\" high=\"80\" optimum=\"60\" value=\"50\">x</meter>\n<nav data-testname=\"el-nav\" data-expectedrole=\"navigation\" class=\"ex\">x</nav>\n<!-- noscript (not mapped) -->\n<!-- object (not mapped) -->\n<ol data-testname=\"el-ol\" data-expectedrole=\"list\" class=\"ex\"><li>x</li><li>x</li></ol>\n\n<!-- optgroup -> ./fragile/optgroup-role.html -->\n\n<!-- option -->\n<select>\n  <option data-testname=\"el-option\" data-expectedrole=\"option\" class=\"ex\">x</option>\n  <option>x</option>\n</select>\n\n<output data-testname=\"el-output\" data-expectedrole=\"status\" class=\"ex\">x</output>\n<p data-testname=\"el-p\" data-expectedrole=\"paragraph\" class=\"ex\">x</p>\n<!-- param (not mapped) -->\n<!-- todo: picture -->\n<!-- pre -> ./roles-generic.html -->\n<progress data-testname=\"el-progress\" data-expectedrole=\"progressbar\" class=\"ex\">x</progress>\n<!-- q -> ./roles-generic.html -->\n<!-- todo: rp -> /ruby-aam? -->\n<!-- todo: rt -> /ruby-aam? -->\n<!-- todo: ruby -> /ruby-aam? -->\n<s data-testname=\"el-s\" data-expectedrole=\"deletion\" class=\"ex\">x</s>\n<!-- samp -> ./roles-generic.html -->\n<!-- script (not mapped) -->\n<search data-testname=\"el-search\" data-expectedrole=\"search\" class=\"ex\">x</search>\n<!-- section -> ./roles-contextual.html -->\n\n<!-- Blocked: HTML-AAM Issue #467 -->\n<!-- <select data-testname=\"el-select-combobox\" data-expectedrole=\"combobox\" class=\"ex\"><option>a1</option><option>a2</option></select>-->\n\n<select data-testname=\"el-select-listbox\" size=\"2\" data-expectedrole=\"listbox\" class=\"ex\"><option>b1</option><option>b2</option></select>\n\n<!-- slot (not mapped) -->\n<!-- small -> ./roles-generic.html -->\n<!-- source (not mapped) -->\n<!-- span -> ./roles-generic.html -->\n<strong data-testname=\"el-strong\" data-expectedrole=\"strong\" class=\"ex\">x</strong>\n<!-- style (not mapped) -->\n<sub data-testname=\"el-sub\" data-expectedrole=\"subscript\" class=\"ex\">x</sub>\n<!-- todo: summary -->\n<sup data-testname=\"el-sup\" data-expectedrole=\"superscript\" class=\"ex\">x</sup>\n<!-- todo: svg (see /graphics-aam and /svg-aam tests) -->\n<!-- table -> ./table-roles.html -->\n<!-- tbody -> ./table-roles.html -->\n<!-- td -> ./table-roles.html -->\n<!-- template (not mapped) -->\n<!-- tfoot -> ./table-roles.html -->\n<!-- th -> ./table-roles.html -->\n<!-- thead -> ./table-roles.html -->\n<time data-testname=\"el-time\" data-expectedrole=\"time\" class=\"ex\">x</time>\n<!-- title (not mapped) -->\n<!-- tr -> ./table-roles.html -->\n<textarea data-testname=\"el-textarea\" data-expectedrole=\"textbox\" class=\"ex\">x</textarea>\n<!-- track (not mapped) -->\n<!-- u -> ./roles-generic.html -->\n<ul data-testname=\"el-ul\" data-expectedrole=\"list\" class=\"ex\"><li>x</li><li>x</li></ul>\n<!-- var (not mapped) -->\n<!-- todo: video -->\n<!-- wbr (not mapped) -->",
		"selector": ".ex"
	},
	{
		"filename": "roles-generic.html",
		"title": "HTML-AAM Generic Role Verification Tests",
		"html": "<p>Tests ONLY the <code>generic</code> mappings defined in <a href=\"https://w3c.github.io/html-aam/\">HTML-AAM</a>. Most test names correspond to a unique ID defined in the spec.<p>\n\n<p>These should remain in alphabetical order by tagname.</p>\n\n<!-- a -> ./roles-contextual.html -->\n<!-- aside -> ./roles-contextual.html -->\n<b data-testname=\"el-b\" class=\"ex-generic\">x</b>\n<bdi data-testname=\"el-bdi\" class=\"ex-generic\">x</bdi>\n<bdo data-testname=\"el-bdo\" class=\"ex-generic\">x</bdo>\n<data value=\"1\" data-testname=\"el-data\" class=\"ex-generic\">x</data>\n<div open data-testname=\"el-div\" class=\"ex-generic\">x</div>\n<!-- footer -> ./roles-contextual.html -->\n<!-- header -> ./roles-contextual.html -->\n<i data-testname=\"el-i\" class=\"ex-generic\">x</i>\n<li data-testname=\"el-li-orphaned\" class=\"ex-generic\">x</li><!-- todo: should orphaned roles be tested in a new ./roles-orphaned.html file? -->\n<pre data-testname=\"el-pre\" class=\"ex-generic\">x</pre>\n<q data-testname=\"el-q\" class=\"ex-generic\">x</q>\n<samp data-testname=\"el-samp\" class=\"ex-generic\">x</samp>\n<!-- section -> ./roles-contextual.html -->\n<small data-testname=\"el-small\" class=\"ex-generic\">x</small>\n<span data-testname=\"el-span\" class=\"ex-generic\">x</span>\n<u data-testname=\"el-u\" class=\"ex-generic\">x</u>",
		"role": "generic",
		"selector": ".ex-generic"
	},
	{
		"filename": "table-roles.html",
		"title": "HTML-AAM Role Verification Tests",
		"html": "<p>Tests the computedrole mappings for the table-related roles defined in <a href=\"https://w3c.github.io/html-aam/\">HTML-AAM</a>. Most test names correspond to unique ID defined in the spec.<p>\n\n<table data-testname=\"el-table\" data-expectedrole=\"table\" class=\"ex\">\n  <caption data-testname=\"el-caption\" data-expectedrole=\"caption\" class=\"ex\">caption</caption>\n  <thead data-testname=\"el-thead\" data-expectedrole=\"rowgroup\" class=\"ex\">\n    <tr data-testname=\"el-tr-thead\" data-expectedrole=\"row\" class=\"ex\">\n      <th data-testname=\"el-th\" data-expectedrole=\"columnheader\" class=\"ex\">a</th>\n      <th>b</th>\n      <th>c</th>\n    </tr>\n  </thead>\n  <tbody data-testname=\"el-tbody\" data-expectedrole=\"rowgroup\" class=\"ex\">\n    <tr data-testname=\"el-tr-tbody\" data-expectedrole=\"row\" class=\"ex\">\n      <th data-testname=\"el-th-in-row\" data-expectedrole=\"rowheader\" class=\"ex\">1</th>\n      <td data-testname=\"el-td\" data-expectedrole=\"cell\" class=\"ex\">2</td>\n      <td>3</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>5</td>\n      <td>6</td>\n    </tr>\n  </tbody>\n  <tfoot data-testname=\"el-tfoot\" data-expectedrole=\"rowgroup\" class=\"ex\">\n    <tr>\n      <th>x</th>\n      <th>y</th>\n      <th>z</th>\n    </tr>\n  </tfoot>\n</table>",
		"selector": ".ex"
	},
	{
		"filename": "roles-contextual.html",
		"title": "HTML-AAM Contextual-Specific Role Verification Tests",
		"html": "<p>Tests contextual computedrole mappings defined in <a href=\"https://w3c.github.io/html-aam/\">HTML-AAM</a>, where the returned computed role is expected to change based on the context. Most test names correspond to a unique ID defined in the spec.<p>\n\n<p>These should remain in alphabetical order.</code></p>\n\n\n<!-- el-a -->\n<a href=\"#\" data-testname=\"el-a\" data-expectedrole=\"link\" class=\"ex\">x</a>\n<a data-testname=\"el-a-no-href\" class=\"ex-generic\">x</a>\n\n<!-- el-aside -->\n<nav>\n  <aside data-testname=\"el-aside-in-section-with-name\" data-expectedrole=\"complementary\" aria-label=\"x\" class=\"ex\">x</aside>\n  <aside data-testname=\"el-aside-in-section-without-name\" class=\"ex-generic\">x</aside>\n</nav>\n<aside data-testname=\"el-aside-ancestorbodymain\" data-expectedrole=\"complementary\" class=\"ex\">x</aside>\n\n<!-- el-footer -->\n<nav>\n  <footer data-testname=\"el-footer\" aria-label=\"x\" class=\"ex-generic\">x</aside>\n</nav>\n<footer data-testname=\"el-footer-ancestorbody\" data-expectedrole=\"contentinfo\" class=\"ex\">x</footer>\n\n<!-- el-header -->\n<nav>\n  <header data-testname=\"el-header\" aria-label=\"x\" class=\"ex-generic\">x</header>\n</nav>\n<header data-testname=\"el-header-ancestorbody\" data-expectedrole=\"banner\" class=\"ex\">x</header>\n\n<!-- el-section -->\n<section data-testname=\"el-section\" aria-label=\"x\" data-expectedrole=\"region\" class=\"ex\">x</section>\n<section data-testname=\"el-section-no-name\" class=\"ex-generic\">x</section>",
		"selector": ".ex"
	},
	{
		"filename": "roles-contextual.html",
		"title": "HTML-AAM Contextual-Specific Role Verification Tests",
		"html": "<p>Tests contextual computedrole mappings defined in <a href=\"https://w3c.github.io/html-aam/\">HTML-AAM</a>, where the returned computed role is expected to change based on the context. Most test names correspond to a unique ID defined in the spec.<p>\n\n<p>These should remain in alphabetical order.</code></p>\n\n\n<!-- el-a -->\n<a href=\"#\" data-testname=\"el-a\" data-expectedrole=\"link\" class=\"ex\">x</a>\n<a data-testname=\"el-a-no-href\" class=\"ex-generic\">x</a>\n\n<!-- el-aside -->\n<nav>\n  <aside data-testname=\"el-aside-in-section-with-name\" data-expectedrole=\"complementary\" aria-label=\"x\" class=\"ex\">x</aside>\n  <aside data-testname=\"el-aside-in-section-without-name\" class=\"ex-generic\">x</aside>\n</nav>\n<aside data-testname=\"el-aside-ancestorbodymain\" data-expectedrole=\"complementary\" class=\"ex\">x</aside>\n\n<!-- el-footer -->\n<nav>\n  <footer data-testname=\"el-footer\" aria-label=\"x\" class=\"ex-generic\">x</aside>\n</nav>\n<footer data-testname=\"el-footer-ancestorbody\" data-expectedrole=\"contentinfo\" class=\"ex\">x</footer>\n\n<!-- el-header -->\n<nav>\n  <header data-testname=\"el-header\" aria-label=\"x\" class=\"ex-generic\">x</header>\n</nav>\n<header data-testname=\"el-header-ancestorbody\" data-expectedrole=\"banner\" class=\"ex\">x</header>\n\n<!-- el-section -->\n<section data-testname=\"el-section\" aria-label=\"x\" data-expectedrole=\"region\" class=\"ex\">x</section>\n<section data-testname=\"el-section-no-name\" class=\"ex-generic\">x</section>",
		"role": "generic",
		"selector": ".ex-generic"
	},
	{
		"filename": "area-role.html",
		"title": "HTMLAreaElement Role Verification Tests",
		"html": "<map name=\"areamap\">\n    <area shape=\"rect\" coords=\"0,0,15,15\" href=\"#\" alt=\"x\" data-testname=\"el-area\" data-expectedrole=\"link\" class=\"ex\">\n    <area shape=\"rect\" coords=\"15,15,31,31\" alt=\"x\" data-testname=\"el-area-no-href\" data-expectedrole=\"generic\" class=\"ex\">\n</map>\n<img usemap=\"#areamap\" src=\"#\" style=\"width: 32px; height: 32px;\" alt=\"x\">",
		"selector": ".ex"
	},
	{
		"filename": "optgroup-role.html",
		"title": "HTMLOptGroupElement Role Verification Tests",
		"html": "<select>\n  <optgroup label=\"x\" data-testname=\"el-optgroup\" data-expectedrole=\"group\" class=\"ex\">\n    <option>x1</option>\n    <option>x2</option>\n  </optgroup>\n  <optgroup data-testname=\"el-optgroup-no-label\" data-expectedrole=\"not defined in spec?\" class=\"ex-todo\">\n    <option>y1</option>\n    <option>y2</option>\n  </optgroup>\n</select>",
		"selector": ".ex"
	}
];
window.wpt["svg-aam"] = [];
