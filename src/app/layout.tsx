import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Template Ignite',
  description: 'Multi-page website generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
