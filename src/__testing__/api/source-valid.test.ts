import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";
import { ApiGetAllServer } from "../../api/apiPlugin";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe("Run test get all source is valid", () => {
  let data: string[];

  beforeAll(async () => {
    data = await ApiGetAllServer();
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response array server", () => {
    expectTypeOf(data).toBeArray();
  });

  test("Should have response contains metruyencv", () => {
    expect(data).include("metruyencv");
  });
});
