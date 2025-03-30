import './globals.css';
import Navbar from '@/app/components/Navbar';

export const metadata = {
  title: 'فروشگاه آنلاین',
  description: 'خرید آنلاین بهترین محصولات با بهترین قیمت',
};

export default function RootLayout({children}) {
  return (
    <html lang="fa">
      <body>
        <Navbar />
        <div className="pt-16">{children}</div> {/* برای فاصله از Navbar */}
      </body>
    </html>
  )
}