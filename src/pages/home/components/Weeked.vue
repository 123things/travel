<template>
	<div>
		<div class="title">周未去哪儿</div>
		<ul>
			<li class="item" v-for="(item, index) of weekendList" :key="index">
				<div class="item-img-wrapper">
					<img class="item-img"  :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>	
				</div>
			</li>
		</ul>
		
	</div>
</template>
<script>
export default{
	name:'HomeWeeked',
	props:{
		weekendList : Array
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		height:.8rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrapper
		width:100%
		height:0
		padding-bottom:33.9%
		overflow:hidden
		.item-img
			width:100%
	.item-info
		padding:.1rem
		.item-title
			font-size:.32rem
			line-height:.54rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
</style>