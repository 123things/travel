<template>
	  <div class="wrapper">
	  	<swiper :options="swiperOption" v-if="swiperList.length">
		    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" alt="">
		    </swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>	
  </div>
</template>
<script>
export default {
	props:{
		swiperList : Array
	},
	name :'HomeSwiper',
	data (){
		return {
			swiperOption : {
				pagination : '.swiper-pagination',
				loop : true
			} 
		}
	}
}
</script>
<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background : red
	.wrapper
		width:100%
		height:0
		overflow:hidden
		padding-bottom:30%;
		background:#eee
		.swiper-img
			width:100%
</style>