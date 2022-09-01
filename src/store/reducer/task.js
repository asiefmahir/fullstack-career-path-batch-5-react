const initialState = {
    isLoading: true,
    tasks: [],
    error: ''
}

export const taskReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'task/taskLoaded': {
            return {
                ...state,
                tasks: action.payload,
                isLoading: false,
                error: ''
            }
        }

        case 'task/pending': {
            return {
                ...state,
                isLoading: true,
            }
        }

        case 'task/unsuccessful': {
            return {
                ...state,
                isLoading: false,
                tasks: [],
                error: action.payload
            }
        }

    
        default:
            return state;
    }
}