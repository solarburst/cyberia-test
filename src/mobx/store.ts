import { Instance, types } from 'mobx-state-tree';
import { ProjectsStore } from './projects/projects-store';
import { CategoriesStore } from './categories/categories-store';

const RootStore = types
    .model({
        projectsStore: types.optional(ProjectsStore, {}),
        categoriesStore: types.optional(CategoriesStore, {}),
    });

export interface IRootStore extends Instance<typeof RootStore> { }

export class RootStoreCreator {
    private static instance: IRootStore | null = null;

    private constructor() {}

    public static getInstance() {
        if (!RootStoreCreator.instance) {
            RootStoreCreator.instance = RootStore.create({});
        }

        return RootStoreCreator.instance;
    }
}

export const useStore = () => {
    return RootStoreCreator.getInstance();
};