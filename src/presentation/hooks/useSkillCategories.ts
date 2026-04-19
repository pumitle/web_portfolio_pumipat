"use client";
import { useState, useEffect } from 'react';
import { SkillCategory } from '../../infrastructure/data/skillCategories';
import { getSkillCategoriesUseCase } from '../../application/use-cases/skillCategoryUseCases';

export function useSkillCategories() {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillCategories = async () => {
      try {
        setLoading(true);
        const data = await getSkillCategoriesUseCase.execute();
        setSkillCategories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch skill categories');
      } finally {
        setLoading(false);
      }
    };

    fetchSkillCategories();
  }, []);

  return { skillCategories, loading, error };
}
