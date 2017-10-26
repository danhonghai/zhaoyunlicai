<template>
	<div class="unregular" v-title v-bind:data-title="title">
	    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>散标第29次借款</p>
		</div>
		<div class="content">
			<div class="goodInfo">
				<dl>
					<dt class="cssd0566bb63175d2">10.0<span> %</span> </dt>
					<dd>利率</dd>
				</dl>
				<dl>
					<dt class="cssd0566bb63175d2">30<span> 天</span> </dt>
					<dd>投资期限<span>到期还本付息</span></dd>
				</dl>
				<div class="progress">
   					<span></span>
   				</div>
   				<p>项目总额<span>120.00万</span></p>
   				<p>剩余可投<span>20.00万</span></p>
   				<b>70%</b>
			</div>
			<div class="borrowerInfo">
				<h3>借款人信息</h3>
				<ul>
					<li>
						<img src="../assets/success_ok@2x.png"/>身份证认证
					</li>
					<li>
						<img src="../assets/success_ok@2x.png"/>手机认证
					</li>
					<li>
						<span>姓名:</span>罗纳尔迪尼奥
					</li>
					<li>
						<span>年龄:</span>36岁
					</li>
					<li>
						<span>职业:</span>足球员
					</li>
					<li>
						<span>性别:</span>男
					</li>
				</ul>
				<h3>信用记录</h3>
				<ul>
					<li>
						<span>芝麻信用:</span>459分
					</li>
					<li>
						<span>逾期次数:</span>5次
					</li>
					<li>
						<span>借款次数:</span>10次
					</li>
				</ul>
			</div>
			<div class="list">
				<h3>已投资列表</h3>
				<ul class="ranklist">
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
			</div>
		</div>
		<div class="buy">
			<p>1万元收益约<span>100元</span></p>
			<button>自动投标</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'unregular',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '散标第29次借款'
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang='scss' scoped>
.unregular{
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
					span{
						font-size: .11rem;
						float: right;
					}
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
		.borrowerInfo{
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			h3{
				width: 100%;
				height: .43rem;
				background: #F6F6F6;
				padding: 0 7%;
				font-size: .14rem;
				color: #999999;
				font-weight: normal;
				line-height: .43rem;
				text-align: left;
				margin: 0;
			}
			ul{
				padding: 0 7%;
				background: #FFFFFF;
				overflow: hidden;
				li{
					font-size: .15rem;
					color: #333333;
					line-height: .45rem;
					text-align: left;
					float: left;
					img{
						width: .17rem;
						display: block;
						margin: .14rem .08rem 0 0;
						float: left;
					}
					span{
						color: #999999;
						padding-right: .15rem;
					}
				}
				li:nth-child(odd){
					width: 60%;
				}
				li:nth-child(even){
					width: 40%;
				}
			}
		}
		.list{
			width: 100%;
			overflow: hidden;
			background: #FFFFFF;
			h3{
				width: 100%;
				height: .43rem;
				background: #F6F6F6;
				padding: 0 7%;
				font-size: .14rem;
				color: #999999;
				font-weight: normal;
				line-height: .43rem;
				text-align: left;
				margin: 0;
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