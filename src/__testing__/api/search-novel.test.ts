import { beforeAll, describe, test, expect } from "vitest";
import { IResponse, STATUS } from "../../types/response";
import { INovelRoot } from "../../types/novel";
import { ApiSearch } from "../../api/apiSearch";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe("Run test get all source is valid", () => {
  let data: IResponse<INovelRoot[]>;

  beforeAll(async () => {
    data = await ApiSearch("metruyencv", "kiem", 1);
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response status SUCCESS", () => {
    expect(data.status).toBe(STATUS.SUCCESS);
  });

  test("Should have response totalPage, perPage", () => {
    expect(data.totalPage).toBeGreaterThan(0);
    expect(data.perPage).toBeGreaterThan(0);
  });

  test("Should have response length > 0", () => {
    expect(data.data.length).toBeGreaterThan(0);
  });
});
