export const taskReducer = (tasks = [], action) => {

    /**
     * task = {
     *      id,
     *       title,
     *      listId: number,
     *      boardId: number
     * }
     */
    switch (action.type) {
        case 'CREATE_TASK' : {
            const newTasks = {
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                listId: action.payload.listId
            }

            return [...tasks, newTasks]
        }

        case 'UPDATE_TASK': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'REMOVE_TASK' : {
            return tasks.filter(item => item.id !== action.payload)
        }

        case 'CHANGE_LIST_ID': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.listId = action.payload.listId
                }

                return item
            })
        }

        case 'CHANGE_BOARD_ID': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.boardId = action.payload.boardId
                }

                return item
            })
        }



        default : {
            return tasks
        }
    }
}