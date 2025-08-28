import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Lista de rotas que não precisam de autenticação
  const publicRoutes = ['/', '/register', '/home'];
  
  // Verifica se a rota atual é pública
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Obtém o token do cookie
  const token = request.cookies.get('token')?.value;

  // Se não houver token, redireciona para a página de login
  if (!token) {
    console.log('Middleware: Token não encontrado, redirecionando para login');
    return NextResponse.redirect(new URL('/', request.url));
  }

  console.log('Middleware: Token encontrado, permitindo acesso a', request.nextUrl.pathname);
  return NextResponse.next();
}

// Configura quais rotas o middleware deve interceptar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 