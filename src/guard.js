<script>
export default {
   // As the name suggests, the navigation guards provided by Vue router 
   // are primarily used to guard navigations either by redirecting it or canceling it. 
   // There are a number of ways to hook into the route navigation process:
   //  globally, per-route, or in-component

 router.beforeEach((to, from) => {
    // ...logic here
    // explicitly return false to cancel the navigation
    return false
  }),

    // to: the target route location in a normalized format being navigated to.
    // from: the current route location in a normalized format being navigated away from.

router.beforeResolve(async to => {
    if (to.meta.requiresCamera) {
        try {
        await askForCameraPermission()
        } catch (error) {
        if (error instanceof NotAllowedError) {
            // ... handle the error and then cancel the navigation
            return false
        } else {
            // unexpected error, cancel the navigation and pass the error to the global handler
            throw error
        }
        }
    }
    }),

    router.afterEach((to, from) => {
        sendToAnalytics(to.fullPath)
    }),

  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed, but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we navigate between `/users/1` and `/users/2`,
    // the same `UserDetails` component instance will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
  },
  beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  },
}
</script>