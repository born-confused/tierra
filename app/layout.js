import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Tierra | Modular Eco-Friendly Wall Tiles',
  description:
    'Tierra is a modular wall tile system that helps homes, offices, and retail spaces upgrade interiors without the waste, rigidity, and carbon burden of traditional wall panels.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
