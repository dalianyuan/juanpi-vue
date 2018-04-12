<template>
	<div class="goods-box">
		<goods-item
			v-for = "(good,index) in goods"
      :key = "index"
      :good = "good"
      :type = "type"
		/>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem'
	import axios from 'axios'
	
	export default{
		name: "GoodsBox",
  	props: ['type'],
		data (){
			return {
				goods: []
			}
		},
		components: {
			GoodsItem
		},
		methods: {
			getGoods() {
				axios.get("/api/getGoods?catname="+this.type+"&flag="+this.type)
				.then((res) => {
					this.goods = res.data.data.goods
					console.log(res.data.data.goods)
				})
			}
		},
		watch: {
	    //当父组件传递进来的数据变化的时候，使用watch监听
	    type: {
	      immediate: true,//获取的初始化的数据
	      handler (val) {
	        this.getGoods()
	      }
	    }
	  }
	}
</script>

<style lang="scss" scoped>
.goods-box{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>