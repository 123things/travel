<template>
	<ul class="list">
		<li class="item" v-for="key in letters" :key="key"  @click="handleLetterClick" @touchstart="handlerTouchStart" @touchmove="handlerTouchMove" @touchend="handlerTouchEnd" :ref="key">{{key}}</li>
	</ul>
</template>
<script>
export default{
	name:'CityAlphabet',
	props:{
		cities : Object
	},
	methods:{
		handleLetterClick (e){
			this.$emit('change', e.target.innerHTML)
		},
		handlerTouchStart (){
			this.touchStatus = true
		},
		handlerTouchMove (e){
			if(this.timer){
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				if(this.touchStatus){
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 20)
					if(index >=0 && index < this.letters.length){
						this.$emit('change', this.letters[index])
					}
				}
			}, 8)
			
		},
		handlerTouchEnd (){
			this.touchStatus = false
		}
	},
	updated (){
		this.startY = this.$refs['A'][0].offsetTop
	},
	data(){
		return {
			touchStatus : false,
			timer : null,
			startY : 0
		}
	},
	computed:{
		letters(){
			const letters = []
			for(let key in this.cities){
				letters.push(key)
			}
			return letters
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	top:1.58rem
	bottom:0
	right:0
	width:.4rem
	.item
		line-height:.4rem
		text-align:center
		color:$bgColor
</style>