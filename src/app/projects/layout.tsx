export const metadata = {
  title: "Ignacio Jimenez | Fullstack Developer",
  description: "By Linyers",
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
