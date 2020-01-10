const Hapi = require("@hapi/hapi");

const PORT = 3003;
const HOST = "localhost";

const server = new Hapi.Server({
  port: PORT,
  host: HOST
});

server.route({
  method: "GET",
  path: "/",
  handler: () => ({
    message: "This is test message!"
  })
});

exports.init = async () => {
  await server.initialize();
  return server;
};

exports.start = async () => {
  try {
    await server.start();

    console.log(`Server running on ${server.info.uri}`);

    return server;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
