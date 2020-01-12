const assert = require("assert");
const sortArray = require("../sortArray");

describe("Sort array", function() {
  it("should return sorted array if given array contains only numbers and/or strings", function() {
    const inputArray = [6, "a", 1, "asd", 32];

    assert.equal(
      sortArray(inputArray).toString(),
      [1, 6, 32, "a", "asd"].toString()
    );
  });

  it("should return sorted array even if given array contains object/arrays items inside without them", function() {
    const inputArray = [
      6,
      "a",
      [1, 2, 3],
      1,
      "asd",
      32,
      { item: "Item", a: 122 }
    ];

    assert.equal(
      sortArray(inputArray).toString(),
      [1, 6, 32, "a", "asd"].toString()
    );
  });
});
