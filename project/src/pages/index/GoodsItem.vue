<template>
	<div class="goods-item">
		<div class="goods-img">
      <img :src="good.pic_url" alt="">
		</div>
		<div class="goods-info">
			<div class="goods-price">
				<span class="cprice">￥{{good.cprice}}</span>
				<span class="oprice">￥{{good.oprice}}</span>
			</div>
			<div class="goods-title">
				{{good.title}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "GoodsItem",
  	props: ['good', 'type'],
		data (){
			return {
				
			}
		},
		components: {
			
		}
	}
</script>

<style lang="scss" scoped>
.goods-item{
	width: 49%;
	margin-top: .04rem;
	background: #fff;
	.goods-img{
		img{
			width: 100%;
		}
	}
	.goods-info{
		padding: .12rem .16rem .2rem;
		.goods-price{
			line-height: .54rem;
			.cprice{
				font-size: 16px;
				color: #ff464e;
			}
			.oprice{
				text-decoration: line-through;
				color: #bbb;
			}
		}
		.goods-title{
    	color: #3b3b3b;
    	padding-right: .12rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
		}
	}
}
</style>