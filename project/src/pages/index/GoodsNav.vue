<template>
	<div class="goods-nav-wrapper">
		<span 
			v-for="navItem in goodsNavItems" 
			:key="navItem.id"
      @click= "changeType(navItem.type)" 
			>
			<a :class = "{active: type === navItem.type}">{{navItem.title}}</a>
		</span>
	</div>
</template>

<script>
	export default{
		name: "GoodsNav",
  	props: ['type', 'changeType'],
		data (){
			return {
				goodsNavItems: [
					{id:1, type:'xbsytj', title:'推荐'},
					{id:2, type:'xbsytab1', title:'女装'},
					{id:3, type:'xbsytab9', title:'居家'},
					{id:4, type:'xbsytab5', title:'鞋包'},
					{id:5, type:'xbsytab4', title:'母婴'},
					{id:6, type:'xbsytab10', title:'数码'},
					{id:7, type:'xbsytab7', title:'美妆'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.goods-nav-wrapper{
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: .88rem;
	background: #fff;
	span{
		width: 14%;
		text-align: center;
		a{
			display: inline-block;
			line-height: .84rem;
			font-size: 16px;
			color: #333;
    	border-bottom: 2px solid #fff;
		}
		.active{
			color: #ff464e;
    	border-bottom: 2px solid #ff464e;
		}
	}
}
</style>