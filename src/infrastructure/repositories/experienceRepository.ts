import { Experience } from '../data/experiences';
import { mockExperiences } from '../data/experiences';
import { apiService } from '../services/api';

export interface ExperienceRepository {
  getAll(): Promise<Experience[]>;
  getById(id: number): Promise<Experience | null>;
}

export class ExperienceRepositoryImpl implements ExperienceRepository {
  async getAll(): Promise<Experience[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockExperiences);
  }

  async getById(id: number): Promise<Experience | null> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockExperiences[id] || null);
  }
}

// Singleton instance
export const experienceRepository = new ExperienceRepositoryImpl();
