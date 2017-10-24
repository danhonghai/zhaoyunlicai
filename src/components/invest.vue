<template>
  <div class="invest" v-title data-title="投资">
  	<div class="top">
  		<ul>
  			<li v-bind:class="{active:classify==0}" @click="tab(0)">定期</li>
  			<li v-bind:class="{active:classify==1}" @click="tab(1)">散标</li>
  		</ul>
  	</div>
    <div class="content">
    	<div class="regular" v-show="classify==0">
    		<ul>
    			<li class="saling" @click="regular()">
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>进行中</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">33%</b>
    			</li>
    			<li class="willsale">
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>进行中</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">0%</b>
    			</li>
    			<li class="saled">
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>已抢完</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">100%</b>
    			</li>
    		</ul>
    	</div>
			<div class="unregular" v-show="classify==1">
				<ul>
    			<li class="saling" @click="unregular()">
    				<div class="item-title">
    					<h3>散标20102期</h3>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">33%</b>
    			</li>
    			<li class="saled">
    				<div class="item-title">
    					<h3>散标20102期</h3>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">已满标</b>
    			</li>
    		</ul>
			</div>
    </div>
  	<div class="bottom">
	  	<ul>
	    	<li @click='dianji(1)'>
	    		<img src="../assets/index_nomal@2x.png"/>
	    		<p>首页</p>
	    	</li>
	    	<li class='active' @click='dianji(2)'>
	    		<img src="../assets/financial_active@2x.png"/>
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
  name: 'invest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      classify: 0					//tab切换
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
  	},
  	tab(index){	//tab切换
  		this.classify = index;
  	},
  	regular(){
  		this.$router.push({path: '/regular'})
  	},
  	unregular(){
  		this.$router.push({path: '/unregular'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h3{
	margin: 0;
	padding: 0;
	font-weight: normal;
}
.invest{
	width: 100%;
	height: 100%;
	position: relative;
	.top{
		position: fixed;
		top: 0;
		z-index: 2;
		width: 100%;
		height: .45rem;
		background: url(../assets/title@2x.png) no-repeat;
		background-size: 100% 100%;
		ul{
			li{
				font-size: .19rem;
				color: #FEEACA;
				line-height: .4rem;
				float: left;
			}
			li:nth-child(1){
				margin: 0 13.5% 0 33%;
			}
			.active{
				color: #FFFFFF;
				border-bottom: .02rem solid #FFFFFF;
			}
		}
	}
	.content{
		margin-top: .45rem;
		.regular,
		.unregular{
			ul{
				text-align: left;
				li{
					width: 100%;
					background: #FFFFFF;
					overflow: hidden;
					position: relative;
					margin-bottom: .1rem;
					.item-title{
						width: 100%;
						height: .46rem;
						padding: 0 7%;
						h3{
							display: block;
							height: .46rem;
							font-size: .15rem;
							line-height: .46rem;
							float: left;
						}
						span{
							display: block;
							float: left;
							padding: 0 .1rem;
							font-size: .13rem;
							line-height: .2rem;
							color: #FFFFFF;
							border-radius: .2rem;
							margin-left: .28rem;
							margin-top: .11rem;
						}
					}
					.goodsInfo{
						padding: 0 7%;
						dl{
							width: 32%;
							float: left;
							margin-bottom: .15rem;
							dt{
								height: .4rem;
								font-size: .2rem;
								line-height: .55rem;
								span{
									font-size: .13rem;
									line-height: .13rem;
								}
							}
							dd{
								padding-top: .08rem;
								font-size: .13rem;
								line-height: .13rem;
								color: #999999;
							}
							.shibor{
								font-size: .4rem;
								line-height: .4rem;
								span{
									font-size: .15rem;
									line-height: .15rem;
								}
							}
						}
					}
					.progress{
						position: absolute;
						bottom: 0;
						width: 33%;
						height: .02rem;
					}
					b{
						font-size: .12rem;
						line-height: .12rem;
						position: absolute;
						bottom: .1rem;
						right: .15rem;
					}
				}
				.willsale{
					.item-title{
						h3{
							color: #333333;
						}
						span{
							background: #FF6666;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #D7D7D7;
							}
							.shibor{
								color: #FC9800;
							}
						}
					}
					.progress{
						width: 100%;
						background: #D7D7D7;
					}
					b{
						color: #D7D7D7;
					}
				}
				.saling{
					.item-title{
						h3{
							color: #333333;
						}
						span{
							background: #FC9800;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #666666;
							}
							.shibor{
								color: #FC9800;
							}
						}
					}
					.progress{
						background: #FC9800;
					}
					b{
						color: #FFC266;
					}
				}
				.saled{
					.item-title{
						h3{
							color: #D7D7D7;
						}
						span{
							background: #D7D7D7;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #D7D7D7;
							}
							.shibor{
								color: #D7D7D7;
							}
						}
					}
					.progress{
						width: 100%;
						background: #D7D7D7;
					}
					b{
						color: #D7D7D7;
						font-weight: normal;
					}
				}
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
	
}
</style>
