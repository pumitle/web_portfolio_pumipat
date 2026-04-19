import { Skill } from '../../infrastructure/data/skills';
import { skillRepository } from '../../infrastructure/repositories/skillRepository';

export class GetSkillsUseCase {
  async execute(): Promise<Skill[]> {
    return await skillRepository.getAll();
  }
}

export const getSkillsUseCase = new GetSkillsUseCase();
