import { describe, expect, test } from "vitest";
import ApplicationContext from "../applicationContext.ts";
import { getChoreDateOfToday } from "./choreDate.ts";

describe("getChoreDateOfToday", () => {
  test("returns today's date", () => {
    // given
    ApplicationContext.getCurrentTime = () => 1708226439904;

    // when
    const choreDate = getChoreDateOfToday();

    // then
    expect(choreDate).toBe("2024-02-18");
  });
});
