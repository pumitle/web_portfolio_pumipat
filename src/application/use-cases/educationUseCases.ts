import { Education } from '../../infrastructure/data/educations';
import { educationRepository } from '../../infrastructure/repositories/educationRepository';

export class GetEducationsUseCase {
  async execute(): Promise<Education[]> {
    return await educationRepository.getAll();
  }
}

export const getEducationsUseCase = new GetEducationsUseCase();
