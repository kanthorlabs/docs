"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3822],{9876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(4848),a=r(8453);r(1470),r(9365);const s={title:"Quickstart",sidebar_label:"Quickstart",sidebar_position:1},o=void 0,i={id:"quickstart",title:"Quickstart",description:"Learn how to install KanthorQ packages for Go, run migrations to get KanthorQ's database schema in place, and start working with KanthorQ publisher and subscriber.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/kanthorq/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quickstart",sidebar_label:"Quickstart",sidebar_position:1},sidebar:"default",next:{title:"Concepts",permalink:"/kanthorq/docs/category/concepts"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Running migrations",id:"running-migrations",level:2},{value:"Register producer",id:"register-producer",level:2},{value:"Register subscriber",id:"register-subscriber",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Learn how to install KanthorQ packages for Go, run migrations to get KanthorQ's database schema in place, and start working with KanthorQ publisher and subscriber."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"To get started with KanthorQ you needs only one external service, a PostgreSQL database. But you can use others database that supports PostgreSQL wire protocol: CockroachDB or Amazon Aurora (PostgreSQL-compatible edition) for example."}),"\n",(0,n.jsx)(t.p,{children:"If you don't have an instance of PostgreSQL, just start a new one in your local machine with Docker"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=changemenow -d postgres:16\n"})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"To install KanthorQ, run the following in the directory of a Go project (where a go.mod file is present):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"go get github.com/kanthorlabs/kanthorq\n"})}),"\n",(0,n.jsx)(t.h2,{id:"running-migrations",children:"Running migrations"}),"\n",(0,n.jsx)(t.p,{children:"KanthorQ system is replied on PosgreSQL database, and needs a small sets of tables to persist management and tasks data. You need to install the command line tool which executes migrations, and provides other features of KanthorQ system."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Install the command line tool"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"go install github.com/kanthorlabs/kanthorq/cmd/kanthorq@latest\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run the migration up"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kanthorq migrate up -s 'github://kanthorlabs/kanthorq/migration#main' -d 'postgres://postgres:changemenow@localhost:5432/postgres?sslmode=disable'\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"register-producer",children:"Register producer"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'publisher := kanthorq.NewPublisher()\n\nctx, cancel := context.WithTimeout(context.Background(), time.Second*5)\ndefer cancel()\n\nif err:= publisher.Start(ctx); err != nil {\n  log.Panicf("could not start the publisher because of %v", err)\n}\ndefer func () {\n  if err:= publisher.Stop(ctx); err != nil {\n    log.Panicf("could not stop the publisher because of %v", err)\n  }\n}()\n\nif err:= publisher.Pub(ctx, &kanthorq.NewEvent()); err != nil {\n  // handle error\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"register-subscriber",children:"Register subscriber"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'subscriber := kanthorq.NewSubscriber()\n\nctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGINT, syscall.SIGTERM)\ndefer cancel()\n\nif err:= subscriber.Start(ctx); err != nil {\n  log.Panicf("could not start the subscriber because of %v", err)\n}\ndefer func () {\n  if err:= subscriber.Stop(ctx); err != nil {\n    log.Panicf("could not stop the subscriber because of %v", err)\n  }\n}()\n\ngo subscriber.Sub(ctx, func(ctx context.Context, event *kanthorq.Event) error {\n  // handle event logic\n})\n\n// listen for the cancellation signal.\n<-ctx\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(4164),s=r(3104),o=r(6347),i=r(205),l=r(7485),c=r(1682),u=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:r,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),m=(()=>{const e=c??g;return b({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);