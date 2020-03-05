import React from "react";
import { IGroceryItem } from "../../models/IGroceryItem";

export interface IGI {
    groceryItem: IGroceryItem
}

export const GroceryItemTableDisplay = (props: IGI) => {
    return(
        <>
            <tr>
                <td key={0}>{props.groceryItem.id}</td>
                <td key={1}>{props.groceryItem.type}</td>
                <td key={2}>{props.groceryItem.quantity}</td>
                <td key={3}>{props.groceryItem.expectedCost}</td>
                <td key={4}>{props.groceryItem.groceryList}</td>
            </tr>
        </>
    )
}