<template>
	<div class="terminator-card">
		<div 
			class="card-container" 
			v-for="terminator in terminatorDB"
			:key="terminator.name"
		>
			<div class="avatar">
				<img 
					:src="`/assets/${terminator.imgSrc}.jpg`" 
					alt="t-800"
					class="img-fluid"
				>
			</div>
			<div class="description">
				<h1>{{ terminator.name }}</h1>
				<p>{{ terminator.description }}</p>
			</div>
		</div>
	</div>
</template>
<script>
import '@/assets/style.css';
export default {
	name: 'TerminatorCard',
	data() {
		return {
			terminatorDB: [
				{
					name: 'T-800', 
					imgSrc:'t-800',
					description: 'he original killer cyborg, sent to eliminate Sarah Connor.'
				},
				{
					name: 'T-1000', 
					imgSrc: 't-1000',
					description: 'A liquid metal assassin that can shapeshift and regenerate.'
				},
				{
					name: 'T-X (Terminatrix)', 
					imgSrc: 't-x',
					description: 'A hybrid Terminator with a solid endoskeleton and liquid metal skin.'
				},
				{
					name: 'T-3000', 
					imgSrc: 't-3000',
					description: 'John Connor transformed into a deadly nanomachine Terminator.'
				},
				{
					name: 'Rev-9',
					imgSrc: 'rev-9',
					description: 'A deadly new Terminator that can split into two separate units.'
				}
			]
		}
	}
}
</script>