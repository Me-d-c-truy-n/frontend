import { beforeAll, describe, expect, test } from "vitest";
import { ApiGetOneChapter } from "../../api/apiNovel";
import { IResponse, STATUS } from "../../types/response";
import { IChapter } from "../../types/novel";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

function runTest(source: string, novelId: string, chapterId: string) {
  describe(`Request get novel ${novelId} detail from ${source}`, () => {
    let data: IResponse<IChapter>;

    beforeAll(async () => {
      data = await ApiGetOneChapter(source, novelId, chapterId);
    }, BEFORE_ALL_TIMEOUT);

    test("Should have response status SUCCESS", () => {
      expect(data.status).toBe(STATUS.SUCCESS);
    });

    test("Should have response prevChapter and nextChapter", () => {
      expect(data.data.preChapterId).include("chuong-");
      expect(data.data.nextChapterId).include("chuong-");
    });

    test("Should have response content", () => {
      expect(data.data.content).not.toBeNull();
      expect(data.data.content).not.toBeUndefined();
      expect(data.data.content).not.toBe("");
    });
  });
}

describe("Run test get novel chapter for 3 source", () => {
  runTest("metruyencv", "van-co-than-de", "chuong-3");
  runTest("truyenfull", "van-co-than-de", "chuong-3");
  runTest("tangthuvien", "van-co-than-de", "chuong-3");

  runTest("metruyencv", "de-ba", "chuong-3");
  runTest("truyenfull", "de-ba", "chuong-3");
});
