import { IGroceryList } from "./IGroceryList";

export interface IGroceryItem {
    id: number,
    type: string,
    quantity: number,
    expectedCost: number,
    groceryList: IGroceryList
}