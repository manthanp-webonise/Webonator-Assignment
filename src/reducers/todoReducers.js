const initialState = {
    list:[],
}
const todoReducers = (state = initialState, action) => {
    switch(action.type){
           case 'ADD_TODO':
            const {id, data} = action.payload;
            return{
                ...state,
                list: [...state.list,{id:id , data:data}]
            }
        break;

        case 'DELETE_TODO':
            const newlist = state.list.filter((elem) => elem.id!== action.id)
            return{
                ...state,
               list: newlist
            }
        break;

        case 'REMOVE_TODO':
            return {
                ...state,
                list:[],
            }
        default:
            return state;
    }
}

export default todoReducers;