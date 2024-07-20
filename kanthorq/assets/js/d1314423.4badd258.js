"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[547],{3863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),s=r(1470),o=r(9365);const i={title:"Stream",sidebar_label:"Stream",sidebar_position:4},l=void 0,u={id:"concepts/stream",title:"Stream",description:"Stream is a persistent, append-only event group that serves specific purposes. For example, you can create a stream with name order_update to put all events that are relates to your order into that stream.",source:"@site/docs/002-concepts/004-stream.md",sourceDirName:"002-concepts",slug:"/concepts/stream",permalink:"/kanthorq/docs/concepts/stream",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/002-concepts/004-stream.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Stream",sidebar_label:"Stream",sidebar_position:4},sidebar:"default",previous:{title:"Event",permalink:"/kanthorq/docs/concepts/event"},next:{title:"Task",permalink:"/kanthorq/docs/concepts/task"}},c={},d=[{value:"Manage streams",id:"manage-streams",level:2},{value:"Stream Registry",id:"stream-registry",level:3},{value:"Stream",id:"stream",level:3}];function m(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Stream is a persistent, append-only event group that serves specific purposes. For example, you can create a stream with name ",(0,n.jsx)(t.code,{children:"order_update"})," to put all events that are relates to your order into that stream."]}),"\n",(0,n.jsx)(t.mermaid,{value:"---\ntitle: Stream\n---\nflowchart TB\n  Order[Order Service] -- order.created ---\x3e order_update[(kanthorq_stream_order_update)]\n  Order[Order Service] -- order.cancelled ---\x3e order_update[(kanthorq_stream_order_update)]\n  3PL[3PL Service] -- parcel.lost --\x3e order_update[(kanthorq_stream_order_update)]"}),"\n",(0,n.jsx)(t.p,{children:"There are some characteristics of a stream you should know"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"An event stays forever in a stream until you explicitly remove it or a stream is deleted (also must be explicit confirmation)"}),"\n",(0,n.jsxs)(t.li,{children:["An event could be read and processed by multiple process (we call it ",(0,n.jsx)(t.code,{children:"Consumer"}),") from the stream and nothing else the event data itself is stored in stream."]}),"\n",(0,n.jsxs)(t.li,{children:["Events in a stream could be only paginated by the order of ",(0,n.jsx)(t.code,{children:"event.id"})," or the tuple of ",(0,n.jsx)(t.code,{children:"(event.topic, event.id)"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"manage-streams",children:"Manage streams"}),"\n",(0,n.jsx)(t.p,{children:"When you create or register a stream for you usage, its information will be store in a registry then KanthorQ creates an acutal stream from the for you to store events from the returning registry inforamtion."}),"\n",(0,n.jsx)(t.mermaid,{value:"---\ntitle: Stream Register Flow\n---\nsequenceDiagram\n  Client ->> +Stream Registry: name: order_update\n  Stream Registry --\x3e> -Client: Stream(name: order_update)\n\n  Client ->> +PostgreSQL: kanthorq_stream_order_update\n  PostgreSQL --\x3e> -Client: OK"}),"\n",(0,n.jsx)(t.h3,{id:"stream-registry",children:"Stream Registry"}),"\n",(0,n.jsxs)(t.p,{children:["There is the definition of the ",(0,n.jsx)(t.code,{children:"Stream Registry"})," in different places in KanthorQ"]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(o.A,{value:"go",label:"Go",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'type StreamRegistry struct {\n  Name      string `json:"name"`\n  CreatedAt int64  `json:"created_at"`\n  UpdatedAt int64  `json:"updated_at"`\n}\n'})})}),(0,n.jsx)(o.A,{value:"postgresql",label:"PostgreSQL",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"TABLE kanthorq_stream_registry (\n  name VARCHAR(128) NOT NULL,\n  created_at BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000,\n  updated_at BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000,\n  PRIMARY KEY (name)\n)\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"stream",children:"Stream"}),"\n",(0,n.jsxs)(t.p,{children:["As the definition said about the ",(0,n.jsx)(t.code,{children:"Stream"}),", it's just a ",(0,n.jsx)(t.strong,{children:"append-only event group"})," so its definition is just the definition of the ",(0,n.jsx)(t.code,{children:"Event"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"TABLE kanthorq_stream_order_update (\n  id VARCHAR(64) NOT NULL,\n  topic VARCHAR(128) NOT NULL,\n  body BYTEA NOT NULL,\n  metadata jsonb NOT NULL,\n  created_at BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000,\n  PRIMARY KEY (id)\n)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(6540),a=r(4164),s=r(3104),o=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function T(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);