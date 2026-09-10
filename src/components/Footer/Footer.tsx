import { memo } from 'react';
import { useTheme } from '../../context/theme/useTheme';

export const Footer = memo(function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <small>Current theme: {theme}</small>
    </footer>
  );
});
