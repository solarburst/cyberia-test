import { flow, types } from 'mobx-state-tree';
import { ICategory, CategoryModel } from './categories-model';
import { createBaseStore } from '../base-store';
import { getCategories } from '../../api/projects';

export const CategoriesStore = types
    .compose(
        types.model({}),
        createBaseStore<ICategory>(CategoryModel)
    )
    .views(self => ({
        get categories() {
            return Array.from(self.store.values())
        },
    }))
    .actions(self => ({
        fetchCategories: flow(function *() {
            const categoryArr: ICategory[] = yield getCategories();

            categoryArr?.forEach(category => {
                self.createModel({
                    ...category,
                    id: category.id,
                });
            });
        }),
    }));