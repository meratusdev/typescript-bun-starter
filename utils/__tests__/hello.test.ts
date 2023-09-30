import { hello } from "~/utils/hello";
import { it, expect, describe } from "bun:test";

describe("hello", () => {
  it("should return a string", () => {
    expect(hello("Zakiego")).toBe("Hello Zakiego!");
  });
});
