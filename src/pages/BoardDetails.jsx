import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DragDropContext } from 'react-beautiful-dnd'

import { ListContext } from "../contexts/List";
import { TaskContext } from "../contexts/Task";

import { BoardContext } from "../contexts/Board";



import TaskList from "../components/TaskList";

import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";


function BoardDetails() {
    const [listTitle, setListTitle] = useState("");
    const [editMode, setEditMode] = useState(false);
    let { boardId } = useParams();
    const { lists, dispatchListAction } = useContext(ListContext);
    const { dispatchBoardAction } = useContext(BoardContext);
    const { dispatchTaskAction } = useContext(TaskContext);




    const submitHandler = (e) => {
        e.preventDefault();
        const id = Date.now();
        dispatchListAction({ type: 'CREATE_LIST', payload: { id: id, boardId: boardId, title: listTitle } });
        dispatchBoardAction({ type: 'ADD_LIST_ID_TO_BOARD', payload: { id: boardId, listId: id } })

        setListTitle("");
        setEditMode(false);
    };

    const onDragHandler = (result) => {
        console.log(result)
        // console.log`I am called`;
        
        const {source, destination, draggableId} = result;

        if (source.droppableId !== destination.droppableId) {
            dispatchTaskAction({type: 'CHANGE_LIST_ID', payload: {id: parseInt(draggableId), listId: parseInt(destination.droppableId)}})
            dispatchListAction({type: 'REMOVE_TASK_ID_FROM_LIST', payload: {id: parseInt(source.droppableId), taskId: parseInt(draggableId)}})
            dispatchListAction({type: 'ADD_TASK_ID_TO_LIST', payload: {id: parseInt(destination.droppableId), taskId: parseInt(draggableId)}})
        } else {
            dispatchListAction({type: 'SORT_TASK_IDS_IN_LIST', payload: {source: source, destination: destination, taskId: parseInt(draggableId)}})
        }
    }



    return (


        
           <DragDropContext onDragEnd= {onDragHandler} >
                 <div className="d-flex m-top-sm flex-direction-row">
                <Link to="/">Back to Boards</Link>

                {lists
                    ?.filter((item) => item.boardId === boardId)
                    ?.map((taskList, index) => (
                        <TaskList index = {index} taskList={taskList} key={taskList.id} />
                    ))}
                {!editMode ? (
                    <AddItem listAddItem setEditMode={setEditMode} />
                ) : (
                    <AddItemForm
                        setEditMode={setEditMode}
                        listForm
                        submitHandler={submitHandler}
                        title={listTitle}
                        onChangeHandler={(e) => setListTitle(e.target.value)}
                    />
                )}
            </div>
           </DragDropContext>

    );
}

export default BoardDetails;
