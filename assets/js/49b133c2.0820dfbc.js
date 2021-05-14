(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(e,l,n){"use strict";n.r(l),n.d(l,"frontMatter",(function(){return w})),n.d(l,"metadata",(function(){return C})),n.d(l,"toc",(function(){return M})),n.d(l,"default",(function(){return P}));var a=n(3),t=n(7),i=n(0),c=n.n(i),r=n(161),u=n(158),s=n(176),o=n.n(s),d=["\u76d2\u9a6c","\u6dd8\u5b9d","\u5929\u732b",{value:"\u98de\u732a",label:"\u98de\u732a",disabled:!0}],b={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:7,column:0},end:{line:7,column:95}},name:"basicSelectDataSource",value:d,source:"const basicSelectDataSource = ['\u76d2\u9a6c', '\u6dd8\u5b9d', '\u5929\u732b', { value: '\u98de\u732a', label: '\u98de\u732a', disabled: true }];",deps:function(){return[]},provides:{}};function S(){var e=Object(i.useState)(""),l=e[0],n=e[1];return c.a.createElement(u.SingleSelect,{style:{width:200},value:l,onChange:n,hasClear:!0,hasArrow:!0,dataSource:d})}var p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:9,column:7},end:{line:22,column:1}},name:"Basic",value:S,source:"function Basic() {\n  const [value, onChange] = useState('');\n\n  return (\n    <SingleSelect\n      style={{ width: 200 }}\n      value={value}\n      onChange={onChange}\n      hasClear\n      hasArrow\n      dataSource={basicSelectDataSource}\n    />\n  );\n}",deps:function(){return[b]},provides:{useState:i.useState,SingleSelect:u.SingleSelect}};function v(){return c.a.createElement(u.SingleSelect,{style:{display:"inline-flex"},popupProps:{style:{width:120}},shape:"simple",dataSource:d})}S.__doc_info=p,S.__inner_source="function Basic() {\n  const [value, onChange] = useState('');\n\n  return (\n    <SingleSelect\n      style={{ width: 200 }}\n      value={value}\n      onChange={onChange}\n      hasClear\n      hasArrow\n      dataSource={basicSelectDataSource}\n    />\n  );\n}";var h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:24,column:7},end:{line:33,column:1}},name:"Minimum",value:v,source:"function Minimum() {\n  return (\n    <SingleSelect\n      style={{ display: 'inline-flex' }}\n      popupProps={{ style: { width: 120 } }}\n      shape=\"simple\"\n      dataSource={basicSelectDataSource}\n    />\n  );\n}",deps:function(){return[b]},provides:{SingleSelect:u.SingleSelect}};function m(){return c.a.createElement(u.SingleSelect,{style:{width:200},showSearch:!0,dataSource:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2",disabled:!0},{value:"4",label:"\u963f\u91cc\u52a8\u7269\u56ed"},{value:"\u76d2\u9a6c",label:"\u76d2\u9a6c"},{value:"\u6dd8\u5b9d",label:"\u6dd8\u5b9d"},{value:"\u5929\u732b",label:"\u5929\u732b"},{value:"foo-4",label:"\u5176\u4ed6\u5c0f\u670b\u53cb"},{value:"2\u53f7\u52a8\u7269\u56ed",label:"2\u53f7\u52a8\u7269\u56ed"},{value:"\u5c0f\u8111\u864e",label:"\u5c0f\u8111\u864e"},{value:"\u5c0f\u72ee\u5b50",label:"\u5c0f\u72ee\u5b50"},{value:"\u5c0f\u4f01\u9e45",label:"\u5c0f\u4f01\u9e45"},{value:"bar-4",label:"\u5c0f\u670b\u53cb"},{value:"bar-4-\u5c0f\u7ea2\u7ea2",label:"\u5c0f\u7ea2\u7ea2"},{value:"bar-4-\u5c0f\u84dd\u84dd",label:"\u5c0f\u84dd\u84dd"},{value:"bar-4-\u5c0f\u7070\u7070",label:"\u5c0f\u7070\u7070"}]})}v.__doc_info=h,v.__inner_source="function Minimum() {\n  return (\n    <SingleSelect\n      style={{ display: 'inline-flex' }}\n      popupProps={{ style: { width: 120 } }}\n      shape=\"simple\"\n      dataSource={basicSelectDataSource}\n    />\n  );\n}";var f={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:35,column:7},end:{line:59,column:1}},name:"Search",value:m,source:"function Search() {\n  return (\n    <SingleSelect\n      style={{ width: 200 }}\n      showSearch\n      dataSource={[\n        { value: '1', label: 'Option 1' },\n        { value: '2', label: 'Option 2', disabled: true },\n        { value: '4', label: '\u963f\u91cc\u52a8\u7269\u56ed' },\n        { value: '\u76d2\u9a6c', label: '\u76d2\u9a6c' },\n        { value: '\u6dd8\u5b9d', label: '\u6dd8\u5b9d' },\n        { value: '\u5929\u732b', label: '\u5929\u732b' },\n        { value: 'foo-4', label: '\u5176\u4ed6\u5c0f\u670b\u53cb' },\n        { value: '2\u53f7\u52a8\u7269\u56ed', label: '2\u53f7\u52a8\u7269\u56ed' },\n        { value: '\u5c0f\u8111\u864e', label: '\u5c0f\u8111\u864e' },\n        { value: '\u5c0f\u72ee\u5b50', label: '\u5c0f\u72ee\u5b50' },\n        { value: '\u5c0f\u4f01\u9e45', label: '\u5c0f\u4f01\u9e45' },\n        { value: 'bar-4', label: '\u5c0f\u670b\u53cb' },\n        { value: 'bar-4-\u5c0f\u7ea2\u7ea2', label: '\u5c0f\u7ea2\u7ea2' },\n        { value: 'bar-4-\u5c0f\u84dd\u84dd', label: '\u5c0f\u84dd\u84dd' },\n        { value: 'bar-4-\u5c0f\u7070\u7070', label: '\u5c0f\u7070\u7070' },\n      ]}\n    />\n  );\n}",deps:function(){return[]},provides:{SingleSelect:u.SingleSelect}};function g(){return c.a.createElement(u.SingleSelect,{style:{width:200},dataSource:o.a.range(0,2e4).map((function(e){return"\u9009\u9879-"+(e+1)}))})}m.__doc_info=f,m.__inner_source="function Search() {\n  return (\n    <SingleSelect\n      style={{ width: 200 }}\n      showSearch\n      dataSource={[\n        { value: '1', label: 'Option 1' },\n        { value: '2', label: 'Option 2', disabled: true },\n        { value: '4', label: '\u963f\u91cc\u52a8\u7269\u56ed' },\n        { value: '\u76d2\u9a6c', label: '\u76d2\u9a6c' },\n        { value: '\u6dd8\u5b9d', label: '\u6dd8\u5b9d' },\n        { value: '\u5929\u732b', label: '\u5929\u732b' },\n        { value: 'foo-4', label: '\u5176\u4ed6\u5c0f\u670b\u53cb' },\n        { value: '2\u53f7\u52a8\u7269\u56ed', label: '2\u53f7\u52a8\u7269\u56ed' },\n        { value: '\u5c0f\u8111\u864e', label: '\u5c0f\u8111\u864e' },\n        { value: '\u5c0f\u72ee\u5b50', label: '\u5c0f\u72ee\u5b50' },\n        { value: '\u5c0f\u4f01\u9e45', label: '\u5c0f\u4f01\u9e45' },\n        { value: 'bar-4', label: '\u5c0f\u670b\u53cb' },\n        { value: 'bar-4-\u5c0f\u7ea2\u7ea2', label: '\u5c0f\u7ea2\u7ea2' },\n        { value: 'bar-4-\u5c0f\u84dd\u84dd', label: '\u5c0f\u84dd\u84dd' },\n        { value: 'bar-4-\u5c0f\u7070\u7070', label: '\u5c0f\u7070\u7070' },\n      ]}\n    />\n  );\n}";var y={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:61,column:7},end:{line:63,column:1}},name:"BigData",value:g,source:"function BigData() {\n  return <SingleSelect style={{ width: 200 }} dataSource={_.range(0, 20000).map((i) => `\u9009\u9879-${i + 1}`)} />;\n}",deps:function(){return[]},provides:{SingleSelect:u.SingleSelect,_:o.a}};function O(){return c.a.createElement("div",{style:{display:"flex",gap:16}},c.a.createElement(u.Select,{status:"error",style:{width:200},dataSource:d}))}g.__doc_info=y,g.__inner_source="function BigData() {\n  return <SingleSelect style={{ width: 200 }} dataSource={_.range(0, 20000).map((i) => `\u9009\u9879-${i + 1}`)} />;\n}";var _={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:65,column:7},end:{line:71,column:1}},name:"Status",value:O,source:"function Status() {\n  return (\n    <div style={{ display: 'flex', gap: 16 }}>\n      <Select status=\"error\" style={{ width: 200 }} dataSource={basicSelectDataSource} />\n    </div>\n  );\n}",deps:function(){return[b]},provides:{Select:u.Select}};function x(){return c.a.createElement(u.MultiSelect,{style:{width:300},hasClear:!0,hasArrow:!0,dataSource:["\u76d2\u9a6c1","\u6dd8\u5b9d1","\u5929\u732b1",{value:"\u98de\u732a1",label:"\u98de\u732a1",disabled:!0},"\u76d2\u9a6c2","\u6dd8\u5b9d2","\u5929\u732b2",{value:"\u98de\u732a2",label:"\u98de\u732a2",disabled:!0}]})}O.__doc_info=_,O.__inner_source="function Status() {\n  return (\n    <div style={{ display: 'flex', gap: 16 }}>\n      <Select status=\"error\" style={{ width: 200 }} dataSource={basicSelectDataSource} />\n    </div>\n  );\n}";var j={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/select.stories.tsx",loc:{start:{line:73,column:7},end:{line:91,column:1}},name:"Multiple",value:x,source:"function Multiple() {\n  return (\n    <MultiSelect\n      style={{ width: 300 }}\n      hasClear\n      hasArrow\n      dataSource={[\n        '\u76d2\u9a6c1',\n        '\u6dd8\u5b9d1',\n        '\u5929\u732b1',\n        { value: '\u98de\u732a1', label: '\u98de\u732a1', disabled: true },\n        '\u76d2\u9a6c2',\n        '\u6dd8\u5b9d2',\n        '\u5929\u732b2',\n        { value: '\u98de\u732a2', label: '\u98de\u732a2', disabled: true },\n      ]}\n    />\n  );\n}",deps:function(){return[]},provides:{MultiSelect:u.MultiSelect}};x.__inner_source="function Multiple() {\n  return (\n    <MultiSelect\n      style={{ width: 300 }}\n      hasClear\n      hasArrow\n      dataSource={[\n        '\u76d2\u9a6c1',\n        '\u6dd8\u5b9d1',\n        '\u5929\u732b1',\n        { value: '\u98de\u732a1', label: '\u98de\u732a1', disabled: true },\n        '\u76d2\u9a6c2',\n        '\u6dd8\u5b9d2',\n        '\u5929\u732b2',\n        { value: '\u98de\u732a2', label: '\u98de\u732a2', disabled: true },\n      ]}\n    />\n  );\n}",x.__doc_info=j;var w={id:"select",title:"Select \u9009\u62e9\u5668"},C={unversionedId:"select",id:"select",isDocsHomePage:!1,title:"Select \u9009\u62e9\u5668",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/select.mdx",sourceDirName:".",slug:"/select",permalink:"/rex-design/docs/select",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/select.mdx",version:"current",frontMatter:{id:"select",title:"Select \u9009\u62e9\u5668"},sidebar:"docs",previous:{title:"Textarea \u591a\u884c\u6587\u672c\u57df",permalink:"/rex-design/docs/textarea"},next:{title:"TreeSelect \u6811\u5f62\u9009\u62e9",permalink:"/rex-design/docs/tree-select"}},M=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u8f7b\u91cf\u9009\u62e9",id:"\u8f7b\u91cf\u9009\u62e9",children:[]},{value:"\u641c\u7d22",id:"\u641c\u7d22",children:[]},{value:"\u5927\u6570\u636e\u91cf",id:"\u5927\u6570\u636e\u91cf",children:[]},{value:"\u9519\u8bef\u72b6\u6001",id:"\u9519\u8bef\u72b6\u6001",children:[]},{value:"\u591a\u9009",id:"\u591a\u9009",children:[]}]},{value:"API",id:"api",children:[]}],D=function(e){return function(l){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",l)}},k=D("Story"),N=D("PropsTable"),T={toc:M};function P(e){var l=e.components,n=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},T,n,{components:l,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(r.b)("p",null,"\u4ee3\u66ff\u539f\u751f select \u5143\u7d20\u3002"),Object(r.b)("h3",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5355\u9009\uff1a ",Object(r.b)("inlineCode",{parentName:"li"},"<Select multiple={false} />")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"<SingleSelect />")),Object(r.b)("li",{parentName:"ul"},"\u591a\u9009\uff1a ",Object(r.b)("inlineCode",{parentName:"li"},"<Select multiple={true} />")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"<MultiSelect />")),Object(r.b)("li",{parentName:"ul"},"\u5728 TypeScript \u9879\u76ee\u4e2d\u63a8\u8350\u4f7f\u7528 SingleSelect/MultiSelect\uff0cvalue \u7684\u7c7b\u578b\u66f4\u52a0\u660e\u786e")),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(r.b)(k,{fn:S,mdxType:"Story"}),Object(r.b)("h3",{id:"\u8f7b\u91cf\u9009\u62e9"},"\u8f7b\u91cf\u9009\u62e9"),Object(r.b)(k,{fn:v,mdxType:"Story"}),Object(r.b)("h3",{id:"\u641c\u7d22"},"\u641c\u7d22"),Object(r.b)(k,{fn:m,mdxType:"Story"}),Object(r.b)("h3",{id:"\u5927\u6570\u636e\u91cf"},"\u5927\u6570\u636e\u91cf"),Object(r.b)(k,{fn:g,mdxType:"Story"}),Object(r.b)("h3",{id:"\u9519\u8bef\u72b6\u6001"},"\u9519\u8bef\u72b6\u6001"),Object(r.b)(k,{fn:O,mdxType:"Story"}),Object(r.b)("h3",{id:"\u591a\u9009"},"\u591a\u9009"),Object(r.b)(k,{fn:x,mdxType:"Story"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SingleSelect")," \u4e0e ",Object(r.b)("inlineCode",{parentName:"p"},"MultiSelect")," \u7684\u533a\u522b\u4ec5\u5728\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"value")," \u7684\u7c7b\u578b\u4e0d\u540c\uff08",Object(r.b)("inlineCode",{parentName:"p"},"defaultValue"),", ",Object(r.b)("inlineCode",{parentName:"p"},"onChange")," \u7684\u7c7b\u578b\u4e5f\u6709\u76f8\u5e94\u7684\u533a\u522b\uff09\uff0c\u5176\u4ed6 props \u90fd\u76f8\u540c\u3002"),Object(r.b)(N,{component:u.Select,mdxType:"PropsTable"}))}P.isMDXComponent=!0}}]);