const baseURL = `http://localhost:4000/`;


export const getNotes = async () => (
    fetch(`${baseURL}notes`)
        .then(res => res.json())
)

export const createNote = async (note) => (
    fetch(`${baseURL}notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
        .then(res => res.json())
    
)

export const updateNote = async (id, note) => (
    fetch(`${baseURL}notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
        .then(res => res.json())
    
)

export const removeNote = async (id) => (
    fetch(`${baseURL}notes/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
    
)