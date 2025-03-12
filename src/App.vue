<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
			<router-link to="/page/123">Dynamic Page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>
