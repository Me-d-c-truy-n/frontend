import { beforeAll, describe, expectTypeOf, test, expect } from "vitest";
import { ApiGetAllExport } from "../../api/apiPlugin";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe("Run test get all export type is valid", () => {
  let data: string[];

  beforeAll(async () => {
    data = await ApiGetAllExport();
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response array server", () => {
    expectTypeOf(data).toBeArray();
  });

  test("Should have response contains pdf", () => {
    expect(data).include("pdf");
  });
});
