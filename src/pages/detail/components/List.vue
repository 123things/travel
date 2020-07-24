<template>
	<div>
		<div class="item" v-for="(item, index) of list" :key="index">
			<div class="item-title border-bottom"> 
				<span>{{item.title}}</span>
			</div>
			<div class="item-children" v-if="item.children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'DetailList',
	props:{
		list:Array
	}
}
</script>
<style lang="stylus" scoped>
.item
	.item-title
		padding: .04rem .2rem	
	.item-children
		padding:.04rem .2rem
</style>