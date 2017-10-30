<template>
	<div class="regular" v-title v-bind:data-title="title">
	    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>新人标1929期</p>
		</div>
		<div class="content">
			<div class="goodInfo">
				<dl>
					<dt class="cssd0566bb63175d2">10.0<span> %</span> </dt>
					<dd>预计年化利率</dd>
				</dl>
				<dl>
					<dt class="cssd0566bb63175d2">30<span> 天</span> </dt>
					<dd>理财期限</dd>
				</dl>
				<div class="progress">
   					<span></span>
   				</div>
   				<p>项目总额<span>120.00万</span></p>
   				<p>剩余可投<span>20.00万</span></p>
   				<b>70%</b>
			</div>
			<div class="duration">
				<ul class="time-sort">
					<li>投资日期</li>
					<li>起息日期</li>
					<li>回款日期</li>
				</ul>
				<div class="line">
					<img src="../assets/Oval 2@2x.png"/>
					<img src="../assets/Oval 2@2x.png"/>
					<img src="../assets/Oval 2@2x.png"/>
					<p></p>
				</div>
				<ul class="time-detail">
					<li>2017-09-30</li>
					<li>2017-09-30</li>
					<li>2017-09-30</li>
				</ul>
				<div class="line-05"></div>
				<div class="way">
					收益方式
					<span>到期还本付息</span>
				</div>
			</div>
			<div class="list">
				<div class="tab" v-bind:class="{active:classify==0}" @click="tab(0)">已投资列表</div>
				<div class="tab" v-bind:class="{active:classify==1}" @click="tab(1)">项目介绍</div>
				<ul class="ranklist" v-show="classify==0" v-if="ranklist.length != 0">
					<li>
						<div class="rank"><img src="../assets/1奖牌@2x.png"/></div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank"><img src="../assets/2奖牌@2x.png"/></div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank"><img src="../assets/3奖牌@2x.png"/></div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank cssd0566bb63175d2">第 4 名</div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank cssd0566bb63175d2">第 5 名</div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<b><router-link to="/ranklist">点击查看更多</router-link></b>
				</ul>
				<div class="emptyData" v-else>
					<img src="../assets/empy@2x.png"/>
				</div>
				<div class="emptyData" v-show="classify==1" >
					<img src="../assets/empy@2x.png"/>
				</div>
			</div>
		</div>
		<div class="buy">
			<p>1万元收益约<span>100元</span></p>
			<button @click="buy">自动投标</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'regular',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      classify: 0,				//tab切换
      title: '新人标1929期',		//标的名称
      ranklist: [1]				//已投资列表
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1);
  	},
  	tab(index){
  		this.classify = index;
  	},
  	buy(){
  		this.$router.push({path: '/buy'});
  	}
  }
}
</script>

