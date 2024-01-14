import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { BurgerMenu } from './ui/burger-menu/burger-menu';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Sokolov Portfolio',
    default: 'Sokolov Portfolio',
  },
  description: 'Sokolov Portfolio Web site.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BurgerMenu />
        {children}
      </body>
    </html>
  );
}
