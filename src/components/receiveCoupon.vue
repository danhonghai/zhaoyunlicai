<template>
	<div class="receiveCoupon" v-title data-title="优惠券">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>优惠券</p>
		</div>
		<div class="content">
			<ul>
				<li>
					<div class="money cssd0566bb63175d2">+ <span>2</span> %</div>
					<dl>
						<dt>国庆狂欢加息卷 <span>(有效期3天 限额500份)</span></dt>
						<dd>生效日期：2017.08.08 18:55</dd>
						<dd>失效日期：2017.08.08 18:55</dd>
					</dl>
					<div class="liBottom">
						<p>适用范围：所有投资范围</p>
						<span @click="receive">立即领取</span>
					</div>
				</li>
				<li>
					<div class="money cssd0566bb63175d2">￥ <span>5.5</span></div>
					<dl>
						<dt>国庆狂欢加息卷 <span>(有效期3天 限额500份)</span></dt>
						<dd>生效日期：2017.08.08 18:55</dd>
						<dd>失效日期：2017.08.08 18:55</dd>
					</dl>
					<div class="liBottom">
						<p>直接划入您的账户余额</p>
						<span class="received">已经领取</span>
					</div>
				</li>
			</ul>
		</div>
		<div class='haunchong' v-if="huanchongStatus">
			<div class="success animated" v-if="successStatus" v-bind:class="[huanchongStatus2?'zoomIn':'zoomOut']">
				<h2>大礼包</h2>
				<dl>
					<dt>领取成功</dt>
					<dd>可前往“可用余额”查看</dd>
				</dl>
				<button @click="close"></button>
			</div>
			<div class="fail animated" v-if="failStatus" v-bind:class="[huanchongStatus2?'zoomIn':'zoomOut']">
				<button @click="close"></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'receiveCoupon',
		data() {
			return {
				huanchongStatus: false,			//弹框状态
				huanchongStatus2:true,			//弹框动画
				successStatus: true,			//成功弹窗状态
				failStatus: false				//失败弹窗状态
			}
		},
		methods: {
			goBack(){
		  		this.$router.go(-1)
		  	},
			close(){
				let that =this;
				that.huanchongStatus2 = false;
				setTimeout(function(){
					that.huanchongStatus = false;
				},500)
			},
			receive(){
				this.huanchongStatus = true;
				this.huanchongStatus2 = true;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.receiveCoupon {
		width: 100%;
		height: 100%;
		position: relative;
		.header{
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.5rem;
			background: #F9F9F9;
			border-bottom: 1px solid #e0e0e0;
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
		.content {
			padding-top: .5rem;
			ul{
				li{
					width: 3.5rem;
					height: 1.43rem;
					background: url(../assets/优惠券卡面@2x.png) no-repeat;
					background-size: 100% 100%;
					margin: .1rem 0 0 .12rem;
					position: relative;
					.money{
						width: .9rem;
						text-align: center;
						font-size: .13rem;
						color: #ffc800;
						margin-top: .35rem;
						margin-bottom: .27rem;
						float: left;
						span{
							font-size: .35rem;
							line-height: .35rem;
						}
					}
					dl{
						float: left;
						padding-left: .12rem;
						text-align: left;
						dt{
							margin: .2rem 0 .12rem;
							line-height: .14rem;
							font-size: .14rem;
							color: #666666;
							span{
								font-size: .12rem;
								color: #999999;
							}
						}
						dd{
							font-size: .12rem;
							color: #999999;
							line-height: .18rem;
						}
					}
					.liBottom{
						width: 100%;
						height: .45rem;
						float: left;
						font-size: .15rem;
						p{
							color: #666;
							float: left;
							line-height: .45rem;
							padding-left: .24rem;
						}
						span{
							color: #ff9800;
							padding: .05rem;
							float: right;
							line-height: .15rem;
							margin: .1rem 0.08rem 0 0;
						}
						.received{
							color: #999999;
						}
					}
				}
			}
		}
		.haunchong {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(55, 55, 55, .6);
			z-index: 20;
			.fail,
			.success{
				width: 2.2rem;
				height: 2.45rem;
				margin: 30% auto;
				button{
					background: none;
					width: .28rem;
					height: .28rem;
					margin: 2.09rem auto;
					border: 0;
				}
			}
			.fail{
				background: url(../assets/领取失败弹窗@2x.png) no-repeat;
				background-size: 100% 100%;
			}
			.success{
				height: 2.5rem;
				background: url(../assets/领取成功.png) no-repeat;
				background-size: 100% 100%;
				overflow: hidden;
				h2{
					color: #FFFFFF;
					font-size: .13rem;
					font-weight: normal;
					margin-top: .79rem;
					line-height: .13rem;
					padding-left: .22rem;
				}
				dl{
					margin-top: .6rem;
					dt{
						font-size: .16rem;
						color: #333333;
						line-height: .16rem;
						margin-bottom: .08rem;
					}
					dd{
						font-size: .12rem;
						color: #999999;
						line-height: .12rem;
					}
				}
				button{
					margin: .26rem auto;
				}
			}
		}
	}
</style>