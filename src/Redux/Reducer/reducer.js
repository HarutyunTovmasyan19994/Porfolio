import {CHANGE_BURGER} from "../Action_types/action_types"


const initialState ={
    isHumburger:false
}

const reducer =(state = initialState,{type,payload})=>{
    switch (type){
        case CHANGE_BURGER:
            return {...state,isHumburger: payload}
        default:
            return state
    }
}
export default reducer
