import React from 'react'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const togglePresentMode = (studentId) => {
        props.setAllStudentList(props.allStudentList.map((item) => {
        if (item.id === studentId) {
            item.isPresent = !item.isPresent
        }

        return item
        }))
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} class="student-section">
            <AllStudentList 
                studentName = {props.studentName}
                setStudentName = {props.setStudentName}
                editMode = {props.editMode}
                setEditMode = {props.setEditMode}
                editableStudent = {props.editableStudent}
                setEditableStudent = {props.setEditableStudent}
                allStudentList = {props.allStudentList}
                setAllStudentList = {props.setAllStudentList}
            />
            <PresentStudentList 
                allStudentList = {props.allStudentList}
                togglePresentMode = {togglePresentMode}
            />
            <AbsentStudentList 
                allStudentList = {props.allStudentList}
                togglePresentMode = {togglePresentMode}
            />
        </div>

    )
}

export default StudentSection