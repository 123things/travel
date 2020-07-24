<template>
	<div>
		<router-link tag="div" :to="'/'" class="header-abs" v-show="showABS"> 
			<i class="iconfont header-abs-icon">&#xe65b;</i>
		</router-link>
		<div class="header-fixed" v-show="!showABS" :style="opacityStyle">
			<router-link tag='i' :to="'/'" class="iconfont header-fixed-icon">&#xe65b;
			</router-link>
			<span>景点详情</span>
		</div>
	</div>
</template>
<script>
export default {
	name:'DetailHeader',
	data(){
		return {
			showABS: true,
			opacityStyle :{
				opacity: 0
			}
		}
	},
	methods:{
		handleScroll(){
			let top = document.documentElement.scrollTop 
			if(top > 60 ){
				let opacity = top / 140
				opacity = (top / 140) > 1 ? 1 : opacity;
				// console.info(opacity)
				this.opacityStyle = { opacity}
				this.showABS = false
			} else {
				this.showABS = true
			}
		}
	},
	mounted(){
		window.addEventListener('scroll',this.handleScroll)
	},
	destoryed(){
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
	z-index:99
	width:.8rem
	height:.8rem
	border-radius:.4rem
	background:rgba(0,0,0,.8)
	color:#fff
	text-align:center
	line-height:.8rem
	position:absolute
	top:.2rem
	left:.2rem
	.header-abs-icon
		font-size:.4rem
		color:#fff
.header-fixed
	width:100%
	height:.86rem
	line-height:.86rem
	text-align:center
	background:$bgColor
	color:#fff
	font-size:.32rem
	position:fixed
	top:0
	left:0
	right:0
	bottom:0
	z-index:999
	.header-fixed-icon
		position:absolute
		top:0
		left:0
		width:.64rem
		text-align:center
		font-size:.4rem
		color:#fff
</style>