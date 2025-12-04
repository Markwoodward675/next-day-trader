// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Next Day Trader",
  description: "Trading · Investments · Wallets"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-shell">{children}</div>
      </body>
    </html>
  );
}
