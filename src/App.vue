<template>
	<div class="terminator">
		<video autoplay muted loop>
			<source src="../public/assets/terminator-1.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>

		<div class="container">
			<nav class="navigation">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/terminatorDB">Terminator Database</RouterLink>
			</nav>
			<div class="content">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script>
import '@/assets/style.css';
export default {
	name: 'App'
}
</script>
