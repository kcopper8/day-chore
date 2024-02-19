import { describe, expect, test } from "vitest";
import { ApiContext } from "../apiContext.ts";
import { initialize } from "../dataApi.ts";
import { prepareClearStorage } from "./fixture.ts";

describe("initialize", () => {
  describe("without data", () => {
    test("do nothing", async () => {
      // given
      await prepareClearStorage();

      // when
      await initialize();

      // then
      expect(ApiContext.storage).toEqual({
        version: "0.0.1",
      });
    });
  });
  describe("migration to 0.0.1", () => {
    test("", async () => {
      // given
      await prepareClearStorage();
      ApiContext.storage = {
        "chore-2024-02-15":
          '{"3ec81970-0609-41c7-8a5d-8c1a0559359b":true,"561cc9d4-5ba0-45cd-a5f8-ac211aeb18f2":false}',
        choreDateList: '["2024-02-15","2024-02-17"]',
        dayChores:
          '[{"id":"d9338595-1d4f-4f33-b3ef-77139f143cf7","title":"fewfwefwww"},{"id":"c204c652-64e1-49f7-a105-ba17ee05a285","title":"hellofe"},{"id":"f954db06-3f21-4665-89f4-3522fda1103b","title":"test"}]',
      };
      // when
      await initialize();

      // then
      expect(ApiContext.storage).toMatchInlineSnapshot(`
        {
          "chore-2024-02-15": "{"3ec81970-0609-41c7-8a5d-8c1a0559359b":{"completed":true},"561cc9d4-5ba0-45cd-a5f8-ac211aeb18f2":{"completed":false}}",
          "choreDateList": "["2024-02-15","2024-02-17"]",
          "dayChores": "[{"id":"d9338595-1d4f-4f33-b3ef-77139f143cf7","title":"fewfwefwww"},{"id":"c204c652-64e1-49f7-a105-ba17ee05a285","title":"hellofe"},{"id":"f954db06-3f21-4665-89f4-3522fda1103b","title":"test"}]",
          "version": "0.0.1",
        }
      `);
    });
  });
});
