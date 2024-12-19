<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const inn = ref('')
const router = useRouter()
const isRemembered = ref(false)
const handleLogin = () => {
	if (inn.value === '123' && password.value === '123') {
		router.push('/home')
	} else {
		console.log(inn.value)
		console.log(password.value)
		alert('Неверный логин или пароль')
	}
}
const logInput = (fieldName, value) => {
	console.log(`Поле ${fieldName} обновлено:`, value)
}
</script>

<template>
	<router-view></router-view>
</template>

<style scoped></style>
