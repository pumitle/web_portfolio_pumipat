"use client";
import { useState, useEffect } from 'react';
import { Experience } from '../../infrastructure/data/experiences';
import { getExperiencesUseCase } from '../../application/use-cases/experienceUseCases';

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const data = await getExperiencesUseCase.execute();
        setExperiences(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch experiences');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return { experiences, loading, error };
}
