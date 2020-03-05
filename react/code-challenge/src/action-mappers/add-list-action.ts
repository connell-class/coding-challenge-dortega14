import { IGroceryList } from "../models/IGroceryList";
import { addGroceryList } from "../utility/api";

export const createGroceryListTypes = {
    SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_CREATE",
    UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_CREATE"
};

export const createGroceryList = (newGroceryList: IGroceryList) => async(dispatch:any) => {
    let response: any = await addGroceryList(newGroceryList);
    if(response.body){
        dispatch({
            type: createGroceryListTypes.SUCCESSFUL_CREATE,
            payload: {
            currentGroceryList: response.body
            }
        });
    } else {
        dispatch({
            type: createGroceryListTypes.UNSUCCESSFUL_CREATE,
            payload: {
            createListMessage: response.createListMessage
            }
        });
    }
};