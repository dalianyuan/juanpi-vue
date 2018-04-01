<template>
	
	<div class="footer-menu">
		<router-link 
			exact
			v-for="(menuInfoItem, index) in footerMenuInfo"
			:key="index"
			:to="menuInfoItem.routerUrl"
			active-class="active">
			<img class="footer-menu-img" :src="menuInfoItem.bg_icon" />
			{{menuInfoItem.title}}
		</router-link>
	</div>
	  
</template>

<script>
	import axios from 'axios'
	
	export default{
		name: 'Footer',
		data(){
			return {
				routerUrl: ['/', '/vip', '/classify', '/shopcar', '/my'],
				footerMenuInfo: []
			}
		},
		
		methods: {
			getFooterMenuData() {
				axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe')
					.then(this.handleGetFooterMenuSuc.bind(this))
			},
			
			handleGetFooterMenuSuc(res) {
				if(res && res.data && res.data.menuInfo && res.data.menuInfo.app_menu && res.data.menuInfo.app_menu.menulist){
					this.footerMenuInfo = res.data.menuInfo.app_menu.menulist
					for(var i = 0; i < this.footerMenuInfo.length; i++){
						this.footerMenuInfo[ i ].routerUrl = this.routerUrl[ i ]
					}
				}
//				console.log(this.footerMenuInfo)
			}
			
		},
		
		created() {
	  	this.getFooterMenuData()
	  }
		
	}
</script>

<style scoped>
	.footer-menu{
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
    height: 1rem;
    background-color: #fff;
    border-top: 1px solid #ebebeb;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 100;
	}
	a{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 20%;
		color: #333;
	}
	.active{
		color: #ff464e;
	}
	.footer-menu-img{
		width: 33%;
		max-height: 52%;
	}
</style>