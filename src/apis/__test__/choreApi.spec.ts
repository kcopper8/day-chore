import { describe, expect, test } from "vitest";
import {
  createChore,
  deleteChore,
  getChores,
  modifyChore,
} from "../choreApis.ts";
import { prepareClearStorage, prepareOneChoreStorage } from "./fixture.ts";

describe("choreApis", () => {
  describe("createDayChore", () => {
    test("add new daychore", async () => {
      // given
      await prepareClearStorage();

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
      const [{ id }] = await prepareOneChoreStorage();

      // when
      await deleteChore(id);

      // then
      const chores = getChores();
      expect(chores).toEqual([]);
    });
  });

  describe("modifyChore", () => {
    test("replaces new props", async () => {
      // given
      const [{ id }] = await prepareOneChoreStorage();

      // when
      await modifyChore({
        id,
        title: "test2",
      });

      // then
      expect(getChores()).toEqual([
        {
          id,
          title: "test2",
        },
      ]);
    });
  });
});
