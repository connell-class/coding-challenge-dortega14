import { axiosConfig } from "./axiosConfig";
import { IGroceryList } from "../models/IGroceryList";
import { IGroceryItem } from "../models/IGroceryItem";

export const getGroceryList = () => {
    return axiosConfig.get("list/all");
}

export const addGroceryList = (body:IGroceryList) => {
    return axiosConfig.post("list/new", body);
}

// more list stuff

export const getGroceryItem = () => {
    return axiosConfig.get("item/all");
}

export const addGroceryItem = (body: IGroceryItem) => {
    return axiosConfig.post("item/new", body);
}

// more item stuff