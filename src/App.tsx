import { Header, Card, Footer } from './components';
import { useTheme } from './context/theme/useTheme';

export function App() {
  const { theme } = useTheme();
  return (
    <div className={`app app--${theme}`}>
      <Header />

      <main>
        <Card title="React">React component card</Card>

        <Card title="TypeScript">TypeScrip component card</Card>

        <Card title="Vite">Vite component card</Card>
      </main>

      <Footer />
    </div>
  );
}
