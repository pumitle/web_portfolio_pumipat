import { Education } from '../data/educations';
import { mockEducations } from '../data/educations';
import { apiService } from '../services/api';

export interface EducationRepository {
  getAll(): Promise<Education[]>;
}

export class EducationRepositoryImpl implements EducationRepository {
  async getAll(): Promise<Education[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockEducations);
  }
}

export const educationRepository = new EducationRepositoryImpl();
