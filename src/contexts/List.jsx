import {createContext, useReducer} from 'react'
import {listReducer} from '../reducers/list'

export const ListContext = createContext();


function ListProvider({children}) {

    const [lists, dispatchListAction] = useReducer(listReducer, [])

  return (
    <ListContext.Provider value={{lists, dispatchListAction}}>
        {children}
    </ListContext.Provider>
  )
}

export default ListProvider