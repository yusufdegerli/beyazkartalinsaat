import projectsData from '../data/projects.json';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  features: {
    startDate: string;
    deliveryDate: string;
    totalArea: string;
    blockCount: number;
    apartmentCount: number;
    type: string;
  };
}

// Convert JSON data to strongly typed array
export const projects: Project[] = projectsData.projects as Project[];