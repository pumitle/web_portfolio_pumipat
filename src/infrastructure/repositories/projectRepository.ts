import { Project } from '../data/projects';
import { mockProjects } from '../data/projects';
import { apiService } from '../services/api';

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
  getFeatured(): Promise<Project[]>;
}

export class ProjectRepositoryImpl implements ProjectRepository {
  async getAll(): Promise<Project[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockProjects);
  }

  async getFeatured(): Promise<Project[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockProjects.filter(p => p.featured));
  }
}

export const projectRepository = new ProjectRepositoryImpl();
