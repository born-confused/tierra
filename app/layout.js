import './globals.css';

export const metadata = {
  title: "C-LOCK | Carbon-Storing Modular Wall System",
  description:
    "C-LOCK turns carbon into walls. A modular interior system designed to reduce waste, toxicity, and emissions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
