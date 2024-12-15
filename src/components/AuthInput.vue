<template>
	<input
		:value="modelValue"
		:type="type"
		:placeholder="placeholder"
		class="input-component"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
export default {
	name: 'AuthInput',
	props: {
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
		modelValue: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.input-component {
	padding: 14px;
	border: 1px solid #d8e0eb;
	border-radius: 4px;
	width: 324px;
	color: #5a6461;
}
</style>
