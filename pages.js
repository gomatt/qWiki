var book = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
<book>\
<page title='::template'>\
<content><![CDATA[<div id=\"header_wrap\"><div id=\"page_title\">{{=page_title}}</div></div><div id=\"content_wrap\"><div id=\"page_content\">{{=page_content}}</div></div><div id=\"source_wrap\"><textarea id=\"page_source\" readonly>{{=page_content_raw}}</textarea></div><div id=\"editor_wrap\"><textarea id=\"page_editor\">{{=page_content_raw}}</textarea><br /><button id=\"editor_save\">Save</button></div>]]></content>\
</page>\
\
<page title='::css'>\
<content><![CDATA[/* core stylesheet */\nbody { }]]></content>\
</page>\
\
<page title='main page'>\
<content><![CDATA[= Heading 1\n\n[[Link]]\n[[Link|Link with label]]\nPlain text\n*Bold text*\n!Strong text!\n/Italic text/\n//Emphasized text//\n_Underline text_\n-Strikethrough text-\n--Deleted text--]]></content>\
</page>\
\
<page title='namespace::page'>\
<content><![CDATA[Namespace: [[Main Page]]]]></content>\
</page>\
\
<page title='namespace::template'>\
<content><![CDATA[<header><div id=\"page_title\">{{=page_title}}</div></header><div id=\"test\">Testing</div><div id=\"page_content\">{{=page_content}}</div>]]></content>\
</page>\
\
<page title='namespace::css'>\
<content><![CDATA[body { background-color: #eee; }]]></content>\
</page>\
</book>";