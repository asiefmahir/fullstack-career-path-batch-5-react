import React, { useState, useContext } from "react";
import { Droppable } from 'react-beautiful-dnd'


import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import TaskCard from "./TaskCard";
import { icons } from "../assets";

import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";


function TaskList({ taskList, index }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [editMode, setEditMode] = useState(false);

    /**
     * {
     *    id,
     *     title,
     *    tasks: ["task-1", "task-2"],
     *     boardId
     * }
     */


    const { title } = taskList;
    const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
    console.log(allTasks);
    const { dispatchListAction } = useContext(ListContext);
    const { dispatchBoardAction } = useContext(BoardContext)

    const submitHandler = (e) => {
        e.preventDefault();
        const id = Date.now();

        dispatchTaskAction({ type: 'CREATE_TASK', payload: { id: id, title: taskTitle, listId: taskList.id, boardId: taskList.boardId } })

        dispatchListAction({ type: 'ADD_TASK_ID_TO_LIST', payload: { id: taskList.id, taskId: id } })

        dispatchBoardAction({ type: 'ADD_TASK_ID_TO_BOARD', payload: { id: taskList.boardId, taskId: id } })
        setTaskTitle("");
        setEditMode(false);
        console.log('I am called')
    };

    const removeListHandler = () => {
        dispatchListAction({ type: 'REMOVE_LIST', payload: taskList.id });
        dispatchBoardAction({ type: 'REMOVE_LIST_ID_FROM_BOARD', payload: { id: taskList.boardId, listId: taskList.id } })
    }


    return (



        <Droppable droppableId={taskList.id + ''} index={index}>
            {(provided) => {
                // console.log(provided);
                return (

                    <div 
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className="list-container">
                            <div className="list-title-container">
                                <h5>{title}</h5>
                                <img
                                    onClick={removeListHandler}
                                    className="add-item-icon"
                                    src={icons.crossIcon}
                                    alt=""
                                />
                            </div>
                            {
                                taskList.tasks.map(item => {
                                    return allTasks.find(i => i.id === item)
                                })?.map((task, i) => (
                                    <TaskCard index={i} id={task.id} taskList={taskList} task={task} key={task.id} />
                                ))
                            }
                            {editMode ? (
                                <AddItemForm
                                    submitHandler={submitHandler}
                                    title={taskTitle}
                                    onChangeHandler={(e) => setTaskTitle(e.target.value)}
                                    setEditMode={setEditMode}
                                    editMode={editMode}
                                />
                            ) : (
                                <AddItem setEditMode={setEditMode} />
                            )}
                        </div>
                        {provided.placeholder}
                    </div>

                )
            }}
        </Droppable>

    )
}




export default TaskList;
