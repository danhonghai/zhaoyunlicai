<template>
	<div class="buy" v-title data-title="购买">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>购买</p>
		</div>
		<div class="content">
			<h3>剩余可投<span>1200000.00元</span></h3>
			<div class="money">
				<div class="balance">
					账户余额
					<span>{{balance | number(2)}}元</span>
					<b><router-link to="/recharge">充值</router-link></b>
				</div>
				<div class="investMoney">投资金额
					<input @keyup="change" type="number" v-model="investMoney" placeholder="100起投 100的整数" />
				</div>
			</div>
			<p>预计收益： <span>{{50 | number(2)}}</span>元</p>
			<button @click="pay">{{payWord}}</button>
		</div>
		<div class="bottom">购买即视为同意《赵云理财协议》</div>
		<transition name="fade">
			<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		</transition>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
		<div class='paypsd' v-if='paypsdStatus'>
			<div class="psdContent">
				<div class="psdHeader">
					<img src="../assets/Path 145 Copy 3@2x.png" alt="" @click="close" />
					<p>输入支付密码</p>
				</div>
				<div class="sixPassword">
					<input type="tel" value="" v-model="sixPsd" v-focus maxlength="6" />
					<div class="passBox" v-for="item in sixPsdStatus" v-bind:class="{active:item}"><span></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'setPayPsd',
		data() {
			return {
				balance: 20,
				payWord: '购买',
				investMoney: '',
				sixPsd: null,
				sixPsdStatus: [false, false, false, false, false, false],
				tipsstatus: false,
				tips: '提示框',
				huanchongStatus: false,
				paypsdStatus: false
			}
		},
		directives: {
			focus: {
				// 指令的定义
				inserted: function(el) {
					el.focus()
				}
			}
		},
		watch: {
			sixPsd: function() {
				for(let i = 0; i < this.sixPsdStatus.length; i++) {
					if(i < this.sixPsd.length) {
						this.sixPsdStatus[i] = true;
					} else {
						this.sixPsdStatus[i] = false;
					}
				}
				if(this.sixPsd.length == this.sixPsdStatus.length) {
					this.$router.push({
						path: '/buyResult'
					});
				}
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			change() {
				if(this.investMoney > this.balance) {
					this.payWord = '余额不足,请充值';
				} else {
					this.payWord = '购买';
				}
			},
			pay() {
				console.log(this.investMoney);
				if(this.investMoney == '') {
					this.tipsstatus = true;
					this.tips = '请输入金额';
					let that = this;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}
				if(this.balance < this.investMoney) {
					this.$router.push({
						path: '/recharge'
					});
				} else if(this.investMoney) {
					//this.$router.push({path: '/buyResult'});
					this.paypsdStatus = true;
				}
			},
			close() {
				this.paypsdStatus = false;
			}
		},
		mounted() {
			if(this.balance <= 0) {
				this.payWord = '余额不足,请充值';
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active in below version 2.1.8 */
	
	{
		opacity: 0
	}
	
	.buy {
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
			margin-top: .5rem;
			h3 {
				width: 100%;
				height: .45rem;
				padding: 0 7%;
				font-size: .15rem;
				color: #999999;
				line-height: .45rem;
				text-align: left;
				font-weight: normal;
				span {
					color: #333333;
					padding-left: .15rem;
				}
			}
			.money {
				width: 100%;
				height: .9rem;
				padding-left: 7%;
				background: #FFFFFF;
				font-size: .15rem;
				color: #333333;
				line-height: .45rem;
				text-align: left;
				.balance {
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					span {
						padding-left: .15rem;
						color: #FF6666;
					}
					b {
						font-weight: normal;
						float: right;
						margin-right: 7%;
						a {
							color: #4A77A6;
						}
					}
				}
				.investMoney {
					input {
						padding: 0;
						margin: 0;
						width: 70%;
						font-size: .15rem;
						border: 0;
						padding-left: .1rem;
					}
				}
			}
			p {
				font-size: .11rem;
				line-height: .3rem;
				text-align: left;
				padding-left: 7%;
				margin-bottom: .1rem;
				span {
					font-size: .12rem;
					color: #FF6666;
				}
			}
			button {
				width: 94%;
				height: .45rem;
				background: #FFC266;
				font-size: .18rem;
				color: #FFFAF2;
				border: 0;
				padding: 0;
				line-height: .45rem;
			}
		}
		.bottom {
			width: 100%;
			text-align: center;
			font-size: .13rem;
			line-height: .13rem;
			color: #999999;
			position: absolute;
			bottom: .15rem;
		}
		.tips {
			position: absolute;
			left: 0.8rem;
			top: 0.5rem;
			width: 2rem;
			font-size: 0.15rem;
			color: #fff;
			line-height: 0.3rem;
			background: rgba(55, 55, 55, .8);
			padding-left: 0.07rem;
			padding-right: 0.07rem;
			z-index: 100;
		}
		.haunchong {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(55, 55, 55, .3);
			z-index: 20;
			img {
				position: absolute;
				left: 1.5rem;
				top: 2rem;
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 0.06rem;
			}
		}
		.paypsd {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(55, 55, 55, .3);
			z-index: 20;
			.psdContent {
				width: 100%;
				position: absolute;
				bottom: 0;
				.psdHeader {
					width: 100%;
					height: .5rem;
					background: #FFFFFF;
					font-size: .19rem;
					line-height: .5rem;
					text-align: center;
					position: relative;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					img {
						width: .07rem;
						position: absolute;
						left: 7%;
						top: .18rem;
					}
					p {
						color: #333333;
					}
				}
				.sixPassword {
					width: 100%;
					height: .8rem;
					padding-top: .19rem;
					padding-left: .26rem;
					background: #FBFBFB;
					position: relative;
					input {
						margin: 0;
						padding: 0;
						position: absolute;
						top: .19rem;
						left: .26rem;
						opacity: 0;
						z-index: 10;
						width: 3.23rem;
						height: .45rem;
					}
					.passBox {
						width: .54rem;
						height: .45rem;
						float: left;
						border: .005rem solid #D7D7D7;
						border-right: 0;
						background: #FFFFFF;
					}
					.active {
						position: relative;
						display: flex;
						span {
							display: block;
							width: .13rem;
							height: .13rem;
							background: #000000;
							border-radius: 50%;
							margin: auto;
						}
					}
					.passBox:nth-last-child(1) {
						border-right: 1px solid #D7D7D7;
						;
					}
				}
			}
		}
	}
</style>