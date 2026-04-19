import { SkillCategory } from '../data/skillCategories';
import { mockSkillCategories } from '../data/skillCategories';
import { apiService } from '../services/api';

export interface SkillCategoryRepository {
  getAll(): Promise<SkillCategory[]>;
}

export class SkillCategoryRepositoryImpl implements SkillCategoryRepository {
  async getAll(): Promise<SkillCategory[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockSkillCategories);
  }
}

export const skillCategoryRepository = new SkillCategoryRepositoryImpl();
