import Slider from "../components/Slider";
import NovelInfor from "../components/Novel/NovelInfor";
import Skeleton from "react-loading-skeleton";
import TitleTabFull from "../components/TitleTabFull";
import NovelDescription from "../components/Novel/NovelDescription";
import MyHelmet from "../components/MyHelmet";
import useNovelPreview from "../hooks/query/useNovelPreview";

const NovelPreview = () => {
  const { isFetching, novel, currentServer } = useNovelPreview();

  return (
    <div>
      <Slider isLoading={isFetching} />
      <NovelInfor novel={novel} isLoading={isFetching} server={currentServer} />
      <div className="mb-5">
        {isFetching || novel == null ? (
          <>
            <TitleTabFull>
              <Skeleton width={100} />
            </TitleTabFull>
            <Skeleton height={300} />
          </>
        ) : (
          <>
            <MyHelmet
              title={`${novel.name} - nguồn ${currentServer}`}
              description={`Truyện của tác giả ${novel.author} - nguồn ${currentServer}`}
            />
            <NovelDescription description={novel.description} />
          </>
        )}
      </div>
    </div>
  );
};

export default NovelPreview;
