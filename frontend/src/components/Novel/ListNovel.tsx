import novels from "../../constants/novels.json";
import BoxNovel from "../Novel/BoxNovel";
import TitleTab from "../TitleTab";

const ListNovel = () => {
  return (
    <div>
      <TitleTab name="DANH SÁCH TRUYỆN" link="/"/>
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
        {
          novels['novels'].map((novel, idx) =>
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