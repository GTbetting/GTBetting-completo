// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'GTBetting',
  description: 'Bilhetes prontos com assertividade e estratégia.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
