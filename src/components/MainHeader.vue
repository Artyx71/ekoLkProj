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
						<router-link class="profilePic" to="/profile"
							><img src="../assets/img/profilePic.svg" alt="" /></router-link
						><router-link class="settings" to="/settings"
							><img src="../assets/img/settings.svg" alt="" /></router-link
						><router-link class="exit" to="/login"
							><img src="../assets/img/exit.svg" alt=""
						/></router-link>
					</div>
				</div>
				<div class="header__bot">
					<ul class="header__bot-list">
						<li class="header__list-item">
							<router-link to="/home">Главная</router-link>
						</li>
						<li class="header__list-item">
							<router-link to="/info" active-class="custom-active-class"
								>Информация о договорах</router-link
							>
						</li>
						<li class="header__list-item">
							<router-link to="/counts" active-class="custom-active-class"
								>Взаиморасчеты</router-link
							>
						</li>
						<li class="header__list-item">
							<router-link to="/mail" active-class="custom-active-class"
								>Письма</router-link
							>
						</li>
						<!-- <li class="header__list-item">
							<router-link to="/contracts" active-class="custom-active-class"
								>Исполнение договора</router-link
							>
						</li> -->
						<li class="header__list-item">
							<router-link to="/services" active-class="custom-active-class"
								>Дополнительные услуги</router-link
							>
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
	padding-bottom: 20px;
	border-bottom: 2px solid #006140;
	transition: 0.2s ease;
}

.custom-active-class {
	padding-bottom: 20px;
	border-bottom: 2px solid #006140;
	transition: 0.2s ease;
	color: rgba(0, 97, 64, 1) !important;
}
</style>
