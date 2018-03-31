<template>
  <div>
    <header class="header">
    	<div class="back iconfont">&#xe67c;</div>
    	<div class="search"></div>
    	<div class="city">城市<i class="iconfont">&#xe6b5;</i></div>
    </header>
    <swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide>
	    	<div class="swiper-img-con">
	    	 <img class="swiper-img" src="https://img1.qunarzz.com/vc/98/87/44/24808f10cdfa9626e397f660a8.jpg"/>
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="swiper-img-con">
	    	 <img class="swiper-img" src="https://img1.qunarzz.com/vc/b1/8b/65/434a993746bdb3b321d059386f.jpg"/>
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="swiper-img-con">
	    	 <img class="swiper-img" src="https://img1.qunarzz.com/vc/c5/77/bd/0ae9ab95338e37b9dc8c8412b2.jpg"/>
	    	</div>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
export default{
  name: 'Index',
  data () {
    return {
      swiperOption: {
      	pagination: {
          el: '.swiper-pagination'
        }
      }
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
		background: #fff;
		border-radius: .05rem;
	}
	.city{
		width: 1.14rem;
		line-height: .86rem;
		font-size: 14px;
		text-align: center;
	}
	.swiper-img-con{
		width: 100%;
	}
	.swiper-img{
		width: 100%;
	}
</style>
