<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">您的位置</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list" >
					<div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item)">
						<div class="button" >{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(items, key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="list-item" v-for="item of items" :key="item.id" @click="handleCityClick(item)">
					<div class="item border-bottom">{{item.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default{
	name:'CityList',
	props:{
		letter:String,
		cities : Object,
		hotCities : Array
	},
	mounted(){
		this.scroll = new BScroll(this.$refs.wrapper,{
			click:true
		});
	},
	watch:{
		letter (){
			if(this.letter){
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	},
	methods:{
		...mapMutations(['changeCity']),
		handleCityClick(city){
			this.changeCity(city)
			this.$router.push('/')
		}
	},
	computed :{
		...mapState({
			'currentCity' : 'city'
		})
	}
}
</script>
<style lang="stylus" scoped>
.border-topbottom
	&:before
		border-color:#ccc
	&:after
		border-color:#ccc
.border-bottom
	&:after
		border-color:#ccc
.list
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	overflow:hidden
	.title
		line-height:.54rem
		background:#eee
		color:#666
		padding-left:.2rem
		font-size:.26rem
	.button-list
		padding:.1rem .6rem .1rem .1rem
		overflow:hidden
		.button-wrapper
			float:left
			width:33.33%
			.button
				margin:.1rem
				padding:.1rem 0
				text-align:center
				border:.02rem solid #ccc
				border-radius:.06rem
	.list-item
		.item
			line-height:.76rem
			padding-left:.2rem
</style>