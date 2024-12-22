<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AuthCheckbox from '../components/AuthCheckbox.vue'
import AuthInput from '../components/AuthInput.vue'
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
	<div class="auth">
		<div class="wrap">
			<main class="auth__inner">
				<div class="auth-form">
					<form @submit.prevent="handleLogin" action="#">
						<img src="../assets/img/authlogo.svg" alt="#" />
						<div>
							<p>Авторизация</p>
							<AuthInput
								v-model="inn"
								class="auth__input"
								type="text"
								placeholder="ИНН"
								@input="logInput('ИНН', inn)"
							/>
							<AuthInput
								v-model="password"
								class="auth__input"
								type="password"
								placeholder="Пароль"
							/>
							<AuthCheckbox v-model="isRemembered" class="auth__checkbox" />
							<button class="auth-btn" type="submit">Авторизация</button>
						</div>
						<div class="out__form">
							<span>Забыли пароль?</span> <a href="#">Восстановить</a>
						</div>
						<a href="#">Зарегистрироваться</a>
					</form>
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
.auth {
	background-image: url(../assets/img/backAuth.png);
	background-repeat: no-repeat;

	height: 1920px;
}

.wrap {
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
}

.auth-form {
	display: flex;
	flex-direction: column;
	margin-left: 10px;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 124px;
	padding: 40px;
	background-color: #fff;
	border-radius: 12px;
	max-width: 404px;
	align-self: flex-start;
}

form img {
	margin-bottom: 32px;
	align-self: center;
}

form p {
	margin-bottom: 24px;
	color: #1f2125;
	font-weight: 700;
}

.auth__input {
	margin-bottom: 12px;
}

.auth__checkbox {
	align-self: flex-start;
	margin-bottom: 25px;
}

.out__form {
	display: flex;
	gap: 8px;
	margin-bottom: 16px;
}

.auth-btn {
	width: 100%;
	display: block;
	margin: 0 auto;
	padding: 12px;
	margin-bottom: 40px;
	align-self: center;
	background-color: #78c887;
	color: #fff;
	border-radius: 4px;
}
</style>
