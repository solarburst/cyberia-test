export interface Geo {
    lat: string | null;
    lng: string | null;
}

export interface Category {
    id: number;
    name: string;
}

export interface ProjectsResponseDTO {
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

export interface SendFeedbackDTO {
    email: string;
    phone: string;
    message: string;
    attachment: FormData;
}