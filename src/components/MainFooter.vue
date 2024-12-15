<template>
	<footer class="footer">
		<div class="footer_wrap">
			<div class="footer__inner">
				<div class="footer__top">
					<p class="footer__top-describe">Справочная служба</p>
					<div class="footer__top-contacts">
						<a href="tel:+73412570454">+7 (3412) 570-454</a>
						<ul class="footer-list">
							<li class="footer-list__item"><p>Мы в соц сетях</p></li>
							<li class="footer-list__item">
								<a href="#"><img src="../assets/img/vk.svg" alt="#" /></a>
							</li>
							<li class="footer-list__item">
								<a href="#"><img src="../assets/img/tg.svg" alt="#" /></a>
							</li>
						</ul>
					</div>
				</div>
				<div class="footer-bot">
					<p>© 2023 ООО «Спецавтохозяйство»</p>
					<a href="">Политика обработки персональных данных</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	margin-top: 32px;
	background-image: url(../assets/img/back.svg);
	background-repeat: no-repeat;
}

.footer_wrap {
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
}

.footer__inner {
	display: flex;
	flex-direction: column;
}

.footer__top-contacts {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer__top-contacts {
	font-size: 24px;
	margin: 0px 48px 32px 48px;
}

.footer-list {
	display: flex;
	align-items: center;
	gap: 16px;
}

.footer-list__item {
	display: flex;
	align-items: center;
}

.footer-list__item p {
	font-size: 14px;
}

.footer__top-describe {
	margin-bottom: 4px;
	font-size: 14px;
	margin-top: 137px;
	margin-left: 48px;
	margin-right: 48px;
}

.footer__top {
	color: #1f2125;
}

.footer-bot {
	padding: 24px;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	color: #5a6461;
}
</style>
