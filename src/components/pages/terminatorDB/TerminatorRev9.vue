<template>
    <div class="terminator-card">
		<div class="card-container">
			<div class="avatar">
				<img 
					:src="`/assets/${terminator}.jpg`" 
					alt="rev-9"
					class="img-fluid"
				>
			</div>
			<div class="description">
				<h1>{{ terminator }}</h1>
				<h1>{{ params }}</h1>
			</div>
		</div>
	</div>
</template>
<script>
export default {
 name: 'TerminatorRev9',
 data() {
		return {
			terminator: this.$route.params.terminator,
			params: this.$route.query.name
		};
	},
	watch: {
		'$route.params.terminator'(newTerminator) {
			this.terminator = newTerminator;
		}
	}
}
</script>
