import { beforeEach, describe, expect, test } from "vitest";
import { ApiContext } from "./apiContext.ts";
import { createChore, deleteChore, getChores } from "./choreApis.ts";

describe("choreApis", () => {
  beforeEach(() => {
    ApiContext.storage = {};
  });

  describe("createDayChore", () => {
    test("add new daychore", async () => {
      // given
      ApiContext.storage = {};

      // when
      await createChore({
        title: "test",
      });

      // then
      const chores = getChores();
      expect(chores).toEqual([
        {
          id: expect.any(String),
          title: "test",
        },
      ]);
    });
  });

  describe("deleteDayChore", () => {
    test("removes", async () => {
      // given
      ApiContext.storage = {};

      await createChore({
        title: "test",
      });
      const [{ id }] = getChores();

      // when
      await deleteChore(id);

      // then
      const chores = getChores();
      expect(chores).toEqual([]);
    });
  });
});
