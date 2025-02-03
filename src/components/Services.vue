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
		<div
			v-if="isModalVisible"
			class="modal-overlay modal-view"
			@click.self="closeModal"
		>
			<div class="modal-content" @click.stop>
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
		</div>
	</div>
</template>

<style>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}
.modal-overlay,
.modal-view {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	overflow-y: auto; /* если нужно */
	padding: 20px; /* если нужно */
}

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
			totalSteps: 3,
			services: [
				{
					title: 'Купить контейнер',
					description: 'Описание услуги 1',
					step: 1,
				},
				{
					title: 'Заказать разовый вывоз',
					description: 'Описание услуги 2',
					step: 2,
				},
				{
					title: 'Заказать строительство',
					description: 'Описание услуги 3',
					step: 3,
				},
				{
					title: 'Заказать вывоз опасных отходов',
					description: 'Описание услуги 4',
					step: 4,
				},
				{
					title: 'Заказать паспорт отходов',
					description: 'Описание услуги 5',
					step: 5,
				},
				{
					title: 'Получить справку о количестве переданных отходов',
					description: 'Описание услуги 6',
					step: 6,
				},
				{ title: 'Сдать вторсырье', description: 'Описание услуги 7', step: 7 },
				{
					title: 'Заказать вывоз промышленных отходов',
					description: 'Описание услуги 8',
					step: 8,
				},
			],
		}
	},
	methods: {
		openModal(service) {
			this.selectedService = service
			this.isModalVisible = true
			this.currentStep = 1
			history.pushState({ modalOpen: true }, '') // Добавляем состояние в history

			// Добавляем обработчик нажатия Escape
			window.addEventListener('keydown', this.handleEscape)
		},

		closeModal() {
			this.isModalVisible = false
			this.selectedService = null
			this.currentStep = 1
			if (history.state?.modalOpen) {
				history.back() // Возвращаемся назад в истории
			}

			// Удаляем обработчик Escape
			window.removeEventListener('keydown', this.handleEscape)
		},

		handleEscape(event) {
			if (event.key === 'Escape') {
				this.closeModal()
			}
		},

		handleOverlayClick(event) {
			// Проверяем, что кликнули именно на оверлей, а не на содержимое модального окна
			if (event.target.classList.contains('modal-overlay')) {
				this.closeModal()
			}
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
