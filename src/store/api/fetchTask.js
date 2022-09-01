import { fetchTaskSuccess, fetchTaskStart, fetchTaskFailed} from "../actions/task";


export const fetchTask = async (dispatch, getState) => {
        dispatch(fetchTaskStart())
       try {   
            const response = await fetch(`http://jsonplaceholder.typicode.com/todos`);
            const tasks = await response.json();
            dispatch(fetchTaskSuccess(tasks));
            return
       } catch (err) {
            dispatch(fetchTaskFailed(err.message));
            return
       }
}

export const fetchPosts = async (dispatch, getState) => {
        dispatch(fetchTaskStart())
       try {   
            const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
            const tasks = await response.json();
            dispatch(fetchTaskSuccess(tasks));
            return
       } catch (err) {
            dispatch(fetchTaskFailed(err.message));
            return
       }
}