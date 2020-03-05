import React, { useState, useEffect } from "react";
import { getGroceryList } from "../../utility/api";
import { Table } from "reactstrap";
import { IGroceryList } from "../../models/IGroceryList";
import { GroceryListTableDisplay } from "./GroceryListTableDisplay";

export const GroceryListTable: React.FC<any> = (props:any) => {
    const [groceryListList, setGroceryListList] = useState([]);
        useEffect(() => {
            getGroceryList().then(r => setGroceryListList(r.data));
        }, [groceryListList.length]);


        return(
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groceryListList.map((r:IGroceryList) => <GroceryListTableDisplay groceryList={r}/>)}
                    </tbody>
                </Table>
            </div>
        )

}
