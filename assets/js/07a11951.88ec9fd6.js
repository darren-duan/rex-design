(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return f})),t.d(n,"toc",(function(){return x})),t.d(n,"default",(function(){return g}));var i=t(3),o=t(7),r=t(0),c=t.n(r),u=t(165),a=t(170),s=t(162),l=function(){var e=Object(r.useState)(null),n=e[0],t=e[1],i=Object(r.useRef)();return Object(r.useEffect)((function(){i.current.focus()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Box,null,"\u641c\u7d22: ",c.a.createElement(s.Input,{onChange:t,style:{width:"150px"},ref:i})),c.a.createElement(s.Flex,{wrap:"wrap"},a.b.filter((function(e){return!n||0===n.length||e.includes(n)})).map((function(e){return c.a.createElement(s.Flex,{direction:"column",justify:"center",align:"center",width:"160px",height:"120px",key:e},c.a.createElement(a.a,{type:e,style:{height:"50px",width:"50px"}}),c.a.createElement(s.Box,{fontSize:"16px"},e))}))))},p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/icon.stories.tsx",loc:{start:{line:7,column:7},end:{line:32,column:2}},name:"Basic",value:l,source:'const Basic = () => {\n  const [query, setQuery] = useState(null);\n  const ref = useRef();\n\n  useEffect(() => {\n    ref.current.focus();\n  }, []);\n\n  return (\n    <>\n      <Box>\n        \u641c\u7d22: <Input onChange={setQuery} style={{ width: \'150px\' }} ref={ref} />\n      </Box>\n      <Flex wrap="wrap">\n        {iconTypes\n          .filter((name) => !query || query.length === 0 || name.includes(query))\n          .map((iconType) => (\n            <Flex direction="column" justify="center" align="center" width="160px" height="120px" key={iconType}>\n              <Icon type={iconType} style={{ height: \'50px\', width: \'50px\' }} />\n              <Box fontSize="16px">{iconType}</Box>\n            </Flex>\n          ))}\n      </Flex>\n    </>\n  );\n};',deps:function(){return[]},provides:{useState:r.useState,useRef:r.useRef,useEffect:r.useEffect,Box:s.Box,Input:s.Input,Flex:s.Flex,iconTypes:a.b,Icon:a.a}};l.__inner_source='() => {\n  const [query, setQuery] = useState(null);\n  const ref = useRef();\n\n  useEffect(() => {\n    ref.current.focus();\n  }, []);\n\n  return (\n    <>\n      <Box>\n        \u641c\u7d22: <Input onChange={setQuery} style={{ width: \'150px\' }} ref={ref} />\n      </Box>\n      <Flex wrap="wrap">\n        {iconTypes\n          .filter((name) => !query || query.length === 0 || name.includes(query))\n          .map((iconType) => (\n            <Flex direction="column" justify="center" align="center" width="160px" height="120px" key={iconType}>\n              <Icon type={iconType} style={{ height: \'50px\', width: \'50px\' }} />\n              <Box fontSize="16px">{iconType}</Box>\n            </Flex>\n          ))}\n      </Flex>\n    </>\n  );\n}',l.__doc_info=p;var d={id:"icon",title:"Icon \u56fe\u6807"},f={unversionedId:"icon",id:"icon",isDocsHomePage:!1,title:"Icon \u56fe\u6807",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/icon.mdx",sourceDirName:".",slug:"/icon",permalink:"/rex-design/docs/icon",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/icon.mdx",version:"current",frontMatter:{id:"icon",title:"Icon \u56fe\u6807"},sidebar:"docs",previous:{title:"Loading \u52a0\u8f7d\u4e2d",permalink:"/rex-design/docs/loading"},next:{title:"Image \u56fe\u7247",permalink:"/rex-design/docs/image"}},x=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]}]},{value:"API",id:"api",children:[]}],y=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",n)}},m=y("Story"),h=y("PropsTable"),b={toc:x};function g(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(u.b)("p",null,"\u56fe\u6807"),Object(u.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(u.b)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(u.b)(m,{fn:l,mdxType:"Story"}),Object(u.b)("h2",{id:"api"},"API"),Object(u.b)(h,{component:a.a,mdxType:"PropsTable"}))}g.isMDXComponent=!0}}]);