var book = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
<book>\
<page title='::template'>\
<content><![CDATA[<div id=\"page_title\">{{=page_title}}</div><div id=\"page_content\">{{=page_content}}</div>]]></content>\
</page>\
\
<page title='::css'>\
<content><![CDATA[body { }]]></content>\
</page>\
\
<page title='main page'>\
<content><![CDATA[= Heading 1\n\n[[Link]]\n[[Link|Link with label]]\nPlain text\n*Bold text*\n/Italic text/\n_Underline text_]]></content>\
</page>\
\
<page title='namespace::page'>\
<content><![CDATA[Namespace: [[Main Page]]]]></content>\
</page>\
\
<page title='main page::template'>\
<content><![CDATA[<header><div id=\"page_title\">{{=page_title}}</div></header><div id=\"test\">Testing</div><div id=\"page_content\">{{=page_content}}</div>]]></content>\
</page>\
\
<page title='namespace::css'>\
<content><![CDATA[body { background-color: #eee; }]]></content>\
</page>\
</book>";