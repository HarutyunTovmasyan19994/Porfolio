import {CHANGE_BURGER} from "../Action_types/action_types"


export function isHumburger (payload){
    return{
        type:CHANGE_BURGER,
        payload
    }
}
