import "./globals.css";

export const metadata = {
  title: "AI Homework",
  description: "Hi!",
  icons: {
    icon: "/ai_homework.png", // use a public path, NOT relative
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
