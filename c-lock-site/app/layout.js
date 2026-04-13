import './globals.css';

export const metadata = {
  title: 'C-LOCK | Modular Eco-Friendly Wall Tiles',
  description:
    'C-LOCK is a modular wall tile system that helps homes, offices, and retail spaces upgrade interiors without the waste, rigidity, and carbon burden of traditional wall panels.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
