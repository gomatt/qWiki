var allPages = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
<book>\
<page title='core:template'>\
<type>nowiki</type>\
<content><![CDATA[<div id=\"header_wrap\"><div id=\"page_title\">{{=page_title}}</div></div><div id=\"content_wrap\"><div id=\"page_content\">{{=page_content}}</div></div><div id=\"editor_wrap\"><input id=\"page_title_editor\" value=\"{{=page_title}}\"></input><br><textarea id=\"page_editor\">{{=page_content_raw}}</textarea><br><button id=\"editor_save\">Save</button><button id=\"editor_cancel\">Cancel</button></div></div>]]></content>\
</page>\
\
<page title='core:style'>\
<type>nowiki</type>\
<content><![CDATA[/* core stylesheet */\nbody {margin:0;padding:0;}\na {color: #00f;cursor:pointer;}\na.broken {color:#f00;cursor:default;}\n/* end of core stylesheet */]]></content>\
</page>\
\
<page title='main page'>\
<content><![CDATA[= Heading 1\n\n[[Broken Link]]\n[[namespace:page]]\n[[namespace:page|Link with label]]\nPlain text\n*Bold text*\n!Strong text!\n/Italic text/\n//Emphasize text//\n_Underline text_\n-Strike through text-\n--Delete text--]]></content>\
</page>\
\
<page title='namespace:page'>\
<content><![CDATA[Namespace: [[main page]]]]></content>\
</page>\
\
<page title='namespace:template'>\
<type>nowiki</type>\
<content><![CDATA[<header><div id=\"page_title\">{{=page_title}}</div></header><div id=\"test\">Testing</div><div id=\"page_content\">{{=page_content}}</div>]]></content>\
</page>\
\
<page title='namespace:style'>\
<type>nowiki</type>\
<content><![CDATA[body {background-color: #eee;}]]></content>\
</page>\
</book>";