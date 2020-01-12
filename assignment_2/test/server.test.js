const assert = require("assert");

const { init } = require("../src/index");

describe("GET /", () => {
  let server;

  const request = {
    method: "GET",
    url: "/"
  };

  before(async () => {
    server = await init();
  });

  after(async () => {
    await server.stop();
  });

  it("responds with 200", async () => {
    const res = await server.inject(request);
    assert.equal(res.statusCode, 200);
  });

  it("should return valid JSON", async () => {
    const res = await server.inject(request);

    assert.deepStrictEqual(res.result, { message: "This is test message!" });
  });
});
