<template>
	<div class="modal-view">
		<div class="wrap">
			<div class="modal__inner">
				<h2>{{ title }}</h2>
				<select v-model="selectedOption">
					<option value="value1">Изменение условий договора</option>
					<option value="value2">Добавить объект обслуживания</option>
				</select>
				<div class="selection__list">
					<select name="" id="">
						<option value="value1">Договор</option></select
					><select name="" id="">
						<option value="value2">Площадка</option></select
					><select name="" id="">
						<option value="">Объект обслуживания</option>
					</select>
				</div>

				<div class="btns">
					<a class="white" href="">Назад</a
					><a class="green" href="">Отправить</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.access-checkboxes {
	display: flex;
	gap: 28px;
	align-items: center;
}

.graphs h3 {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 16px;
}

.graphs .selection__date {
	margin-bottom: 32px;
}
.categories button {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 32px;
	font-size: 16px;
	color: rgba(0, 97, 64, 1);
}
.categories input {
	width: 610px;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 32px;
}
.categories-container {
	display: flex;
	gap: 12px;
	margin-bottom: 12px;
}
.building-selects {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.building-selects input {
	width: 610px;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 12px;
}
.building-type h3 {
	margin-bottom: 16px;
	font-size: 18px;
	font-weight: 700;
}
.add__category {
	color: rgba(0, 97, 64, 1);
}
.rights__checkbox {
	display: flex;
	gap: 40px;
	margin-bottom: 16px;
	font-size: 16px;
}

.checkbox-container {
	display: flex;
	gap: 10px;
}
.rights input[type='text'] {
	width: 610px;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 12px;
}

.rights .input__date {
	width: 610px;
}
.rights {
	margin-bottom: 32px;
}
.rights h3 {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 16px;
}
.add__category input {
	width: 610px;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
}
.add__category button {
	display: flex;
	gap: 8px;
	align-items: center;
	margin-bottom: 32px;
}
.add__graphs {
	color: rgba(0, 97, 64, 1);
}

.count select {
	margin-bottom: 12px;
}

.count select:last-child {
	margin-bottom: 32px;
}

.add__graphs button {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 32px;
}

.selection__date span {
	margin: 0px 3px;
}

.input__date {
	padding: 14px;
	width: 294px;
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	margin-bottom: 12px;
}

.modal-view {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto; /* Разрешаем прокрутку */
	padding: 20px; /* Отступы от краев экрана */
}

.modal__inner {
	width: 680px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 12px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	max-height: 90vh;
	overflow-y: auto;
	scrollbar-width: none;
}

.modal__inner::-webkit-scrollbar {
	width: 0;
	height: 0;
}

.modal__inner h2 {
	font-size: 32px;
	font-weight: 700;
}

.modal__inner select {
	width: 610px;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
}

.selection__list {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.selection__list select {
	width: 610px;
}

.btns {
	display: flex;
	gap: 12px;
}

.btns a {
	padding: 12px 32px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	border-radius: 4px;
}

.white {
	background-color: rgba(216, 224, 235, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	color: rgba(31, 33, 37, 1);
}

.green {
	background-color: rgba(0, 97, 64, 1);
	color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
export default {
	props: {
		title: String,
	},
	data() {
		return {
			selectedOption: 'value1',
		}
	},
}
</script>
