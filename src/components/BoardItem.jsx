import {useContext} from 'react'
import { icons } from '../assets'

import {BoardContext} from '../contexts/Board'
import {ListContext} from '../contexts/List';
import {TaskContext} from '../contexts/Task'


function BoardItem({board}) {
    const {dispatchBoardAction} = useContext(BoardContext);
    const {lists, dispatchListAction} = useContext(ListContext);
    const {tasks, dispatchTaskAction} = useContext(TaskContext);



    const removeBoardHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const listsToBeDeleted = lists.filter(list => list.boardId === board.id);
        const tasksToBeDeleted = tasks.filter(task => task.boardId === board.id);
        dispatchBoardAction({type: 'DELETE_BOARD', payload: board.id});
        listsToBeDeleted.forEach((list) => {
            dispatchListAction({type: 'REMOVE_LIST', payload: list.id})
        });
        tasksToBeDeleted.forEach((task) => {
            dispatchTaskAction({type: 'REMOVE_TASK', payload: task.id})
        })
    }

    return (
        <div className="board-box d-flex flex-direction-column">
            <div className="d-flex justify-content-between">
                <h5 className="title-gap">{board.title}</h5>
                <img className="add-item-icon" onClick = {(e) => removeBoardHandler(e)} src= {icons.crossIcon} alt="Delete Board" />
            </div>
            <p className = "title-gap align-self-flex-end">This board has {board.lists.length} List</p>
        </div> 
    )
}

export default BoardItem