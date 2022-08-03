/**
 * 
 * const initState = {
    studentName: '',
    allStudentList: [],
    editMode: false,
    editableStudent: null
}
 */


export const studentReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STUDENT_NAME' : {
            return {
                ...state,
                studentName: action.payload
            }
        }

        case 'CREATE_STUDENT' : {
            const newStudent = {
                id: Date.now(), 
                name: action.payload,
                isPresent: undefined
            }

            return {
                ...state,
                allStudentList: [...state.allStudentList, newStudent],
                studentName: ''
            }

        }

        case 'EDIT_STUDENT': {
            const toBeEditedStudent = state.allStudentList.find(item => item.id === action.payload )
            return {
                ...state,
                editMode: true,
                editableStudent: toBeEditedStudent,
                studentName: toBeEditedStudent.name
            }
        }

        case 'UPDATE_STUDENT': {
            return {
                ...state,
                allStudentList: state.allStudentList.map(item => {
                    if (item.id === state.editableStudent.id) {
                        item.name = action.payload
                    }

                    return item
                }),
                editMode: false,
                editableStudent: null,
                studentName: ''

            }
        }

        case 'DELETE_STUDENT': {
            const newStudentList = state.allStudentList.filter(item => item.id !== action.payload);
            return {
                ...state,
                allStudentList: newStudentList
            }
        }

        case 'SEND_TO_PRESENT_LIST': {
             return {
                ...state,
                allStudentList: state.allStudentList.map(item => {
                    if (item.id === action.payload) {
                        if (item.isPresent === undefined) {
                            item.isPresent = true
                        } else if (item.isPresent === false) {
                            alert ("This student is already in the Absent Lis")
                        } else if (item.isPresent === true) {
                            alert (`This student is already in the Present List`)
                        }
                    }

                    return item
                }),
               

            }
        }

        case 'SEND_TO_ABSENT_LIST': {
            return {
                ...state,
                allStudentList: state.allStudentList.map(item => {
                    if (item.id === action.payload) {
                        if (item.isPresent === undefined) {
                            item.isPresent = false
                        } else if (item.isPresent === false) {
                            alert ("This student is already in the Absent Lis")
                        } else if (item.isPresent === true) {
                            alert (`This student is already in the Present List`)
                        }
                    }

                    return item
                }),
               

            }
        }

        case 'TOGGLE_PRESENT_STATE': {
            return {
                ...state,
                allStudentList: state.allStudentList.map(item => {
                    if (item.id === action.payload) {
                        item.isPresent = !item.isPresent
                    }

                    return item
                }),
               

            }
        }


        default: {
            return state
        }
    }
}