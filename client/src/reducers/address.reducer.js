import { addressConstants } from '_constants';
const initialState = {
    provinces: [],
    districts: [],
    wards: [],

}
export function addressReducer(state = initialState, action) {
    switch (action.type) {
        case addressConstants.GET_ALL_PROVINCE:
            return {
                ...state,
                provinces: action.payload
            }
        case addressConstants.GET_ALL_DISTRICT:
            return {
                ...state,
                districts: action.payload
            }
        case addressConstants.GET_ALL_WARD:
            return {
                ...state,

                wards: action.payload
            }
        case addressConstants.GET_PROVINCE:
            return {
                ...state,
                provinces: action.payload
            }
        case addressConstants.GET_DISTRICT:
            return {
                ...state,
                districts: action.payload
            }
        case addressConstants.GET_WARD:
            return {
                ...state,
                wards: action.payload
            }
        default:
            return { ...state }
    }
}
