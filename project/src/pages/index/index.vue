<template>
  <div>
    <header class="header">
    	<div class="back iconfont">&#xe67c;</div>
    	<div class="search iconfont">&#xe661;输入城市/景点/游玩主题</div>
    	<div class="city"><div class="cityCont">城市</div><i class="iconfont">&#xe6b5;</i></div>
    </header>
    <swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item in swiperImgs" :key="item.id">
	    	<div class="swiper-img-con">
	    	 <img class="swiper-img" :src="item.imgUrl"/>
	    	</div>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	  121123232434
  </div>
</template>

<script>
export default{
  name: 'Index',
  data() {
    return {
    	swiperImgs: [],
      swiperOption: {
      	loop: true,
      	autoplay: 1600,
      	pagination: '.swiper-pagination',
      }
    }
  },
  created() {
  	this.getIndexData()
  },
  methods: {
  	getIndexData() {
  		this.$http.get("/static/index.json")
  			.then(this.handleGetDataSuc.bind(this))
  	},
  	handleGetDataSuc(res) {
  		this.swiperImgs = res.body.data.swiper
  	}
  }
}
</script>

<style scoped>
	.header{
		display: flex;
		background: #05bad5;
		color: #fff;
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
		background: #fff;
		line-height: .58rem;
		border-radius: .05rem;
		color: #ccc;
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
	.cityCont{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.city>i{
		padding-right: .16rem;
	}
	.swiper-img-con{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 30.4%;
	}
	.swiper-img{
		width: 100%;
	}
</style>
