import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login System",
  description: "CSC-426 Login App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
