<template>
  <div class="home">
    <div class="content">
      <div class="content__elements">
        <div class="content__boxleft">
          <img class="content__image" :src="require('@/assets/search.png')" />
          <input class="content__input content__input--white" @keyup="filterCountrie(nameFilter)" v-model="nameFilter" type="text" />
          {{ nameFilter }}
        </div>
        <select class="content__boxright content__input--white">
          <option value="undefined">Filter by Región</option>
          <option value="country">country</option>
        </select>
      </div>
    </div>

    <div class="boxcard">
      
        <app-card 
          v-for="(country, index) in countrys" 
          :key="index"
          :namecountrie="country.name"
          :imagecountrie="country.flag"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
        ></app-card>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapMutations, mapActions } from "vuex";
import AppCard from '@/components/AppCard.vue'


export default {
  data(){
    return {
      nameFilter: ''
    }
  },
  components: {
    AppCard
  },
  mounted() {
    this.findCountrys();
  },
  methods: {
    ...mapActions(["findCountrys", "getOneCountrie","filterCountrie"]),
  },
  computed: {
    ...mapState(["countrys", "filterCountry"]),
  }
};
</script>

<style>
body {
  background-color: #202d36;
}

.content {
  width: 90%;
  margin: 0 auto;
}

.content__elements {
  display: flex;
  justify-content: space-between;
  margin: 3em 1em;
}

.content__boxleft {
  position: relative;
}

.content__image {
  height: 17px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.content__input {
  padding: 10px 10px 10px 40px;
  width: 300px;
  border-radius: 4px;
  background-color: #2b3743;
  border: none;
}

.content__input--white {
  color: #fff;
}

.content__input:focus {
  outline: none;
}

.content__boxright {
  background-color: #2b3743;
  width: 200px;
  font-weight: 400;
  padding: 10px;
  border-radius: 4px;
  border: none;
}

.content__boxright:focus {
  outline: none;
}


</style>
