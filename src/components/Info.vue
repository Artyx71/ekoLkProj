<template>
	<div class="info">
		<div class="wrap">
			<div class="info__inner">
				<div class="info__inner-heading">
					<div class="info__inner-heading-left"><h2>База договоров</h2></div>
					<div class="info__inner-heading-right">
						<p>Статус: <span>Все</span></p>
						<p>Сортировка: <span> сначала новые</span></p>
					</div>
				</div>
				<div class="info__inner-describe">
					<div class="info__inner-describe-left">
						<p>№ договора</p>
						<p>Дата заключения договора</p>
					</div>
					<div class="info__inner-describe-right">
						<p>Статус</p>
						<p>Кол-во площадок</p>
					</div>
				</div>
				<div class="info__inner-list">
					<div class="info__inner-list-item">
						<div class="accordion__head">
							<div class="accordion__head-left">
								<p>ТКО2021-23165</p>
								<p>01.07.2023</p>
							</div>
							<div class="accordion__head-right">
								<button>Действующий</button>
								<p>3 площадки</p>
							</div>
						</div>
						<div class="accordion__ans"></div>
					</div>
					<div class="info__inner-list-item">
						<div class="accordion__head">
							<div class="accordion__head-left">
								<p>ТКО2021-23165</p>
								<p>01.07.2023</p>
							</div>
							<div class="accordion__head-right">
								<button>Действующий</button>
								<p>3 площадки</p>
							</div>
						</div>
						<div class="accordion__ans"></div>
					</div>
					<div class="info__inner-list-item">
						<div class="accordion__head">
							<div class="accordion__head-left">
								<p>ТКО2021-23165</p>
								<p>01.07.2023</p>
							</div>
							<div class="accordion__head-right">
								<button>Действующий</button>
								<p>3 площадки</p>
							</div>
						</div>
						<div class="accordion__ans"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.info {
	background: linear-gradient(
		to bottom,
		rgba(235, 250, 235, 1),
		rgba(235, 250, 235, 0)
	);
}
.info__inner {
	padding-top: 32px;
}
.info__inner-heading {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;
}

.info__inner-heading-left {
	font-size: 32px;
	font-weight: 700;
}

.info__inner-heading-right {
	display: flex;
	gap: 48px;
	color: rgba(90, 100, 97, 1);
	font-size: 16px;
}
.info__inner-heading-right span {
	color: rgba(0, 97, 64, 1);
}
.info__inner-describe {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 13px 0px 60px;
	font-size: 14px;
	color: rgba(90, 100, 97, 1);
	margin-bottom: 20px;
}
.info__inner-describe-left {
	display: flex;
	gap: 90px;
}

.info__inner-describe-right {
	display: flex;
	gap: 90px;
}

.accordion__head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.accordion__head button {
	padding: 4px 16px;
	background-color: rgba(235, 250, 235, 1);
	border-radius: 20px;
	color: rgba(31, 33, 37, 1);
}

.accordion__head-left p:first-child {
	color: rgba(31, 33, 37, 1);
	font-weight: 700;
}

.info__inner-list-item {
	background-color: #fff;
	border-radius: 6px;
	color: rgba(90, 100, 97, 1);
	margin-bottom: 12px;
}

.accordion__head-left {
	display: flex;
	gap: 64px;
}

.accordion__head-left img {
	gap: 0px;
}

.accordion__head-right {
	display: flex;
	gap: 40px;
}

.info__inner-list-item {
	padding: 21px 24px 21px 60px;
}
</style>

<script></script>
