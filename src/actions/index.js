export const addTodo = (data) => {
    return{
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data,
        }
    }
}

export const deletetodo = (id) => {
    if(window.confirm("Are you Sure you want to delete?"))
    return{
        type:"DELETE_TODO",
        id
    }
}

export const removetodo = () => {
    if(window.confirm("Delete All data?"))
    return{
        type:"REMOVE_TODO"
    }
}

