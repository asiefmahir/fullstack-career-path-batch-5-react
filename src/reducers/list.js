export const listReducer = (lists = [], action) => {
    /***
     * 
     * list = {
     *      id,
     *      title,
     *      tasks: [],
     *      boardId: number
     * }
     */

    switch (action.type) {
        case 'CREATE_LIST' : {
            const newList = {
                id: Date.now(),
                title: action.payload.title,
                tasks: action.payload.tasks || [],
                boardId: action.payload.boardId
            }

            return [...lists, newList]
        }

        case 'UPDATE_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'REMOVE_LIST' : {
            return lists.filter(item => item.id !== action.payload)
        }

        case 'ADD_TASK_ID_TO_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    const newTaskIds = item.tasks.filter(taskId => taskId !== action.payload.taskId);
                    item.tasks = newTaskIds;
                }

                return item
            })
        }

        case 'CHANGE_BOARD_ID' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.boardId = action.payload.boardId
                }

                return item
            })
        }

        default : {
            return lists
        }
    }
}