(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return j})),t.d(n,"metadata",(function(){return T})),t.d(n,"toc",(function(){return S})),t.d(n,"default",(function(){return U}));var o=t(3),a=t(7),r=t(0),l=t.n(r),u=t(165),i=t(162),c=t(170);function s(){return l.a.createElement(i.DemoGroup,null,l.a.createElement(i.Input,{onChange:console.log}),l.a.createElement(i.Input,{defaultValue:"\u9ed8\u8ba4\u503c",onChange:console.log}),l.a.createElement(i.Input,{defaultValue:"\u53ea\u8bfb\u8f93\u5165\u6846",onChange:console.log,readOnly:!0}))}var p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:7,column:7},end:{line:15,column:1}},name:"Basic",value:s,source:'function Basic() {\n  return (\n    <DemoGroup>\n      <Input onChange={console.log} />\n      <Input defaultValue="\u9ed8\u8ba4\u503c" onChange={console.log} />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} readOnly />\n    </DemoGroup>\n  );\n}',deps:function(){return[]},provides:{DemoGroup:i.DemoGroup,Input:i.Input}};function d(){var e=Object(r.useState)("rex"),n=e[0],t=e[1];return l.a.createElement(i.Input,{placeholder:"Basic usage",onChange:function(e){return t(e)},value:n})}s.__doc_info=p,s.__inner_source='function Basic() {\n  return (\n    <DemoGroup>\n      <Input onChange={console.log} />\n      <Input defaultValue="\u9ed8\u8ba4\u503c" onChange={console.log} />\n      <Input defaultValue="\u53ea\u8bfb\u8f93\u5165\u6846" onChange={console.log} readOnly />\n    </DemoGroup>\n  );\n}';var m={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:17,column:7},end:{line:20,column:1}},name:"Controlled",value:d,source:"function Controlled() {\n  const [input, setInput] = useState('rex');\n  return <Input placeholder=\"Basic usage\" onChange={(val) => setInput(val)} value={input} />;\n}",deps:function(){return[]},provides:{useState:r.useState,Input:i.Input}};function f(){return l.a.createElement(i.Input,{type:"password",defaultValue:"1234"})}d.__doc_info=m,d.__inner_source="function Controlled() {\n  const [input, setInput] = useState('rex');\n  return <Input placeholder=\"Basic usage\" onChange={(val) => setInput(val)} value={input} />;\n}";var h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:22,column:7},end:{line:24,column:1}},name:"Password",value:f,source:'function Password() {\n  return <Input type="password" defaultValue="1234" />;\n}',deps:function(){return[]},provides:{Input:i.Input}};function b(){return l.a.createElement(i.DemoGroup,null,l.a.createElement(i.DemoTitle,null,"\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145"),l.a.createElement(i.Input,{autoComplete:"off"}),l.a.createElement(i.DemoTitle,null,"\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145"),l.a.createElement(i.Input,{autoComplete:"new-password"}))}f.__doc_info=h,f.__inner_source='function Password() {\n  return <Input type="password" defaultValue="1234" />;\n}';var I={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:26,column:7},end:{line:35,column:1}},name:"AutoCompleteOff",value:b,source:'function AutoCompleteOff() {\n  return (\n    <DemoGroup>\n      <DemoTitle>\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145</DemoTitle>\n      <Input autoComplete="off" />\n      <DemoTitle>\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145</DemoTitle>\n      <Input autoComplete="new-password" />\n    </DemoGroup>\n  );\n}',deps:function(){return[]},provides:{DemoGroup:i.DemoGroup,DemoTitle:i.DemoTitle,Input:i.Input}};function g(){return l.a.createElement(i.Flex,{spacing:"l",direction:"column"},l.a.createElement(i.Input,{defaultValue:"hippo",status:"error"}),l.a.createElement(i.Input,{defaultValue:"hippo",status:"success"}),l.a.createElement(i.Input,{defaultValue:"hippo"}))}b.__doc_info=I,b.__inner_source='function AutoCompleteOff() {\n  return (\n    <DemoGroup>\n      <DemoTitle>\u7981\u7528\u8868\u5355\u81ea\u52a8\u586b\u5145</DemoTitle>\n      <Input autoComplete="off" />\n      <DemoTitle>\u963b\u6b62\u5bc6\u7801\u5b57\u6bb5\u7684\u81ea\u52a8\u586b\u5145</DemoTitle>\n      <Input autoComplete="new-password" />\n    </DemoGroup>\n  );\n}';var v={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:37,column:7},end:{line:45,column:1}},name:"Status",value:g,source:'function Status() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input defaultValue="hippo" status="error" />\n      <Input defaultValue="hippo" status="success" />\n      <Input defaultValue="hippo" />\n    </Flex>\n  );\n}',deps:function(){return[]},provides:{Flex:i.Flex,Input:i.Input}};function x(){return l.a.createElement(i.Input,{shape:"simple",placeholder:"\u7b80\u5355\u8f93\u5165\u6846"})}g.__doc_info=v,g.__inner_source='function Status() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input defaultValue="hippo" status="error" />\n      <Input defaultValue="hippo" status="success" />\n      <Input defaultValue="hippo" />\n    </Flex>\n  );\n}';var _={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:47,column:7},end:{line:49,column:1}},name:"Simple",value:x,source:'function Simple() {\n  return <Input shape="simple" placeholder="\u7b80\u5355\u8f93\u5165\u6846" />;\n}',deps:function(){return[]},provides:{Input:i.Input}};function y(){return l.a.createElement(i.Input,{hasClear:!0,defaultValue:"\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c",onChange:console.log})}x.__doc_info=_,x.__inner_source='function Simple() {\n  return <Input shape="simple" placeholder="\u7b80\u5355\u8f93\u5165\u6846" />;\n}';var E={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:51,column:7},end:{line:53,column:1}},name:"HasClear",value:y,source:'function HasClear() {\n  return <Input hasClear defaultValue="\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c" onChange={console.log} />;\n}',deps:function(){return[]},provides:{Input:i.Input}};function C(){return l.a.createElement(i.Flex,{spacing:"l",direction:"column"},l.a.createElement(i.Input,{leftElement:l.a.createElement(c.a,{type:"search",style:{marginLeft:"8px"}}),rightElement:l.a.createElement(c.a,{type:"arrow-down",style:{marginRight:"8px"}}),hasClear:!0,defaultValue:"default value"}))}y.__doc_info=E,y.__inner_source='function HasClear() {\n  return <Input hasClear defaultValue="\u70b9\u51fb\u53f3\u4fa7\u56fe\u6807\u6e05\u7a7a\u5f53\u524d\u6587\u672c" onChange={console.log} />;\n}';var w={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:55,column:7},end:{line:66,column:1}},name:"Elements",value:C,source:'function Elements() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input\n        leftElement={<Icon type="search" style={{ marginLeft: \'8px\' }} />}\n        rightElement={<Icon type="arrow-down" style={{ marginRight: \'8px\' }} />}\n        hasClear\n        defaultValue="default value"\n      />\n    </Flex>\n  );\n}',deps:function(){return[]},provides:{Flex:i.Flex,Input:i.Input,Icon:c.a}};function D(){return l.a.createElement(i.DemoGroup,null,l.a.createElement(i.Input,{leftElement:l.a.createElement(c.a,{type:"search"}),rightElement:l.a.createElement(c.a,{type:"arrow-down"}),hasClear:!0,value:"hello world",disabled:!0}),l.a.createElement(i.Input,{shape:"simple",leftElement:l.a.createElement(c.a,{type:"search"}),rightElement:l.a.createElement(c.a,{type:"arrow-down"}),hasClear:!0,value:"hello world",disabled:!0}))}C.__doc_info=w,C.__inner_source='function Elements() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Input\n        leftElement={<Icon type="search" style={{ marginLeft: \'8px\' }} />}\n        rightElement={<Icon type="arrow-down" style={{ marginRight: \'8px\' }} />}\n        hasClear\n        defaultValue="default value"\n      />\n    </Flex>\n  );\n}';var A={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:68,column:7},end:{line:88,column:1}},name:"Disabled",value:D,source:'function Disabled() {\n  return (\n    <DemoGroup>\n      <Input\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="arrow-down" />}\n        hasClear\n        value="hello world"\n        disabled\n      />\n      <Input\n        shape="simple"\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="arrow-down" />}\n        hasClear\n        value="hello world"\n        disabled\n      />\n    </DemoGroup>\n  );\n}',deps:function(){return[]},provides:{DemoGroup:i.DemoGroup,Input:i.Input,Icon:c.a}};function O(){return l.a.createElement(i.Flex,{spacing:"l",direction:"column"},l.a.createElement(i.Group,{isAttached:!0},l.a.createElement(i.InputAddon,null,"https://"),l.a.createElement(i.Input,{placeholder:"https://alibaba.github.io/rex-design/"}),l.a.createElement(i.InputAddon,null,".com")),l.a.createElement(i.Group,{isAttached:!0},l.a.createElement(i.InputAddon,null,"+86"),l.a.createElement(i.Input,{placeholder:"11 \u4f4d\u624b\u673a\u53f7\u7801"})))}D.__doc_info=A,D.__inner_source='function Disabled() {\n  return (\n    <DemoGroup>\n      <Input\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="arrow-down" />}\n        hasClear\n        value="hello world"\n        disabled\n      />\n      <Input\n        shape="simple"\n        leftElement={<Icon type="search" />}\n        rightElement={<Icon type="arrow-down" />}\n        hasClear\n        value="hello world"\n        disabled\n      />\n    </DemoGroup>\n  );\n}';var G={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/input.stories.tsx",loc:{start:{line:90,column:7},end:{line:105,column:1}},name:"Addons",value:O,source:'function Addons() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Group isAttached>\n        <InputAddon>https://</InputAddon>\n        <Input placeholder="https://alibaba.github.io/rex-design/" />\n        <InputAddon>.com</InputAddon>\n      </Group>\n\n      <Group isAttached>\n        <InputAddon>+86</InputAddon>\n        <Input placeholder="11 \u4f4d\u624b\u673a\u53f7\u7801" />\n      </Group>\n    </Flex>\n  );\n}',deps:function(){return[]},provides:{Flex:i.Flex,Group:i.Group,InputAddon:i.InputAddon,Input:i.Input}};O.__inner_source='function Addons() {\n  return (\n    <Flex spacing="l" direction="column">\n      <Group isAttached>\n        <InputAddon>https://</InputAddon>\n        <Input placeholder="https://alibaba.github.io/rex-design/" />\n        <InputAddon>.com</InputAddon>\n      </Group>\n\n      <Group isAttached>\n        <InputAddon>+86</InputAddon>\n        <Input placeholder="11 \u4f4d\u624b\u673a\u53f7\u7801" />\n      </Group>\n    </Flex>\n  );\n}',O.__doc_info=G;var j={id:"input",title:"Input \u8f93\u5165\u6846"},T={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input \u8f93\u5165\u6846",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/rex-design/docs/input",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/input.mdx",version:"current",frontMatter:{id:"input",title:"Input \u8f93\u5165\u6846"},sidebar:"docs",previous:{title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668",permalink:"/rex-design/docs/file-picker"},next:{title:"NumberInput \u6570\u5b57\u8f93\u5165",permalink:"/rex-design/docs/number-input"}},S=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u53d7\u63a7",id:"\u53d7\u63a7",children:[]},{value:"\u5bc6\u7801",id:"\u5bc6\u7801",children:[]},{value:"\u5173\u95ed\u81ea\u52a8\u586b\u5145",id:"\u5173\u95ed\u81ea\u52a8\u586b\u5145",children:[]},{value:"\u5c3a\u5bf8",id:"\u5c3a\u5bf8",children:[]},{value:"\u7b80\u5355\u8f93\u5165\u6846",id:"\u7b80\u5355\u8f93\u5165\u6846",children:[]},{value:"\u5f62\u6001",id:"\u5f62\u6001",children:[]},{value:"\u6e05\u7a7a",id:"\u6e05\u7a7a",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]},{value:"\u5143\u7d20",id:"\u5143\u7d20",children:[]}]},{value:"API",id:"api",children:[]}],V=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",n)}},F=V("Story"),k=V("PropsTable"),B={toc:S};function U(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(o.a)({},B,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(u.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(u.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(u.b)(F,{fn:s,mdxType:"Story"}),Object(u.b)("h3",{id:"\u53d7\u63a7"},"\u53d7\u63a7"),Object(u.b)(F,{fn:d,mdxType:"Story"}),Object(u.b)("h3",{id:"\u5bc6\u7801"},"\u5bc6\u7801"),Object(u.b)(F,{fn:f,mdxType:"Story"}),Object(u.b)("h3",{id:"\u5173\u95ed\u81ea\u52a8\u586b\u5145"},"\u5173\u95ed\u81ea\u52a8\u586b\u5145"),Object(u.b)("p",null,'\u53ef\u4ee5\u901a\u8fc7 autoComplete="off" \u5c5e\u6027\u5173\u95ed\u6587\u672c\u6846\u7684\u81ea\u52a8\u586b\u5145\uff0c\u4f46\u7531\u4e8e',Object(u.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E5%B1%9E%E6%80%A7%E5%92%8C%E7%99%BB%E5%BD%95"},"\u67d0\u4e9b\u539f\u56e0"),"\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u5927\u591a\u4e0d\u652f\u6301\u8be5\u8bbe\u7f6e\u3002\u5982\u679c\u8bbe\u7f6e\u4e0d\u751f\u6548\uff0c\u5efa\u8bae\u53c2\u8003",Object(u.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion"},"\u8be5\u6587\u6863"),"\u3002"),Object(u.b)(F,{fn:b,mdxType:"Story"}),Object(u.b)("h3",{id:"\u5c3a\u5bf8"},"\u5c3a\u5bf8"),Object(u.b)(F,{fn:void 0,mdxType:"Story"}),Object(u.b)("h3",{id:"\u7b80\u5355\u8f93\u5165\u6846"},"\u7b80\u5355\u8f93\u5165\u6846"),Object(u.b)(F,{fn:x,mdxType:"Story"}),Object(u.b)("h3",{id:"\u5f62\u6001"},"\u5f62\u6001"),Object(u.b)(F,{fn:void 0,mdxType:"Story"}),Object(u.b)("h3",{id:"\u6e05\u7a7a"},"\u6e05\u7a7a"),Object(u.b)(F,{fn:y,mdxType:"Story"}),Object(u.b)("h3",{id:"\u6269\u5c55"},"\u6269\u5c55"),Object(u.b)(F,{fn:O,mdxType:"Story"}),Object(u.b)("h3",{id:"\u5143\u7d20"},"\u5143\u7d20"),Object(u.b)(F,{fn:C,mdxType:"Story"}),Object(u.b)("h2",{id:"api"},"API"),Object(u.b)(k,{component:i.Input,mdxType:"PropsTable"}))}U.isMDXComponent=!0}}]);