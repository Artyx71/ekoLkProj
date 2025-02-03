<template>
	<div class="contracts">
		<div class="wrap">
			<div class="contracts__inner">
				<div class="contracts__inner-profile">
					<div class="left">
						<h2>ООО "Вывоз отходов"</h2>
						<p class="name">Наименование контрагент</p>
						<p class="inn__num">1234567890</p>
						<p class="inn__word">ИНН</p>
					</div>
					<div class="right">
						<h3>Оказание услуг по обращению с ТКО</h3>
						<p class="pay__sum">К оплате</p>
						<p class="pay">
							<span>-12 548,68 ₽</span>
							<button class="hover__btn">Оплатить</button>
						</p>
					</div>
				</div>
				<div class="contracts__inner-actuals">
					<h2>Действующие договоры</h2>
					<ul>
						<li><a href="">ТКО2021-2316583</a></li>
						<li><a href="">ТКО2021-2316583</a></li>
						<li><a href="">ТКО2021-2316583</a></li>
						<li><a href="">ТКО2021-2316583</a></li>
						<li><a href="">ТКО2021-2316583</a></li>
						<li><a href="">ТКО2021-2316583</a></li>
					</ul>
				</div>
				<div class="contracts__inner-slider">
					<Carousel :items-to-show="1" :wrap-around="true">
						<Slide v-for="(image, index) in images" :key="index">
							<img :src="image" alt="Slide Image" />
						</Slide>
						<template #addons>
							<Pagination />
						</template>
					</Carousel>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.contracts {
	background: linear-gradient(
		to bottom,
		rgba(235, 250, 235, 1),
		rgba(235, 250, 235, 0)
	);
}

.wrap {
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
}
.contracts__inner {
	padding-top: 32px;
}
.contracts__inner-profile {
	display: flex;
	margin-bottom: 32px;
	gap: 24px;
}

.contracts__inner-actuals {
	margin-bottom: 32px;
}

.left {
	background-color: #ffffff;
	flex: 1;
	width: 660px;
	padding: 32px;
	border-radius: 6px;
}

.right {
	background-color: #fff;
	padding: 32px;
	border-radius: 6px;
	width: 432px;
}

.pay__sum {
	color: rgba(219, 68, 68, 1);
	padding: 4px 16px;
	background-color: rgba(219, 68, 68, 0.1);
	max-width: 97px;
	font-size: 14px;
	border-radius: 20px;
	margin-bottom: 34px;
}
.right h3 {
	font-size: 16px;
	color: rgba(31, 33, 37, 1);
	margin-bottom: 16px;
}
.pay {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.pay span {
	font-size: 24px;
	color: rgba(219, 68, 68, 1);
}

.pay button {
	padding: 12px 32px;
	border: 1px solid rgba(0, 97, 64, 1);
	border-radius: 6px;
	color: rgba(0, 97, 64, 1);
	font-size: 16px;
}

.left h2 {
	font-size: 24px;
	color: #1f2125;
	margin-bottom: 4px;
}
.name {
	margin-bottom: 28px;
	color: #818a9a;
	font-size: 14px;
}

.inn__num p {
	color: #1f2125;
	margin-bottom: 4px;
	font-size: 16px;
}

.inn__word {
	color: #818a9a;
	font-size: 14px;
}

.contracts__inner-actuals h2 {
	margin-bottom: 24px;
	font-size: 32px;
	color: #1f2125;
}
.contracts__inner-actuals ul {
	display: flex;
	gap: 12px;
}

.contracts__inner-actuals ul li {
	padding: 12px 20px;
	background-color: #fff;
	border-radius: 60px;
}

.contracts__inner-slider {
	padding-bottom: 32px;
	margin-right: 25px;
}

.contracts__inner-slider {
	padding-bottom: 32px;
}

.carousel__pagination-button {
	width: 8px; /* Диаметр круга */
	height: 8px;
	border-radius: 50%; /* Делаем круглыми */
	background-color: rgba(255, 255, 255, 1); /* Цвет точек */
	opacity: 0.5;
	transition: opacity 0.3s ease;
	border-color: #fff;
	border: 1px solid #fff;
}

.carousel__pagination-button:hover,
.carousel__pagination-button--active {
	opacity: 1;
	background-color: rgba(255, 255, 255, 1); /* Цвет активной кнопки */
}

.hover__btn {
	transition: all 0.3s ease;
}

.hover__btn:hover {
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Тень текста */
	color: transparent; /* Дополнительно можно изменить цвет */
}
</style>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import car from '../assets/img/car.svg'
import rofl from '../assets/img/rofl.jpg'
export default defineComponent({
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			images: [car, rofl],
		}
	},
})
</script>
