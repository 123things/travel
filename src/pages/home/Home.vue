<template>
  <div>
	<home-header></home-header>
	<home-swiper :swiperList="swiperList"></home-swiper>
	<home-icons :iconList="iconList"></home-icons>	
	<home-recommend :recommendList="recommendList"></home-recommend>
	<home-weeked :weekendList="weekendList"></home-weeked>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeeked from './components/Weeked.vue'

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
  	 HomeHeader,
	   HomeSwiper,
	   HomeIcons,
	   HomeRecommend,
	   HomeWeeked	
  },
  data(){
  	return {
      queryCity:'',
  		swiperList : [],
  		iconList : [],
  		recommendList :[],
  		weekendList :[]
  	}
  },
  methods:{
	...mapMutations(['$axios']),
  	getHomeInfo(){
		  const params = {
			  url : '/api/index.json?city=' + this.city,
			  callback : this.getHomeInfoSucc
		  }
		  this.$axios(params)
  	},
  	getHomeInfoSucc(res){
  		res = res.data
  		if(res.ret && res.data){
  			this.swiperList = res.data.swiperList
  			this.iconList = res.data.iconList
  			this.recommendList = res.data.recommendList
  			this.weekendList = res.data.weekendList
      }
  	}
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){ 
    this.queryCity = this.city
  	this.getHomeInfo()
  },
  activated(){
      if(this.queryCity !== this.city){ this.getHomeInfo(); this.queryCity = this.city;}
  }
}
</script>
<style>
</style>
