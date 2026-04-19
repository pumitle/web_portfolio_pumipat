import { SkillCategory } from '../../infrastructure/data/skillCategories';
import { skillCategoryRepository } from '../../infrastructure/repositories/skillCategoryRepository';

export class GetSkillCategoriesUseCase {
  async execute(): Promise<SkillCategory[]> {
    return await skillCategoryRepository.getAll();
  }
}

export const getSkillCategoriesUseCase = new GetSkillCategoriesUseCase();
