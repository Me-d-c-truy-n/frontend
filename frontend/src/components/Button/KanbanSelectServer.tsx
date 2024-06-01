import { useDispatch } from "react-redux"
import { AppDispatch, AppState } from "../../store"
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { changeServerIndex } from "../../store/server";
import ButtonServer from "./ButtonServer";
import { IResponse } from "../../types/response";
import { IChapter } from "../../types/novel";

export interface CheckServerChapter {
  chapterId: string;
  novelId: string;
}

interface Props extends CheckServerChapter {
  successServer: string;
  func: (data: IResponse<IChapter>, server: string) => void;
}


const KanbanSelectServer = ({ successServer, chapterId, novelId, func }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { listServer } = useSelector((state: AppState) => state.server);
  const [stores, setStores] = useState(listServer);
  const [isChecking, setIsChecking] = useState<string>("");

  const handleDragDrop = (results: DropResult) => {
    const {source, destination, type} = results;
    if (!destination) return;

    if (source.droppableId === destination.droppableId &&
        source.index === destination.index) return;

    if (type === "group") {
      const tmpStores = [...stores];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = tmpStores.splice(sourceIndex, 1);
      tmpStores.splice(destinationIndex, 0, removedStore);

      dispatch(changeServerIndex(tmpStores));
      return setStores(tmpStores);
    }
  }

  return (
    <DragDropContext onDragEnd = {handleDragDrop}>
      <div className="md:mt-2 flex gap-1 flex-col text-white md:text-base text-sm mb-1">
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div className="flex gap-1 flex-col" {...provided.droppableProps} ref={provided.innerRef}>
              {
                stores.map((srv, index) => 
                  <Draggable draggableId={srv} key={srv} index={index}>
                    {(provided) => (
                      <ButtonServer
                        successServer={successServer}
                        srv={srv}
                        provided={provided}
                        isCheking={isChecking}
                        setIsChecking={setIsChecking}
                        chapterId={chapterId}
                        novelId={novelId}
                        func={func}
                      />
                    )}
                  </Draggable>
                )
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default KanbanSelectServer