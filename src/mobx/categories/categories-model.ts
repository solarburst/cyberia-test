import { Instance, types } from "mobx-state-tree";

export interface ICategory {
    id: number;
    name: string;
}

export const CategoryModel = types
    .model({
        id: types.identifierNumber,
        name: types.string,
    })

export interface ICategoryModel extends Instance<typeof CategoryModel> { }