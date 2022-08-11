import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BoardDetails from '../pages/BoardDetails'
import Boards from '../pages/Boards'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Boards />}/>
            <Route path = 'boards/:boardId' element = {<BoardDetails />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
