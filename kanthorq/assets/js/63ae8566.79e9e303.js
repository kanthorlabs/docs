"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5477],{5178:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(4848),r=s(8453);const i={title:"Subscriber",sidebar_label:"Subscriber",sidebar_position:8},o=void 0,a={id:"concepts/subscriber",title:"Subscriber",description:"The Subscriber is the most complex component in the KanthorQ system, but its purpose is simple: it pulls tasks, processes them, and moves them to their next state. If something goes wrong with a task, the Subscriber allows you to retry it, either manually or automatically.",source:"@site/docs/003-concepts/008-subscriber.md",sourceDirName:"003-concepts",slug:"/concepts/subscriber",permalink:"/kanthorq/docs/concepts/subscriber",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/003-concepts/008-subscriber.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Subscriber",sidebar_label:"Subscriber",sidebar_position:8},sidebar:"default",previous:{title:"Consumer",permalink:"/kanthorq/docs/concepts/consumer"},next:{title:"Limits",permalink:"/kanthorq/docs/limits"}},l={},c=[{value:"Workflows",id:"workflows",level:2},{value:"The Pulling Workflow",id:"the-pulling-workflow",level:3},{value:"The Converting Flow",id:"the-converting-flow",level:4},{value:"The Fulfilling Flow",id:"the-fulfilling-flow",level:4},{value:"The Updating Workflow",id:"the-updating-workflow",level:3},{value:"Risk of Lost Update",id:"risk-of-lost-update",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Subscriber"})," is the most complex component in the KanthorQ system, but its purpose is simple: it pulls tasks, processes them, and moves them to their next state. If something goes wrong with a task, the ",(0,n.jsx)(t.strong,{children:"Subscriber"})," allows you to retry it, either manually or automatically."]}),"\n",(0,n.jsx)(t.h2,{id:"workflows",children:"Workflows"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Subscriber"})," workflow consists of two main parts:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Pulling Workflow"}),": Retrieves tasks for processing."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Updating Workflow"}),": Updates the task\u2019s state after processing."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"the-pulling-workflow",children:"The Pulling Workflow"}),"\n",(0,n.jsx)(t.mermaid,{value:"---\ntitle: The Pulling Workflow\n---\nsequenceDiagram\n  autonumber\n\n  rect rgb(191, 223, 255)\n  note right of Subscriber: Converting Flow\n\n  Subscriber ->> +Consumer Registry: name: send_cancellation_email\n  Consumer Registry --\x3e> Consumer Registry: lock send_cancellation_email\n  loop [got 100 tasks] or [reached max round]\n    Consumer Registry ->> +kanthorq_stream_order_update: subject: order.cancelled, cursor: evt_01J36ZJACKR5FXDWVKASC4BNCN, limit: 100\n    kanthorq_stream_order_update --\x3e> -kanthorq_stream_order_update: scanning\n    kanthorq_stream_order_update ->> +send_cancellation_email: found and convert 85 events to tasks\n  end\n\n  send_cancellation_email --\x3e> +Subscriber: 85 tasks\n  Subscriber --\x3e> Consumer Registry: update cursor\n  Consumer Registry --\x3e> Consumer Registry: release send_cancellation_email\n\n  end\n\n  rect rgb(200, 150, 255)\n  note right of Subscriber: Fulfilling Flow\n\n  Subscriber ->> +kanthorq_stream_order_update: 85 event ids\n  kanthorq_stream_order_update ->> -Subscriber: 85 event records\n  end"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Pulling Workflow"})," contains two sub-workflows:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Converting Flow"}),": Scans events from a stream based on a subject and converts them to tasks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fulfilling Flow"}),": Retrieves event records based on the converted tasks and performs the necessary execution logic."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"the-converting-flow",children:"The Converting Flow"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Subscriber"})," connects to the ",(0,n.jsx)(t.strong,{children:"Consumer Registry"})," to initiate the flow."]}),"\n",(0,n.jsx)(t.li,{children:"It locks the consumer record (e.g., send_cancellation_email) to prevent concurrent executions."}),"\n",(0,n.jsxs)(t.li,{children:["Using the consumer\u2019s properties (stream name, subject, and cursor), the ",(0,n.jsx)(t.strong,{children:"Subscriber"})," requests the stream for events."]}),"\n",(0,n.jsx)(t.li,{children:"It scans the stream for events matching the subject and cursor until it gathers enough events (configurable, default is 100)."}),"\n",(0,n.jsxs)(t.li,{children:["The found events are converted into tasks and returned to the ",(0,n.jsx)(t.strong,{children:"Subscriber"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"The cursor is updated with the latest event ID, and the consumer lock is released."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["When we say ",(0,n.jsx)(t.strong,{children:"scanning"}),", we mean querying events from the stream using a lower bound specified by the cursor until the required number of events (e.g., 100) is retrieved. A simplified query might look like this:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM kanthorq_stream_order_update WHERE subject = 'order.cancelled' AND id > 'evt_01J36ZJACKR5FXDWVKASC4BNCN' LIMIT 100\n"})})]}),"\n",(0,n.jsx)(t.h4,{id:"the-fulfilling-flow",children:"The Fulfilling Flow"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Retrieve event records based on the list of tasks received (each task contains an ",(0,n.jsx)(t.code,{children:"event_id"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Execute handler logic for each event record."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"the-updating-workflow",children:"The Updating Workflow"}),"\n",(0,n.jsxs)(t.p,{children:["After processing tasks, you must report back to the ",(0,n.jsx)(t.strong,{children:"Subscriber"})," to update the task state. Typically, there are two main states to update:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Completed"}),": For successfully processed tasks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Retryable"}),": For tasks that failed but can be retried."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There is one state to update is ",(0,n.jsx)(t.code,{children:"Discarded"}),". It happens when a task fails too many times and is no longer eligible for retries."]}),"\n",(0,n.jsxs)(t.p,{children:["In some cases, you may want to mark a task as ",(0,n.jsx)(t.code,{children:"Cancelled"})," if it should not be retried after encountering an error."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Refer to the ",(0,n.jsx)(t.a,{href:"/kanthorq/docs/concepts/task#task-state",children:"Task State"})," documentation for a detailed breakdown of states and categories."]})}),"\n",(0,n.jsx)(t.mermaid,{value:"---\ntitle: The Updating Workflow\n---\nsequenceDiagram\n  Subscriber ->> +Handler: 85 events\n  Handler --\x3e> -Handler: execute 85 events\n\n\n  par [Succeed]\n    Handler --\x3e> +Subscriber: 83 succeed tasks\n    Subscriber ->> Consumer: mark as completed 83 tasks\n  and [Error]\n    Handler --\x3e> Subscriber: 2 error tasks\n    Subscriber ->> Consumer: mark as retryable 2 tasks\n  end"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["If you choose to update the task state manually (e.g., through a PostgreSQL query), ensure you transition the task from one state to another properly. Directly overwriting task states can lead to ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Lost_update",children:"Lost Update"}),", which are difficult to detect and debug."]})}),"\n",(0,n.jsx)(t.h4,{id:"risk-of-lost-update",children:"Risk of Lost Update"}),"\n",(0,n.jsxs)(t.p,{children:["Concurrent updates can lead to ",(0,n.jsx)(t.em,{children:"Lost Updates"})," if you do not plan it prorperly. KanthorQ by default can eliminate ",(0,n.jsx)(t.em,{children:"Lost Updates"})," in the following cases:"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.p,{children:"If the following three queries are executed simultaneously, only one update will succeed, but all queries will return a message indicating one row was modified. The final state of the task may not reflect the intended state, leading to inconsistent data:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE tasks SET state = 'B' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN';\nUPDATE tasks SET state = 'C' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN';\nUPDATE tasks SET state = 'D' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To avoid ",(0,n.jsx)(t.em,{children:"Lost Updates"}),", ensure that tasks are transitioned from one state to another only if they are currently in the expected state. This ensures that only one update will modify the row, and the other queries will return no rows modified."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Correct Example:"})}),"\n",(0,n.jsx)(t.p,{children:"In this approach, each query attempts to update the task only if it is in the initial state A. As a result, only one query will succeed, while the others will report no rows modified."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE tasks SET state = 'B' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN' AND state = 'A';\nUPDATE tasks SET state = 'C' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN' AND state = 'A';\nUPDATE tasks SET state = 'D' WHERE event_id = 'evt_01J36ZJACKR5FXDWVKASC4BNCN' AND state = 'A';\n"})}),"\n",(0,n.jsx)(t.p,{children:"By using this method, you prevent concurrent updates from overwriting each other and ensure that only valid state transitions occur."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);