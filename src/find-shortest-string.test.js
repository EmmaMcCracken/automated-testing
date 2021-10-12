// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(
    findShortestString(["apples", "ape", "amazing", "wowcher", "bee"])
  ).toBe("ape");
  expect(findShortestString(["1", "7", "444", "22", "333"])).toBe("1");
});
