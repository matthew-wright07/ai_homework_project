import "./globals.css";

export const metadata = {
  title: "Stock Project",
  description: "Hi!",
  icons: {
    icon: "./stock_project.svg",
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
