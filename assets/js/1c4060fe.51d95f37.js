(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return y})),t.d(n,"metadata",(function(){return j})),t.d(n,"toc",(function(){return O})),t.d(n,"default",(function(){return _}));var a=t(3),l=t(7),r=t(0),c=t.n(r),u=t(161),i=t(158),o=t(172),s=t(352),d=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2",disabled:!0},{value:"4",label:"\u52a8\u7269\u56ed"},{value:"zoo",label:"\u963f\u91cc\u52a8\u7269\u56ed",children:[{value:"\u76d2\u9a6c",label:"\u76d2\u9a6c"},{value:"\u6dd8\u5b9d",label:"\u6dd8\u5b9d"},{value:"\u5929\u732b",label:"\u5929\u732b"},{value:"foo-4",label:"\u5176\u4ed6\u5c0f\u670b\u53cb",children:[{value:"\u5c0f\u7ea2\u7ea2",label:"\u5c0f\u7ea2\u7ea2"},{value:"\u5c0f\u84dd\u84dd",label:"\u5c0f\u84dd\u84dd"},{value:"\u5c0f\u7070\u7070",label:"\u5c0f\u7070\u7070"}]}]},{value:"2\u53f7\u52a8\u7269\u56ed",label:"2\u53f7\u52a8\u7269\u56ed",children:[{value:"\u5c0f\u8111\u864e",label:"\u5c0f\u8111\u864e"},{value:"\u5c0f\u72ee\u5b50",label:"\u5c0f\u72ee\u5b50"},{value:"\u5c0f\u4f01\u9e45",label:"\u5c0f\u4f01\u9e45"},{value:"bar-4",label:"\u5c0f\u670b\u53cb",children:[{value:"bar-4-\u5c0f\u7ea2\u7ea2",label:"\u5c0f\u7ea2\u7ea2"},{value:"bar-4-\u5c0f\u84dd\u84dd",label:"\u5c0f\u84dd\u84dd"},{value:"bar-4-\u5c0f\u7070\u7070",label:"\u5c0f\u7070\u7070"}]}]}],b={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/tree-select.stories.tsx",loc:{start:{line:11,column:7},end:{line:51,column:2}},name:"bigTreeDataSource",value:d,source:"const bigTreeDataSource = [\n  { value: '1', label: 'Option 1' },\n  { value: '2', label: 'Option 2', disabled: true },\n  { value: '4', label: '\u52a8\u7269\u56ed' },\n  {\n    value: 'zoo',\n    label: '\u963f\u91cc\u52a8\u7269\u56ed',\n    children: [\n      { value: '\u76d2\u9a6c', label: '\u76d2\u9a6c' },\n      { value: '\u6dd8\u5b9d', label: '\u6dd8\u5b9d' },\n      { value: '\u5929\u732b', label: '\u5929\u732b' },\n      {\n        value: 'foo-4',\n        label: '\u5176\u4ed6\u5c0f\u670b\u53cb',\n        children: [\n          { value: '\u5c0f\u7ea2\u7ea2', label: '\u5c0f\u7ea2\u7ea2' },\n          { value: '\u5c0f\u84dd\u84dd', label: '\u5c0f\u84dd\u84dd' },\n          { value: '\u5c0f\u7070\u7070', label: '\u5c0f\u7070\u7070' },\n        ],\n      },\n    ],\n  },\n  {\n    value: '2\u53f7\u52a8\u7269\u56ed',\n    label: '2\u53f7\u52a8\u7269\u56ed',\n    children: [\n      { value: '\u5c0f\u8111\u864e', label: '\u5c0f\u8111\u864e' },\n      { value: '\u5c0f\u72ee\u5b50', label: '\u5c0f\u72ee\u5b50' },\n      { value: '\u5c0f\u4f01\u9e45', label: '\u5c0f\u4f01\u9e45' },\n      {\n        value: 'bar-4',\n        label: '\u5c0f\u670b\u53cb',\n        children: [\n          { value: 'bar-4-\u5c0f\u7ea2\u7ea2', label: '\u5c0f\u7ea2\u7ea2' },\n          { value: 'bar-4-\u5c0f\u84dd\u84dd', label: '\u5c0f\u84dd\u84dd' },\n          { value: 'bar-4-\u5c0f\u7070\u7070', label: '\u5c0f\u7070\u7070' },\n        ],\n      },\n    ],\n  },\n];",deps:function(){return[]},provides:{}};function p(){var e=Object(r.useState)(""),n=e[0],t=e[1];return c.a.createElement(i.SingleTreeSelect,{style:{width:300},defaultExpandAll:!0,onChange:t,value:n,dataSource:d})}var h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/tree-select.stories.tsx",loc:{start:{line:53,column:7},end:{line:64,column:1}},name:"Basic",value:p,source:"function Basic() {\n  const [value, onChange] = useState('');\n  return (\n    <SingleTreeSelect\n      style={{ width: 300 }}\n      defaultExpandAll\n      onChange={onChange}\n      value={value}\n      dataSource={bigTreeDataSource}\n    />\n  );\n}",deps:function(){return[b]},provides:{useState:r.useState,SingleTreeSelect:i.SingleTreeSelect}};function S(){var e=Object(r.useState)(""),n=e[0],t=e[1];return c.a.createElement(i.SingleTreeSelect,{style:{width:300},defaultExpandAll:!0,showSearch:!0,onChange:t,value:n,dataSource:d})}p.__doc_info=h,p.__inner_source="function Basic() {\n  const [value, onChange] = useState('');\n  return (\n    <SingleTreeSelect\n      style={{ width: 300 }}\n      defaultExpandAll\n      onChange={onChange}\n      value={value}\n      dataSource={bigTreeDataSource}\n    />\n  );\n}";var v={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/tree-select.stories.tsx",loc:{start:{line:66,column:7},end:{line:78,column:1}},name:"ShowSearch",value:S,source:"function ShowSearch() {\n  const [value, onChange] = useState('');\n  return (\n    <SingleTreeSelect\n      style={{ width: 300 }}\n      defaultExpandAll\n      showSearch\n      onChange={onChange}\n      value={value}\n      dataSource={bigTreeDataSource}\n    />\n  );\n}",deps:function(){return[b]},provides:{useState:r.useState,SingleTreeSelect:i.SingleTreeSelect}};function f(){var e=Object(s.a)(),n=Object(o.d)((function(e){return Object.assign({},e,{value:e.key})}))(e);return 0===n.length?"loading...":c.a.createElement(i.SingleTreeSelect,{style:{width:200},popupProps:{style:{width:350}},dataSource:n,defaultExpandAll:!0,showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4e00\u4e2a\u9879\u76ee"})}S.__doc_info=v,S.__inner_source="function ShowSearch() {\n  const [value, onChange] = useState('');\n  return (\n    <SingleTreeSelect\n      style={{ width: 300 }}\n      defaultExpandAll\n      showSearch\n      onChange={onChange}\n      value={value}\n      dataSource={bigTreeDataSource}\n    />\n  );\n}";var m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/tree-select.stories.tsx",loc:{start:{line:80,column:7},end:{line:101,column:1}},name:"HippoCategoryTree",value:f,source:"function HippoCategoryTree() {\n  const cateTree = useCateTree();\n\n  const dataSource = (makeRecursiveMapper((item) => ({ ...item, value: item.key }))(\n    cateTree,\n  ) ) ;\n\n  if (dataSource.length === 0) {\n    return 'loading...';\n  }\n\n  return (\n    <SingleTreeSelect\n      style={{ width: 200 }}\n      popupProps={{ style: { width: 350 } }}\n      dataSource={dataSource}\n      defaultExpandAll\n      showSearch\n      placeholder=\"\u8bf7\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\"\n    />\n  );\n}",deps:function(){return[]},provides:{useCateTree:s.a,makeRecursiveMapper:o.d,SingleTreeSelect:i.SingleTreeSelect}};function g(){var e=Object(s.a)(),n=Object(o.d)((function(e){return Object.assign({},e,{value:e.key})}))(e),t=Object(r.useState)([]),a=t[0],l=t[1];return 0===n.length?"loading...":c.a.createElement(i.MultiTreeSelect,{style:{width:300},value:a,onChange:l,dataSource:n,showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u7c7b\u76ee",defaultExpandAll:!0})}f.__doc_info=m,f.__inner_source="function HippoCategoryTree() {\n  const cateTree = useCateTree();\n\n  const dataSource = (makeRecursiveMapper((item) => ({ ...item, value: item.key }))(\n    cateTree,\n  ) ) ;\n\n  if (dataSource.length === 0) {\n    return 'loading...';\n  }\n\n  return (\n    <SingleTreeSelect\n      style={{ width: 200 }}\n      popupProps={{ style: { width: 350 } }}\n      dataSource={dataSource}\n      defaultExpandAll\n      showSearch\n      placeholder=\"\u8bf7\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\"\n    />\n  );\n}";var T={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/select/tree-select.stories.tsx",loc:{start:{line:103,column:7},end:{line:127,column:1}},name:"MultiHippoCategoryTree",value:g,source:"function MultiHippoCategoryTree() {\n  const cateTree = useCateTree();\n\n  const dataSource = (makeRecursiveMapper((item) => ({ ...item, value: item.key }))(\n    cateTree,\n  ) ) ;\n\n  const [value, onChange] = useState([]);\n\n  if (dataSource.length === 0) {\n    return 'loading...';\n  }\n\n  return (\n    <MultiTreeSelect\n      style={{ width: 300 }}\n      value={value}\n      onChange={onChange}\n      dataSource={dataSource}\n      showSearch\n      placeholder=\"\u8bf7\u9009\u62e9\u7c7b\u76ee\"\n      defaultExpandAll\n    />\n  );\n}",deps:function(){return[]},provides:{useCateTree:s.a,makeRecursiveMapper:o.d,useState:r.useState,MultiTreeSelect:i.MultiTreeSelect}};g.__inner_source="function MultiHippoCategoryTree() {\n  const cateTree = useCateTree();\n\n  const dataSource = (makeRecursiveMapper((item) => ({ ...item, value: item.key }))(\n    cateTree,\n  ) ) ;\n\n  const [value, onChange] = useState([]);\n\n  if (dataSource.length === 0) {\n    return 'loading...';\n  }\n\n  return (\n    <MultiTreeSelect\n      style={{ width: 300 }}\n      value={value}\n      onChange={onChange}\n      dataSource={dataSource}\n      showSearch\n      placeholder=\"\u8bf7\u9009\u62e9\u7c7b\u76ee\"\n      defaultExpandAll\n    />\n  );\n}",g.__doc_info=T;var y={id:"tree-select",title:"TreeSelect \u6811\u5f62\u9009\u62e9"},j={unversionedId:"tree-select",id:"tree-select",isDocsHomePage:!1,title:"TreeSelect \u6811\u5f62\u9009\u62e9",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/tree-select.mdx",sourceDirName:".",slug:"/tree-select",permalink:"/rex-design/docs/tree-select",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/tree-select.mdx",version:"current",frontMatter:{id:"tree-select",title:"TreeSelect \u6811\u5f62\u9009\u62e9"},sidebar:"docs",previous:{title:"Select \u9009\u62e9\u5668",permalink:"/rex-design/docs/select"},next:{title:"Search \u641c\u7d22",permalink:"/rex-design/docs/search"}},O=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u641c\u7d22\u7528\u6cd5",id:"\u641c\u7d22\u7528\u6cd5",children:[]}]},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",children:[{value:"\u76d2\u9a6c\u7c7b\u76ee\u641c\u7d22",id:"\u76d2\u9a6c\u7c7b\u76ee\u641c\u7d22",children:[]},{value:"\u76d2\u9a6c\u7c7b\u76ee\u591a\u9009",id:"\u76d2\u9a6c\u7c7b\u76ee\u591a\u9009",children:[]}]},{value:"API",id:"api",children:[]}],C=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",n)}},x=C("Story"),w=C("PropsTable"),k={toc:O};function _(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(u.b)("wrapper",Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(u.b)("p",null,"\u6811\u5f62\u7ed3\u6784\u7684\u9009\u62e9\u5668\uff0c\u5e38\u7528\u4e8e\u76d2\u9a6c\u95e8\u5e97\u9009\u62e9\uff08\u4e00\u822c\u662f\u4e09\u5c42\u7ed3\u6784\uff1a\u5546\u5bb6\u3001\u5b50\u516c\u53f8\u3001\u95e8\u5e97\uff09\uff0c\u76d2\u9a6c\u5546\u54c1\u7c7b\u76ee\u9009\u62e9\uff08\u4e00\u7ea7\u7c7b\u76ee\u3001\u4e8c\u7ea7\u7c7b\u76ee\u3001\u4e09\u7ea7\u7c7b\u76ee\uff09\u7b49\u573a\u666f\u3002"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"\u5355\u9009\uff1a ",Object(u.b)("inlineCode",{parentName:"li"},"<SingleTreeSelect />"),Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"value \u7684\u7c7b\u578b\u603b\u662f\u4e3a ",Object(u.b)("inlineCode",{parentName:"li"},"string")))),Object(u.b)("li",{parentName:"ul"},"\u591a\u9009\uff1a ",Object(u.b)("inlineCode",{parentName:"li"},"<MultiTreeSelect />"),Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"value \u7684\u7c7b\u578b\u4e3a ",Object(u.b)("inlineCode",{parentName:"li"},"string[]"))))),Object(u.b)("h3",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),Object(u.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(u.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(u.b)(x,{fn:p,mdxType:"Story"}),Object(u.b)("h3",{id:"\u641c\u7d22\u7528\u6cd5"},"\u641c\u7d22\u7528\u6cd5"),Object(u.b)(x,{fn:S,mdxType:"Story"}),Object(u.b)("h2",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),Object(u.b)("h3",{id:"\u76d2\u9a6c\u7c7b\u76ee\u641c\u7d22"},"\u76d2\u9a6c\u7c7b\u76ee\u641c\u7d22"),Object(u.b)(x,{fn:f,mdxType:"Story"}),Object(u.b)("h3",{id:"\u76d2\u9a6c\u7c7b\u76ee\u591a\u9009"},"\u76d2\u9a6c\u7c7b\u76ee\u591a\u9009"),Object(u.b)(x,{fn:g,mdxType:"Story"}),Object(u.b)("h2",{id:"api"},"API"),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"MultiTreeSelect")," \u548c ",Object(u.b)("inlineCode",{parentName:"p"},"SingleTreeSelect")," \u7684\u533a\u522b\uff1a"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"value")," \u7684\u7c7b\u578b\u4e0d\u540c\uff0c",Object(u.b)("inlineCode",{parentName:"li"},"defaultValue"),", ",Object(u.b)("inlineCode",{parentName:"li"},"onChange")," \u7684\u7c7b\u578b\u4e5f\u6709\u76f8\u5e94\u7684\u533a\u522b"),Object(u.b)("li",{parentName:"ul"},"\u591a\u9009\u989d\u5916\u652f\u6301 ",Object(u.b)("inlineCode",{parentName:"li"},"checkStrictly")," \u548c ",Object(u.b)("inlineCode",{parentName:"li"},"checkedStrategy"),"\uff0c\u8fd9\u4e24\u4e2a props \u542b\u4e49\u8be6\u89c1 ",Object(u.b)("a",{parentName:"li",href:"tree#api"},"Tree \u7ec4\u4ef6\u6587\u6863"))),Object(u.b)(w,{component:i.SingleTreeSelect,mdxType:"PropsTable"}))}_.isMDXComponent=!0},352:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(172),l=t(0),r=t(490),c=t(316),u=t(210),i=t(405),o=t(202),s=Object(r.a)((function(){return fetch("/{you-api-host}/QueryMerchantCategoryTree.json",{credentials:"include"})})).pipe(c.a((function(e){return e.json()})),u.a((function(e){return e.result[0].children})),u.a((function(e){return Object(a.d)((function(e){return{key:e.key,label:e.name,children:e.children}}))(e)})),i.a(1)),d={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/test-tree-data.tsx",loc:{start:{line:22,column:0},end:{line:42,column:2}},name:"cateTree$",value:s,source:"const cateTree$ = defer(() =>\n  fetch('/{you-api-host}/QueryMerchantCategoryTree.json', {\n    credentials: 'include',\n  }),\n).pipe(\n  op.switchMap((res) => res.json()),\n  op.map((result) => result.result[0].children ),\n  op.map((cateTree) => {\n    const mapper = makeRecursiveMapper((cateItem) => {\n      const treeItem = {\n        key: cateItem.key,\n        label: cateItem.name,\n        children: cateItem.children,\n      };\n      return treeItem;\n    });\n    const result = mapper(cateTree);\n    return result;\n  }),\n  op.shareReplay(1),\n);",deps:function(){return[]},provides:{defer:r.a,op:o,makeRecursiveMapper:a.d}};function b(){var e=Object(l.useState)([]),n=e[0],t=e[1];return Object(l.useEffect)((function(){s.subscribe(t)}),[]),n}var p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/test-tree-data.tsx",loc:{start:{line:44,column:7},end:{line:52,column:1}},name:"useCateTree",value:b,source:"function useCateTree() {\n  const [dataSource, setDataSource] = useState([]);\n\n  useEffect(() => {\n    cateTree$.subscribe(setDataSource);\n  }, []);\n\n  return dataSource;\n}",deps:function(){return[d]},provides:{useState:l.useState,useEffect:l.useEffect}};b.__inner_source="function useCateTree() {\n  const [dataSource, setDataSource] = useState([]);\n\n  useEffect(() => {\n    cateTree$.subscribe(setDataSource);\n  }, []);\n\n  return dataSource;\n}",b.__doc_info=p}}]);