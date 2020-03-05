import { createGroceryListTypes } from "../action-mappers/add-list-action";
import { IGroceryListState, state } from "../utility";

const initialState: IGroceryListState = {
    addGroceryList: null,
    createListMessage: ""
}

export const createGroceryListReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case createGroceryListTypes.SUCCESSFUL_CREATE: {
            return {
              ...state,
              addGroceryList: action.payload.addGroceryList,
              createListMessage: "New grocery list added"
            };
          }
          case createGroceryListTypes.UNSUCCESSFUL_CREATE: {
            return {
              ...state,
              createListMessage: action.payload.createListMessage
            };
          }
      default:
          return state;
    }
};