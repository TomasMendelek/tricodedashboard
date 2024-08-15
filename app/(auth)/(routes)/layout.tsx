// app/(auth)/(routes)/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Auth Pages',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
