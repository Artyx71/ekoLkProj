<template>
	<header class="head">
		<div class="head__wrap">
			<div class="header__inner">
				<div class="header__top">
					<a href="#" class="header__logo">
						<img src="../assets/img/logo.svg" alt="" />
					</a>
					<div class="header__profile">
						<p>ООО “Вывоз отходов”</p>
						<a class="profilePic" href=""
							><img src="../assets/img/profilePic.svg" alt="" /></a
						><a class="settings" href=""
							><img src="../assets/img/settings.svg" alt="" /></a
						><a class="exit" href=""
							><img src="../assets/img/exit.svg" alt=""
						/></a>
					</div>
				</div>
				<div class="header__bot">
					<ul class="header__bot-list">
						<li class="header__list-item">
							<router-link to="/">Главная</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/">Информация о договорах</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/">Взаиморасчеты</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/">Письма</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/">Исполнение договора</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/">Дополнительные услуги</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<style>
.head {
	font-weight: 400;
}

.header__inner {
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: #5a6461;
}

.head__wrap {
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
}

.header__top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0px;
	border-bottom: 1px solid #d8e0eb;
}

.header__profile {
	display: flex;
	align-items: center;
}

.header__profile p {
	margin-right: 16px;
}

.profilePic {
	margin-right: 48px;
}

.settings {
	margin-right: 20px;
}

.header__logo {
	display: flex;
	align-items: center;
}

.header__bot {
	display: flex;
	padding: 20px 0px;
	border-bottom: 1px solid #d8e0eb;
}

.header__bot-list {
	display: flex;
	gap: 48px;
}

.header__list-item a:hover {
	padding-bottom: 18px;
	border-bottom: 2px solid #006140;
	transition: 0.2s ease;
}
</style>
