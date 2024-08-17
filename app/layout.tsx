// tricodedashboard/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'; // Importa tus estilos globales
import Nav from '@/components/ui/Nav';

export const metadata = {
  title: 'Tricode Dashboard',
  description: 'Admin Dashboard para gestión de tareas y proyectos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-100 flex">
          <Nav />
          <main className="flex-1 p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
