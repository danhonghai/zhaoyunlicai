<template>
  <div class="cashCommission" v-title data-title="提现">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>提现</p>
		</div>
		<div class='restMoney'>
			<span>可提现金额</span>
			<span>{{sumCashMoney | number(2)}}元</span>
		</div>
		<div class='bankInfo'>
			<img src="../assets/4@2x.png" alt="" />
			<span>招商银行</span>
			<span>尾号1234</span>
		</div>
		<div class='money'>
			<span>提现金额</span>
			<input v-model="cashMoney" @blur="filterNum" @focus="typeinput='text'" v-bind:type="typeinput" placeholder="输入提现金额" />
			<div class='btn' @click="allMoney">全部金额</div>
		</div>
		<div class='arriveTime'>预计两小时内到账</div>
		<button>确定</button>
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
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'cashCommission',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false,
      typeinput: 'number',		//input输入框类型
      sumCashMoney: 120000,		//可提现金额
      cashMoney: null,					//提现金额
      sixPsd: null,				//支付密码
      sixPsdStatus: [false, false, false, false, false, false],		//支付密码输入状态
      paypsdStatus: true			//支付密码显隐
    }
  },
  watch: {
  	cashMoney: function(){
	    this.cashMoney = this.moneyType(this.cashMoney);
  	},
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
  directives: {
		focus: {
			// 自动获得焦点
			inserted: function(el) {
				el.focus()
			}
		}
	},
  methods: {
  	allMoney(){
  		this.cashMoney = this.sumCashMoney.toFixed(2);
  	},
  	goBack(){
  		this.$router.go(-1);
  	},
  	filterNum(){
  		this.typeinput = 'number';
  		this.cashMoney = parseFloat(this.cashMoney).toFixed(2);
  	},
  	close() {	//关闭输入交易密码框
			this.paypsdStatus = false;
			this.sixPsd = null;
			this.sixPsdStatus = [false, false, false, false, false, false];
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.cashCommission{
	width: 100%;
	height: 100%;
	position: relative;
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.5rem;
		background: #F9F9F9;
		img{
			float: left;
			width: 0.1rem;
			height: 0.16rem;
			margin: 0.15rem 1.5rem 0 0.2rem;
		}
		p{
			float: left;
			font-size: 0.19rem;
			line-height: 0.5rem;
			color: #333;
			margin-bottom: 0;
		}
	}
	.restMoney{
		width: 100%;
		height: 0.45rem;
		margin-top: 0.5rem;
		span:nth-child(1){
			display: block;
			float: left;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #999;
			margin-left: 0.19rem;
		}
		span:nth-child(2){
			display: block;
			float: left;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #FF6666;
			margin-left: 0.08rem;
		}
	}
	.bankInfo{
		width: 100%;
		height: 0.6rem;
		background: #fff;
		img{
			float: left;
			width: 0.3rem;
			height: 0.3rem;
			margin-left: 0.3rem;
			margin-top: 0.15rem;
		}
		span{
			float: left;
			display: block;
			font-size: 0.15rem;
			line-height: 0.6rem;
			color: #333;
			margin-left: 0.1rem;
		}
	}
	.money{
		width: 100%;
		height: 0.45rem;
		background: #fff;
		margin-top: 0.1rem;
		span{
			float: left;
			display: block;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #333;
			margin-left: 0.3rem;
		}
		input{
			float: left;
			width: 1.8rem;
			height: 0.45rem;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #333;
			padding-left: 0.1rem;
			border: none;
			margin-bottom: 0;
			margin: 0;
			padding: 0;
			padding-left: .2rem !important;
		}
		.btn{
			float: right;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #4A77A6;
			margin-right: 0.28rem;
		}
	}
	.arriveTime{
		height: 0.32rem;
		text-align: left;
		font-size: 0.12rem;
		line-height: 0.32rem;
		color: #999;
		padding-left: 0.3rem;
	}
	button{
		width: 3.51rem;
		height:0.45rem;
		background: #FFC266;
		font-size: 0.18rem;
		line-height: 0.45rem;
		color: #fff;
		border-radius: 0.03rem;
		border: none;
		padding: 0;
		margin-top: 0.1rem;
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
	.tips{
		position: absolute;
		left: 0.8rem;
		top: 0.5rem;
		width: 2rem;
		font-size: 0.15rem;
		color: #fff;
		line-height: 0.3rem;
		background: rgba(55,55,55,.8);
		padding-left: 0.07rem;
		padding-right: 0.07rem;
		z-index: 100;
	}
	.haunchong{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(55,55,55,.3);
		z-index: 20;
		img{
			position: absolute;
			left: 1.5rem;
			top: 2rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 0.06rem;
		}
	}
}
</style>
