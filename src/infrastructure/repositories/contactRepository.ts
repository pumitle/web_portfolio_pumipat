import { Contact, mockContact } from '../data/contact';
import { ApiService } from '../services/api';

export interface ContactRepository {
  get(): Promise<Contact>;
}

export class ContactRepositoryImpl implements ContactRepository {
  constructor(private apiService: ApiService) {}

  async get(): Promise<Contact> {
    // Always use mock data, no API call needed
    return Promise.resolve(mockContact);
  }
}

// Singleton instance
export const contactRepository = new ContactRepositoryImpl(new ApiService());