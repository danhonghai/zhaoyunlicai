<template>
  <div class="homepage" v-title data-title="首页">
  	<div class="mui-slider">
		  <div class="mui-slider-group mui-slider-loop">
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../assets/banner.png" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../assets/banner.png" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../assets/banner.png" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../assets/banner.png" /></a></div>
		    <div class="mui-slider-item"><a href="#"><img src="../assets/banner.png" /></a></div>
		    <!--支持循环，需要重复图片节点-->
		    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../assets/banner.png" /></a></div>
		  </div>
		</div>
   	<div class="sort">
   		<ul>
   			<li>
   				<dl>
   					<dt><a href="#"><img src="../assets/4@2x.png"/></a></dt>
   					<dd><router-link to='login'>公司介绍</router-link></dd>
   				</dl>
   			</li>
   			<li>
   				<dl>
   					<dt><a href="#"><img src="../assets/2@2x.png"/></a></dt>
   					<dd>银行存管</dd>
   				</dl>
   			</li>
   			<li>
   				<dl>
   					<dt><a href="#"><img src="../assets/3@2x.png"/></a></dt>
   					<dd>风险控制</dd>
   				</dl>
   			</li>
   			<li>
   				<dl>
   					<dt><a href="#"><img src="../assets/1@2x.png"/></a></dt>
   					<dd>技术保障</dd>
   				</dl>
   			</li>
   		</ul>
   	</div>
   	<div class="recommend">
   		<div class="novice">
   			<div class="goodsInfo">
   				<dl>
   					<dt class="cssd0566bb63175d2">10.0 <span>%</span></dt>
   					<dd> 预计年化率</dd>
   				</dl>
   				<dl>
   					<dt class="cssd0566bb63175d2">30 <span>天</span></dt>
   					<dd>理财期限</dd>
   				</dl>
   				<!--进度条-->
   				<div class="progress">
   					<span></span>
   				</div>
   				<div class="money">
	   				<p>项目总额<span>20.00万</span></p>
	   				<p>剩余可投<span>20.00万</span></p>
   				</div>
   			</div>
   			<div class="buy">立即购买</div>
   			<div class="newUser"><img src="../assets/xin@2x.png"/></div>
   		</div>
   		<ul>
   			<li>
   				<p>超高收益</p>
   				<dl>
   					<dt>预计年化利率</dt>
   					<dd class="cssd0566bb63175d2 shibor">10.0 <span>%</span></dd>
   				</dl>
   				<dl>
   					<dt>信用贷款计划</dt>
   					<dd>散标投资</dd>
   				</dl>
   			</li>
   			<li>
   				<p>超高收益</p>
   				<dl>
   					<dt>预计年化利率</dt>
   					<dd class="cssd0566bb63175d2 shibor">10.0 <span>%</span></dd>
   				</dl>
   				<dl>
   					<dt>信用贷款计划</dt>
   					<dd>散标投资</dd>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	dianji(index){
  		this.isLight = index;
  		console.log(this.isLight)
  		if(this.isLight == 1){
  			this.$router.push({path: '/'})
  		}else if(this.isLight == 2){
  			this.$router.push({path: '/invest'})
  		}else if(this.isLight == 3){
  			this.$router.push({path: '/personal'})
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.homepage{
	width: 100%;
	height: 100%;
	position: relative;
	padding-bottom: .5rem;
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
					margin-top: .15rem;
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
					line-height: .15rem;
					color: #999;
					margin-top: .1rem;
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
						font-size: .13rem;
						color: #999;
						height: .25rem;
						line-height: .25rem;
						margin-top: .07rem;
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
