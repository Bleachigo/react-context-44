import { memo } from 'react';
import { useTheme } from '../../context/theme/useTheme';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Header = memo(function Header() {
  const { theme } = useTheme();

  return (
    <header className="header">
      <h1>Theme Context demo</h1>
      <p>Current theme: {theme}</p>

      <ThemeToggle />
    </header>
  );
});
