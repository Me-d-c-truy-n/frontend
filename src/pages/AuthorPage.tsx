import Slider from "../components/Slider";

import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";
import ListNovelSkeleton from "../components/Loading/ListNovelSkeleton";
import TitleTab from "../components/TitleTab";
import CustomPagination from "../components/CustomPagination";
import EmptyResult from "../components/EmptyResult";
import TitleTabScroll from "../components/TitleTabScroll";
import MyHelmet from "../components/MyHelmet";
import useAuthorPage from "../hooks/query/useAuthorPage";

const AuthorPage = () => {
  const { isFetching, novels, myServer, isError, totalPage, currentPage, setCurrentPage } = useAuthorPage();

  return (
    <div>
      <Slider isLoading={isFetching} />
      <div id="pagination-author-novel-list">
        {isFetching ? (
          <ListNovelSkeleton>
            <TitleTab name="Truyện Của Tác Giả " highlight="Loading" />
          </ListNovelSkeleton>
        ) : novels?.length > 0 ? (
          <>
            <MyHelmet
              title={`Truyện của tác giả ${novels[0].author.name} - nguồn ${myServer}`}
              description={`Danh sách truyện của tác giả ${novels[0].author.name} - nguồn ${myServer}`}
            />
            <TitleTabScroll id="novel_author" name="Truyện Của Tác Giả " title={novels[0].author.name} />
            <div className="grid grid-cols-1 md:gap-5 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
              {novels.map((novel) => (
                <BoxNovelAuthor key={novel.novelId} novel={novel} isActive={false} />
              ))}
            </div>
            <CustomPagination
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              topList="pagination-author-novel-list"
              isDelay={true}
            />
          </>
        ) : (
          <EmptyResult title={isError ? "CÓ VẤN ĐỀ XẢY RA, VUI LÒNG KIỂM TRA KẾT NỐI" : "Tác giả này không tồn tại"} />
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
