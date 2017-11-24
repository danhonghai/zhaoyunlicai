<template>
  <div class="homepage" v-title data-title="首页">
  	<div class="download" v-if="downCloseStatus==1">
  		<div class="close" @click="downClose">
  			<img src="../assets/close.png"/>
  		</div>
  		<div class="logo">
  			<img src="../assets/zylcLOGO.png"/>
  		</div>
  		<h1>赵云理财</h1>
			<div class="down" @click="download">
  			下载APP
  		</div>
  	</div>
  	<div class="mui-slider">
		  <div class="mui-slider-group mui-slider-loop">
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate" v-for="(info,index) in banner" v-if="index == banner.length-1">
		    	<a v-bind:href="info.linkUrl == '' ? 'javascript:void(0)' : info.linkUrl"><img style="height: 1.55rem;" v-bind:src="info.imgUrl" /></a>
		    </div>
		    <div class="mui-slider-item" v-for="info in banner">
		    	<a v-bind:href="info.linkUrl == '' ? 'javascript:void(0)' : info.linkUrl"><img style="height: 1.55rem;" v-bind:src="info.imgUrl" /></a>
		    </div>
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate" v-for="(info,index) in banner" v-if="index == 0">
		    	<a v-bind:href="info.linkUrl == '' ? 'javascript:void(0)' : info.linkUrl"><img style="height: 1.55rem;" v-bind:src="info.imgUrl" /></a>
		    </div>
		  </div>
		  <div class="mui-slider-indicator" id="bannerDot">
				<div class="mui-indicator" v-for="(info,index) in banner" v-bind:class="{'mui-active': index==0}"></div>
			</div>
		</div>
   	<div class="sort">
   		<ul>
   			<li v-for="(list,index) in articles">
   				<dl>
   					<dt>
   						<a v-bind:href="list.jumpUrl">
   						<img v-if="index==0" src="../assets/4@2x.png"/>
   						<img v-if="index==1" src="../assets/2@2x.png"/>
   						<img v-if="index==2" src="../assets/3@2x.png"/>
   						<img v-if="index==3" src="../assets/1@2x.png"/>
   						</a>
   					</dt>
   					<dd>{{list.title}}</dd>
   				</dl>
   			</li> 
   			<!--<li>
   				<dl>
   					<dt><router-link to='sort2'><img src="../assets/2@2x.png"/></router-link></dt>
   					<dd>三方存管</dd>
   				</dl>
   			</li>
   			<li>
   				<dl>
   					<dt><router-link to='sort3'><img src="../assets/3@2x.png"/></router-link></dt>
   					<dd>风险控制</dd>
   				</dl>
   			</li>
   			<li>
   				<dl>
   					<dt><router-link to='sort4'><img src="../assets/1@2x.png"/></router-link></dt>
   					<dd>技术保障</dd>
   				</dl>
   			</li>-->
   		</ul>
   	</div>
   	<div class="recommend">
   		<div class="novice" @click="unregular(investList[0].id)" v-if="investList.length">
   			<div class="goodsInfo">
   				<dl>
   					<dt class="cssd0566bb63175d2">{{investList[0].apr | number(1)}} <span>%</span></dt>
   					<dd> 预计年化率</dd>
   				</dl>
   				<dl>
   					<dt class="cssd0566bb63175d2">{{investList[0].timeLimit}} <span>天</span></dt>
   					<dd>理财期限</dd>
   				</dl>
   				<!--进度条-->
   				<div class="progress">
   					<span v-bind:style="{width: investList[0].proportion*100 + '%'}"></span>
   				</div>
   				<div class="money">
	   				<p>项目总额<span>{{investList[0].account | moneyshow(100000)}}{{investList[0].account<100000?'元':'万'}}</span></p>
	   				<p>剩余可投<span>{{investList[0].surplusMoney | moneyshow(100000)}}{{investList[0].surplusMoney<100000?'元':'万'}}</span></p>
   				</div>
   			</div>
   			<div class="buy">立即购买</div>
   			<div class="newUser" v-if="investList[0].isNovice==1"><img src="../assets/xin@2x.png"/></div>
   		</div>
   		<ul>
   			<li v-for="(list,index) in investList" v-if="index>0" @click="unregular(list.id)">
   				<p>{{list.borrowName}}</p>
   				<dl>
   					<dt>预计年化利率</dt>
   					<dd class="cssd0566bb63175d2 shibor">{{list.apr | number(1)}}<span>%</span></dd>
   				</dl>
   				<dl>
   					<dt>散标投资</dt>
   					<dd style="margin-top: .09rem;">超高收益</dd>
   				</dl>
   			</li>
   		</ul>
   	</div>
  	<div class="bottom">
	  	<ul>
	    	<li class='active' @click='dianji(1)'>
	    		<img src="../assets/index_active@2x.png"/>
	    		<p>首页</p>
	    	</li>
	    	<li @click='dianji(2)'>
	    		<img src="../assets/financial_nomal@2x.png"/>
	    		<p>投资</p>
	    	</li>
	    	<li @click='dianji(3)'>
	    		<img src="../assets/me_active copy@2x.png"/>
	    		<p>我的</p>
	    	</li>
	    </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      banner: null,						//banner图
      articles: null,					//分类标签
      investList: [{
      	apr: null,						//利率
      	timeLimit: null,			//投资期限
      	account: null,				//项目总额
      	surplusMoney: null		//剩余可投
      }],			//首页标列表
      downCloseStatus: 1					//关闭下载广告
    }
  },
  methods: {
  	dianji(index){
  		/*var u = navigator.userAgent, app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			alert('是否是Android：'+isAndroid);
			alert('是否是iOS：'+isiOS);*/
  		this.isLight = index;
  		console.log(this.isLight)
  		if(this.isLight == 1){
  			this.$router.push({path: '/'})
  		}else if(this.isLight == 2){
  			this.$router.push({path: '/invest'})
  		}else if(this.isLight == 3){
  			this.$router.push({path: '/personal'})
  		}
  	},
  	unregular(borrowNo){		//跳转到散标详情
  		this.$router.push({path: '/unregular/' + borrowNo})
  	},
  	downClose(){
  		this.downCloseStatus = false;
  		sessionStorage.setItem('downCloseStatus',2);
  	},
  	download(){
  		var u = navigator.userAgent, app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if(isiOS){
				alert("iOS版本即将上线，敬请期待！");
			}else{
				window.location = "http://www.zhaoyunlicai.com/app/ZhaoYun_huawei_1.0.0.apk";
			}
  	}
  },
  mounted() {
  	let that = this;
  	if(sessionStorage.getItem('downCloseStatus')){
  		that.downCloseStatus = sessionStorage.getItem('downCloseStatus');
  		console.log('that.downCloseStatus='+that.downCloseStatus)
  	}
  	console.log('down='+sessionStorage.getItem('downCloseStatus'))
		//请求首页数据
		mui.ajax(baseURL + '/api/noauth/index?type=1&count1=2&count2=2',{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			headers:{
				'Content-Type':'application/json',
				'x-auth-token':that.getCookie("tokenZylc")
				/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
			},
			success:function(res){
				console.log(res);
				if(res.success){
					that.banner = res.data.banners;
					that.articles = res.data.articles;
					that.investList = res.data.productDetails;
			  	setTimeout(function(){
			  		//轮播图
				  	var gallery = mui('.mui-slider');
						gallery.slider({
						  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
						});
			  	},200)
				}
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
  }/*,
  beforeRouteEnter(to, from, next){
    next(function (vm) {
    	if(sessionStorage.getItem('downCloseStatus')){
    		console.log('345')
		  	vm.downCloseStatus = sessionStorage.getItem('downCloseStatus');
    	}
		});
	}*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.homepage{
	width: 100%;
	height: 100%;
	position: relative;
	padding-bottom: .5rem;
	.download{
		width: 100%;
		height: .5rem;
		color: #FFFFFF;
		background: #FC9800;
		.close{
			overflow: hidden;
			float: left;
			margin: .15rem 0 0 .18rem;
			img{
				width: .2rem;
				float: left;
			}
		}
		.logo{
			overflow: hidden;
			float: left;
			margin: .125rem .13rem 0 .24rem;
			img{
				width: .25rem;
				float: left;
			}
		}
		h1{
			margin: 0;
			font-size: .18rem;
			float: left;
			line-height: .5rem;
			font-weight: normal;
		}
		.down{
			width: .86rem;
			height: .25rem;
			font-size: .14rem;
			border: 1px solid #FFFFFF;
			float: right;
			line-height: .25rem;
			margin: .13rem .3rem 0 0;
			border-radius: .15rem;
			color: #FFFFFF;
		}
	}
	.mui-slider{
		img{
			display: block;
		}
		#bannerDot{
			width: auto;
			right: 4%;
			bottom: .09rem;
			.mui-indicator{
				width: .06rem;
				height: .06rem;
				background: #FFFFFF;
				border-radius: .06rem;
				display: block;
				float: left;
				transition: width 500ms ease;		/*	动画*/
			}
			.mui-indicator.mui-active{
				width: .17rem;
			}
		}
	}
	.bottom{
		position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background: #FFFFFF;
    box-shadow: inset 0 1px 1px -1px #D8D8D8;
    ul{
      width: 100%;
      background: #FFFFFF;
			li{
				float: left;
				width: 33%;
				height: .5rem;
				float: left;
				font-size: .1rem;
				line-height: .1rem;
				img{
					display: block;
					width: .2rem;
					height: .2rem;
					margin: .08rem auto .05rem;
				}
				p{
					margin: 0;
					color: #BCBCBC;
				}
			}
		}
		.active{
			p{
				color: #FC9800;
			}
		}
	}
	.sort{
		width: 100%;
		height: 1rem;
		font-size: .12rem;
		line-height: .12rem;
		color: #666;
		background: #FFFFFF;
		ul{
			li{
				width: 25%;
				height: 1rem;
				float: left;
				dt{
					height: .63rem;
					margin-bottom: .1rem;
					img{
						width: .48rem;
						height: .48rem;
						margin: .15rem auto 0;
					}
				}
			}
		}
	}
	.recommend{
		margin-top: .1rem;
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		.novice{
			width: 86%;
			height: 1.78rem;
			margin: .11rem auto 0;
			box-shadow: 0 12px 17px 0 rgba(255,194,102,0.15);
			border-radius: 4px;
			position: relative;
			.goodsInfo{
				width: 100%;
				height: 1.32rem;
				border-bottom: .01rem solid #FFEED6;
				padding: .15rem .16rem 0;
				dl{
					text-align: left;
					float: left;
					dt{
						font-size: .4rem;
						color: #FC9800;
						line-height: .4rem;
						margin-bottom: .08rem;
						span{
							font-size: .2rem;
							line-height: .2rem;
						}
					}
					dd{
						font-size: .13rem;
						line-height: .13rem;
						color: #999;
					}
				}
				dl:nth-child(1){
					width: 60%;
				}
				dl:nth-child(2){
					width: 40%;
				}
				.progress{
					width: 100%;
					height: .06rem;
					background: #F1F1F1;
					float: left;
					box-shadow: inset 0 1px 3px 0 #E5DAC9;
					border-radius: 8px;
					margin-top: .08rem;
					position: relative;
					span{
						width: 23%;
						height: .06rem;
						position: absolute;
						top: 0;
						left: 0;
						background: -webkit-linear-gradient(top,#FFC266,#FC9800);
						border-radius: 8px;
					}
				}
				.money{
					p{
						font-size: .11rem;
						line-height: .11rem;
						color: #999;
						width: 50%;
						float: left;
						margin-top: .1rem;
						span{
							color: #333333;
							padding: 0 .08rem;
						}
					}
					p:nth-child(1){
						text-align: left;
					}
					p:nth-child(2){
						text-align: right;
					}
				}
			}
			.buy{
				width: 100%;
				height: .45rem;
				font-size: .17rem;
				color: #FC9800;
				line-height: .45rem;
			}
			.newUser{
				position: absolute;
				top: -.17rem;
				right: -.06rem;
				img{
					width: .75rem;
				}
			}
		}
		ul{
			width: 100%;
			text-align: left;
			margin-top: .15rem;
			overflow: hidden;
			background: #F6F6F6;
			li{
				width: 100%;
				height:1.1rem;
				padding: 0 7%;
				margin-bottom: .1rem;
				float: left;
				background: #FFFFFF;
				p{
					font-size: .15rem;
					line-height: .25rem;
					color: #999;
					margin-top: .15rem;
					margin-bottom: .1rem;
				}
				dl{
					width: 50%;
					float: left;
					dt{
						font-size: .13rem;
						line-height: .13rem;
						color: #333;
					}
					dd{
						font-size: .15rem;
						height: .25rem;
						line-height: .25rem;
						margin-top: .07rem;
						color: #FC9800;
						font-weight: 700;
					}
					.shibor{
						font-size: .25rem;
						line-height: .25rem;
						color: #FC9800;
						span{
							font-size: .13rem;
							line-height: .13rem;
						}
					}
				}
			}
		}
	}
}
</style>
