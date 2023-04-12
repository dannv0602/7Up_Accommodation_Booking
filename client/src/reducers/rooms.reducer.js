import { roomConstants } from "_constants/room.constants";
const initialState = {
    items: [],
    item: {},
    newRoom: {},
    editRoom: null,
    itemsDeleted: [],
    itemsSearch: [],
    itemsByProvince:[],
    itemsTopPlaces:[],
    pageLimit:8,
}

export function roomReducer(state = initialState, action) {
    switch (action.type) {
        case roomConstants.GETALL_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case roomConstants.GETBYID_SUCCESS:
            let item = action.room
            state.item = item
            return {
                ...state
            };
        case roomConstants.GETBYID_FAILURE:
            return {
                error: action.error,
                ...state
            };

        case roomConstants.GETALL_SUCCESS:
            state.items = action.rooms;
            state.loading = false
            return {
                ...state
            };
        case roomConstants.GETALLDELETED_REQUEST:
            state.loading = true;
            return {
                ...state
            };
        case roomConstants.GETALLDELETED_SUCCESS:
            state.loading = false;
            state.itemsDeleted = action.rooms;
            return {
                ...state,
            };
        case roomConstants.GETALLDELETED_FAILURE:
            return {
                error: action.error
            };
        case roomConstants.CREATE_REQUEST:
            state.createRoom = action.room
            return {
                ...state
            };
        case roomConstants.CREATE_SUCCESS:
            state.items.push(action.room);
            state.items = state.items.filter(room => room.id !== '')
            state.createRoom = {};
            return {
                ...state,
            };
        case roomConstants.GROUP_BY_PROVINCE_SUCCESS:
            return {
                ...state,
                itemsGroupByProvine: action.rooms,
            };
        case roomConstants.GET_BY_PROVINCE_SUCCESS:
            state.itemsByProvince = action.rooms
            // itemsByProvince.forEach(room=> room.image =room.image.replace(["images/"],""))
            return {
                ...state,
            };
        case roomConstants.UPDATE_REQUEST:
            return {
                ...state,
            };
        case roomConstants.UPDATE_SUCCESS:
            const editRoomIndex = state.items.findIndex(room => room.id === action.room.id)
            state.items[editRoomIndex] = action.room
            state.items = state.items.filter(room => room.id !== "")
            state.editRoom = action.room
            return {
                ...state,
            };
        case roomConstants.RESTORE_SUCCESS:
            state.itemsDeleted = state.itemsDeleted.filter(room => room.id !== action.id)
            return { ...state };
        case roomConstants.REMOVE_SUCCESS:
            state.itemsDeleted = state.itemsDeleted.filter(room => room.id !== action.id)
            return { ...state };
        case roomConstants.DELETE_REQUEST:
            // add 'deleting:true' property to room being deleted
            return {
                ...state
            };
        case roomConstants.DELETE_SUCCESS:
            // remove deleted room from state
            state.items = state.items.filter(room => room.id !== action.id)
            return { ...state };
        case roomConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to room 
            return {
                ...state,
            };
        case roomConstants.SEARCH_BY_NAME:
            state.itemsSearch = state.items.filter(u => u.name.toLowerCase().includes((action.key).toLowerCase()));
            return {
                ...state
            }
        case roomConstants.SET_PAGE_LIMIT:
            state.pageLimit=action.payload
            return{
                ...state
            }
        case roomConstants.SORT_INCREASE_BY_PRICE:
            state.items = state.items.sort((a, b) => a.price - b.price);
            state.items = state.items.filter(room => room.id !== action.id)
            return {
                ...state
            }
        case roomConstants.SORT_DECREASE_BY_PRICE:
            state.items = state.items.sort((a, b) => b.price - a.price);
            state.items = state.items.filter(room => room.id !== action.id)
            return {
                ...state
            }

        default:
            return state
    }
}