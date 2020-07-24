<template>
	<div>
		<detail-header></detail-header>
		<detail-banner></detail-banner>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default{
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data(){
		return {
			list:[
			{
				title:'成人票',
				children:[{ title:'成人三錧联票',children:[{title:'三级'}]},
						{ title:'成人五馆联票'}
						]
			},
			{
				title:'儿童票'
			},
			{
				title:'学生票'
			},
			{
				title:'特惠票'
			}
			]
		}
	},
	methods:{
		getDetailInfo(){
			axios.get('/api/detail.json',{
				params:{
					id: this.$route.params.id
				}
			}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc(res){
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				console.info(data)
			}
		}
	},
	mounted(){
		this.getDetailInfo()
	}
}
</script>
<style lang="stylus" scoped>
.content
	height:50rem
</style>
