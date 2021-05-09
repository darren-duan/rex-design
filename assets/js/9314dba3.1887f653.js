(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return B})),n.d(t,"metadata",(function(){return T})),n.d(t,"toc",(function(){return v})),n.d(t,"default",(function(){return j}));var o=n(3),l=n(7),a=n(0),s=n.n(a),c=n(165),r=n(162);function i(){var e=r.Toaster.useToaster({placement:"top-right"}),t=e[0],n=e[1];return s.a.createElement("div",null,n,s.a.createElement(r.Button,{onClick:function(){t.show({content:"hello!"})}},"toaster.show(...)"),s.a.createElement(r.Button,{style:{marginLeft:8},onClick:function(){t.closeAll()}},"\u5173\u95ed\u6240\u6709\u6d88\u606f"))}var u={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/toast.stories.tsx",loc:{start:{line:6,column:7},end:{line:29,column:1}},name:"Basic",value:i,source:"function Basic() {\n  const [toaster, contextPlaceholder] = Toaster.useToaster({ placement: 'top-right' });\n\n  return (\n    <div>\n      {contextPlaceholder}\n      <Button\n        onClick={() => {\n          toaster.show({ content: 'hello!' });\n        }}\n      >\n        toaster.show(...)\n      </Button>\n      <Button\n        style={{ marginLeft: 8 }}\n        onClick={() => {\n          toaster.closeAll();\n        }}\n      >\n        \u5173\u95ed\u6240\u6709\u6d88\u606f\n      </Button>\n    </div>\n  );\n}",deps:function(){return[]},provides:{Toaster:r.Toaster,Button:r.Button}};function p(){return s.a.createElement("div",null,s.a.createElement(r.Button,{onClick:function(){r.Toaster.show({content:"hello!"})}},"Toaster.show(...)"),s.a.createElement(r.Button,{style:{marginLeft:8},onClick:function(){r.Toaster.closeAll()}},"\u5173\u95ed\u6240\u6709\u6d88\u606f"))}i.__doc_info=u,i.__inner_source="function Basic() {\n  const [toaster, contextPlaceholder] = Toaster.useToaster({ placement: 'top-right' });\n\n  return (\n    <div>\n      {contextPlaceholder}\n      <Button\n        onClick={() => {\n          toaster.show({ content: 'hello!' });\n        }}\n      >\n        toaster.show(...)\n      </Button>\n      <Button\n        style={{ marginLeft: 8 }}\n        onClick={() => {\n          toaster.closeAll();\n        }}\n      >\n        \u5173\u95ed\u6240\u6709\u6d88\u606f\n      </Button>\n    </div>\n  );\n}";var m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/toast.stories.tsx",loc:{start:{line:31,column:7},end:{line:51,column:1}},name:"BasicDetached",value:p,source:"function BasicDetached() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Toaster.show({ content: 'hello!' });\n        }}\n      >\n        Toaster.show(...)\n      </Button>\n      <Button\n        style={{ marginLeft: 8 }}\n        onClick={() => {\n          Toaster.closeAll();\n        }}\n      >\n        \u5173\u95ed\u6240\u6709\u6d88\u606f\n      </Button>\n    </div>\n  );\n}",deps:function(){return[]},provides:{Button:r.Button,Toaster:r.Toaster}};function d(){var e=Object(a.useState)("top-right"),t=e[0],n=e[1],o=r.Toaster.useToaster({placement:t}),l=o[0],c=o[1];return s.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"flex-start",gap:16}},c,s.a.createElement(r.Button,{onClick:function(){return l.show({content:"hello!"})},style:{fontFamily:"monospace"}},"show('hello!')"),s.a.createElement(r.Button,{onClick:function(){return l.closeAll()}},"\u5173\u95ed\u6240\u6709\u6d88\u606f"),s.a.createElement(r.Button,{onClick:function(){n("top-right"===t?"top":"top"===t?"top-left":"top-right")}},"\u5207\u6362\u4f4d\u7f6e(",t,")"))}p.__doc_info=m,p.__inner_source="function BasicDetached() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Toaster.show({ content: 'hello!' });\n        }}\n      >\n        Toaster.show(...)\n      </Button>\n      <Button\n        style={{ marginLeft: 8 }}\n        onClick={() => {\n          Toaster.closeAll();\n        }}\n      >\n        \u5173\u95ed\u6240\u6709\u6d88\u606f\n      </Button>\n    </div>\n  );\n}";var h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/toast.stories.tsx",loc:{start:{line:53,column:7},end:{line:80,column:1}},name:"DynamicPlacement",value:d,source:"function DynamicPlacement() {\n  const [placement, setPlacement] = useState('top-right');\n  const [toaster, contextPlaceholder] = Toaster.useToaster({ placement });\n\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      {contextPlaceholder}\n\n      <Button onClick={() => toaster.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        show('hello!')\n      </Button>\n      <Button onClick={() => toaster.closeAll()}>\u5173\u95ed\u6240\u6709\u6d88\u606f</Button>\n      <Button\n        onClick={() => {\n          if (placement === 'top-right') {\n            setPlacement('top');\n          } else if (placement === 'top') {\n            setPlacement('top-left');\n          } else {\n            setPlacement('top-right');\n          }\n        }}\n      >\n        \u5207\u6362\u4f4d\u7f6e({placement})\n      </Button>\n    </div>\n  );\n}",deps:function(){return[]},provides:{useState:a.useState,Toaster:r.Toaster,Button:r.Button}};function f(){var e=r.Toaster.useToaster({placement:"top-right"}),t=e[0],n=e[1],o=r.Toaster.useToaster({placement:"top"}),l=o[0],a=o[1];return s.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"flex-start",gap:16}},n,a,s.a.createElement(r.Button,{onClick:function(){return t.show({content:"hello!"})},style:{fontFamily:"monospace"}},"toaster1.show('hello!')"),s.a.createElement(r.Button,{onClick:function(){return t.closeAll()},style:{fontFamily:"monospace"}},"toaster1.closeAll()"),s.a.createElement("div",{style:{margin:"12px 0",width:"100%",height:1,borderTop:"1px solid var(--rex-colors-emphasis-30)"}}),s.a.createElement(r.Button,{style:{fontFamily:"monospace"},onClick:function(){l.show({content:"hello!"})}},"toaster2.show('world!')"),s.a.createElement(r.Button,{style:{fontFamily:"monospace"},onClick:function(){l.show({content:s.a.createElement("h1",{style:{height:250}},"BIG"),canCloseByClick:!1})}},"toaster2.show(big)"),s.a.createElement(r.Button,{style:{fontFamily:"monospace"},onClick:function(){l.closeAll()}},"toaster2.closeAll()"))}d.__doc_info=h,d.__inner_source="function DynamicPlacement() {\n  const [placement, setPlacement] = useState('top-right');\n  const [toaster, contextPlaceholder] = Toaster.useToaster({ placement });\n\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      {contextPlaceholder}\n\n      <Button onClick={() => toaster.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        show('hello!')\n      </Button>\n      <Button onClick={() => toaster.closeAll()}>\u5173\u95ed\u6240\u6709\u6d88\u606f</Button>\n      <Button\n        onClick={() => {\n          if (placement === 'top-right') {\n            setPlacement('top');\n          } else if (placement === 'top') {\n            setPlacement('top-left');\n          } else {\n            setPlacement('top-right');\n          }\n        }}\n      >\n        \u5207\u6362\u4f4d\u7f6e({placement})\n      </Button>\n    </div>\n  );\n}";var g={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/toast.stories.tsx",loc:{start:{line:82,column:7},end:{line:136,column:1}},name:"MultipleToaster",value:f,source:"function MultipleToaster() {\n  const [toaster1, node1] = Toaster.useToaster({ placement: 'top-right' });\n  const [toaster2, node2] = Toaster.useToaster({ placement: 'top' });\n\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      {node1}\n      {node2}\n\n      <Button onClick={() => toaster1.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        toaster1.show('hello!')\n      </Button>\n      <Button onClick={() => toaster1.closeAll()} style={{ fontFamily: 'monospace' }}>\n        toaster1.closeAll()\n      </Button>\n\n      <div\n        style={{\n          margin: '12px 0',\n          width: '100%',\n          height: 1,\n          borderTop: '1px solid var(--rex-colors-emphasis-30)',\n        }}\n      />\n\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.show({ content: 'hello!' });\n        }}\n      >\n        toaster2.show('world!')\n      </Button>\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.show({\n            content: <h1 style={{ height: 250 }}>BIG</h1>,\n            canCloseByClick: false,\n          });\n        }}\n      >\n        toaster2.show(big)\n      </Button>\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.closeAll();\n        }}\n      >\n        toaster2.closeAll()\n      </Button>\n    </div>\n  );\n}",deps:function(){return[]},provides:{Toaster:r.Toaster,Button:r.Button}};function b(){var e=Object(a.useReducer)((function(e){return e+1}),0),t=(e[0],e[1]);return s.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"flex-start",gap:16}},s.a.createElement(r.Button,{onClick:function(){return r.Toaster.show({content:"hello!"})},style:{fontFamily:"monospace"}},"show('hello!')"),s.a.createElement(r.Button,{onClick:function(){return r.Toaster.closeAll()}},"\u5173\u95ed\u6240\u6709\u6d88\u606f"),s.a.createElement(r.Button,{onClick:function(){"top-right"===r.Toaster.getConfig().placement?r.Toaster.config({placement:"top"}):"top"===r.Toaster.getConfig().placement?r.Toaster.config({placement:"top-left"}):r.Toaster.config({placement:"top-right"}),t()}},"\u5207\u6362\u4f4d\u7f6e(",r.Toaster.getConfig().placement,")"))}f.__doc_info=g,f.__inner_source="function MultipleToaster() {\n  const [toaster1, node1] = Toaster.useToaster({ placement: 'top-right' });\n  const [toaster2, node2] = Toaster.useToaster({ placement: 'top' });\n\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      {node1}\n      {node2}\n\n      <Button onClick={() => toaster1.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        toaster1.show('hello!')\n      </Button>\n      <Button onClick={() => toaster1.closeAll()} style={{ fontFamily: 'monospace' }}>\n        toaster1.closeAll()\n      </Button>\n\n      <div\n        style={{\n          margin: '12px 0',\n          width: '100%',\n          height: 1,\n          borderTop: '1px solid var(--rex-colors-emphasis-30)',\n        }}\n      />\n\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.show({ content: 'hello!' });\n        }}\n      >\n        toaster2.show('world!')\n      </Button>\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.show({\n            content: <h1 style={{ height: 250 }}>BIG</h1>,\n            canCloseByClick: false,\n          });\n        }}\n      >\n        toaster2.show(big)\n      </Button>\n      <Button\n        style={{ fontFamily: 'monospace' }}\n        onClick={() => {\n          toaster2.closeAll();\n        }}\n      >\n        toaster2.closeAll()\n      </Button>\n    </div>\n  );\n}";var y={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/overlays/toast.stories.tsx",loc:{start:{line:138,column:7},end:{line:164,column:1}},name:"DetachedToasterWithDynamicPlacements",value:b,source:"function DetachedToasterWithDynamicPlacements() {\n  const [_, forceUpdate] = useReducer((t) => t + 1, 0);\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      <Button onClick={() => Toaster.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        show('hello!')\n      </Button>\n      <Button onClick={() => Toaster.closeAll()}>\u5173\u95ed\u6240\u6709\u6d88\u606f</Button>\n      <Button\n        onClick={() => {\n          if (Toaster.getConfig().placement === 'top-right') {\n            Toaster.config({ placement: 'top' });\n          } else if (Toaster.getConfig().placement === 'top') {\n            Toaster.config({ placement: 'top-left' });\n          } else {\n            Toaster.config({ placement: 'top-right' });\n          }\n\n          // \u8fd9\u91cc\u7684 forceUpdate \u53ea\u662f\u4e3a\u4e86\u5728\u9875\u9762\u4e2d\u663e\u793a\u6b63\u786e\u7684 placement\n          forceUpdate();\n        }}\n      >\n        \u5207\u6362\u4f4d\u7f6e({Toaster.getConfig().placement})\n      </Button>\n    </div>\n  );\n}",deps:function(){return[]},provides:{useReducer:a.useReducer,Button:r.Button,Toaster:r.Toaster}};b.__inner_source="function DetachedToasterWithDynamicPlacements() {\n  const [_, forceUpdate] = useReducer((t) => t + 1, 0);\n  return (\n    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: 16 }}>\n      <Button onClick={() => Toaster.show({ content: 'hello!' })} style={{ fontFamily: 'monospace' }}>\n        show('hello!')\n      </Button>\n      <Button onClick={() => Toaster.closeAll()}>\u5173\u95ed\u6240\u6709\u6d88\u606f</Button>\n      <Button\n        onClick={() => {\n          if (Toaster.getConfig().placement === 'top-right') {\n            Toaster.config({ placement: 'top' });\n          } else if (Toaster.getConfig().placement === 'top') {\n            Toaster.config({ placement: 'top-left' });\n          } else {\n            Toaster.config({ placement: 'top-right' });\n          }\n\n          // \u8fd9\u91cc\u7684 forceUpdate \u53ea\u662f\u4e3a\u4e86\u5728\u9875\u9762\u4e2d\u663e\u793a\u6b63\u786e\u7684 placement\n          forceUpdate();\n        }}\n      >\n        \u5207\u6362\u4f4d\u7f6e({Toaster.getConfig().placement})\n      </Button>\n    </div>\n  );\n}",b.__doc_info=y;var B={id:"toaster",title:"Toaster \u5410\u53f8\u63d0\u793a"},T={unversionedId:"toaster",id:"toaster",isDocsHomePage:!1,title:"Toaster \u5410\u53f8\u63d0\u793a",description:"\u5410\u53f8\u63d0\u793a\uff0c\u7528\u4e8e\u5168\u5c40\u5c55\u793a\u901a\u77e5\u3001\u63d0\u9192\u4fe1\u606f\u3002",source:"@site/docs/toaster.mdx",sourceDirName:".",slug:"/toaster",permalink:"/rex-design/docs/toaster",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/toaster.mdx",version:"current",frontMatter:{id:"toaster",title:"Toaster \u5410\u53f8\u63d0\u793a"},sidebar:"docs",previous:{title:"Position \u5b9a\u4f4d",permalink:"/rex-design/docs/position"},next:{title:"BaseTable \u57fa\u7840\u8868\u683c",permalink:"/rex-design/docs/base-table"}},v=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[{value:"\u5168\u5c40\u7528\u6cd5",id:"\u5168\u5c40\u7528\u6cd5",children:[]},{value:"hooks \u7528\u6cd5",id:"hooks-\u7528\u6cd5",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u591a\u4e2a toast \u5bb9\u5668",id:"\u591a\u4e2a-toast-\u5bb9\u5668",children:[]}]},{value:"API",id:"api",children:[{value:"\u5feb\u6377\u8c03\u7528",id:"\u5feb\u6377\u8c03\u7528",children:[]},{value:"Dialog.useDialog()",id:"dialogusedialog",children:[]},{value:"Toaster Props",id:"toaster-props",children:[]}]}],x=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},C=x("Story"),k=x("PropsTable"),w={toc:v};function j(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5410\u53f8\u63d0\u793a\uff0c\u7528\u4e8e\u5168\u5c40\u5c55\u793a\u901a\u77e5\u3001\u63d0\u9192\u4fe1\u606f\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},"\u5728\u7cfb\u7edf\u56db\u4e2a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("del",{parentName:"li"},"\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("del",{parentName:"li"},"\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("del",{parentName:"li"},"\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"))),Object(c.b)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(c.b)("h3",{id:"\u5168\u5c40\u7528\u6cd5"},"\u5168\u5c40\u7528\u6cd5"),Object(c.b)(C,{fn:p,mdxType:"Story"}),Object(c.b)("h3",{id:"hooks-\u7528\u6cd5"},"hooks \u7528\u6cd5"),Object(c.b)("p",null,"\u6ce8\u610f contextHolder \u9700\u8981\u63d2\u5165\u5230\u5b50\u8282\u70b9\u4e2d\u3002"),Object(c.b)(C,{fn:i,mdxType:"Story"}),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("h3",{id:"\u591a\u4e2a-toast-\u5bb9\u5668"},"\u591a\u4e2a toast \u5bb9\u5668"),Object(c.b)(C,{fn:f,mdxType:"Story"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("h3",{id:"\u5feb\u6377\u8c03\u7528"},"\u5feb\u6377\u8c03\u7528"),Object(c.b)("h4",{id:"toastershowconfig-string"},Object(c.b)("inlineCode",{parentName:"h4"},"Toaster.show(config): string")),Object(c.b)("p",null,"\u6839\u636e ",Object(c.b)("inlineCode",{parentName:"p"},"config")," \u6253\u5f00\u4e00\u4e2a\u5feb\u6377\u5bf9\u8bdd\u6846\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"config.title")," \u4f5c\u4e3a\u5bf9\u8bdd\u6846\u7684\u6807\u9898\uff0c ",Object(c.b)("inlineCode",{parentName:"p"},"config.content")," \u4f5c\u4e3a\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9\uff0c\u5176\u4ed6\u5c5e\u6027\u8be6\u89c1 ",Object(c.b)("a",{parentName:"p",href:"#dialog-props"},"Dialog Props")),Object(c.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32 key \u8868\u793a\u8be5\u5bf9\u8bdd\u6846\u5b9e\u4f8b\uff0c\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"Dialog.close(key)")," \u53ef\u4ee5\u4e3b\u52a8\u5173\u95ed\u8be5\u5bf9\u8bdd\u6846\u3002"),Object(c.b)("h4",{id:"toasterclosekey"},Object(c.b)("inlineCode",{parentName:"h4"},"Toaster.close(key)")),Object(c.b)("p",null,"\u5173\u95ed\u4e00\u4e2a\u63d0\u793a\u4fe1\u606f\u3002"),Object(c.b)("h4",{id:"toastercloseall"},Object(c.b)("inlineCode",{parentName:"h4"},"Toaster.closeAll()")),Object(c.b)("p",null,"\u5173\u95ed\u6240\u6709\u63d0\u793a\u4fe1\u606f\u3002"),Object(c.b)("h3",{id:"dialogusedialog"},"Dialog.useDialog()"),Object(c.b)("p",null,"\u5f53\u4f60\u9700\u8981\u4f7f\u7528 Context \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 Dialog.useDialog \u521b\u5efa\u4e00\u4e2a contextHolder \u63d2\u5165\u5b50\u8282\u70b9\u4e2d\u3002\u901a\u8fc7 hooks \u521b\u5efa\u7684\u4e34\u65f6 Dialog \u5c06\u4f1a\u5f97\u5230 contextHolder \u6240\u5728\u4f4d\u7f6e\u7684\u6240\u6709\u4e0a\u4e0b\u6587\u3002\u521b\u5efa\u7684 dialog \u5bf9\u8c61\u62e5\u6709\u4e0e Dialog.method \u76f8\u540c\u7684\u521b\u5efa\u901a\u77e5\u65b9\u6cd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const [dialog, contextHolder] = Dialog.useDialog();\n\nReact.useEffect(() => {\n  dialog.confirm({\n    // ...\n  });\n}, []);\n\nreturn <div>{contextHolder}</div>;\n")),Object(c.b)("h3",{id:"toaster-props"},"Toaster Props"),Object(c.b)(k,{component:r.Toaster,mdxType:"PropsTable"}))}j.isMDXComponent=!0}}]);