export const fetchTaskStart = () => {
    return {
        type: 'task/pending'
    }
}

export const fetchTaskSuccess = (tasks) => {
    return {
        type: 'task/taskLoaded',
        payload: tasks
    }
}

export const fetchTaskFailed = (errorMessage) => {
    return {
        type: 'task/unsuccessful',
        payload: errorMessage
    }
}