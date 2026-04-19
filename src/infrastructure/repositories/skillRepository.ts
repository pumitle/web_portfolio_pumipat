import { Skill } from '../data/skills';
import { mockSkills } from '../data/skills';
import { apiService } from '../services/api';

export interface SkillRepository {
  getAll(): Promise<Skill[]>;
}

export class SkillRepositoryImpl implements SkillRepository {
  async getAll(): Promise<Skill[]> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockSkills);
  }
}

export const skillRepository = new SkillRepositoryImpl();
