// Ensure this file is parsed as a module regardless of dependencies.
export {};

declare module 'vue-router' {
    interface RouteMeta {
        // is optional
        hideFooter?: boolean
        // must be declared by every route
        // requiresAuth: boolean
    }
}
