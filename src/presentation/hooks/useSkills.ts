"use client";
import { useState, useEffect } from 'react';
import { Skill } from '../../infrastructure/data/skills';
import { getSkillsUseCase } from '../../application/use-cases/skillUseCases';

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await getSkillsUseCase.execute();
        setSkills(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch skills');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
}
