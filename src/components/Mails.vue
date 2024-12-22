<template>
	<div class="mails">
		<div class="wrap">
			<div class="mail__inner">
				<div class="mail__inner-top">
					<h2>Письма</h2>
					<a href="#">Написать письмо</a>
				</div>
				<div class="mail__inner_bot">
					<div class="mail__inner-list">
						<div class="list-icon">
							<img src="../assets/img/list.svg" alt="" />
							<span>Купить контейнер</span>
						</div>
						<div class="list__content">
							<span class="card__number">356236</span>
							<span class="card__date">01.07.2023</span>
							<span class="card__status">Новое</span>
						</div>
						<div class="list-button">
							<button>
								<img src="../assets/img/download.svg" alt="" />
								<span>Скачать ответ</span>
							</button>
						</div>
					</div>
					<div class="mail__inner-list">
						<div class="list-icon">
							<img src="../assets/img/list.svg" alt="" />
							<span>Купить контейнер</span>
						</div>
						<div class="list__content">
							<span class="card__number">356236</span>
							<span class="card__date">01.07.2023</span>
							<span class="card__status">Новое</span>
						</div>
						<div class="list-button">
							<button>
								<img src="../assets/img/download.svg" alt="" />
								<span>Скачать ответ</span>
							</button>
						</div>
					</div>
					<div class="mail__inner-list">
						<div class="list-icon">
							<img src="../assets/img/list.svg" alt="" />
							<span>Купить контейнер</span>
						</div>
						<div class="list__content">
							<span class="card__number">356236</span>
							<span class="card__date">01.07.2023</span>
							<span class="card__status">Новое</span>
						</div>
						<div class="list-button">
							<button>
								<img src="../assets/img/download.svg" alt="" />
								<span>Скачать ответ</span>
							</button>
						</div>
					</div>
					<div class="mail__inner-list">
						<div class="list-icon">
							<img src="../assets/img/list.svg" alt="" />
							<span>Купить контейнер</span>
						</div>
						<div class="list__content">
							<span class="card__number">356236</span>
							<span class="card__date">01.07.2023</span>
							<span class="card__status">Новое</span>
						</div>
						<div class="list-button">
							<button>
								<img src="../assets/img/download.svg" alt="" />
								<span>Скачать ответ</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.mails {
	padding-top: 32px;
	background: linear-gradient(
		to bottom,
		rgba(235, 250, 235, 1),
		rgba(235, 250, 235, 0)
	);
}
.mail__inner-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;
}

.mail__inner-top h2 {
	font-size: 32px;
}

.list-icon {
	display: flex;
	gap: 16px;
	align-items: center;
	max-width: 400px;
}
.list-icon img {
	padding: 14px;
	border-radius: 10px;
	background-color: rgba(120, 200, 135, 0.1);
}

.mail__inner-top a {
	font-size: 16px;
	padding: 12px 32px;
	color: rgba(0, 97, 64, 1);
	border: 1px solid rgba(0, 97, 64, 1);
	border-radius: 4px;
}

.mail__inner-list {
	display: flex;
	align-items: center;
	gap: 24px;
	padding: 30px 24px;
	border-radius: 6px;
	background-color: rgba(255, 255, 255, 1);
	margin-bottom: 12px;
}
.list__content {
	display: flex;
	gap: 24px;
	flex-grow: 1;
	justify-content: space-between;
}

.list-button {
	padding: 8px 16px;
	background-color: rgba(244, 247, 252, 1);
	border-radius: 4px;
}

.list-button button {
	display: flex;
	gap: 5px;
}

.card__number,
.card__date,
.card__status {
	width: 200px;
}
</style>

<script></script>
