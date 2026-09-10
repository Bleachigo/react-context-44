import { memo, type ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = memo(function Card({ title, children }: CardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </article>
  );
});
