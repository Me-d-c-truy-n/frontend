import { useDispatch } from "react-redux"
import { AppDispatch, AppState } from "../../store"
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useState } from "react";
import { changeServerIndex } from "../../store/server";
import { FaServer } from "react-icons/fa";

interface Props {
  successServer: string;
}


const KanbanSelectServer = ({ successServer }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { listServer } = useSelector((state: AppState) => state.server);
  const [stores, setStores] = useState(listServer);

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
      <div className="md:mt-2 flex gap-1 flex-col text-white md:text-base text-sm">
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div className="flex gap-1 flex-col" {...provided.droppableProps} ref={provided.innerRef}>
              {
                stores.map((srv, index) => 
                  <Draggable draggableId={srv} key={srv} index={index}>
                    {(provided) => (
                      <div 
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={` flex gap-2 items-center outline-none shadow-xl p-2 px-8 text-center rounded  ${srv === successServer ?"bg-green-600":"bg-sky-600"}`}
                      >
                        <FaServer />
                        {srv}
                      </div>
                    )}
                  </Draggable>
                )
              }
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default KanbanSelectServer