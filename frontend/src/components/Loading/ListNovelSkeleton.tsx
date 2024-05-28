import BoxNovel from "../Novel/BoxNovel"

const ListNovelSkeleton = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
      <div className="grid grid-cols-1 gap-y-5 gap-x-5 lg:grid-cols-2">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) =>
            <BoxNovel isLoading={true} key={idx}/>
          )
        }
      </div>
    </div>
  )
}

export default ListNovelSkeleton