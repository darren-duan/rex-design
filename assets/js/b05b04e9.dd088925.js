(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{139:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return F})),i.d(n,"metadata",(function(){return V})),i.d(n,"toc",(function(){return x})),i.d(n,"default",(function(){return q}));var t=i(3),r=i(7),o=i(0),a=i.n(o),s=i(161),c=i(158),l=i(559),u=i.n(l),d=[{id:"01",name:"IMG.png",url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"},{id:"02",name:"test.png",url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"}],p={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:7,column:0},end:{line:18,column:2}},name:"files",value:d,source:"const files = [\n  {\n    id: '01',\n    name: 'IMG.png',\n    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n  },\n  {\n    id: '02',\n    name: 'test.png',\n    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n  },\n];",deps:function(){return[]},provides:{}},g=function(e){return u()(Object.assign({method:"post",url:"http://127.0.0.1:7001/api/upload",transformResponse:[].concat(u.a.defaults.transformResponse,(function(e){return{url:e.data,message:e.message}})),onUploadProgress:function(e){console.log(e)}},e)).then((function(e){return e.data}))},X={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:20,column:0},end:{line:37,column:5}},name:"getRequest",value:g,source:"const getRequest = (options) =>\n  axios({\n    method: 'post',\n    url: 'http://127.0.0.1:7001/api/upload',\n    transformResponse: [].concat(axios.defaults.transformResponse, (data) => {\n      return {\n        url: data.data,\n        message: data.message,\n      };\n    }),\n    onUploadProgress: (e) => {\n      console.log(e);\n      // TODO: display progress info\n    },\n    ...options,\n  }).then((ret) => {\n    return ret.data;\n  });",deps:function(){return[]},provides:{axios:u.a}},m=function(){return a.a.createElement(c.DemoGroup,null,a.a.createElement(c.FilePicker,{defaultValue:d,request:g,onChange:console.log}),a.a.createElement(c.FilePicker,{defaultValue:d,disabled:!0,onChange:console.log}))},f={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:39,column:7},end:{line:45,column:2}},name:"Basic",value:m,source:"const Basic = () => (\n  <DemoGroup>\n    <FilePicker defaultValue={files} request={getRequest} onChange={console.log} />\n\n    <FilePicker defaultValue={files} disabled onChange={console.log} />\n  </DemoGroup>\n);",deps:function(){return[p,X]},provides:{DemoGroup:c.DemoGroup,FilePicker:c.FilePicker}};m.__doc_info=f,m.__inner_source="() => (\n  <DemoGroup>\n    <FilePicker defaultValue={files} request={getRequest} onChange={console.log} />\n\n    <FilePicker defaultValue={files} disabled onChange={console.log} />\n  </DemoGroup>\n)";var b=function(){return a.a.createElement(c.DemoGroup,null,a.a.createElement(c.MediaPicker,{defaultValue:d,request:g,onChange:console.log}),a.a.createElement(c.MediaPicker,{defaultValue:d,request:g,onChange:console.log,disabled:!0}))},h={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:47,column:7},end:{line:55,column:2}},name:"Media",value:b,source:"const Media = () => {\n  return (\n    <DemoGroup>\n      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} />\n\n      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} disabled />\n    </DemoGroup>\n  );\n};",deps:function(){return[p,X]},provides:{DemoGroup:c.DemoGroup,MediaPicker:c.MediaPicker}};b.__doc_info=h,b.__inner_source="() => {\n  return (\n    <DemoGroup>\n      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} />\n\n      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} disabled />\n    </DemoGroup>\n  );\n}";var k=function(){return a.a.createElement(c.DemoGroup,null,a.a.createElement(c.FilePicker,{triggerType:"drag",request:g,onChange:console.log}),a.a.createElement(c.FilePicker,{triggerType:"drag",request:g,onChange:console.log,disabled:!0}))},P={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:60,column:7},end:{line:67,column:2}},name:"DragFile",value:k,source:'const DragFile = () => {\n  return (\n    <DemoGroup>\n      <FilePicker triggerType="drag" request={getRequest} onChange={console.log} />\n      <FilePicker triggerType="drag" request={getRequest} onChange={console.log} disabled />\n    </DemoGroup>\n  );\n};',deps:function(){return[X]},provides:{DemoGroup:c.DemoGroup,FilePicker:c.FilePicker}};k.__doc_info=P,k.__inner_source='() => {\n  return (\n    <DemoGroup>\n      <FilePicker triggerType="drag" request={getRequest} onChange={console.log} />\n      <FilePicker triggerType="drag" request={getRequest} onChange={console.log} disabled />\n    </DemoGroup>\n  );\n}';var O=function(){var e=[{id:"01",name:"img.png",url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",status:"success"},{id:"02",name:"test.png",url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",status:"error"},{id:"03",name:"test02.png",url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",status:"process"}];return a.a.createElement(c.DemoGroup,null,a.a.createElement(c.FilePicker,{defaultValue:e,onChange:console.log}),a.a.createElement(c.MediaPicker,{defaultValue:e,onChange:console.log}))},j={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:69,column:7},end:{line:96,column:2}},name:"Status",value:O,source:"const Status = () => {\n  const files = [\n    {\n      id: '01',\n      name: 'img.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'success',\n    },\n    {\n      id: '02',\n      name: 'test.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'error',\n    },\n    {\n      id: '03',\n      name: 'test02.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'process',\n    },\n  ];\n  return (\n    <DemoGroup>\n      <FilePicker defaultValue={files} onChange={console.log} />\n      <MediaPicker defaultValue={files} onChange={console.log} />\n    </DemoGroup>\n  );\n};",deps:function(){return[p]},provides:{DemoGroup:c.DemoGroup,FilePicker:c.FilePicker,MediaPicker:c.MediaPicker}};O.__doc_info=j,O.__inner_source="() => {\n  const files = [\n    {\n      id: '01',\n      name: 'img.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'success',\n    },\n    {\n      id: '02',\n      name: 'test.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'error',\n    },\n    {\n      id: '03',\n      name: 'test02.png',\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n      status: 'process',\n    },\n  ];\n  return (\n    <DemoGroup>\n      <FilePicker defaultValue={files} onChange={console.log} />\n      <MediaPicker defaultValue={files} onChange={console.log} />\n    </DemoGroup>\n  );\n}";var M=function(){return a.a.createElement(c.MediaPicker,{accept:"image/*",onChange:console.log})},v={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:98,column:7},end:{line:101,column:2}},name:"FileTypes",value:M,source:'const FileTypes = () => {\n  // \u53ea\u80fd\u9009\u56fe\u7247\n  return <MediaPicker accept="image/*" onChange={console.log} />;\n};',deps:function(){return[]},provides:{MediaPicker:c.MediaPicker}};M.__doc_info=v,M.__inner_source='() => {\n  // \u53ea\u80fd\u9009\u56fe\u7247\n  return <MediaPicker accept="image/*" onChange={console.log} />;\n}';var y=function(){return a.a.createElement(c.FilePicker,{isMultiple:!0,onChange:console.log})},_={filename:"/Users/feichao.sfc/code/github/alibaba/rex-design/packages/story/src/file-picker.stories.tsx",loc:{start:{line:103,column:7},end:{line:105,column:2}},name:"Multiple",value:y,source:"const Multiple = () => {\n  return <FilePicker isMultiple onChange={console.log} />;\n};",deps:function(){return[]},provides:{FilePicker:c.FilePicker}};y.__inner_source="() => {\n  return <FilePicker isMultiple onChange={console.log} />;\n}",y.__doc_info=_;try{k.displayName="DragFile",k.__docgenInfo={description:"\u62d6\u62fd\u4e0a\u4f20",displayName:"DragFile",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../story/src/file-picker.stories.tsx#DragFile"]={docgenInfo:k.__docgenInfo,name:"DragFile",path:"../story/src/file-picker.stories.tsx#DragFile"})}catch(R){}var F={id:"file-picker",title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668"},V={unversionedId:"file-picker",id:"file-picker",isDocsHomePage:!1,title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/file-picker.mdx",sourceDirName:".",slug:"/file-picker",permalink:"/rex-design/docs/file-picker",editUrl:"https://github.com/alibaba/rex-design/edit/main/packages/doc/docs/file-picker.mdx",version:"current",frontMatter:{id:"file-picker",title:"FilePicker \u6587\u4ef6\u9009\u62e9\u5668"},sidebar:"docs",previous:{title:"TimePicker \u65f6\u95f4\u9009\u62e9",permalink:"/rex-design/docs/time-picker"},next:{title:"Input \u8f93\u5165\u6846",permalink:"/rex-design/docs/input"}},x=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[{value:"\u8bf7\u6c42\u5e93\u63a5\u5165\u793a\u4f8b",id:"\u8bf7\u6c42\u5e93\u63a5\u5165\u793a\u4f8b",children:[]},{value:"\u4e0a\u4f20\u6587\u4ef6\u793a\u4f8b",id:"\u4e0a\u4f20\u6587\u4ef6\u793a\u4f8b",children:[]},{value:"\u670d\u52a1\u7aef\u63a5\u6536\u793a\u4f8b",id:"\u670d\u52a1\u7aef\u63a5\u6536\u793a\u4f8b",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",children:[]},{value:"\u591a\u5a92\u4f53",id:"\u591a\u5a92\u4f53",children:[]},{value:"\u62d6\u62fd\u4e0a\u4f20",id:"\u62d6\u62fd\u4e0a\u4f20",children:[]},{value:"\u6587\u4ef6\u4e0a\u4f20\u72b6\u6001",id:"\u6587\u4ef6\u4e0a\u4f20\u72b6\u6001",children:[]},{value:"\u6587\u4ef6\u7c7b\u578b",id:"\u6587\u4ef6\u7c7b\u578b",children:[]},{value:"\u6587\u4ef6\u591a\u9009",id:"\u6587\u4ef6\u591a\u9009",children:[]}]},{value:"API",id:"api",children:[{value:"FilePicker",id:"filepicker",children:[]},{value:"MediaPicker",id:"mediapicker",children:[]}]}],D=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",n)}},T=D("Story"),C=D("PropsTable"),G={toc:x};function q(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},G,i,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),Object(s.b)("p",null,"\u4ece\u7cfb\u7edf\u6587\u4ef6\u76ee\u5f55\u4e2d\u9009\u62e9\u90e8\u5206\u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20\u3002"),Object(s.b)("h3",{id:"\u8bf7\u6c42\u5e93\u63a5\u5165\u793a\u4f8b"},"\u8bf7\u6c42\u5e93\u63a5\u5165\u793a\u4f8b"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"<FilePicker\n  request={(options: any) =>\n    axios({\n      method: 'post',\n      url: 'http://127.0.0.1:7001/api/upload',\n      transformResponse: [].concat(axios.defaults.transformResponse, (data: any) => {\n        return {\n          url: data.data,\n          message: data.message,\n        };\n      }),\n      ...options,\n    }).then((ret) => {\n      return ret.data;\n    })\n  }\n  onChange={console.log}\n/>\n")),Object(s.b)("p",null,"\u9700\u8981\u5c06\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u8f6c\u6362\u4e3a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "foo.bar",\n  "message": "message body"\n}\n')),Object(s.b)("h3",{id:"\u4e0a\u4f20\u6587\u4ef6\u793a\u4f8b"},"\u4e0a\u4f20\u6587\u4ef6\u793a\u4f8b"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"FormData\n- id: file_1\n- name: test.png\n- type: image/png\n- file: (binary)\n")),Object(s.b)("h3",{id:"\u670d\u52a1\u7aef\u63a5\u6536\u793a\u4f8b"},"\u670d\u52a1\u7aef\u63a5\u6536\u793a\u4f8b"),Object(s.b)("p",null,"\u4ee5 Egg \u6846\u67b6\u4e3a\u4f8b"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const stream = await ctx.getFileStream();\nconst filename = stream.filename || stream.name;\nconst ret = await ctx.service.file.uploadStream(stream, filename);\n")),Object(s.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(s.b)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),Object(s.b)(T,{fn:m,mdxType:"Story"}),Object(s.b)("h3",{id:"\u591a\u5a92\u4f53"},"\u591a\u5a92\u4f53"),Object(s.b)(T,{fn:b,mdxType:"Story"}),Object(s.b)("h3",{id:"\u62d6\u62fd\u4e0a\u4f20"},"\u62d6\u62fd\u4e0a\u4f20"),Object(s.b)(T,{fn:k,mdxType:"Story"}),Object(s.b)("h3",{id:"\u6587\u4ef6\u4e0a\u4f20\u72b6\u6001"},"\u6587\u4ef6\u4e0a\u4f20\u72b6\u6001"),Object(s.b)(T,{fn:O,mdxType:"Story"}),Object(s.b)("h3",{id:"\u6587\u4ef6\u7c7b\u578b"},"\u6587\u4ef6\u7c7b\u578b"),Object(s.b)(T,{fn:M,mdxType:"Story"}),Object(s.b)("h3",{id:"\u6587\u4ef6\u591a\u9009"},"\u6587\u4ef6\u591a\u9009"),Object(s.b)(T,{fn:y,mdxType:"Story"}),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("h3",{id:"filepicker"},"FilePicker"),Object(s.b)(C,{component:c.FilePicker,mdxType:"PropsTable"}),Object(s.b)("h3",{id:"mediapicker"},"MediaPicker"),Object(s.b)(C,{component:c.MediaPicker,mdxType:"PropsTable"}))}q.isMDXComponent=!0}}]);