<template>
    <div class="terminator-card">
		<div class="card-container">
			<div class="avatar">
				<img 
					:src="`/assets/${terminator}.jpg`" 
					alt="t-3000"
					class="img-fluid"
				>
			</div>
			<div class="description">
				<h1>{{ terminator }}</h1>
			</div>
		</div>
	</div>
</template>
<script>
export default {
 name: 'TerminatorT3000',
 data() {
		return {
			terminator: this.$route.params.terminator
		};
	},
	watch: {
		'$route.params.terminator'(newTerminator) {
			this.terminator = newTerminator;
		}
	}
}
</script>