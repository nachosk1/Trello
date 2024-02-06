import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    // COMPROBAR SI ESTA AUTENTICADO: Si tenemos una ID de usuario (o si esta autenticado) y
    // comprueba si estamos en la ruta pública
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      // si tenemos una ID de la organización del usuario
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // si no esta autenticado y no esta en una ruta publica lo va a redirigir a la pagina de inicio de sesion
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // si esta autenticado pero no tiene una organización y si no estamos en la ruta de selección de organización
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
