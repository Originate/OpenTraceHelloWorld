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

const tracer = initTracer("hello-genoa");

const sayHello = helloTo => {
  const span = tracer.startSpan("say-hello");
  const helloStr = `Hello, ${helloTo}!`;
  console.log(helloStr);
  span.finish();
};

assert(process.argv.length == 3, "Expecting one argument");
const helloTo = process.argv[2];
sayHello(helloTo);

tracer.close(() => process.exit());
