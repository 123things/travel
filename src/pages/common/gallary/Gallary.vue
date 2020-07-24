<template>
	<div class="container" @click="handleGallaryClick">
		<div  class="wrapper">
			<swiper :options="swiperOptions" class="wrapper">
				<swiper-slide v-for="(item,index) in imgs" :key="index">
					<img class="gallary-img" :src="item" alt="">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
export default{
	name:'Gallary',
	data (){
		return {
			swiperOptions:{
				pagination : '.swiper-pagination',
				paginationType : 'fraction',
				observer: true,
				observeParents:true
			}
		}
	},
	props:{
		imgs: {
			type: Array,
			default(){
				return []
			}
		}
	},
	methods:{
		handleGallaryClick(){
			this.$emit('close')
		}
	}
}
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		background:#000
		position:fixed
		top:0
		left:0
		right:0
		bottom:0
		z-index:99
		.wrapper
			width:100%
			height:0
			background:#000
			padding-bottom:67%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem;
</style>