import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    '/admin/(.*)',
    '/admin',
    '/admin-client/(.*)',
    '/admin-client'
]);

export default clerkMiddleware((auth, req) => {
    if (!auth().userId && isProtectedRoute(req)) {

        // Add custom logic to run before redirecting

        return auth().redirectToSignIn();
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

