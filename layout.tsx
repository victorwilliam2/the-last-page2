import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'THE LAST PAGE | The Page Collective.NG',
  description: 'Who betrayed the book club? A mystery-comedy table-reading play by The Page Collective.NG.',
  themeColor: '#171313',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
