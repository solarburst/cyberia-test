import { Instance, types } from 'mobx-state-tree';
import { Category, Geo } from '../../api/dto/projects.dto';
import { CategoryModel } from '../categories/categories-model';

export interface IProject {
    id: number;
    description: string;
    image: string;
    image_dark: string;
    project_url: string | null;
    slug: string;
    title: string;
    geo: Geo;
    categories: Category[];
}

const GeoModel = types
    .model({
        lat: types.maybeNull(types.string),
        lng: types.maybeNull(types.string),
    });

export const ProjectModel = types
    .model({
        id: types.identifierNumber,
        description: types.string,
        image: types.string,
        image_dark: types.string,
        project_url: types.maybeNull(types.string),
        slug: types.string,
        title: types.string,
        geo: GeoModel,
        categories: types.array(CategoryModel),
    });

export interface IProjectModel extends Instance<typeof ProjectModel> { }