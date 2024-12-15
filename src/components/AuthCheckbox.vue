<template>
	<label class="checkbox-wrapper">
		<input
			type="checkbox"
			class="checkbox-input"
			:checked="checked"
			@change="onChange"
		/>
		<span class="checkbox-text">{{ label }}</span>
	</label>
</template>

<script>
export default {
	name: 'AuthCheckbox',
	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: 'Запомнить вход',
		},
	},
	emits: ['update:checked'],
	methods: {
		onChange(event) {
			this.$emit('update:checked', event.target.checked)
		},
	},
}
</script>

<style scoped>
.checkbox-wrapper {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
}

.checkbox-input {
	margin-right: 8px;
	width: 16px;
	height: 16px;
	cursor: pointer;
}
</style>
