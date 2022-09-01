export const fetchTaskMiddleWare = (store) => (next) => async (action) => {
    if (typeof(action) === 'function') {
       action(store.dispatch, store.getState);
       return
    }

    next(action)
}