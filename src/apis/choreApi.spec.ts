import { beforeEach, describe, expect, test } from "vitest";
import {
  createChore,
  deleteChore,
  getChores,
  setChoreCompleted,
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
      await createChore({
        title: "test",
      });

      // then
      const chores = getChores();
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
      await createChore({
        title: "test",
      });
      const [{ id }] = getChores();

      // when
      await setChoreCompleted({
        id,
        completed: true,
      });

      // then
      const chores = getChores();
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
