<template>
	<div class="goods-container">
		<goods-nav :change-type = "changeType" :type = "type"/>
		<goods-box :type = "type"/>
	</div>
</template>

<script>
	import GoodsNav from './GoodsNav'
	import GoodsBox from './GoodsBox'
	
	export default{
		name: "GoodsContainer",
		data (){
			return {
				type: 'xbsytj'//nav类型
			}
		},
		methods: {
	    changeType ( type ) {//更改nav类型的方法
	      this.type = type
	    }
	  },
		components: {
			GoodsNav,
			GoodsBox
		}
	}
</script>

<style lang="scss" scoped>
.goods-container{
}
</style>