import { describe, expect, it } from "vitest";
import {
  getChoreDateList,
  getDayChores,
  updateDayChoreProps,
} from "../dayChoreApi.ts";
import { prepareClearStorage, prepareOneChoreStorage } from "./fixture.ts";

describe("dayChoreApi", () => {
  describe("getDayChores", () => {
    it("returns chores with calling date", async () => {
      // given : createChore 로 1개의 chore 가 생김
      await prepareOneChoreStorage();

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

  describe("updateDayChoreProps", () => {
    it("dayChoreCompleted", async () => {
      // given : createChore 로 1개의 chore 가 생김
      const [{ id }] = await prepareOneChoreStorage();

      // when
      await updateDayChoreProps({
        key: {
          id,
          date: "2024-02-14",
        },
        propsToUpdate: {
          completed: true,
          completedAt: Date.now(),
        },
      });

      // then
      const dayChores = getDayChores("2024-02-14");
      expect(dayChores).toEqual([
        expect.objectContaining({
          id,
          date: "2024-02-14",
          completed: true,
          completedAt: expect.any(Number),
        }),
      ]);
    });
  });

  describe("getChoreDateList", () => {
    it("returns todays choreDate after getDayChores", async () => {
      // given
      await prepareClearStorage();
      getDayChores("2024-02-14");

      // when
      const choreDateList = getChoreDateList();

      // then
      expect(choreDateList).toEqual(["2024-02-14"]);
    });
  });
});
