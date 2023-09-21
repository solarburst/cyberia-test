import { IAnyModelType, types } from 'mobx-state-tree';

interface BaseModelFields {
    id: number;
}

export function createBaseStore<IModelFields extends BaseModelFields>(model: IAnyModelType) {
    return types
        .model({
            store: types.map(model),
        })
        .actions(self => ({
            createModel(data: IModelFields) {
                self.store.set(String(data.id), model.create(data));
            },
        }));
}