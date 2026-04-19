"use client";
import { useState, useEffect } from 'react';
import { Contact } from '../../infrastructure/data/contact';
import { getContactUseCase } from '../../application/use-cases/contactUseCases';

export function useContact() {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const data = await getContactUseCase.execute();
        setContact(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contact');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { contact, loading, error };
}