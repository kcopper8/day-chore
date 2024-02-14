import { describe, expect, it } from "vitest";
import { ApiContext } from "./apiContext.ts";
import { createChore } from "./choreApis.ts";
import { getDayChores, setDayChoreCompleted } from "./dayChoreApi.ts";

describe("dayChoreApi", () => {
  describe("getDayChores", () => {
    it("returns chores with calling date", async () => {
      // given : createChore 로 1개의 chore 가 생김
      ApiContext.storage = {};

      await createChore({
        title: "test",
      });

      // when
      const dayChores = getDayChores("2024-02-14");

      // then
      expect(dayChores).toEqual([
        expect.objectContaining({
          title: "test",
          date: "2024-02-14",
          completed: false,
        }),
      ]);
    });
  });

  describe("setDayChoreCompleted", () => {
    it("dayChoreCompleted", async () => {
      // given : createChore 로 1개의 chore 가 생김
      ApiContext.storage = {};

      await createChore({
        title: "test",
      });

      // when
      const [{ id }] = getDayChores("2024-02-14");
      setDayChoreCompleted({
        id,
        date: "2024-02-14",
        completed: true,
      });

      // then
      const dayChores = getDayChores("2024-02-14");
      expect(dayChores).toEqual([
        expect.objectContaining({
          id,
          date: "2024-02-14",
          completed: true,
        }),
      ]);
    });
  });
});
