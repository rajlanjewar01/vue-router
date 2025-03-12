<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink> |
			<RouterLink to="/page/123">Dynamic Page</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>
