import { describe, expect, it } from "vitest";
import {
  convertDateToTime,
  getCurrentPageByChapterId,
  getImageOfExportFile,
  subSlugChapter,
} from "../../utils/helpers";
import { cn } from "../../utils/cn";

describe("Run test all helper.ts function", () => {
  it("Test func subSlugChapter should have return vietnamese options", () => {
    expect(subSlugChapter("quyen-1-chuong-12")).toBe("quyển 1 chương 12");
  });

  it("Test func convertDateToTime should have return 'vài giây trước'", () => {
    expect(convertDateToTime(new Date().toString())).toBe("vài giây trước");
  });

  it("Test func getImageOfExportFile(epub) should have return image epub", () => {
    expect(getImageOfExportFile("epub")).toBe("https://cdn-icons-png.flaticon.com/512/180/180838.png");
  });

  it("Test func getImageOfExportFile(powerpoint) should have return image ?", () => {
    expect(getImageOfExportFile("powerpoint")).toBe("https://cdn-icons-png.flaticon.com/512/6301/6301689.png");
  });

  it("Test func getCurrentPageByChapterId should have return page", () => {
    expect(getCurrentPageByChapterId("metruyencv", "chuong-120")).toBe(4);
    expect(getCurrentPageByChapterId("truyenfull", "chuong-120")).toBe(3);
    expect(getCurrentPageByChapterId("tangthuvien", "chuong-120")).toBe(2);
  });

  it("Test func cn should have concatenate class names", () => {
    expect(cn("bg-white", "bg-amber-500")).toBe("bg-amber-500");
    expect(cn("bg-white", "text-center")).toBe("bg-white text-center");
    expect(cn("bg-white text-center font-bold text-amber-500", "font-semibold border bg-black")).toBe(
      "text-center text-amber-500 font-semibold border bg-black",
    );
  });
});
