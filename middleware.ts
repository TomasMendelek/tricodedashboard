// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protege el dashboard
    '/dashboard',

    // Protege todas las rutas de la API
    '/api/(.*)',

    // Protege cualquier otra ruta que empiece con /app, excepto /app/public
    '/app/(.*)',

    // Desprotege la raíz del sitio para permitir acceso sin autenticación
    '/((?!_next|api|sign-in|sign-up).*)',
  ],
};
