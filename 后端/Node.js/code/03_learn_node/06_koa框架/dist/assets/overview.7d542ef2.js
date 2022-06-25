import{X as c}from"./card.ae89988d.js";import{r as p}from"./reactive-width.78941a43.js";import{_ as g,d as v,b as m,o as s,c as o,g as e,e as i,w as n,f as t,F as f,n as h,t as r,h as a,m as _}from"./index.38f45ce1.js";const y=[{title:"\u5F00\u53D1\u5DE5\u5177",desp:"Visual Studio Code"},{title:"\u7F16\u7A0B\u8BED\u8A00",desp:"TypeScript 4 + JavaScript"},{title:"\u6784\u5EFA\u8BED\u8A00",desp:"Vite 2"},{title:"\u524D\u7AEF\u6846\u67B6",desp:"Vue 3"},{title:"\u8DEF\u7531\u5DE5\u5177",desp:"Vue Router 4"},{title:"\u72B6\u6001\u7BA1\u7406",desp:"Pinia 2"},{title:"UI \u6846\u67B6",desp:"Element Plus"},{title:"\u53EF\u89C6\u5316",desp:"Echart 5"},{title:"\u5BCC\u6587\u672C",desp:"WangEditor"},{title:"\u5DE5\u5177\u5E93",desp:"dayjs + countup.js"},{title:"CSS \u9884\u7F16\u8BD1",desp:"Less"},{title:"HTTP \u5DE5\u5177",desp:"Axios"},{title:"Git Hook \u5DE5\u5177",desp:"husky"},{title:"\u4EE3\u7801\u89C4\u8303",desp:"EditorConfig + Prettier + ESLint"},{title:"\u63D0\u4EA4\u89C4\u8303",desp:"Commitizen + Commitlint"},{title:"\u81EA\u52A8\u90E8\u7F72",desp:"Centos + Jenkins + Nginx"}],E=`
|-- README.md
|-- commitlint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- base.less
|   |   |   |-- index.less
|   |   |-- img
|   |       |-- login-bg.svg
|   |       |-- logo.svg
|   |       |-- not-found.svg
|   |-- base-ui
|   |   |-- breadcrumb
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- breadcrumb.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- card.vue
|   |   |-- count-up
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- count-up.vue
|   |   |-- echart
|   |   |   |-- data
|   |   |   |   |-- china.json
|   |   |   |-- hooks
|   |   |   |   |-- useEchart.ts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- base-echart.vue
|   |   |-- editor
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- editor.vue
|   |   |-- form
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- form.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- table
|   |       |-- index.ts
|   |       |-- src
|   |       |   |-- table.vue
|   |       |-- types
|   |           |-- index.ts
|   |-- components
|   |   |-- nav-header
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- cpns
|   |   |       |   |-- user-info.vue
|   |   |       |-- nav-header.vue
|   |   |-- nav-menu
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- nav-menu.vue
|   |   |-- page-content
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-content.vue
|   |   |-- page-echarts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-echart.vue
|   |   |   |   |-- line-echart.vue
|   |   |   |   |-- map-echart.vue
|   |   |   |   |-- pie-echart.vue
|   |   |   |   |-- rose-echart.vue
|   |   |   |-- types
|   |   |   |   |-- index.ts
|   |   |   |-- utils
|   |   |       |-- convert-data.ts
|   |   |       |-- coordinate-data.ts
|   |   |-- page-modal
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- page-modal.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- page-search
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-search.vue
|   |   |-- page-statistical
|   |       |-- index.ts
|   |       |-- src
|   |           |-- page-statistical.vue
|   |-- env.d.ts
|   |-- global
|   |   |-- index.ts
|   |   |-- register-element.ts
|   |   |-- register-properties.ts
|   |-- hooks
|   |   |-- use-page-modal.ts
|   |   |-- use-page-search.ts
|   |   |-- use-permission.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   |-- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   |-- dashboard.ts
|   |       |   |-- overview
|   |       |       |-- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   |-- category.ts
|   |       |   |-- goods
|   |       |       |-- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   |-- chat.ts
|   |       |   |-- list
|   |       |       |-- list.ts
|   |       |-- system
|   |           |-- department
|   |           |   |-- department.ts
|   |           |-- menu
|   |           |   |-- menu.ts
|   |           |-- role
|   |           |   |-- role.ts
|   |           |-- user
|   |               |-- user.ts
|   |-- service
|   |   |-- axios_demo.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard.ts
|   |   |   |-- list
|   |   |       |-- list.ts
|   |   |-- request
|   |   |   |-- config.ts
|   |   |   |-- index.ts
|   |   |   |-- type.ts
|   |   |-- types.ts
|   |-- store
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- types.ts
|   |   |-- main
|   |       |-- analysis
|   |       |   |-- dashboard.ts
|   |       |   |-- types.ts
|   |       |-- initialize
|   |       |   |-- initialize.ts
|   |       |   |-- types.ts
|   |       |-- list
|   |           |-- list.ts
|   |           |-- types.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- date-format.ts
|   |   |-- map-menus.ts
|   |   |-- reactive-width.ts
|   |-- views
|       |-- login
|       |   |-- config
|       |   |   |-- rules-config.ts
|       |   |-- cpns
|       |   |   |-- login-account.vue
|       |   |   |-- login-panel.vue
|       |   |   |-- login-phone.vue
|       |   |-- hook
|       |   |-- login.vue
|       |-- main
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   |-- dashboard.vue
|       |   |   |-- overview
|       |   |       |-- config
|       |   |       |   |-- project-dir.ts
|       |   |       |   |-- technology-stacks.ts
|       |   |       |-- overview.vue
|       |   |-- main.vue
|       |   |-- product
|       |   |   |-- category
|       |   |   |   |-- category.vue
|       |   |   |   |-- config
|       |   |   |       |-- content.config.ts
|       |   |   |       |-- modal.config.ts
|       |   |   |       |-- search.config.ts
|       |   |   |-- goods
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |   |-- modal.config.ts
|       |   |       |   |-- search.config.ts
|       |   |       |-- goods.vue
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   |-- chat.vue
|       |   |   |-- list
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |   |-- modal.config.ts
|       |   |       |-- list.vue
|       |   |-- system
|       |       |-- department
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   |-- search.config.ts
|       |       |   |-- department.vue
|       |       |-- menu
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |-- menu.vue
|       |       |-- role
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   |-- search.config.ts
|       |       |   |-- role.vue
|       |       |-- user
|       |           |-- config
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   |-- search.config.ts
|       |           |-- user.vue
|       |-- not-found
|           |-- not-found.vue
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
`;const x={class:"overview"},b={class:"about"},k=a(" vue3-ts-cms \u662F\u57FA\u4E8E Vue3\u3001Pinia\u3001VueRouter\u3001Vite\u3001ElementPlus\u3001TypeScript\u3001Echart5 \u7B49\u6280\u672F\u5B9E\u73B0\u7684\u3002 "),D={class:"technologyStacks"},C={class:"align-left"},B={class:"title"},F={key:0,class:"projectDir"},A={class:"align-left"},j={class:"bg-dir"},w=a("            "),V=a(`
          `),S=v({setup(P){const d=p(!1,!0);return(N,T)=>{const l=m("el-link");return s(),o("div",x,[e("div",b,[i(t(c),{title:"\u5173\u4E8E"},{default:n(()=>[k]),_:1})]),e("div",D,[i(t(c),{title:"\u6280\u672F\u6808"},{default:n(()=>[e("ul",C,[(s(!0),o(f,null,h(t(y),u=>(s(),o("li",{key:u.title},[e("span",B,r(u.title)+":",1),i(l,{type:"primary"},{default:n(()=>[a(r(u.desp),1)]),_:2},1024)]))),128))])]),_:1})]),t(d)?(s(),o("div",F,[i(t(c),{title:"\u9879\u76EE\u7ED3\u6784"},{default:n(()=>[e("div",A,[e("pre",j,[w,e("code",null,r(t(E)),1),V])])]),_:1})])):_("",!0)])}}});var H=g(S,[["__scopeId","data-v-06f7f3da"]]);export{H as default};
