<template>
	<div class="counts">
	  <div class="wrap">
		<div class="counts__inner">
		  <div class="counts__inner-heading">
			<h2>Взаиморасчеты</h2>
			<p>
			  Расчеты за: 
			  <span @click="toggleYearDropdown">{{ selectedYear }} год</span>
			  <div v-show="isYearDropdownOpen" class="year-dropdown">
				<ul>
				  <li v-for="year in years" :key="year" @click="selectYear(year)">
					{{ year }}
				  </li>
				</ul>
			  </div>
			</p>
		  </div>
		  <div class="counts__inner-describe">
			<a href="">№ договора</a>
			<a class="grow" href="">Дата заключения договора</a>
			<a href="">Статус</a>
		  </div>
		  <div class="counts__inner-list">
			<div
			  v-for="(item, index) in contracts"
			  :key="index"
			  class="counts__inner-list-item"
			>
			  <div class="accordion-head" @click="toggleAccordion(index)">
				<img
				  src="../assets/img/arrow-right.svg"
				  :class="{ rotate: item.isOpen }"
				  alt=""
				/>
				<p class="margin">{{ item.contractNumber }}</p>
				<p class="grow">{{ item.date }}</p>
				<p class="status">{{ item.status }}</p>
			  </div>
			  <div v-if="item.isOpen" class="accordion-ans">
				<p>Период {{ item.period }}</p>
				<p>Сальдо на начало периода: {{ item.startBalance }}</p>
				<p>Начислено {{ item.accrued }}</p>
				<p>Оплачено {{ item.paid }}</p>
				<p>Сальдо на конец периода {{ item.endBalance }}</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		selectedYear: '2023', 
		isYearDropdownOpen: false, 
		years: ['2021', '2022', '2023', '2024'], 
		contracts: [
		  {
			contractNumber: 'ТКО2021-23165',
			date: '01.07.2023',
			status: 'Действующий',
			isOpen: false,
		  },
		  {
			contractNumber: 'ТКО2021-23166',
			date: '15.07.2023',
			status: 'Завершенный',
			isOpen: false,
		  },
		],
	  };
	},
	methods: {
	  toggleAccordion(index) {
		this.contracts[index].isOpen = !this.contracts[index].isOpen;
	  },
	  toggleYearDropdown() {
		this.isYearDropdownOpen = !this.isYearDropdownOpen;
	  },
	  selectYear(year) {
		this.selectedYear = year;
		this.isYearDropdownOpen = false; // Закрыть дропдаун после выбора года
	  },
	},
  };
  </script>
  
  <style scoped>
  .counts {
	background: linear-gradient(
	  to bottom,
	  rgba(235, 250, 235, 1),
	  rgba(235, 250, 235, 0)
	);
	color: inherit;
  }
  
  .counts__inner {
	padding-top: 32px;
  }
  
  .counts__inner-heading {
	display: flex;
	justify-content: space-between;
	margin-bottom: 32px;
	align-items: center;
  }
  
  .counts__inner-heading span {
	color: rgba(0, 97, 64, 1);
	cursor: pointer;
  }
  
  .counts__inner-heading h2 {
	font-size: 32px;
	font-weight: 700;
  }
  
  .counts__inner-describe {
	padding: 0px 60px;
	display: flex;
	justify-content: space-between;
	gap: 75px;
	align-items: center;
	margin-bottom: 20px;
	color: rgba(90, 100, 97, 1);
	font-size: 14px;
  }
  
  .grow {
	flex-grow: 1;
  }
  
  .counts__inner-list-item {
	background-color: #fff;
	border-radius: 6px;
	color: rgba(90, 100, 97, 1);
	margin-bottom: 12px;
  }
  
  .accordion-head {
	display: flex;
	padding: 20px 24px;
	justify-content: space-between;
	cursor: pointer;
  }
  
  .accordion-head img {
	margin: 0px 24px;
  }
  
  .margin {
	margin-right: 54px;
	font-size: 16px;
	font-weight: 700;
	color: rgba(31, 33, 37, 1);
  }
  
  .accordion-ans {
	padding: 16px 16px 16px 60px;
	background: rgba(235, 250, 235, 1);
	display: flex;
	justify-content: space-between;
  }
  
  .status {
	padding: 4px 16px;
	color: rgba(31, 33, 37, 1);
	background-color: rgba(235, 250, 235, 1);
	border-radius: 20px;
  }
  
  img.rotate {
	transform: rotate(90deg);
	transition: transform 0.3s ease;
  }
  
  .year-dropdown {
	position: absolute;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin-top: 5px;
	width: 100px;
	z-index: 10;
  }
  
  .year-dropdown ul {
	list-style: none;
	padding: 0;
	margin: 0;
  }
  
  .year-dropdown li {
	padding: 8px;
	cursor: pointer;
  }
  
  .year-dropdown li:hover {
	background-color: #f0f0f0;
  }
  </style>
  