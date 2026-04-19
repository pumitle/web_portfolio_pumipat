/**
 * Skill icon component renderer
 */
export function SkillIcon({ type }: { type: string }) {
  switch (type) {
    case "frontend":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "backend":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="5" width="20" height="4" rx="1" />
          <rect x="2" y="13" width="20" height="4" rx="1" />
        </svg>
      );
    case "database":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
          <path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
        </svg>
      );
    case "devops":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    default:
      return null;
  }
}
