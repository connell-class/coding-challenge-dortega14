import React, { useState, useEffect } from "react";
import { getGroceryItem } from "../../utility/api";
import { Table } from "reactstrap";
import { IGroceryItem } from "../../models/IGroceryItem";
import { GroceryItemTableDisplay } from "./GroceryItemTableDisplay";

export const GroceryItemTable: React.FC<any> = (props: any) => {
    const [groceryItemList, setGroceryItemList] = useState([]);
    useEffect(() =>{
        getGroceryItem().then(r => setGroceryItemList(r.data));
    }, [groceryItemList.length]);

    return(
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Expected Cost</th>
                        <th>Grocery List</th>
                    </tr>
                </thead>
                <tbody>
                    {groceryItemList.map((r:IGroceryItem) => <GroceryItemTableDisplay groceryItem={r}/>)}
                </tbody>
            </Table>
        </div>
    )
}