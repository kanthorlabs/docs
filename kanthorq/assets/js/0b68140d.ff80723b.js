"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7824],{8695:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"default":[{"type":"link","label":"Quickstart","href":"/kanthorq/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Insert events","href":"/kanthorq/docs/guides/insert-events","docId":"guides/insert-events","unlisted":false},{"type":"link","label":"Handle events and tasks","href":"/kanthorq/docs/guides/handle-events-and-tasks","docId":"guides/handle-events-and-tasks","unlisted":false},{"type":"link","label":"Task acknowledgement","href":"/kanthorq/docs/guides/task-acknowledgement","docId":"guides/task-acknowledgement","unlisted":false},{"type":"link","label":"Task management","href":"/kanthorq/docs/guides/task-management","docId":"guides/task-management","unlisted":false}],"href":"/kanthorq/docs/category/guides"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/kanthorq/docs/concepts/overview","docId":"concepts/overview","unlisted":false},{"type":"link","label":"Subject","href":"/kanthorq/docs/concepts/subject","docId":"concepts/subject","unlisted":false},{"type":"link","label":"Publisher","href":"/kanthorq/docs/concepts/publisher","docId":"concepts/publisher","unlisted":false},{"type":"link","label":"Event","href":"/kanthorq/docs/concepts/event","docId":"concepts/event","unlisted":false},{"type":"link","label":"Stream","href":"/kanthorq/docs/concepts/stream","docId":"concepts/stream","unlisted":false},{"type":"link","label":"Task","href":"/kanthorq/docs/concepts/task","docId":"concepts/task","unlisted":false},{"type":"link","label":"Consumer","href":"/kanthorq/docs/concepts/consumer","docId":"concepts/consumer","unlisted":false},{"type":"link","label":"Subscriber","href":"/kanthorq/docs/concepts/subscriber","docId":"concepts/subscriber","unlisted":false}],"href":"/kanthorq/docs/category/concepts"},{"type":"link","label":"Limits","href":"/kanthorq/docs/limits","docId":"limits","unlisted":false},{"type":"link","label":"Resources","href":"/kanthorq/docs/resources","docId":"resources","unlisted":false}]},"docs":{"concepts/consumer":{"id":"concepts/consumer","title":"Consumer","description":"Consumer is a subject-specific filter for events from a stream, storing metadata about how those events should be processed. A single consumer can only subscribe to one subject, but you can have multiple consumers for a single subject.","sidebar":"default"},"concepts/event":{"id":"concepts/event","title":"Event","description":"An Event in KanthorQ represents a data transfer object (DTO) used to communicate between publishers and streams.","sidebar":"default"},"concepts/overview":{"id":"concepts/overview","title":"Overview","description":"Let\'s discover what the KanthorQ architecture is and how components communicate with each others.","sidebar":"default"},"concepts/publisher":{"id":"concepts/publisher","title":"Publisher","description":"The Publisher is responsible for inserting events into the KanthorQ system. Technically, it functions as a simple query that inserts events\u2014nothing particularly special happens at this stage. However, when dealing with the insertion of multiple events in a short time, there are important performance considerations worth discussing.","sidebar":"default"},"concepts/stream":{"id":"concepts/stream","title":"Stream","description":"A Stream in KanthorQ is a persistent, append-only event group designed to serve specific purposes. For instance, you can create a stream named order_update to store all events related to orders within that stream.","sidebar":"default"},"concepts/subject":{"id":"concepts/subject","title":"Subject","description":"A Subject in the KanthorQ system is a hierarchical entity that categorizes events. Understanding how subjects are structured and used in KanthorQ is essential for leveraging them effectively in your workflows.","sidebar":"default"},"concepts/subscriber":{"id":"concepts/subscriber","title":"Subscriber","description":"The Subscriber is the most complex component in the KanthorQ system, but its purpose is simple: it pulls tasks, processes them, and moves them to their next state. If something goes wrong with a task, the Subscriber allows you to retry it, either manually or automatically.","sidebar":"default"},"concepts/task":{"id":"concepts/task","title":"Task","description":"If an Event is the DTO for client-to-KanthorQ publisher communication, then a Task is the DTO for KanthorQ subscriber-to-client handler communication.","sidebar":"default"},"guides/handle-events-and-tasks":{"id":"guides/handle-events-and-tasks","title":"Handle events and tasks","description":"Every event in KanthorQ generates at least one task. Depending on your requirements, you may need to handle potential failures, such as retrying tasks. This guide demonstrates two ways to manage tasks from your events using a subscriber. The first method is the most convenient, while the second provides more control over how to handle both success and failure scenarios.","sidebar":"default"},"guides/insert-events":{"id":"guides/insert-events","title":"Insert events","description":"The first step in working with the KanthorQ system is inserting events. Once an event is inserted, it will remain in the system indefinitely, ready to be processed at any time (unless you delete it). Before you can insert events, it\u2019s important to understand the structure of events in the KanthorQ system. This section will cover the structure of events, how to insert them in a basic manner, and how to do so transactionally, ensuring that events are only added if the associated transaction succeeds.","sidebar":"default"},"guides/task-acknowledgement":{"id":"guides/task-acknowledgement","title":"Task acknowledgement","description":"Implicit Acknowledgement","sidebar":"default"},"guides/task-management":{"id":"guides/task-management","title":"Task management","description":"This guide introduces task management in KanthorQ, offering a hands-on look at interacting with KanthorQ\u2019s core API. You\'ll get a clear view of how to use the API directly, allowing you to discover advanced ways to wokr with KanthorQ effectively.","sidebar":"default"},"limits":{"id":"limits","title":"Limits","description":"This page lists all the limits and constraints of the KanthorQ system that you should be aware of.","sidebar":"default"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"To help you start working with KanthorQ, here\'s a guide on how to install the necessary packages, run database migrations, and begin publishing and subscribing to events in Go. This will walk you through setting up the core elements of KanthorQ and getting everything up and running.","sidebar":"default"},"resources":{"id":"resources","title":"Resources","description":"This page lists all the resources that may be useful in your workflow.","sidebar":"default"}}}}')}}]);