<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" v-for="city of list" :key="city.id" @click="handleCityClick(city)">{{city.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">
					没有找到匹配数据
				</li>
			</ul> 
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
	name:'CitySearch',
	props:{
		cities : Object
	},
	data(){
		return {
			keyword : '',
			list :[],
			timer : null
		}
	},
	methods:{
		...mapMutations(['changeCity']),
		handleCityClick(city){
			this.changeCity(city)
			this.$router.push('/')
		}
	},
	watch:{
		keyword(){
			if(!this.keyword){ this.list=[]; return}
			if(this.timer){ clearTimeout(this.timer)}
			this.timer = setTimeout(() => {
				const result =[]
				for(let key in this.cities){
					this.cities[key].forEach((city) =>{
						if(city.spell.indexOf(this.keyword) > -1 || city.name.indexOf(this.keyword) > -1){
							result.push(city)
						}
					})
				}
				this.list = result
			}, 100)
		}
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.search, {
			click : true
		})
	},
	computed:{
		hasNoData(){
			return !this.list.lenth
		}
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height:.72rem
		padding:0 .1rem
		background:$bgColor
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			line-height:.62rem
			background:#fff
			border-radius:.06rem
			text-align:center
			color:#666
			padding:0 .1rem
	.search-content	
		padding:0 .1rem
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		z-index:1
		background:#eee
		overflow:hidden
		.search-item
			line-height:.62rem
			padding-left:.2rem
			color:#666
			background:#fff
</style>