<template>
	<router-link class="router"
		:to="{ name: 'Countrie', params: { name: namecountrie } }"
		@click="getOneCountrie( namecountrie )">
	<div class="boxcard__card">
        <img class="boxcard__image" :src="imagecountrie"/>
        <p class="boxcard__title">{{ namecountrie }}</p>
        <p class="boxcard__subtitle"> <strong>Population:</strong> {{ population }}</p>
        <p class="boxcard__subtitle"> <strong>region:</strong> {{ region }}</p>
        <p class="boxcard__subtitle"> <strong>capital: </strong>{{ capital }}</p>
      </div>
    </router-link>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

	export default {
		props: {
			namecountrie: String,
			imagecountrie: String,
			population: Number,
			region: String,
			capital: String
		},
		methods: {
    		...mapActions(["findCountrys", "getOneCountrie"]),
  		}
	}
</script>

<style>
/**
* Box Card
* 
* */

.router {
	text-decoration: none;
}

.boxcard {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.boxcard__card {
	width: 250px;
	background-color: #2b3743;
	margin: 20px;
	border-radius: 5px;
}

.boxcard__image {
	width: 100%;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.boxcard__title {
	padding: 0 30px;
	color: white;
	font-weight: 800;
	text-align: center;
}

.boxcard__subtitle {
	padding: 5px 30px;
	color: white;	
}
</style>