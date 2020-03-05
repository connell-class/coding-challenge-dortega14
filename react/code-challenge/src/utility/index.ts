import { combineReducers } from "redux";
import { createGroceryListReducer } from "../reducers/list-reducer";


export interface IGroceryListState {
  addGroceryList: any;
  createListMessage: string;
}

// export interface IGroceryItemState {
//   addGroceryItem: any;
//   createItemMessage: string;
// }

export interface IState {
  groceryListState: IGroceryListState;
  // groceryItemState: IGroceryItemState;
}

export const state = combineReducers<IState> ({
  groceryListState: createGroceryListReducer
});
// groceryItemState: createGroceryItemReducer
