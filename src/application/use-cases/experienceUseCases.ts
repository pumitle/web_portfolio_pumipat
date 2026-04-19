import { Experience } from '../../infrastructure/data/experiences';
import { experienceRepository } from '../../infrastructure/repositories/experienceRepository';

export class GetExperiencesUseCase {
  async execute(): Promise<Experience[]> {
    return await experienceRepository.getAll();
  }
}

export class GetExperienceByIdUseCase {
  async execute(id: number): Promise<Experience | null> {
    return await experienceRepository.getById(id);
  }
}

// Singleton instances
export const getExperiencesUseCase = new GetExperiencesUseCase();
export const getExperienceByIdUseCase = new GetExperienceByIdUseCase();
