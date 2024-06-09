import BoxNovel from "../Novel/BoxNovel";
import TitleTab from "../TitleTab";
import ListNovelSkeleton from "../Loading/ListNovelSkeleton";
import CustomPagination from "../CustomPagination";
import EmptyResult from "../EmptyResult";
import useListNovel from "../../hooks/query/useListNovel";

const ListNovel = () => {
  const { isLoading, isFetching, isError, novels, totalPage, currentPage, setCurrentPage } = useListNovel();

  if (isError)
    return (
      <div>
        <TitleTab name="Danh Sách Truyện" />
        <EmptyResult title="Có vấn đề xảy ra, vui lòng kiểm tra kết nối" />
      </div>
    );

  if (isLoading || isFetching || novels?.length == 0)
    return (
      <ListNovelSkeleton>
        <TitleTab name="Danh Sách Truyện" />
      </ListNovelSkeleton>
    );

  return (
    <div id="pagination-list-novel">
      <TitleTab name="Danh Sách Truyện" />
      <div className="grid grid-cols-1 md:gap-5 gap-3 lg:grid-cols-2">
        {novels.map((novel, idx) => (
          <BoxNovel key={idx} novel={novel} />
        ))}
      </div>
      <CustomPagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        topList="pagination-list-novel"
      />
    </div>
  );
};

export default ListNovel;
