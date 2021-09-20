<template>
	<div>
		<div class="box">
			<button class="btn"> <router-link to="/"></router-link> Back</button>
		</div>
		<div class="boxrow">
			<div class="boxrow__box boxrow__box--center">
				<img class="boxrow__image" :src="oneCountry[0].flag">
			</div>
			<div class="boxrow__box boxrow__box--pd">
				<p class="boxrow__title">{{ oneCountry[0].name }}</p>
				<div class="boxrow">
					<div class="boxrow__box">
						<p class="boxrow__subtitle"><strong>Native name :</strong> {{ oneCountry[0].nativeName }}</p>
						<p class="boxrow__subtitle"><strong>Population :</strong> {{ oneCountry[0].population }}</p>
						<p class="boxrow__subtitle"><strong>Region :</strong> {{ oneCountry[0].region }}</p>
						<p class="boxrow__subtitle"><strong>Sub-region :</strong> {{ oneCountry[0].subregion }}</p>
						<p class="boxrow__subtitle"><strong>Capital :</strong> {{ oneCountry[0].capital }}</p>
					</div>
					<div class="boxrow__box">
						<p class="boxrow__subtitle"><strong>Top level domain :</strong> {{ oneCountry[0].topLevelDomain[0] }}</p>
						<p class="boxrow__subtitle"><strong>Currencies :</strong> {{ oneCountry[0].currencies[0].name }}</p>
						<p class="boxrow__subtitle"><strong>Languaje :</strong> {{ oneCountry[0].languages[0].name }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppHeader from '@/components/AppHeader.vue'
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['oneCountry'])
		}
	}

</script>

<style>

.box {
	width: 90%;
	margin: 20px auto;
}

.btn {
	background-color: #2b3743;
	border: none;
	padding: 7px 30px;
	color: #fff;
	border-radius: 4px;
	box-shadow: -1px -1px 4px 0px black;
	cursor: pointer;
}


.boxrow {
	display: flex;
	justify-content: space-around;
	align-items: center;
}


.boxrow__box {
	width: 50%;
}

.boxrow__box--center {
	text-align: center;
}

.boxrow__box--pd {
	padding: 15px;
}

.boxrow__image {
	width: 80%;	
	text-align: center;
}

.boxrow__title {
	font-weight: 800;
	color: #fff;
	font-size: 1.5em;
}

.boxrow__subtitle {
	color: #fff;
}

</style>