<template>
	<div class="services">
		<div class="wrap">
			<div class="services__inner">
				<h2>Дополнительные услуги</h2>
				<div class="services__grid-container">
					<div class="grid-item">1</div>
					<div class="grid-item">2</div>
					<div class="grid-item">3</div>
					<div class="grid-item">4</div>
					<div class="grid-item">5</div>
					<div class="grid-item">6</div>
					<div class="grid-item last">7</div>
					<div class="grid-item last">8</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.services__grid-container {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
}

.grid-item {
	flex: 1 1 calc(33.33% - 24px); /* Элементы занимают по 1/3 ширины контейнера минус отступы */
	box-sizing: border-box; /* Учитываем отступы в расчете ширины */
	background-color: #ddd;
	padding: 20px;
	text-align: center;
	border: 1px solid #ccc;
}
.last {
	flex: 2 2 calc(25% - 10px); /* Для блоков 7 и 8 задаем ширину 25% каждый */
}
</style>

<script></script>
