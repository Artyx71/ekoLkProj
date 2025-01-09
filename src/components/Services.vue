<template>
	<div class="services">
		<div class="wrap">
			<div class="services__inner">
				<div class="services__inner-heading">
					<h2>Дополнительные услуги</h2>
				</div>
				<div class="services__inner-list">
					<div
						class="services__inner-list-item"
						v-for="service in services"
						:key="service.title"
						@click="openModal(service)"
					>
						<div class="info-content">
							<img src="../assets/img/coins.svg" alt="" />
							<p>{{ service.title }}</p>
						</div>
						<div class="info-link">
							<a href="#"><img src="../assets/img/arrow-right.svg" alt="" /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ContractModalBig
			v-if="isModalVisible"
			:step="currentStep"
			:serviceTitle="selectedService?.title"
			:serviceDescription="selectedService?.description"
			@next="nextStep"
			@prev="prevStep"
			@close="closeModal"
		/>
	</div>
</template>

<style>
.services {
	padding-top: 32px;
	background: linear-gradient(
		to bottom,
		rgba(235, 250, 235, 1),
		rgba(235, 250, 235, 0)
	);
}

.services__inner-heading {
	margin-bottom: 32px;
	color: rgba(31, 33, 37, 1);
	font-weight: 700;
	font-size: 32px;
}
.services__inner-list {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
}
.services__inner-list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 592px;
	width: 30%;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 6px;
	padding: 33px 24px;
	font-size: 16px;
	font-weight: 700;
	color: rgba(31, 33, 37, 1);
}
.info-content {
	display: flex;
	align-items: center;
	gap: 16px;
}
</style>

<script>
import ContractModalBig from './Forms/ContractModalBig.vue'

export default {
	components: {
		ContractModalBig,
	},
	data() {
		return {
			selectedService: null,
			isModalVisible: false,
			currentStep: 1,
			totalSteps: 3, // Задаем общее количество шагов
			services: [
				{ title: 'Купить контейнер', description: 'Описание услуги 1' },
				{ title: 'Заказать разовый вывоз', description: 'Описание услуги 2' },
				{ title: 'Заказать строительство', description: 'Описание услуги 3' },
				{
					title: 'Заказать вывоз опасных отходов',
					description: 'Описание услуги 4',
				},
				{ title: 'Заказать паспорт отходов', description: 'Описание услуги 5' },
				{
					title: 'Получить справку о количестве переданных отходов',
					description: 'Описание услуги 6',
				},
				{ title: 'Сдать вторсырье', description: 'Описание услуги 7' },
				{
					title: 'Заказать вывоз промышленных отходов',
					description: 'Описание услуги 8',
				},
			],
		}
	},
	methods: {
		openModal(service) {
			this.selectedService = service
			this.isModalVisible = true
			this.currentStep = 1 // Устанавливаем шаг в начало
		},
		closeModal() {
			this.isModalVisible = false
			this.selectedService = null
			this.currentStep = 1 // Сбрасываем шаг
		},
		nextStep() {
			if (this.currentStep < this.totalSteps) {
				this.currentStep++
			}
		},
		prevStep() {
			if (this.currentStep > 1) {
				this.currentStep--
			}
		},
	},
}
</script>
