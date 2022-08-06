import {createContext, useReducer} from 'react'
import {boardReducer} from '../reducers/board'

export const BoardContext = createContext();


function BoardProvider({children}) {
    const [boards, dispatchBoardAction] = useReducer(boardReducer, [])

  return (
    <BoardContext.Provider value={{boards, dispatchBoardAction}}>
        {children}
    </BoardContext.Provider>
  )
}

export default BoardProvider