"use client";
import { useState, useEffect } from 'react';
import { Education } from '../../infrastructure/data/educations';
import { getEducationsUseCase } from '../../application/use-cases/educationUseCases';

export function useEducations() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        setLoading(true);
        const data = await getEducationsUseCase.execute();
        setEducations(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch educations');
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  return { educations, loading, error };
}
