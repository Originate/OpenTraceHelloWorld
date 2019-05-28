const assert = require("assert");

const initJaegerTracer = require("jaeger-client").initTracer;

function initTracer(serviceName) {
  const config = {
    serviceName: serviceName,
    sampler: {
      type: "const",
      param: 1,
    },
    reporter: {
      logSpans: true,
      // Provide the traces endpoint; this forces the client to connect directly to the Collector and send
      // spans over HTTP
      collectorEndpoint: "http://localhost:14268/api/traces",
      // Provide username and password if authentication is enabled in the Collector
      // TODO: check how is authentication configured in the Collector.
//      username: 'gen',
//      password: 'ova',
    },
  };
  const options = {
    logger: {
      info(msg) {
        console.log("INFO ", msg);
      },
      error(msg) {
        console.log("ERROR", msg);
      },
    },
  };
  return initJaegerTracer(config, options);
}

const tracer = initTracer("hello-genova");

const sayHello = helloTo => {

  // Create span

  const span = tracer.startSpan("say-hello");

  // Set tag to span

  span.setTag("hello-to", helloTo);

  // Configure log for the span

  const helloStr = `Hello, ${helloTo}!`;
  span.log({
    event: "string-format",
    value: helloStr,
  });

  console.log(helloStr);
  span.log({ event: "print-string" });

  // Finish span

  span.finish();
};

assert(process.argv.length == 3, "Expecting one argument");
const helloTo = process.argv[2];
sayHello(helloTo);

tracer.close(() => process.exit());
