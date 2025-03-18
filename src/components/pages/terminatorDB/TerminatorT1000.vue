<template>
	<div class="terminator-card">
		<div class="card-container">
			<div class="avatar">
				raj
				<img 
					:src="`/assets/${terminator}.jpg`" 
					alt="t-1000"
					class="img-fluid"
				>
			</div>
			<div class="description">
				<h1>{{ terminator }}---</h1>
				<h1>{{ name }}</h1>
			</div>
		</div>
	</div>
</template>
<script>
export default {
 name: 'TerminatorT1000',
 data() {
		return {
			terminator: this.$route.params.user,
			name: this.$route.params		
		};
	},
	watch: {
		'$route.params.terminator'(newTerminator) {
			this.terminator = newTerminator;
		}
	}
}
</script>