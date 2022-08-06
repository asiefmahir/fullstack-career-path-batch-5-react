export const boardReducer = (boards = [], action) => {

    /**
     * board  = {
     *      id,
     *         title,
     *       createdAt,
     *       lists: [123],
     *       tasks: [],
     *  
     * }
     * 
     */

    
    switch (action.type) {
        case 'CREATE_BOARD' : {
            const newBoard = {
                id: Date.now(),
                title: action.payload.title,
                createdAt: new Date().toLocaleString(),
                lists: action.payload.lists || [],
                tasks: action.payload.tasks || []
            }

            return [...boards, newBoard]
        }

        case 'UPDATE_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'DELETE_BOARD' : {
            return boards.filter(item => item.id !== action.payload)
        }

        case 'ADD_LIST_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.lists.push(action.payload.listId)
                }

                return item
            })
        }

        case 'REMOVE_LIST_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    const newListIds = item.lists.filter(listId => listId !== action.payload.listId);
                    item.lists = newListIds;
                }

                return item
            })
        }

        case 'ADD_TASK_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    const newTaskIds = item.lists.filter(listId => listId !== action.payload.taskId);
                    item.tasks = newTaskIds;
                }

                return item
            })
        }


        default : {
            return boards
        }
    }
}