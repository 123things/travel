<template>
	<div>
		<div class="header">
			<router-link to="/">
				<i class="iconfont header-icon">&#xe65b;</i>
			</router-link>
			<span>城市选择</span>
		</div>
	</div>
</template>
<script>
export default{
	name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		overflow:hidden
		height:.86rem
		line-height:.86rem
		background:$bgColor
		color:#fff
		text-align:center
		font-size:.32rem
		.header-icon
			position:absolute
			top:0
			bottom:0
			left:.2rem
			color:#fff
			font-size:.4rem
</style>