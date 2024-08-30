"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4147],{7789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const i={title:"Overview",sidebar_label:"Overview",sidebar_position:1},o=void 0,a={id:"concepts/overview",title:"Overview",description:"Let's discover what the KanthorQ architecture is and how the components communicate with each other.",source:"@site/docs/002-concepts/001-overview.md",sourceDirName:"002-concepts",slug:"/concepts/overview",permalink:"/kanthorq/docs/concepts/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/002-concepts/001-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1},sidebar:"default",previous:{title:"Concepts",permalink:"/kanthorq/docs/category/concepts"},next:{title:"Publisher",permalink:"/kanthorq/docs/concepts/publisher"}},c={},d=[{value:"Architecture",id:"architecture",level:2},{value:"The Publisher",id:"the-publisher",level:2},{value:"The Stream",id:"the-stream",level:2},{value:"The Consumer",id:"the-consumer",level:2},{value:"The Subscriber",id:"the-subscriber",level:2}];function l(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Let's discover what the KanthorQ architecture is and how the components communicate with each other."}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.p,{children:"The KanthorQ architecture, depicted in the diagram below, comprises four components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Publisher"}),": Application code responsible for inserting events into the KanthorQ system. This can be a Command Line Toolor Golang code within your application."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Stream"}),": Receives events and persists them within the KanthorQ system, categorized by subjects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Consumer"}),": Stores tasks generated from events in the Stream. One event can generate many tasks in different ",(0,s.jsx)(t.em,{children:"Consumers"}),", but in the same ",(0,s.jsx)(t.em,{children:"Consumer"}),", there must be only one task that belongs to an event"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Subscriber"}),": Part of your application that pulls tasks to execute your business logic."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"KanthorQ Architecture",src:n(3629).A+"",width:"4563",height:"3045"})}),"\n",(0,s.jsx)(t.h2,{id:"the-publisher",children:"The Publisher"}),"\n",(0,s.jsx)(t.p,{children:"The Publisher is a component that interacts with KanthorQ Stream component to let you insert events into KanthorQ system. So that you need to specify the stream when you initialize the consumer to let it know where it should put the event into."}),"\n",(0,s.jsx)(t.p,{children:"Because the Publisher is just an application code, so it can be your GO code, CLI or HTTP request (comming soon)."}),"\n",(0,s.jsx)(t.h2,{id:"the-stream",children:"The Stream"}),"\n",(0,s.jsxs)(t.p,{children:["You need to store your events somewhere so you can retrieve it later to do your work. The Stream is that place! It will receive events from the Publisher, organize it as a ",(0,s.jsx)(t.strong,{children:"time-series"})," then store it until you explicitly remove it."]}),"\n",(0,s.jsxs)(t.p,{children:["A Stream in KanthorQ system can store any kind of events. For example you can store all your internal events and your business events in the same stream with name ",(0,s.jsx)(t.code,{children:"default"}),". It's okay but not well organized. That why we recommend you should define what a Stream should do then only put relative events into it. In the diagram we already showed you an example of how to organize a Stream and its events"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"order_update"})," Stream will only receive events that are related to order changes like ",(0,s.jsx)(t.code,{children:"order.created"}),", ",(0,s.jsx)(t.code,{children:"order.confirmed"}),", ",(0,s.jsx)(t.code,{children:"order.cancelled"})," and so on"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"parcel_update"})," Stream for Third-party Logistics events like ",(0,s.jsx)(t.code,{children:"parcel.shipping"}),", ",(0,s.jsx)(t.code,{children:"parcel.lost"}),", ",(0,s.jsx)(t.code,{children:"parcel.received"})," and so on"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"When we said that a Stream is time-series data, that mean you should only perform scan query on a Stream based on the timestamp column to achieve best performance."})}),"\n",(0,s.jsxs)(t.p,{children:["An event in a Stream will be categorized by ",(0,s.jsx)(t.code,{children:"subject"})," what is dot-separated words. We can use it in various usecases an handle them differently"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"order.cancelled"})," and ",(0,s.jsx)(t.code,{children:"order.created"})," is normal usecase that events are belonged to different type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"order.cancelled"})," and ",(0,s.jsx)(t.code,{children:"v1.order.cancelled"})," indicate that events are published by different codebases that has different versions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"order.cancelled"})," and ",(0,s.jsx)(t.code,{children:"ap-southeast-.order.cancelled"})," indicate that events are belonged to different regions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"order.cancelled"})," and ",(0,s.jsx)(t.code,{children:"tier-starter.order.cancelled"})," indicate that events are tier-based."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-consumer",children:"The Consumer"}),"\n",(0,s.jsx)(t.p,{children:"Whenever you published an event, you expect it should be handle later with your business logic. The action of handling that event can be successful or failed. If it is successful, it's easy because you may only want to mark that event as completed and move to next event. But failed processing invloves more complicated flow to handle it:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If an event is failed to process, should we retry it?"}),"\n",(0,s.jsx)(t.li,{children:"Retry? When? 15mins, 30mins or arbitrary value?"}),"\n",(0,s.jsx)(t.li,{children:"If yes, how many time do we want to retry it?"}),"\n",(0,s.jsx)(t.li,{children:"After configurable retries, the event is not successful yet, what next? Delete it?"}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Place here a thousand question about handling failed event..."})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"But it's not enough to introduce new component in our system because we can simply embedded metadata in the event itself to tell use what to do with failed event. The main question that leads to the born of The Consumer is"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Given an event, can I do more than one action independently for that event. For instance, if ",(0,s.jsx)(t.code,{children:"order.cancelled"})," is fired, I want to not only sending our customer an nofication email about the cancellation but also do the refund cleanup works"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Then we will have 2 separated Consumers that stores same event references but with different metadata about how events are handling. The same event with id ",(0,s.jsx)(t.code,{children:"1"})," in refund handler can be retry 10 times but the one in email sending handler should only retry 3 times"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Although the diagram showed that each consumer contains only one subject, you can have as many subject as you want to have in a consumer. For example you can define a consumer that contains both ",(0,s.jsx)(t.code,{children:"order.cancelled"})," and ",(0,s.jsx)(t.code,{children:"order.failed"})," to send excuse emails to your customer."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Friendly reminder that a Consumer stores many Tasks that are referenced to Events in a Stream"})}),"\n",(0,s.jsx)(t.h2,{id:"the-subscriber",children:"The Subscriber"}),"\n",(0,s.jsx)(t.p,{children:"Yoh we reach the final component that is the most important component because it contains your business logic to handle event tasks. The Subscriber need to know what Consumer it will subscribe to pull tasks from it, execute your business logic, then put back the metadata about that task"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the task was executed successfully, mark the task as ",(0,s.jsx)(t.code,{children:"Completed"})]}),"\n",(0,s.jsx)(t.li,{children:"If the task need retrying, the Subscriber need putting back what time it should be retried"}),"\n",(0,s.jsxs)(t.li,{children:["If the task retried many times and it finally reached the maximum retry times, the Subscriber should mark it as ",(0,s.jsx)(t.code,{children:"Discarded"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Place here a thousand case about handling failed event..."})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can have many subscribers for a consumer as long as your system can handle system throughput. So that you can achieve Parallelism processing. In the diagram, we showed you that the ",(0,s.jsx)(t.em,{children:"Email Subscriber I"})," executed 2 tasks with id ",(0,s.jsx)(t.code,{children:"1"})," and ",(0,s.jsx)(t.code,{children:"3"})," and the ",(0,s.jsx)(t.em,{children:"Email Subscriber II"})," executed only one task with id ",(0,s.jsx)(t.code,{children:"2"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3629:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/kanthorq-architecture-9a6f04099ae34cccf3dd2b9744389ae2.svg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);