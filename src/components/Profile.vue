<template>
	<div class="profile">
		<div class="wrap">
			<div class="profile__inner">
				<h2>Учетная Запись</h2>
				<div class="profile__inner-items">
					<div class="profile__inner-base-info">
						<div class="base-info-top">
							<h2>Общие сведения о юр лице</h2>
							<img src="../assets/img/pen.svg" alt="" />
						</div>
						<div class="base-info-bot">
							<div class="input-container">
								<label for="kpp">Наименование юр лица</label>
								<input
									disabled
									placeholder="ООО “Вывоз отходов”"
									type="text"
									id="kpp"
									name="kpp"
								/>
							</div>
							<div class="input-container">
								<label for="inn">ИНН</label>
								<input
									disabled
									placeholder="0987654321"
									type="text"
									id="inn"
									name="inn"
								/>
							</div>

							<div class="input-container">
								<label for="kpp">КПП</label>
								<input
									disabled
									placeholder="987654321"
									type="text"
									id="kpp"
									name="kpp"
								/>
							</div>
						</div>
					</div>
					<!-- <div class="profile__inner-base-info">
						<div class="base-info-top">
							<h2>Наименование юр лица</h2>
							<img src="../assets/img/pen.svg" alt="" />
						</div>
						<div class="base-info-bot flex-block">
							<div class="input-container">
								<label for="kpp">Наименование юр лица</label>
								<input
									disabled
									placeholder="ООО “Вывоз отходов”"
									type="text"
									id="kpp"
									name="kpp"
								/>
							</div>
							<div class="input-container">
								<label for="inn">ИНН</label>
								<input
									disabled
									placeholder="0987654321"
									type="text"
									id="inn"
									name="inn"
								/>
							</div>
							<div class="input-container">
								<label for="inn">ИНН</label>
								<input
									disabled
									placeholder="0987654321"
									type="text"
									id="inn"
									name="inn"
								/>
							</div>

							<div class="input-container">
								<label for="inn">ИНН</label>
								<input
									disabled
									placeholder="0987654321"
									type="text"
									id="inn"
									name="inn"
								/>
							</div>

							<div class="input-container">
								<label for="inn">ИНН</label>
								<input
									disabled
									placeholder="0987654321"
									type="text"
									id="inn"
									name="inn"
								/>
							</div>

							<div class="input-container">
								<label for="kpp">КПП</label>
								<input
									disabled
									placeholder="987654321"
									type="text"
									id="kpp"
									name="kpp"
								/>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.profile {
	background: linear-gradient(
		to bottom,
		rgba(235, 250, 235, 1),
		rgba(235, 250, 235, 0)
	);
}

.profile input {
	background-color: rgba(244, 247, 252, 1);
}

.profile__inner {
	padding-top: 32px;
	margin-left: 10%;
}

.profile__inner h2 {
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 24px;
	color: rgba(31, 33, 37, 1);
}

.input-container {
	position: relative;
	margin-bottom: 20px;
}

.input-container label {
	position: absolute;
	top: -10px;
	left: 10px;
	background: #fff;
	padding: 0 5px;
	font-size: 12px;
	color: #555;
}

.input-container input {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
}

.base-info-top {
	display: flex;
	justify-content: space-between;
}

.base-info-top h2 {
	font-size: 18px;
	margin-bottom: 16px;
}

.base-info-top img {
	align-self: flex-start;
}

.profile__inner-base-info {
	padding: 40px;
	border-radius: 6px;
	background-color: #fff;
}
.profile__inner-items {
	display: flex;
	flex-direction: column;
	gap: 24px;
}
.flex-block {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}

.flex-block input {
	flex: 1;
	max-width: 250px;
}
</style>
