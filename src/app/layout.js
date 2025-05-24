import "./globals.css";

export const metadata = {
  title: "Happy FriendShip!",
  description: "A celebration of our friendship", 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
