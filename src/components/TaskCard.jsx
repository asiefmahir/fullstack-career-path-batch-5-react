import React, { useState, useContext } from "react";
import { Draggable } from 'react-beautiful-dnd'
import AddItemForm from "./AddItemForm";
import { TaskContext } from '../contexts/Task';
import { BoardContext } from '../contexts/Board'
import { ListContext } from '../contexts/List'




import { icons } from "../assets";

function TaskCard({ task, taskList, index }) {

  /**
   * id,
   * title,
   * listId,
   * boardId
   */
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTaskAction } = useContext(TaskContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);




  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTaskAction({ type: 'UPDATE_TASK', payload: { id: task.id, title: taskTitle } })
    setEditMode(false);
  };

  const removeTaskHandler = () => {
    dispatchTaskAction({ type: 'REMOVE_TASK', payload: task.id });
    dispatchListAction({ type: 'REMOVE_TASK_ID_FROM_LIST', payload: { id: task.listId, taskId: task.id } })
    dispatchBoardAction({ type: 'REMOVE_TASK_ID_FROM_BOARD', payload: { id: task.boardId, taskId: task.id } });
  }

  // console.log(task);
  return (

    <Draggable draggableId= {task.id + ''} index = {index}>
      {(provided) => {
        // console.log(provided)
        return (
          <div
              ref = {provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}

          >
            {editMode ? (
              <AddItemForm
                onChangeHandler={(e) => setTaskTitle(e.target.value)}
                title={taskTitle}
                setEditMode={setEditMode}
                submitHandler={submitHandler}
              />
            ) : (
              <div
                onClick={(e) => {
                  setEditMode(true);
                }}
                className="task-card"
              >
                <p>{taskTitle}</p>
                <img
                  onClick={removeTaskHandler}
                  className="add-item-icon"
                  src={icons.crossIcon}
                  alt=""
                />
              </div>
            )}
          </div>
        )
      }}
    </Draggable>
  )
}

export default TaskCard;
