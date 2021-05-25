(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return D})),t.d(n,"metadata",(function(){return P})),t.d(n,"toc",(function(){return M})),t.d(n,"default",(function(){return G}));var f,i=t(3),a=t(8),o=t(0),l=t.n(o),r=t(167),d=t(165),s=t(344),c=t(177),u=t.n(c),x=t(26),v=x.d.div(f||(f=Object(s.a)(["\n  width: 100%;\n  padding: 10px;\n  font-size: 12px;\n  background: var(--rex-colors-emphasis-10);\n"]))),b={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:8,column:0},end:{line:13,column:2}},name:"StyledDiv",value:v,source:"const StyledDiv = styled.div`\n  width: 100%;\n  padding: 10px;\n  font-size: 12px;\n  background: var(--rex-colors-emphasis-10);\n`;",deps:function(){return[]},provides:{styled:x.d}};function p(e){var n=e.text;return l.a.createElement(v,null,l.a.createElement("p",{style:{margin:0,fontSize:20}},l.a.createElement("code",null,n)),"\u5438\u9644\u5185\u5bb9.111",l.a.createElement("br",null),"\u5438\u9644\u5185\u5bb9.222",l.a.createElement("br",null),"\u5438\u9644\u5185\u5bb9.333")}var m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:15,column:0},end:{line:28,column:1}},name:"BalaBala",value:p,source:"function BalaBala({ text }) {\n  return (\n    <StyledDiv>\n      <p style={{ margin: 0, fontSize: 20 }}>\n        <code>{text}</code>\n      </p>\n      \u5438\u9644\u5185\u5bb9.111\n      <br />\n      \u5438\u9644\u5185\u5bb9.222\n      <br />\n      \u5438\u9644\u5185\u5bb9.333\n    </StyledDiv>\n  );\n}",deps:function(){return[b]},provides:{}},g=function(e,n){return u.a.range(n).map((function(n){return l.a.createElement("p",{key:n,style:{fontSize:20,padding:16,margin:0}},e," ",n)}))},T={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:30,column:0},end:{line:36,column:2}},name:"repeat",value:g,source:"const repeat = (txt, n) => {\n  return _.range(n).map((i) => (\n    <p key={i} style={{ fontSize: 20, padding: 16, margin: 0 }}>\n      {txt} {i}\n    </p>\n  ));\n};",deps:function(){return[]},provides:{_:u.a}};function y(){return l.a.createElement("div",null,g("TOP CONTENT",3),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:"0 0 70%",background:"#f2f2f2"}},g("LONG CONTENT",50)),l.a.createElement("div",{style:{flex:"0 0 30%",background:"#ffebeb"}},l.a.createElement(d.Affix,{offsetTop:10},l.a.createElement(p,{text:"offsetTop=10"})))))}var h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:38,column:7},end:{line:53,column:1}},name:"BasicAffixTop",value:y,source:"function BasicAffixTop() {\n  return (\n    <div>\n      {repeat('TOP CONTENT', 3)}\n\n      <div style={{ display: 'flex' }}>\n        <div style={{ flex: '0 0 70%', background: '#f2f2f2' }}>{repeat('LONG CONTENT', 50)}</div>\n        <div style={{ flex: '0 0 30%', background: '#ffebeb' }}>\n          <Affix offsetTop={10}>\n            <BalaBala text=\"offsetTop=10\" />\n          </Affix>\n        </div>\n      </div>\n    </div>\n  );\n}",deps:function(){return[T,m]},provides:{Affix:d.Affix}};function E(){return l.a.createElement("div",null,g("TOP CONTENT",3),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:"0 0 70%",background:"#f2f2f2"}},g("LONG CONTENT",20)),l.a.createElement("div",{style:{flex:"0 0 30%",background:"#ffebeb",display:"flex",alignItems:"flex-end"}},l.a.createElement(d.Affix,{offsetBottom:20},l.a.createElement(p,{text:"offsetBottom={20}"})))),l.a.createElement("div",{style:{flex:"0 0 70%",background:"#b3b1f1"}},g("BOTTOM CONTENT",20)))}y.__doc_info=h,y.__inner_source="function BasicAffixTop() {\n  return (\n    <div>\n      {repeat('TOP CONTENT', 3)}\n\n      <div style={{ display: 'flex' }}>\n        <div style={{ flex: '0 0 70%', background: '#f2f2f2' }}>{repeat('LONG CONTENT', 50)}</div>\n        <div style={{ flex: '0 0 30%', background: '#ffebeb' }}>\n          <Affix offsetTop={10}>\n            <BalaBala text=\"offsetTop=10\" />\n          </Affix>\n        </div>\n      </div>\n    </div>\n  );\n}";var O={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:55,column:7},end:{line:72,column:1}},name:"BasicAffixBottom",value:E,source:"function BasicAffixBottom() {\n  return (\n    <div>\n      {repeat('TOP CONTENT', 3)}\n\n      <div style={{ display: 'flex' }}>\n        <div style={{ flex: '0 0 70%', background: '#f2f2f2' }}>{repeat('LONG CONTENT', 20)}</div>\n        <div style={{ flex: '0 0 30%', background: '#ffebeb', display: 'flex', alignItems: 'flex-end' }}>\n          <Affix offsetBottom={20}>\n            <BalaBala text=\"offsetBottom={20}\" />\n          </Affix>\n        </div>\n      </div>\n\n      <div style={{ flex: '0 0 70%', background: '#b3b1f1' }}>{repeat('BOTTOM CONTENT', 20)}</div>\n    </div>\n  );\n}",deps:function(){return[T,m]},provides:{Affix:d.Affix}};function A(){return l.a.createElement("div",null,g("OUTER TOP CONTENT",5),l.a.createElement("div",{style:{height:400,overflow:"auto",background:"#d9e6ff"}},l.a.createElement("div",{style:{height:100,background:"#d2fcc9"}}),l.a.createElement(d.Affix,{offsetTop:10},l.a.createElement(p,{text:"offsetTop={10}"})),l.a.createElement("div",{style:{height:600,background:"#fcc9fb"}})),g("OUTER BOTTOM CONTENT",15))}E.__doc_info=O,E.__inner_source="function BasicAffixBottom() {\n  return (\n    <div>\n      {repeat('TOP CONTENT', 3)}\n\n      <div style={{ display: 'flex' }}>\n        <div style={{ flex: '0 0 70%', background: '#f2f2f2' }}>{repeat('LONG CONTENT', 20)}</div>\n        <div style={{ flex: '0 0 30%', background: '#ffebeb', display: 'flex', alignItems: 'flex-end' }}>\n          <Affix offsetBottom={20}>\n            <BalaBala text=\"offsetBottom={20}\" />\n          </Affix>\n        </div>\n      </div>\n\n      <div style={{ flex: '0 0 70%', background: '#b3b1f1' }}>{repeat('BOTTOM CONTENT', 20)}</div>\n    </div>\n  );\n}";var k={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:74,column:7},end:{line:92,column:1}},name:"AffixTopInContainer",value:A,source:"function AffixTopInContainer() {\n  return (\n    <div>\n      {repeat('OUTER TOP CONTENT', 5)}\n\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 100, background: '#d2fcc9' }} />\n\n        <Affix offsetTop={10}>\n          <BalaBala text=\"offsetTop={10}\" />\n        </Affix>\n\n        <div style={{ height: 600, background: '#fcc9fb' }} />\n      </div>\n\n      {repeat('OUTER BOTTOM CONTENT', 15)}\n    </div>\n  );\n}",deps:function(){return[T,m]},provides:{Affix:d.Affix}};function B(){return l.a.createElement("div",null,g("OUTER TOP CONTENT",5),l.a.createElement("div",{style:{height:400,overflow:"auto",background:"#d9e6ff"}},l.a.createElement("div",{style:{height:600,background:"#d2fcc9"}}),l.a.createElement(d.Affix,{offsetBottom:10},l.a.createElement(p,{text:"offsetBottom={10}"})),l.a.createElement("div",{style:{height:400,background:"#fcc9fb"}})),g("OUTER BOTTOM CONTENT",15))}A.__doc_info=k,A.__inner_source="function AffixTopInContainer() {\n  return (\n    <div>\n      {repeat('OUTER TOP CONTENT', 5)}\n\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 100, background: '#d2fcc9' }} />\n\n        <Affix offsetTop={10}>\n          <BalaBala text=\"offsetTop={10}\" />\n        </Affix>\n\n        <div style={{ height: 600, background: '#fcc9fb' }} />\n      </div>\n\n      {repeat('OUTER BOTTOM CONTENT', 15)}\n    </div>\n  );\n}";var N={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:94,column:7},end:{line:112,column:1}},name:"AffixBottomInContainer",value:B,source:"function AffixBottomInContainer() {\n  return (\n    <div>\n      {repeat('OUTER TOP CONTENT', 5)}\n\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 600, background: '#d2fcc9' }} />\n\n        <Affix offsetBottom={10}>\n          <BalaBala text=\"offsetBottom={10}\" />\n        </Affix>\n\n        <div style={{ height: 400, background: '#fcc9fb' }} />\n      </div>\n\n      {repeat('OUTER BOTTOM CONTENT', 15)}\n    </div>\n  );\n}",deps:function(){return[T,m]},provides:{Affix:d.Affix}};function _(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:"0 0 70%",background:"#f2f2f2",height:400}}),l.a.createElement("div",{style:{flex:"0 0 30%",background:"#ffebeb"}},l.a.createElement(d.Affix,{offsetTop:40,style:{zIndex:1e3}},l.a.createElement(p,{text:"offsetTop={40}"}))))}B.__doc_info=N,B.__inner_source="function AffixBottomInContainer() {\n  return (\n    <div>\n      {repeat('OUTER TOP CONTENT', 5)}\n\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 600, background: '#d2fcc9' }} />\n\n        <Affix offsetBottom={10}>\n          <BalaBala text=\"offsetBottom={10}\" />\n        </Affix>\n\n        <div style={{ height: 400, background: '#fcc9fb' }} />\n      </div>\n\n      {repeat('OUTER BOTTOM CONTENT', 15)}\n    </div>\n  );\n}";var C={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:114,column:7},end:{line:125,column:1}},name:"AffixDocExample",value:_,source:"function AffixDocExample() {\n  return (\n    <div style={{ display: 'flex' }}>\n      <div style={{ flex: '0 0 70%', background: '#f2f2f2', height: 400 }} />\n      <div style={{ flex: '0 0 30%', background: '#ffebeb' }}>\n        <Affix offsetTop={40} style={{ zIndex: 1000 }}>\n          <BalaBala text=\"offsetTop={40}\" />\n        </Affix>\n      </div>\n    </div>\n  );\n}",deps:function(){return[m]},provides:{Affix:d.Affix}};function U(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:"0 0 70%",background:"#f2f2f2",height:400}}),l.a.createElement("div",{style:{flex:"0 0 30%",background:"#ffebeb",display:"flex",alignItems:"flex-end"}},l.a.createElement(d.Affix,{offsetBottom:20,style:{zIndex:1e3},onAffix:function(e){console.log("affix state change to",e)}},l.a.createElement(p,{text:"offsetBottom={20}"}))))}_.__doc_info=C,_.__inner_source="function AffixDocExample() {\n  return (\n    <div style={{ display: 'flex' }}>\n      <div style={{ flex: '0 0 70%', background: '#f2f2f2', height: 400 }} />\n      <div style={{ flex: '0 0 30%', background: '#ffebeb' }}>\n        <Affix offsetTop={40} style={{ zIndex: 1000 }}>\n          <BalaBala text=\"offsetTop={40}\" />\n        </Affix>\n      </div>\n    </div>\n  );\n}";var I={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:127,column:7},end:{line:144,column:1}},name:"AffixDocExample2",value:U,source:"function AffixDocExample2() {\n  return (\n    <div style={{ display: 'flex' }}>\n      <div style={{ flex: '0 0 70%', background: '#f2f2f2', height: 400 }} />\n      <div style={{ flex: '0 0 30%', background: '#ffebeb', display: 'flex', alignItems: 'flex-end' }}>\n        <Affix\n          offsetBottom={20}\n          style={{ zIndex: 1000 }}\n          onAffix={(affix) => {\n            console.log('affix state change to', affix);\n          }}\n        >\n          <BalaBala text=\"offsetBottom={20}\" />\n        </Affix>\n      </div>\n    </div>\n  );\n}",deps:function(){return[m]},provides:{Affix:d.Affix}};function j(){return l.a.createElement("div",null,l.a.createElement("div",{style:{height:400,overflow:"auto",background:"#d9e6ff"}},l.a.createElement("div",{style:{height:100,background:"#d3f6ed"}}),l.a.createElement(d.Affix,{offsetTop:10},l.a.createElement(p,{text:"offsetTop={10}"})),l.a.createElement("div",{style:{height:1e3,background:"#d9eac6"}})))}U.__doc_info=I,U.__inner_source="function AffixDocExample2() {\n  return (\n    <div style={{ display: 'flex' }}>\n      <div style={{ flex: '0 0 70%', background: '#f2f2f2', height: 400 }} />\n      <div style={{ flex: '0 0 30%', background: '#ffebeb', display: 'flex', alignItems: 'flex-end' }}>\n        <Affix\n          offsetBottom={20}\n          style={{ zIndex: 1000 }}\n          onAffix={(affix) => {\n            console.log('affix state change to', affix);\n          }}\n        >\n          <BalaBala text=\"offsetBottom={20}\" />\n        </Affix>\n      </div>\n    </div>\n  );\n}";var w={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/affix.stories.tsx",loc:{start:{line:146,column:7},end:{line:160,column:1}},name:"AffixDocExample3",value:j,source:"function AffixDocExample3() {\n  return (\n    <div>\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 100, background: '#d3f6ed' }} />\n\n        <Affix offsetTop={10}>\n          <BalaBala text=\"offsetTop={10}\" />\n        </Affix>\n\n        <div style={{ height: 1000, background: '#d9eac6' }} />\n      </div>\n    </div>\n  );\n}",deps:function(){return[m]},provides:{Affix:d.Affix}};j.__inner_source="function AffixDocExample3() {\n  return (\n    <div>\n      <div style={{ height: 400, overflow: 'auto', background: '#d9e6ff' }}>\n        <div style={{ height: 100, background: '#d3f6ed' }} />\n\n        <Affix offsetTop={10}>\n          <BalaBala text=\"offsetTop={10}\" />\n        </Affix>\n\n        <div style={{ height: 1000, background: '#d9eac6' }} />\n      </div>\n    </div>\n  );\n}",j.__doc_info=w;var D={id:"affix",title:"Affix \u56fa\u9489"},P={unversionedId:"affix",id:"affix",isDocsHomePage:!1,title:"Affix \u56fa\u9489",description:"\u5c06\u9875\u9762\u5143\u7d20\u9489\u5728\u53ef\u89c6\u8303\u56f4\u3002",source:"@site/docs/affix.mdx",sourceDirName:".",slug:"/affix",permalink:"/rex-design/docs/affix",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/affix.mdx",version:"current",frontMatter:{id:"affix",title:"Affix \u56fa\u9489"},sidebar:"docs",previous:{title:"Toaster \u5410\u53f8\u63d0\u793a",permalink:"/rex-design/docs/toaster"},next:{title:"BaseTable \u57fa\u7840\u8868\u683c",permalink:"/rex-design/docs/base-table"}},M=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u56de\u8c03",id:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u56de\u8c03",children:[]},{value:"\u6eda\u52a8\u5bb9\u5668\u7528\u6cd5",id:"\u6eda\u52a8\u5bb9\u5668\u7528\u6cd5",children:[]}]},{value:"API",id:"api",children:[]}],z=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",n)}},R=z("Story"),S=z("PropsTable"),L={toc:M};function G(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},L,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5c06\u9875\u9762\u5143\u7d20\u9489\u5728\u53ef\u89c6\u8303\u56f4\u3002"),Object(r.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(r.b)("p",null,"\u5f53\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\uff0c\u9700\u8981\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u5bf9\u5e94\u7684\u64cd\u4f5c\u6216\u8005\u5bfc\u822a\u9700\u8981\u5728\u6eda\u52a8\u8303\u56f4\u5185\u59cb\u7ec8\u5c55\u73b0\u3002\u5e38\u7528\u4e8e\u4fa7\u8fb9\u83dc\u5355\u548c\u6309\u94ae\u7ec4\u5408\u3002"),Object(r.b)("p",null,"\u9875\u9762\u53ef\u89c6\u8303\u56f4\u8fc7\u5c0f\u65f6\uff0c\u614e\u7528\u6b64\u529f\u80fd\u4ee5\u514d\u906e\u6321\u9875\u9762\u5185\u5bb9\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(r.b)(R,{fn:_,mdxType:"Story"}),Object(r.b)("h3",{id:"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u56de\u8c03"},"\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u56de\u8c03"),Object(r.b)("p",null,"\u8bbe\u7f6e onAffix \u540e\uff0c\u6bcf\u5f53\u56fa\u5b9a\u72b6\u6001\u53d1\u751f\u53d8\u5316 onAffix \u5c06\u88ab\u8c03\u7528\u3002"),Object(r.b)(R,{fn:U,mdxType:"Story"}),Object(r.b)("h3",{id:"\u6eda\u52a8\u5bb9\u5668\u7528\u6cd5"},"\u6eda\u52a8\u5bb9\u5668\u7528\u6cd5"),Object(r.b)("p",null,"Affix \u4f1a\u81ea\u52a8\u627e\u5230\u5143\u7d20\u7684\u6700\u8fd1\u6eda\u52a8\u5bb9\u5668\uff0c\u7136\u540e\u5728\u8be5\u6eda\u52a8\u5bb9\u5668\u5185\u53d1\u751f\u56fa\u5b9a\u3002"),Object(r.b)(R,{fn:j,mdxType:"Story"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)(S,{component:d.Affix,mdxType:"PropsTable"}))}G.isMDXComponent=!0}}]);