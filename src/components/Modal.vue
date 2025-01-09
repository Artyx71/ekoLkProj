<template>
	<div class="modal">
		<div class="modal-content">
			<h3>Шаг {{ step }}</h3>
			<p v-if="step === 1">{{ serviceTitle }}</p>
			<p v-if="step === 2">Введите данные для "{{ serviceTitle }}"</p>
			<p v-if="step === 3">{{ serviceDescription }}</p>
			<div class="modal-footer">
				<button v-if="step > 1" @click="$emit('prev')">Назад</button>
				<button v-if="step < 3" @click="$emit('next')">Далее</button>
				<button v-if="step === 3" @click="$emit('close')">Закрыть</button>
			</div>
		</div>
	</div>
</template>

<style>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal-content {
	background-color: white;
	padding: 20px;
	border-radius: 8px;
	width: 400px;
	text-align: center;
}
.modal-footer {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}
</style>

<script>
export default {
	props: {
		step: Number,
		serviceTitle: String,
		serviceDescription: String,
	},
}
</script>
