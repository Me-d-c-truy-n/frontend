import novels from "../../constants/novel.json";
import BoxNovel from "../Novel/BoxNovel";
import TitleTab from "../TitleTab";

const ListNovel = () => {
  return (
    <div>
      <TitleTab name="DANH SÁCH TRUYỆN" link="/"/>
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
        {
          novels['novel'].map((novel, idx) =>
              <BoxNovel
                key={idx}
                novel={novel}
              />
          )
        }
      </div>
    </div>
  )
}

export default ListNovel