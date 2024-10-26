"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7271],{9074:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(4848),r=n(8453);const i={title:"Overview",sidebar_label:"Overview",sidebar_position:1},o=void 0,c={id:"concepts/overview",title:"Overview",description:"Let's discover what the KanthorQ architecture is and how components communicate with each others.",source:"@site/docs/003-concepts/001-overview.md",sourceDirName:"003-concepts",slug:"/concepts/overview",permalink:"/kanthorq/docs/concepts/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/003-concepts/001-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1},sidebar:"default",previous:{title:"Concepts",permalink:"/kanthorq/docs/category/concepts"},next:{title:"Subject",permalink:"/kanthorq/docs/concepts/subject"}},a={},d=[{value:"Architecture",id:"architecture",level:2},{value:"The Publisher",id:"the-publisher",level:2},{value:"The Stream",id:"the-stream",level:2},{value:"The Consumer",id:"the-consumer",level:2},{value:"The Subscriber",id:"the-subscriber",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Let's discover what the KanthorQ architecture is and how components communicate with each others."}),"\n",(0,t.jsx)(s.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(s.p,{children:"The KanthorQ architecture consists of four key components:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Publisher"}),": Responsible for inserting events into the KanthorQ system. This can be done via a Command Line Tool or Golang code within your application."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Stream"}),": Receives events and persists them within the system, organized by subjects."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Consumer"}),": Stores tasks generated from events in the Stream. An event can create multiple tasks across different Consumers, but within a single Consumer, only one task can be tied to an event."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Subscriber"}),": Part of your application that retrieves tasks from the Consumer and executes business logic."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"KanthorQ Architecture",src:n(2080).A+"",width:"4563",height:"3045"})}),"\n",(0,t.jsx)(s.h2,{id:"the-publisher",children:"The Publisher"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Publisher"})," interacts with the KanthorQ Stream to insert events into the system. When initializing a Consumer, you must specify the associated Stream, so the system knows where to send the event."]}),"\n",(0,t.jsxs)(s.p,{children:["As the ",(0,t.jsx)(s.strong,{children:"Publisher"})," is simply application code, it can be implemented using Go, a CLI, or even an HTTP request (coming soon)."]}),"\n",(0,t.jsx)(s.h2,{id:"the-stream",children:"The Stream"}),"\n",(0,t.jsxs)(s.p,{children:["The Stream is where events are stored, allowing you to retrieve them later for processing. It receives events from the ",(0,t.jsx)(s.strong,{children:"Publisher"}),", organizes them in a ",(0,t.jsx)(s.em,{children:"time-series"})," format, and retains them until explicitly removed."]}),"\n",(0,t.jsx)(s.p,{children:'A Stream in KanthorQ can store any type of event. For example, both internal and business-related events can be stored in a single stream named "default," but this may not be well-organized. We recommend defining specific Streams for different purposes. For instance:'}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"order_update"})," Stream only contains events related to order statuses, such as ",(0,t.jsx)(s.code,{children:"order.created"}),", ",(0,t.jsx)(s.code,{children:"order.confirmed"}),", and ",(0,t.jsx)(s.code,{children:"order.cancelled"}),".\nThe ",(0,t.jsx)(s.code,{children:"parcel_update"})," Stream is for third-party logistics events, like ",(0,t.jsx)(s.code,{children:"parcel.shipping"}),", ",(0,t.jsx)(s.code,{children:"parcel.lost"}),", and ",(0,t.jsx)(s.code,{children:"parcel.received"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Since Streams are organized as time-series data, it\u2019s best to query them using the timestamp column for optimal performance."})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Events in Stream are sorted ascending by default because we use the ",(0,t.jsx)(s.a,{href:"https://github.com/ulid/spec",children:"ULID"})," as the primary key."]})}),"\n",(0,t.jsx)(s.p,{children:"Events in a Stream are categorized by subjects, which are dot-separated words. You can use this structure in various scenarios:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"order.cancelled"})," and ",(0,t.jsx)(s.code,{children:"order.created"}),": Different event types."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"order.cancelled"})," and ",(0,t.jsx)(s.code,{children:"v1.order.cancelled"}),": Events published by different codebases or versions."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"order.cancelled"})," and ",(0,t.jsx)(s.code,{children:"ap-southeast-1.order.cancelled"}),": Events categorized by region."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"order.cancelled"})," and ",(0,t.jsx)(s.code,{children:"tier-starter.order.cancelled"}),": Events distinguished by tier."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"the-consumer",children:"The Consumer"}),"\n",(0,t.jsx)(s.p,{children:"When an event is published, it needs to be processed based on your business logic. The event processing could succeed or fail. If successful, the event is simply marked as completed, and you move to the next event. However, handling a failed event is more complex:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Should the event be retried?"}),"\n",(0,t.jsx)(s.li,{children:"When should the retry occur? 15 minutes? 30 minutes?"}),"\n",(0,t.jsx)(s.li,{children:"How many retries should be attempted?"}),"\n",(0,t.jsx)(s.li,{children:"What happens if retries are exhausted? Should the event be deleted?"}),"\n",(0,t.jsx)(s.li,{children:"More and more question will be raised ..."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["A Consumer helps answer these questions by storing tasks generated from events, each with its own metadata. For example, if ",(0,t.jsx)(s.code,{children:"order.cancelled"})," is triggered, you may want two separate actions: sending a notification email and handling refund processing. These actions can be managed by different Consumers, each with distinct retry logic. One Consumer could retry 10 times for refund processing, while another only retries 3 times for email notifications."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Although each Consumer in the diagram handles a single subject, you can define a Consumer to handle multiple subjects, such as both ",(0,t.jsx)(s.code,{children:"order.cancelled"})," and ",(0,t.jsx)(s.code,{children:"order.failed"})," for sending customer apology emails."]})}),"\n",(0,t.jsx)(s.h2,{id:"the-subscriber",children:"The Subscriber"}),"\n",(0,t.jsx)(s.p,{children:"Finally, the Subscriber plays the most crucial role, executing the business logic for event tasks. The Subscriber pulls tasks from the Consumer, processes them, and updates the task metadata accordingly:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the task is successful, it is marked as ",(0,t.jsx)(s.code,{children:"Completed"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"If a retry is needed, the Subscriber sets a time for the next attempt."}),"\n",(0,t.jsxs)(s.li,{children:["If retries are exhausted, the task is marked as ",(0,t.jsx)(s.code,{children:"Discarded"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Multiple Subscribers can handle tasks from a single Consumer, allowing parallel processing. For instance, in the diagram, ",(0,t.jsx)(s.em,{children:"Email Subscriber I"})," processes tasks with IDs 1 and 4, while ",(0,t.jsx)(s.em,{children:"Email Subscriber II"})," handles the task with ID 3."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2080:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/kanthorq-architecture-9a6f04099ae34cccf3dd2b9744389ae2.svg"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);