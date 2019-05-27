# OpenTraceHelloWorld
A hello-world app in NodeJS. Instrumented by Jaeger-Client, and deployed to AWS Lambda using Serverless framework.

# Steps

- [ ] Create the hello-world app instrumented by Jaeger
  - [x] Create a hello-world frontend app in NodeJS. Reference: https://github.com/yurishkuro/opentracing-tutorial/tree/master/nodejs/lesson01
  - [x] Configure the app to be traced by OpenTracing in Jaeger. Reference: https://github.com/jaegertracing/jaeger-client-node
  - [x] Install Docker: https://docs.docker.com/v17.12/docker-for-mac/install/
  - [x] Run Docker backend for Jaeger: https://www.jaegertracing.io/docs/1.6/getting-started/#all-in-one-docker-image
  - [ ] Ensure the Jaeger-Client sends data to a running jaeger-docker instance via udp (in amgen case the endpoint will be provided, for your case you may need to run the docker image of jaeger) https://medium.com/velotio-perspectives/a-comprehensive-tutorial-to-implementing-opentracing-with-jaeger-a01752e1a8ce
- [ ] Create serverless template in the same directory of the Node app. Configure `handler.js` generated by serverless to chain the hello-world app with lambda endpoint. Reference: https://www.youtube.com/watch?v=oZP6rHglm98
- [ ] Deploy the hello-world app to AWS using serverless
- [ ] Configure serverless framework to assume VPC , not public facing, so you may need to adjust serverless.yml and ensure it’s setup right so that the hello-world lambda endpoint is private and the jaeger reporter config sends traces to private ip also
- [ ] Create document to write necessary steps
