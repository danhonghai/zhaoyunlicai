<template>
	<div class="investRecordDetail" v-title data-title="投资详情">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>投资详情</p>
		</div>
		<div class="content">
			<div class="total">
				<div class="title">
					信用贷款计划
					<span>退出自动投标</span>
				</div>
				<div class="totalMoney">
					<dl style="padding-left: .26rem;">
						<dt>投资金额</dt>
						<dd class="cssd0566bb63175d2">{{1000 | number(2)}}<span>元</span></dd>
					</dl>
					<dl style="padding-left: .52rem;">
						<dt>到期收益</dt>
						<dd class="cssd0566bb63175d2">{{50| number(2)}}<span>元</span></dd>
					</dl>
				</div>
				<div class="totalTime">
					<ul>
						<li>投资日: 2017－04－01</li>
						<li>起息日: 2017－04－01</li>
						<li>结算日: 2017－04－01</li>
					</ul>
					<ul>
						<li>预计年化:10%</li>
						<li>计息天数:30天</li>
					</ul>
				</div>
			</div>
			<div class="detail">
				<div class="title">
					详情列表
				</div>
				<ul>
					<li v-for="(p,index) in psdlist">
						<div class="sonTitle">
							信用贷款计划
							<span>投资中</span>
						</div>
						<div class="money">
							<dl style="padding-left: .26rem;">
								<dt>投资金额</dt>
								<dd class="cssd0566bb63175d2">{{1000 | number(2)}}<span>元</span></dd>
							</dl>
							<dl style="padding-left: .52rem;">
								<dt>到期收益</dt>
								<dd class="cssd0566bb63175d2">{{50| number(2)}}<span>元</span></dd>
							</dl>
						</div>
						<div class="time" v-if="showStatus[index]">
							<p>项目编号: XXXX</p>
							<p>借款人: 张XX</p>
							<p>借款时间: 2017－04－01</p>
							<p>到期时间: 2017－04－01</p>
							<b @click="shows(index)">收起</b>
						</div>
						<div @click="shows(index)" class="pulldown" v-if="!showStatus[index]">
							<img src="../assets/Path 145 Copy 4@2x.png"/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'investRecordDetail',
		data() {
			return {
				psdlist:[1,2,3,4,5],
				showStatus:[false,true,false,true,true]
			}
		},
		methods: {
			goBack() {	//后退
				this.$router.go(-1)
			},
			shows(index){			//收起or展示
				this.$set(this.showStatus, index, !this.showStatus[index]);
			}
		},
		mounted() {
			let that = this;
			//请求投资详情数据
			mui.ajax(baseURL + '/api/noauth/invest_detail?tenderId=' + that.$route.params.tenderId,{
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
						console.log('投资记录详情成功')
					}else{
						console.log('投资记录详情失败')
					}
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					console.log(type);
				}
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.investRecordDetail {
		width: 100%;
		height: 100%;
		.header {
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.5rem;
			background: #F9F9F9;
			z-index: 2;
			img {
				width: 0.1rem;
				height: 0.16rem;
				position: absolute;
				top: .15rem;
				left: .2rem;
			}
			p {
				width: 100%;
				font-size: 0.19rem;
				text-align: center;
				line-height: 0.5rem;
				color: #333;
			}
		}
		.content {
			padding-top: 3.5rem;
			text-align: left;
			.total{
				position: fixed;
				top: .5rem;
				background: #FFFFFF;
				overflow: hidden;
				.title{
					width: 93%;
					height: .43rem;
					float: right;
					font-size: .15rem;
					color: #333333;
					line-height: .43rem;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					span{
						color: #FC9800;
						float: right;
						margin-right: 7%;
					}
				}
				.totalMoney{
					float: left;
					width: 100%;
					height: .75rem;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					dl{
						width: 50%;
						height: .75rem;
						float: left;
						dt{
							font-size: .13rem;
							line-height: .13rem;
							color: #666666;
							margin: .15rem 0 .08rem;
						}
						dd{
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
				.totalTime{
					width: 100%;
					height: 1.37rem;
					float: left;
					ul{
						width: 50%;
						height: 1.37rem;
						float: left;
						font-size: .13rem;
						line-height: .13rem;
						color: #999999;
						li{
							height: .47rem;
							line-height: .47rem;
							padding-left: .35rem;
						}
						li:nth-child(2){
							background: #FBFBFB;
						}
					}
					ul:nth-child(1){
						position: relative;
						li{
							padding-left: .26rem;
						}
					}
					ul:nth-child(1):before{
					   content: " ";
					   position: absolute;
					   top: 0;
					   bottom: 0;
					   right: 0;
					   width: 1px;
					   border-right: 1px solid #E0E0E0;
					   -webkit-transform-origin: 0 0;
					   transform-origin: 0 0;
					   -webkit-transform: scaleX(0.5);
					   transform: scaleX(0.5);
					}
				}
			}
			::-webkit-scrollbar{width:0px}
			.detail{
				position: fixed;
				top: 3.04rem;
				bottom: 0;
				height: auto;
				overflow: auto;
				padding-top: .43rem;
				.title{
					position: fixed;
					top: 3.04rem;
					width: 100%;
					height: .43rem;
					background: #F6F6F6;
					padding-left: 7%;
					font-size: .14rem;
					color: #999999;
					line-height: .43rem;
				}
				ul{
					li{
						background: #FFFFFF;
						overflow: hidden;
						margin-bottom: .1rem;
						.sonTitle{
							width: 93%;
							height: .43rem;
							float: right;
							font-size: .15rem;
							color: #333333;
							line-height: .43rem;
							box-shadow: inset 0 -1px 1px -1px #E0E0E0;
							span{
								color: #FC9800;
								float: right;
								margin-right: 7%;
							}
						}
						.money{
							float: left;
							width: 100%;
							height: .75rem;
							dl{
								width: 50%;
								height: .68rem;
								float: left;
								dt{
									font-size: .13rem;
									line-height: .13rem;
									color: #666666;
									margin: .15rem 0 .08rem;
								}
								dd{
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
						.time{
							padding-top: .04rem;
							width: 100%;
							height: .8rem;
							font-size: .13rem;
							line-height: .13rem;
							color: #999999;
							float: left;
							p{
								width: 50%;
								float: left;
								margin-bottom: .1rem;
							}
							p:nth-child(odd){
								padding-left: 7%;
							}
							p:nth-child(even){
								padding-left: .35rem;
							}
							b{
								display: block;
								width: .3rem;
								float: left;
								font-size: .14rem;
								line-height: .14rem;
								color: #4A77A6;
								font-weight: normal;
								margin: 0 auto;
								margin-left: 1.73rem;
							}
						}
						.pulldown{
							width: 100%;
							height: .18rem;
							float: left;
							img{
								display: block;
								width: .13rem;
								margin: 0 auto;
							}
						}
					}
				}
			}
		}
	}
</style>