import { orderConstants } from "_constants";

const initialState = {
    items:[]
}

export function orderReducer(state = initialState, action) {
    switch (action.type) {
        case orderConstants.GETALL_REQUEST:
            state.loading=true;
            return{
                ...state
            }
        case orderConstants.GETALL_SUCCESS:
            state.loading=false;
            state.items=action.payload
            return{
                ...state
            }
        case orderConstants.CREATE_BOOKNOW_SUCCESS:
            state.bookNowItem = action.payload
            return {
                ...state,
            }
        case orderConstants.INIT_ORDER_SUCCESS:
            state.item = action.payload
            return {
                ...state,
            }
        case orderConstants.GETALL_BY_USERID_SUCCESS:
            state.items = action.payload
            return {
                ...state,
            }
        default: return state
    }
}