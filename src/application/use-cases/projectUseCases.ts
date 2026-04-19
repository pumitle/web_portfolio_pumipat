import { Project } from '../../infrastructure/data/projects';
import { projectRepository } from '../../infrastructure/repositories/projectRepository';

export class GetProjectsUseCase {
  async execute(): Promise<Project[]> {
    return await projectRepository.getAll();
  }
}

export class GetFeaturedProjectsUseCase {
  async execute(): Promise<Project[]> {
    return await projectRepository.getFeatured();
  }
}

export const getProjectsUseCase = new GetProjectsUseCase();
export const getFeaturedProjectsUseCase = new GetFeaturedProjectsUseCase();
