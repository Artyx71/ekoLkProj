<template>
	<div class="modal-view">
		<div class="wrap">
			<div class="modal__inner">
				<h2>Внести изменения в договор</h2>
				<select>
					<option value="value1">Вид</option>
				</select>
				<div class="btns">
					<a class="white" href="">Назад</a
					><a class="green" href="">Отправить</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
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
	border: 3px solid #000; /* чтоб было видно на белом фоне*/
}

.modal__inner h2 {
	font-size: 32px;
	font-weight: 700;
}

.modal__inner select {
	width: 100%;
	padding: 15px;
	color: rgba(90, 100, 97, 1);
	border: 1px solid rgba(216, 224, 235, 1);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
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
