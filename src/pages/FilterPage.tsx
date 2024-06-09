import Slider from "../components/Slider";

import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";
import ListNovelSkeleton from "../components/Loading/ListNovelSkeleton";
import TitleTab from "../components/TitleTab";
import CustomPagination from "../components/CustomPagination";
import EmptyResult from "../components/EmptyResult";
import TitleTabScroll from "../components/TitleTabScroll";
import SelectChangeServer from "../components/Filter/SelectChangeServer";
import MyHelmet from "../components/MyHelmet";
import useFilterPage from "../hooks/query/useFilterPage";

const FilterPage = () => {
  const { searchParams, myServer, isFetching, novels, changeServerByHand, totalPage, currentPage, setCurrentPage } =
    useFilterPage();

  return (
    <div>
      <MyHelmet
        title={`Tìm kiếm: ${searchParams.get("q") || ""} - nguồn ${myServer}`}
        description="Tìm kiếm thông tin truyện theo tên truyện, tác giả"
      />
      <Slider isLoading={isFetching} />
      <div className="mt-1" id="pagination-search-novel-list">
        {isFetching ? (
          <ListNovelSkeleton>
            <TitleTab name="TÌM KIẾM:" highlight="Loading" />
          </ListNovelSkeleton>
        ) : (
          <>
            <TitleTabScroll id="filter_novel" name="TÌM KIẾM:" title={searchParams.get("q") || ""} isMb={false} />
            <span className="flex mb-1 mt-[0.2rem] md:mb-0 md:justify-end justify-center">
              <SelectChangeServer func={changeServerByHand} myServer={myServer} />
            </span>

            {!novels || novels.length <= 0 ? (
              <EmptyResult title="KHÔNG TÌM THẤY KẾT QUẢ NÀO" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:gap-5 gap-3 lg:grid-cols-2 mt-2">
                  {novels.map((novel, idx) => (
                    <BoxNovelAuthor key={idx} novel={novel} />
                  ))}
                </div>
                <CustomPagination
                  totalPage={totalPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  topList="pagination-search-novel-list"
                  isDelay={true}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FilterPage;
