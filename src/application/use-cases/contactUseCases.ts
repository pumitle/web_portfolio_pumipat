import { Contact } from '../../infrastructure/data/contact';
import { contactRepository } from '../../infrastructure/repositories/contactRepository';

export class GetContactUseCase {
  async execute(): Promise<Contact> {
    return await contactRepository.get();
  }
}

// Singleton instance
export const getContactUseCase = new GetContactUseCase();