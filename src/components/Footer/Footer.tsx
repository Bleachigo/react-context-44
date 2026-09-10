import { useTheme } from '../../context/theme/useTheme';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer>
      <small>Current theme: {theme}</small>
    </footer>
  );
}
