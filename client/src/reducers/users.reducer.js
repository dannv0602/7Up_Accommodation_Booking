import { userConstants } from '_constants';
const initialState = {
  itemsSearch: [],
  itemsDeleted: [],
  items: [],
  item: {},
  editUser: null,
  createUser: {},
  keySearch: null,
  passwordResetToken:{}
}
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      state.loading = true;
      return {
        ...state
      };
    case userConstants.GETALL_SUCCESS:
      state.items = action.users
      state.loading = false
      return {
        ...state

      };
    case userConstants.GETBYID_FAILURE:
      return {
        error: action.error,
        ...state
      };
    case userConstants.GETBYID_SUCCESS:
      state.item = action.user
      return {
        ...state
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
        ...state
      };
    case userConstants.GETALL_DELETED_REQUEST:
      state.itemsDeleted = action.users
      state.loading = true
      return {
        ...state
      };
    case userConstants.GETALL_DELETED_SUCCESS:
      state.itemsDeleted = action.users
      state.loading = false
      return {
        ...state
      };

    case userConstants.GETALL_DELETED_FAILURE:
      return {
        error: action.error,
        ...state
      };
    case userConstants.SEARCH_BY_EMAIL:

      state.itemsSearch = state.items.filter(u => u.email.toLowerCase().includes((action.key).toLowerCase()));
      return {
        ...state
      };
    case userConstants.SEARCH_BY_USERNAME:

      state.itemsSearch = state.items.filter(u => u.username.toLowerCase().includes((action.key).toLowerCase()));
      return {
        ...state
      };
    case userConstants.SEARCH_BY_FULLNAME:
      state.itemsSearch = state.items.filter(u => u.fullname.toLowerCase().includes((action.key).toLowerCase()));
      return {
        ...state
      };
    case userConstants.CREATE_REQUEST:
      state.createUser = action.user
      return {
        ...state
      };
    case userConstants.CREATE_SUCCESS:
      state.items.push(action.user);
      state.items=state.items.filter(u=>u.id!=='');
      state.createUser = {}
      return {
        ...state,
      };

    case userConstants.UPDATE_REQUEST:
      state.editUser = action.user
      return {
        ...state,
      };
    case userConstants.UPDATE_CANCEL:
      state.editUser = {}
      return {
        ...state,
      };
    case userConstants.UPDATE_SUCCESS:
      state.editUser = action.user;
      const editUserIndex = state.items.findIndex(user => user.id === action.user.id)
      state.items[editUserIndex] = action.user
      state.items = state.items.filter(user => user.id !== "")
      return {
        ...state,
      };
    case userConstants.RESTORE_SUCCESS:
      state.items = state.items.filter(user => user.id !== action.id)
      return { ...state };
    case userConstants.REMOVE_SUCCESS:

      state.items = state.items.filter(user => user.id !== action.id)
      return { ...state };

    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      state.items = state.items.filter(user => user.id !== action.id)
      return { ...state };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      state.passwordResetToken=action.payload;
      return {
        ...state,
      };
    default:
      return state
  }
}