import { AxiosResponse } from "axios";
import api from "./axios";
import { ProjectsResponseDTO } from "./dto/projects.dto";

export const getProjects = async (): Promise<ProjectsResponseDTO[]> => {
    const res = await api.get("/projects");
    return res?.data.items;
}

export const getCategories = async (): Promise<ProjectsResponseDTO[]> => {
    const res = await api.get("/project-categories");
    return res?.data.items;
}

export const sendFeedback = async (data: FormData): Promise<AxiosResponse> => {
    const res = await api.post("/feedbacks", data);
    return res;
}