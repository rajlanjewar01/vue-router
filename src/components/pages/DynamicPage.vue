<template>
	<div>
		<h1>Dynamic Page</h1>
		<p>Current ID: {{ id }}</p>
	</div>
</template>
  
<script>
	export default {
		name: 'DynamicPage',

		data() {
			return {
				id: this.$route.params.id
			};
		},

		watch: {
			'$route.params.id'(newId) {
				this.id = newId;
			}
		}
	};
</script>