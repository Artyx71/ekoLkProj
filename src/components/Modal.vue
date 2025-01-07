<template>
	<div v-if="visible" class="modal" @click.self="close">
		<div class="modal-content">
			<h3>{{ serviceTitle }}</h3>
			<p>{{ serviceDescription }}</p>
			<button @click="close">Закрыть</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		serviceTitle: String,
		serviceDescription: String,
		visible: Boolean,
	},
	methods: {
		close() {
			this.$emit('close')
		},
	},
}
</script>

<style>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}
.modal-content {
	background: white;
	padding: 20px;
	border-radius: 8px;
	max-width: 400px;
	width: 90%;
}
</style>
