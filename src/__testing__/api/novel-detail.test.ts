import { beforeAll, describe, expect, test } from "vitest";
import { ApiGetDetailNovel } from "../../api/apiNovel";
import { IResponse, STATUS } from "../../types/response";
import { INovelRoot } from "../../types/novel";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

function runTest(source: string, novelId: string, nameNovel: string) {
  describe(`Request get novel detail from ${source}`, () => {
    let data: IResponse<INovelRoot>;

    beforeAll(async () => {
      data = await ApiGetDetailNovel(source, novelId);
    }, BEFORE_ALL_TIMEOUT);

    test("Should have response status SUCCESS", () => {
      expect(data.status).toBe(STATUS.SUCCESS);
    });

    test("Should have response correct name", () => {
      expect(data.data.name).include(nameNovel);
    });

    test("Should have response description", () => {
      expect(data.data.description).not.toBeNull();
      expect(data.data.description).not.toBeUndefined();
      expect(data.data.description).not.toBe("");
    });
  });
}

describe("Run test get novel detail for 3 source", () => {
  runTest("metruyencv", "van-co-than-de", "Vạn Cổ Thần Đế");
  runTest("truyenfull", "van-co-than-de", "Vạn Cổ Thần Đế");
  runTest("tangthuvien", "van-co-than-de", "Vạn Cổ Thần Đế");

  runTest("metruyencv", "de-ba", "Đế Bá");
  runTest("truyenfull", "de-ba", "Đế Bá");
  runTest("tangthuvien", "de-ba", "Đế Bá");
});
