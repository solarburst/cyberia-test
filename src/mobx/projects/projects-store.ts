import { flow, types } from 'mobx-state-tree';
import { IProject, ProjectModel } from './projects-model';
import { createBaseStore } from '../base-store';
import { getProjects } from '../../api/projects';

export const ProjectsStore = types
    .compose(
        types.model({}),
        createBaseStore<IProject>(ProjectModel)
    )
    .views(self => ({
        get projects() {
            return Array.from(self.store.values())
        },
        getProjectsByCategoryId(id: number) {
            const projects = Array.from(self.store.values());
            const filteredProjects = projects.filter(project =>
                project.categories.some(category => category.id === id)
            );
            return filteredProjects;
        },
    }))
    .actions(self => ({
        fetchProjects: flow(function *() {
            const projectsArr: IProject[] = yield getProjects();

            projectsArr?.forEach(project => {
                self.createModel({
                    ...project,
                    id: project.id,
                });
            });
        }),
    }));