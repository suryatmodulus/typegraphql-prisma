"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[521],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1616:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Changing exposed model type name",sidebar_label:"Renaming model",sidebar_position:6},p=void 0,c={unversionedId:"advanced/renaming-model",id:"advanced/renaming-model",title:"Changing exposed model type name",description:"You can also change the name of the model types exposed in GraphQL Schema.",source:"@site/../docs/advanced/renaming-model.md",sourceDirName:"advanced",slug:"/advanced/renaming-model",permalink:"/docs/advanced/renaming-model",editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/renaming-model.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Changing exposed model type name",sidebar_label:"Renaming model",sidebar_position:6},sidebar:"docs",previous:{title:"Custom operations",permalink:"/docs/advanced/custom-operations"},next:{title:"Renaming field",permalink:"/docs/advanced/renaming-field"}},s=[],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can also change the name of the model types exposed in GraphQL Schema.\nTo achieve this, just put the ",(0,o.kt)("inlineCode",{parentName:"p"},"@@TypeGraphQL.type")," doc line above the model definition in ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{1}","{1}":!0},'/// @@TypeGraphQL.type(name: "Client")\nmodel User {\n  id     Int     @default(autoincrement()) @id\n  email  String  @unique\n  posts  Post[]\n}\n')),(0,o.kt)("p",null,"Be aware that this feature changes the name everywhere in the schema, so you can import ",(0,o.kt)("inlineCode",{parentName:"p"},"FindManyClientResolver")," (not ",(0,o.kt)("inlineCode",{parentName:"p"},"FindManyUserResolver"),"), as well as only ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientUpdateInput")," is available (not ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUpdateInput"),"), which means that the GraphQL queries/mutations will also be renamed, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  createClient(data: ClientCreateInput!): Client!\n}\n")))}m.isMDXComponent=!0}}]);