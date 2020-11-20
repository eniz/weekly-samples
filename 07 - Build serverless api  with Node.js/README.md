# Build Serverless API with Node.js

## Intro to Serverless and AWS Lambda
Serverless is a method of deploying and running applications on cloud infrastructure, on a pay-per-use basis and without renting or buying servers. Instead of you, the serverless platform provider is responsible for capacity planning, scaling, balancing, and monitoring; the provider is also able to treat your applications as functions.

Everybody needs clean clothes, and the most logical solution seems to be buying a washing machine. But most of the time the washing machine is plugged in, doing nothing. At best, it’s used 5 to 15 hours per week. The same goes with servers. Most of the time, your average application server is just waiting to receive a request, doing nothing.

Serverless is a method of deploying and running applications on cloud infrastructure, on a pay-per-use basis and without renting or buying servers.

A serverless function runs only when triggered, and you pay only for its execution time. After execution, the serverless provider shuts the function down, while keeping its trigger active.

Application developers don’t maintain the API router, and it’s scaled automatically by the serverless provider to accept all the HTTP requests your API is receiving. Also, you pay only for the requests that are processed.

AWS Lambda is an event-driven serverless computing platform provided by Amazon as part of Amazon Web Services. It is a compute service that runs code in response to events and automatically manages the compute resources required by that code.

For example, if you are building an application that relies heavily on web sockets, serverless is not for you. AWS Lambda can work for up to 15 minutes, and it can’t stay awake to listen for web socket messages after that.
If latency is critical for your application, even though waking containers is fast, there is always a price to pay for waking up them up. That price is a few dozen milliseconds, but for some applications, that can be too much.

Claudia is a command-line tool that offers a minimal set of commands to allow
you to build serverless applications with a pleasant developer experience.

## What is Claudia?
Claudia is a Node.js library that eases the deployment of Node.js projects to AWS Lambda and API Gateway. Claudia is built on top of the AWS SDK to make development easier. It is not a replacement for the AWS SDK or AWS CLI, but an extension that makes some common tasks, such as deployment and setting triggers, easy and fast.
 - Claudia is a deployment utility, not a framework. 
 - Claudia is focused on Node.js.
 
Claudia API Builder is an API tool that helps you handle all your incoming API Gate- way requests and responses, as well as their configuration, context, and parameters, and enables you to have internal routing within your Lambda function. It has an Express-like endpoint syntax, so if you are familiar with Express, Claudia API Builder will be easy to use.