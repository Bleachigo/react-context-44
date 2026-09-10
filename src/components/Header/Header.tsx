import { useTheme } from '../../context/theme/useTheme';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="header">
      <h1>Theme Context demo</h1>
      <p>Current theme: {theme}</p>

      <ThemeToggle />
    </header>
  );
}
