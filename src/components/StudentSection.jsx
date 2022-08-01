import {useContext} from 'react'
import {StudentContext} from '../contexts/Student'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection() {
    const {allStudentList, setAllStudentList} = useContext(StudentContext)

    const togglePresentMode = (studentId) => {
        setAllStudentList(allStudentList.map((item) => {
        if (item.id === studentId) {
            item.isPresent = !item.isPresent
        }

        return item
        }))
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} class="student-section">
            <AllStudentList />
            <PresentStudentList 
                
                togglePresentMode = {togglePresentMode}
            />
            <AbsentStudentList 
                
                togglePresentMode = {togglePresentMode}
            />
        </div>

    )
}

export default StudentSection