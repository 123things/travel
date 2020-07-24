<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/004da801-4b57-40a2-8dad-9bf35948cdb6.jpg_r_640x420x95_6c33afc3.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
				<div class="banner-number">
					<i class="iconfont number-icon">&#xe65b;</i>
					<span>39</span>
				</div>
			</div>
		</div>
		<common-animation>
			<common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseClick"></common-gallary>
		</common-animation>
	</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonAnimation from 'common/fade/Fade'
export default{
	name:'DetailBanner',
	components:{
		CommonGallary,
		CommonAnimation
	},
	data(){
		return {
			showGallary : false,
			imgs :['https://img1.qunarzz.com/vs_ceph_vs_tts/004da801-4b57-40a2-8dad-9bf35948cdb6.jpg_r_640x420x95_6c33afc3.jpg',
				'https://img1.qunarzz.com/vs_ceph_vs_tts/004da801-4b57-40a2-8dad-9bf35948cdb6.jpg_r_640x420x95_6c33afc3.jpg']
		}
	},
	methods:{
		handleBannerClick(){
			this.showGallary = true
		},
		handleCloseClick(){
			this.showGallary = false
		}
	}
}
</script>
<style lang="stylus" scoped>
.banner
	height:0
	padding-bottom:55%
	overflow:hidden;
	position:relative
	.banner-img
		width:100%
	.banner-info
		display:flex
		height:.6rem
		line-height:.6rem
		color:#fff
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
		position:absolute
		left:0
		right:0
		bottom:0
		.banner-title
			flex:1
			font-size:.32rem
			padding:0 .2rem
		.banner-number
			margin-top:.14rem
			height:.32rem
			line-height:.32rem
			border-radius:.2rem
			background:rgba(0,0,0,.8)
			padding:0 .4rem
			font-size:.24rem
			.number-icon
				font-size:.24rem
</style>