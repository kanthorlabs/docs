"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8669],{2106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(4848),i=n(8453);const a={title:"Quickstart",sidebar_label:"Quickstart",sidebar_position:1},r=void 0,o={id:"quickstart",title:"Quickstart",description:"To help you start working with KanthorQ, here's a guide on how to install the necessary packages, run database migrations, and begin publishing and subscribing to events in Go. This will walk you through setting up the core elements of KanthorQ and getting everything up and running.",source:"@site/docs/001-quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/kanthorq/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/kanthorlabs/kanthorq/tree/main/packages/create-docusaurus/templates/shared/docs/001-quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quickstart",sidebar_label:"Quickstart",sidebar_position:1},sidebar:"default",next:{title:"Guides",permalink:"/kanthorq/docs/category/guides"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Running migrations",id:"running-migrations",level:2},{value:"Sending Events with a Publisher",id:"sending-events-with-a-publisher",level:2},{value:"Handling Events with a Subscriber",id:"handling-events-with-a-subscriber",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To help you start working with KanthorQ, here's a guide on how to install the necessary packages, run database migrations, and begin publishing and subscribing to events in Go. This will walk you through setting up the core elements of KanthorQ and getting everything up and running."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before diving into KanthorQ, you\u2019ll need a PostgreSQL database. This can be a PostgreSQL instance running locally or in the cloud. Alternatively, you can use any database that supports the PostgreSQL wire protocol, such as CockroachDB or Amazon Aurora (PostgreSQL-compatible edition)."}),"\n",(0,s.jsx)(t.p,{children:"If you don\u2019t have a PostgreSQL instance running, you can quickly start one locally using Docker:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=changemenow -d postgres:16\n"})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["To install KanthorQ, make sure you're in a Go project directory (one that contains a ",(0,s.jsx)(t.code,{children:"go.mod"})," file). Then run the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go get github.com/kanthorlabs/kanthorq\n"})}),"\n",(0,s.jsx)(t.h2,{id:"running-migrations",children:"Running migrations"}),"\n",(0,s.jsx)(t.p,{children:"KanthorQ relies on PostgreSQL to manage its events and tasks. To set up the necessary database schema, you\u2019ll need to run some migrations. First, install the KanthorQ command-line tool:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go install github.com/kanthorlabs/kanthorq/cmd/kanthorq@latest\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, run the migrations to set up KanthorQ\u2019s database schema:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kanthorq migrate up -s 'github://kanthorlabs/kanthorq/migration#main' -d 'postgres://postgres:changemenow@localhost:5432/postgres?sslmode=disable'\n"})}),"\n",(0,s.jsx)(t.p,{children:"Make sure to replace the -d option with the URI of your PostgreSQL instance if you're using a different database setup."}),"\n",(0,s.jsx)(t.h2,{id:"sending-events-with-a-publisher",children:"Sending Events with a Publisher"}),"\n",(0,s.jsx)(t.p,{children:"Once the migration is complete, you\u2019re ready to start sending events using the publisher. Here\u2019s an example of how to publish events in Go:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import (\n\t"context"\n\n\t"github.com/kanthorlabs/kanthorq"\n\t"github.com/kanthorlabs/kanthorq/entities"\n\t"github.com/kanthorlabs/kanthorq/publisher"\n)\n\nfunc main() {\n\tctx := context.Background()\n\n\t// Initialize a publisher\n\tpub, cleanup := kanthorq.Pub(ctx, &publisher.Options{\n\t\t// Replace the connection string with your database URI\n\t\tConnection: "postgres://postgres:changemenow@localhost:5432/postgres?sslmode=disable",\n\t\t// Using the default stream for demo purposes\n\t\tStreamName: entities.DefaultStreamName,\n\t})\n\t// Clean up the publisher after use\n\tdefer cleanup()\n\n\tsubject := "system.say_hello"\n\tbody := []byte("{\\"msg\\": \\"Hello World!\\"}")\n\n\t// Define your first event\n\tevent := entities.NewEvent(subject, body)\n\n\tevents := []*entities.Event{\n\t\tevent,\n\t\t// Another  event\n\t\tentities.NewEvent("system.say_hello", []byte("{\\"msg\\": \\"I\'m comming!\\"}")),\n\t\t// And yet another event\n\t\tentities.NewEvent("system.say_goodbye", []byte("{\\"msg\\": \\"See you!!\\"}")),\n\t}\n\n\tif err := pub.Send(ctx, events); err != nil {\n\t\t// Handle error\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, you initialize a publisher that sends three events with different messages. The publisher handles event sending and interacts with the PostgreSQL database to persist those events."}),"\n",(0,s.jsx)(t.h2,{id:"handling-events-with-a-subscriber",children:"Handling Events with a Subscriber"}),"\n",(0,s.jsx)(t.p,{children:"Once you\u2019ve sent some events, you\u2019ll want to handle them using a subscriber. Here\u2019s a basic example of how to subscribe to events:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import (\n\t"context"\n\t"errors"\n\t"fmt"\n\t"log"\n\t"os"\n\t"os/signal"\n\t"syscall"\n\t"time"\n\n\t"github.com/kanthorlabs/kanthorq"\n\t"github.com/kanthorlabs/kanthorq/entities"\n\t"github.com/kanthorlabs/kanthorq/puller"\n\t"github.com/kanthorlabs/kanthorq/subscriber"\n)\n\nfunc main() {\n\t// Listen for SIGTERM, so pressing Ctrl-C stops the program\n\tctx, stop := signal.NotifyContext(context.TODO(), os.Interrupt, syscall.SIGINT, syscall.SIGTERM)\n\tdefer stop()\n\n\tvar options = &subscriber.Options{\n\t\t// Replace the connection string with your database URI\n\t\tConnection: "postgres://postgres:changemenow@localhost:5432/postgres?sslmode=disable",\n\t\t// Use the default stream for demo purposes\n\t\tStreamName: entities.DefaultStreamName,\n\t\t// Use the default consumer for demo purposes\n\t\tConsumerName: entities.DefaultConsumerName,\n\t\t// Receive only events matching the filter,\n\t\t// so that both system.say_hello and system.say_goodbye will be processed\n\t\tConsumerSubjectIncludes: []string{"system.>"},\n\t\t// Retry the task if it fails this many times\n\t\tConsumerAttemptMax: entities.DefaultConsumerAttemptMax,\n\t\t// Reprocess stuck tasks after this duration\n\t\tConsumerVisibilityTimeout: entities.DefaultConsumerVisibilityTimeout,\n\t\tPuller: puller.PullerIn{\n\t\t\t// Number of events to pull in one batch\n\t\t\tSize: 100,\n\t\t\t// Wait time before completing the batch if Size isn\u2019t reached\n\t\t\tWaitingTime: 1000,\n\t\t},\n\t}\n\n\t// Handle events; this goroutine will block until Ctrl-C is pressed\n\terr := kanthorq.Sub(ctx, options, func(ctx context.Context, msg *subscriber.Message) error {\n\t\tts := time.UnixMilli(msg.Event.CreatedAt).Format(time.RFC3339)\n\t\t// Print the received event\n\t\tfmt.Printf("RECEIVED: %s | %s | %s\\n", msg.Event.Id, msg.Event.Subject, ts)\n\t\treturn nil\n\t})\n\n\t// Print any errors, if applicable\n\tif err != nil && !errors.Is(err, context.Canceled) {\n\t\tlog.Fatal(err)\n\t}\n\n\tfmt.Println("----- END OF EXAMPLE ------")\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This example shows a subscriber listening for events matching the subject filter ",(0,s.jsx)(t.code,{children:"system.>"}),". The subscriber processes all events with subjects such as ",(0,s.jsx)(t.code,{children:"system.say_hello"})," or ",(0,s.jsx)(t.code,{children:"system.say_goodbye"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"After running the above example, you should see output similar to the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"2024/08/30 09:18:43 RECEIVED: event_01j6gh7t5v6j2q9ma0n78hw9fe | system.say_hello | 2024-08-30T09:18:42+07:00\n2024/08/30 09:18:43 RECEIVED: event_01j6gh7t5s973x2sby12j9pwkc | system.say_hello | 2024-08-30T09:18:42+07:00\n2024/08/30 09:18:45 RECEIVED: event_01j6gh7x3pvmk6demx3cq27j1q | system.say_goodbye | 2024-08-30T09:18:45+07:00\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/kanthorlabs/kanthorq/blob/main/example/default/main.go",children:"Defaule Subscriber example"})," for the complete code."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);