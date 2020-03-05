import React, { useState, useEffect } from "react";
import { IGroceryList } from "../../models/IGroceryList";
import { getGroceryList } from "../../utility/api";

export interface IGL {
    groceryList: IGroceryList
}

export const GroceryListTableDisplay = (props: IGL) => {
    return(
        <>
            <tr>
                <td key={0}>{props.groceryList.id}</td>
                <td key={1}>{props.groceryList.todaysDate}</td>
                <td key={2}>{props.groceryList.description}</td>
            </tr>
        </>
    )
}