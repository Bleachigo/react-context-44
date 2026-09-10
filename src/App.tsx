import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Card title="React">React component card</Card>

        <Card title="TypeScript">TypeScrip component card</Card>

        <Card title="Vite">Vite component card</Card>
      </main>
    </>
  );
}
