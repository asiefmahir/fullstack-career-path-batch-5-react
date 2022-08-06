import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import TodoDetails from '../pages/TodoDetails'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/todos/:todoId' element = {<TodoDetails />}/>
            <Route path = '*' element = {<div>Not Found</div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router