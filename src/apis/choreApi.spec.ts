import { beforeEach, describe, expect, test } from "vitest";
import {
  createDayChore,
  deleteDayChore,
  getDayChores,
  setDayChoreCompleted,
  setStorage,
} from "./choreApis.ts";

describe("choreApis", () => {
  beforeEach(() => {
    setStorage({});
  });

  describe("createDayChore", () => {
    test("add new daychore", async () => {
      // given
      setStorage({});

      // when
      await createDayChore({
        title: "test",
      });

      // then
      const chores = getDayChores();
      expect(chores).toEqual([
        {
          completed: false,
          id: expect.any(String),
          title: "test",
        },
      ]);
    });
  });

  describe("setDayChoreCompleted", () => {
    test("removes", async () => {
      // given
      setStorage({});
      await createDayChore({
        title: "test",
      });
      const [{ id }] = getDayChores();

      // when
      await setDayChoreCompleted({
        id,
        completed: true,
      });

      // then
      const chores = getDayChores();
      expect(chores).toEqual([
        expect.objectContaining({
          completed: true,
        }),
      ]);
    });
  });

  describe("deleteDayChore", () => {
    test("removes", async () => {
      // given
      setStorage({});
      await createDayChore({
        title: "test",
      });
      const [{ id }] = getDayChores();

      // when
      await deleteDayChore(id);

      // then
      const chores = getDayChores();
      expect(chores).toEqual([]);
    });
  });
});
