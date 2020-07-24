<template>
  <div class="header">
  	<div class="header-left">
  		<i class="iconfont back-icon">&#xe65b;</i>
  	</div>
  	<div class="header-input">
  		<i class="iconfont">&#xe602;</i>
  		<span>输入城市/景点/游玩主题</span>
  	</div>
  	<router-link to="/city">
  		<div class="header-right">
			<span>{{this.city}}</span>
			<i class="iconfont .arrow-icon">&#xe665;</i>
		</div>
  	</router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props:{},
  computed:{
  	...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		line-height:.86rem
		background: $bgColor
		color: #fff
		display:flex
		.header-left
			width:.64rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
				display:block
		.header-input
			height: .64rem
			padding-left:.2rem
			line-height:.64rem
			border-radius: .1rem
			color:#ccc
			background:#fff
			margin-top:.12rem
			margin-left: .2rem			
			flex:1
		.header-right
			min-width:1.24rem
			padding:0 .1rem
			text-align:center
			float:left
			color:#fff
			.arrow-icon
				font-size:.24rem
				margin-left:-.04rem
</style>
