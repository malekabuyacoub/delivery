import "./globals.css";

export const metadata = {
  title: "ديلفري كريم",
  description: "توصيل سريع، طعام طازج",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
