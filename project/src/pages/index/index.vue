<template>
  <div>
    <header class="header">
    	<div class="back iconfont">&#xe67c;</div>
    	<div class="search iconfont">&#xe661;输入商品/店铺</div>
    	<div class="city"><div class="city-cont">分类</div><i class="iconfont">&#xe6b5;</i></div>
    </header>
    
  	<div class="swiper-img-con">
	    <swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item in swiperImgs" :key="item.id">
		    	 <img class="swiper-img" :src="item.pic"/>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
  	</div>
	  
	  <div class="menu-container">
	  	<div class="menu-item" v-for="item in menuInfo">
	  		<a href="javascript:;">
	  			<img class="menu-img" :src="item.imgUrl"/>
	  		</a>
	  	</div>
	  </div>
	  
	  <div class="advertise">
	  	<a href="javascript:;">
	  		<img class="advertise-img" src="https://s2.juancdn.com/jas/180330/2/c/5abe12768150a15c58717776_1080x312.gif"/>
	  	</a>
	  </div>
	  
	  <Footer/>
	  
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '@/pages/common/footer'
export default{
  name: 'Index',
  
  data() {
    return {
    	swiperImgs: [],
    	menuInfo: [],
      swiperOption: {
      	loop: true,
      	autoplay: 1600,
      	pagination: '.swiper-pagination',
      }
    }
  },
  
  components: {
		Footer
	},
  
  methods: {
  	getIndexData() {
  		axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l1_0&app_name=zhe&app_version=&platform=&catname=newest_zhe")
  			.then(this.handleGetSwiperSuc.bind(this))
  		
  		this.$http.get("/static/index.json")
  			.then(this.handleGetIconSuc.bind(this))
  		
  	},
  	handleGetSwiperSuc(res) {
  		const swiperData = res.data.adsInfo;
			if(res && res.data && swiperData && swiperData.slide_ads.config.slide){
				this.swiperImgs = swiperData.slide_ads.config.slide
			}
  	},
  	handleGetIconSuc(res) {
//		console.log(res.data)
  		if(res && res.body.ret && res.data && res.data.data.icons){
  			this.menuInfo = res.data.data.icons;
  		}
  	}
  },
  
  created() {
  	this.getIndexData()
  }
  
}
</script>

<style scoped>
	.header{
		display: flex;
		background: #fff;
		color: rgb(153, 153, 153);
	}
	.back{
		width: .64rem;
		line-height: .86rem;
		text-align: center;
	}
	.search{
		flex: 1;
		margin: .14rem .18rem;
		padding-left: .16rem;
		background: #f2f2f2;
		line-height: .58rem;
		border-radius: .5rem;
		color: rgb(153, 153, 153);
		font-size: 14px;
	}
	.city{
		display: flex;
		justify-content: space-between;
		width: 1.14rem;
		line-height: .86rem;
		font-size: 14px;
		text-align: center;
	}
	.city-cont{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.city>i{
		padding-right: .16rem;
	}
	
	.swiper-img-con{
		overflow: hidden;
		height: 0;
		padding-bottom: 38.7%;
	}
	.swiper-img{
		width: 100%;
	}
	
	.menu-container{
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		height: 0;
		padding-bottom: 44.74%;
	}
	.menu-item{
		width: 25%;
	}
	.menu-img{
		width: 100%;
	}
	
	.advertise-img{
		width: 100%;
	}
</style>