<style lang='scss' scoped>
.regular{
	width: 100%;
	height: 100%;
	position: relative;
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.5rem;
		background: #F9F9F9;
		z-index: 2;
		img{
			width: 0.1rem;
			height: 0.16rem;
			position: absolute;
			top: .15rem;
			left: .2rem;
		}
		p{
			width: 100%;
			font-size: 0.19rem;
			text-align: center;
			line-height: 0.5rem;
			color: #333;
		}
	}
	.content{
		padding-top: .5rem;
		.goodInfo{
			width: 100%;
			padding: 0 7%;
			background: #FFFFFF;
			overflow: hidden;
			position: relative;
			margin-bottom: .15rem;
			dl{
				width: 50%;
				float: left;
				text-align: left;
				margin-top: .15rem;
				margin-bottom: .2rem;
				dt{
					font-size: .5rem;
					line-height: .5rem;
					color: #FC9800;
					span{
						font-size: .25rem;
					}
				}
				dd{
					font-size: .13rem;
					line-height: .13rem;
					color: #999999;
				}
			}
			.progress{
				width: 100%;
				height: .06rem;
				background: #F1F1F1;
				float: left;
				box-shadow: inset 0 1px 3px 0 #E5DAC9;
				border-radius: 8px;
				position: relative;
				margin-bottom: .1rem;
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
			p{
				width: 45%;
				float: left;
				font-size: .11rem;
				color: #999;
				text-align: left;
				span{
					padding: 0 .06rem;
					color: #333333;
				}
			}
			b{
				font-size: .11rem;
				color: #333333;
				text-align: right;
				font-weight: normal;
				width: 10%;
				float: left;
			}
		}
		.duration{
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			padding-top: .15rem;
			margin-bottom: .1rem;
			.time-sort{
				width: 100%;
				padding: 0 7%;
				margin-bottom: .1rem;
				overflow: hidden;
				li{
					width: 33%;
					float: left;
					font-size: .13rem;
					line-height: .15rem;
					color: #999999;
				}
				li:nth-child(1){
					text-align: left;
					padding-left: .04rem;
				}
				li:nth-child(3){
					text-align: right;
					padding-right: .04rem;
				}
			}
			.line{
				position: relative;
				margin-bottom: .05rem;
				img{
					width: .08rem;
					position: absolute;
					margin: -.04rem .04rem 0 0;
				}
				img:nth-child(1){
					left: 14%;
				}
				img:nth-child(2){
					left: 50%;
				}
				img:nth-child(3){
					right: 14%;
					margin-right: -.04rem;
				}
				p{
					width: 72%;
					height: .01rem;
					margin-left: 14%;
					background: #FC9800;
				}
			}
			.time-detail{
				width: 100%;
				padding: 0 7%;
				margin-bottom: .15rem;
				overflow: hidden;
				li{
					width: 33%;
					float: left;
					font-size: .13rem;
					line-height: .13rem;
					color: #333;
				}
				li:nth-child(1){
					text-align: left;
				}
				li:nth-child(3){
					text-align: right;
				}
			}
			.line-05{
				width: 93%;
				margin-left: 7%;
				height: 1px;
				box-shadow: inset 0 1px 1px -1px #E0E0E0;
			}
			.way{
				width: 100%;
				height: .45rem;
				padding: 0 7%;
				font-size: .13rem;
				line-height: .45rem;
				color: #999999;
				text-align: left;
				span{
					color: #333333;
					float: right;
				}
			}
		}
		.list{
			width: 100%;
			overflow: hidden;
			background: #FFFFFF;
			.tab{
				width: 50%;
				height: .42rem;
				float: left;
				font-size: .15rem;
				line-height: .42rem;
				color: #666666;
				border-bottom: .01rem solid #D7D7D7;
			}
			.active{
				border-bottom: .02rem solid #FC9800;
			}
			.emptyData{
				width: 100%;
				float: left;
				img{
					width: 1.5rem;
					margin: .7rem;
				}
			}
			.ranklist{
				width: 100%;
				padding-left: 7%;
				float: left;
				li{
					width: 100%;
					height: .5rem;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					.rank{
						width: .56rem;
						float: left;
						margin: .05rem 0 0 .02rem;
						font-size: .17rem;
						line-height: .38rem;
						text-align: left;
						img{
							display: block;
							width: .345rem;
						}
					}
					dl{
						font-size: .12rem;
						line-height: .12rem;
						text-align: left;
						float: left;
						dt{
							margin: .1rem 0 .065rem;
							color: #333;
						}
						dd{
							color: #999999;
						}
					}
					span{
						font-size: .17rem;
						line-height: .5rem;
						color: #878787;
						float: right;
						margin-right: 7%;
					}
				}
				b{
					display: block;
					width: 25%;
					font-size: .12rem;
					color: #4A77A6;
					line-height: .12rem;
					font-weight: normal;
					margin: .18rem 3% .11rem 34%;
				}
			}
		}
	}
	.buy{
		background: #FFFFFF;
		overflow: hidden;
		p{
			font-size: .11rem;
			color: #535353;
			margin-top: .1rem;
			span{
				color: #FC4D54;
			}
		}
		button{
			width: 94%;
			height: .45rem;
			background: #FFC266;
			border: 0;
			color: #FFFAF2;
			font-size: .18rem;
			padding: 0;
			line-height: .45rem;
			margin-bottom: .15rem;
		}
	}
}
</style>