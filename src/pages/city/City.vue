<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list  :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handlerLetterChange"></city-alphabet>
	</div>
</template>
<script>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
import { mapMutations } from 'vuex'
export default{
	name:'City',
	components : {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	methods:{
		...mapMutations(['$axios']),
		getCityInfo(){
			const params = {
			  url : './api/city.json',
			  callback : this.getCityInfoSucc
		  	}
		  	this.$axios(params)
		},
		getCityInfoSucc(res){
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handlerLetterChange(letter){
			this.letter = letter
		}
	},
	mounted(){
		this.getCityInfo()
	},
	data(){
		return{
			letter : '',
			cities : {},
			hotCities :[]
		}
	}
}
</script>
<style lang="stylus" scoped>
</style>