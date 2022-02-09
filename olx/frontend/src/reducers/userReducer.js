const initialState ={
    email:''
}


const newState = (state = initialState, action) =>{

    if(action.type === "SET_EMAIL"){
        return{...state, email: action.payload.email};
    }


    return state;

}

export default newState;