<template>
	<div class="icons">
		 <swiper>
		 	<swiper-slide v-for="(page, index) of pages" :key="index">
		 		<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="">
					</div>
					<div class="icon-desc">{{item.desc}}</div>
				</div>	
		 	</swiper-slide>
		</swiper>
	</div>
</template>
<script>
export default {
	name: 'HomeIcons',
	props:{
		iconList:Array
	},
	computed:{
		pages(){
			const pages = []
			this.iconList.forEach((item, index) => {
				const page = Math.floor(index/8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		width:100%
		height:0
		padding-bottom:50%
		overflow:hidden
	.icons
		margin-top:.2rem	
		.icon
			width:25%
			height:0
			padding-bottom:25%
			float:left
			overflow:hidden
			position:relative
			.icon-img
				box-sizing:border-box
				padding:.1rem
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				.icon-img-content
					height:100%
					display:block
					margin:0 auto
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0;
				height:.44rem
				line-height:.44rem
				color:$darkTextColor
				text-align:center	
				ellipsis()
</style>