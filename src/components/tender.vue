<template>
  <div class="tender" v-title data-title="自动投标">
    <div class='header'>
		<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
		<p>自动投标</p>
	</div>
	<div class="content">
		<h2>类型:彩虹标14D</h2>
		<div class="totalMoney">
			<label for="investMoney">投资总额</label>
			<input v-bind:type="typeinput" id="investMoney" v-model="investMoney" @focus="typeinput='text'" @blur="filterNum" placeholder="100起投 100的整数"/>
		</div>
		<h3>选择投资方式</h3>
		<div class="duration">
			<div class="itemTit" @click="tab(0)">
				按授权期限
				<span>预计收益: <b>{{50 | number(2)}}</b>元</span>
				<!--<img src="../assets/success_ok copy2@2x.png"/>-->
				<div class="choice" v-bind:class="{choiced:classify == 0}"></div>
			</div>
			<div class="itemList" v-if="classify == 0">
				<ul>
					<li v-bind:class="{checked:durationClassify==0}" @click="durationTab(0)">1个月内</li>
					<li v-bind:class="{checked:durationClassify==1}" @click="durationTab(1)">3个月内</li>
					<li v-bind:class="{checked:durationClassify==2}" @click="durationTab(2)">6个月内</li>
					<li v-bind:class="{checked:durationClassify==3}" @click="durationTab(3)">12个月内</li>
				</ul>
				<span>预计起息日: 2017-04-01</span>
				<span>预计回款日: 2017-04-01</span>
			</div>
		</div>
		<div class="investTime">
			<div class="itemTit" @click="tab(1)">
				按投标次数
				<span>预计收益: <b>{{50 | number(2)}}</b>元</span>
				<div class="choice" v-bind:class="{choiced:classify == 1}"></div>
			</div>
			<div class="itemList" v-if="classify == 1">
				<input type="number" v-model="investTime" @focus="investTimeClassify = -1" @blur="investTimeClassify = 0" placeholder="手动输入"/>
				<ul>
					<li v-bind:class="{checked: investTimeClassify == 0}" @click="investTimeTab(0)">1次</li>
					<li v-bind:class="{checked: investTimeClassify == 1}" @click="investTimeTab(1)">3次</li>
					<li v-bind:class="{checked: investTimeClassify == 2}" @click="investTimeTab(2)">5次</li>
					<li v-bind:class="{checked: investTimeClassify == 3}" @click="investTimeTab(3)">7次</li>
				</ul>
				<span>预计起息日: 2017-04-01</span>
				<span>预计回款日: 2017-04-01</span>
			</div>
		</div>
		<p>注：到期时资金若仍处于标的投资中.回款需等待投资周期结束</p>
	</div>
	<button>马上开启</button>
	<transition name="fade">
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
	</transition>
	<div class='haunchong' v-if='huanchongStatus'>
		<img src="../assets/loading.gif" alt="" />
	</div>
  </div>
</template>

<script>
export default {
  name: 'tender',
  data () {
    return {
      tipsstatus: false,					//提示框显隐
      tips: '提示框',						//提示框内容
      huanchongStatus: false,				//缓冲框显隐
      investMoney: null,					//投资金额
      typeinput: 'number',					//input输入框类型
      classify: 0,							//自动投标类型
      durationClassify: 0,					//选择投标期限
      investTimeClassify: 0,				//选择投标次数
      investTime: null						//按投标次数
    }
  },
  watch: {
  	investMoney: function(){
	    this.investMoney = this.moneyType(this.investMoney);		//moneyType公共方法，变为金钱格式
  	}
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	},
  	filterNum(){
  		this.typeinput = 'number';
  		this.investMoney = parseFloat(this.investMoney).toFixed(2);
  	},
  	tab(index){
  		this.classify = index;
  	},
  	durationTab(index){
  		this.durationClassify = index;
  	},
  	investTimeTab(index){
  		this.investTimeClassify = index;
  	}
  },
  mounted() {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.tender{
	width: 100%;
	height: 100%;
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
		text-align: left;
		overflow: hidden;
		h2{
			font-size: .2rem;
			color: #FC9800;
			line-height: .52rem;
			text-align: center;
			font-weight: normal;
			margin: 0;
		}
		.totalMoney{
			width: 100%;
			height: .6rem;
			font-size: .17rem;
			color: #333333;
			line-height: .6rem;
			background: #FFFFFF;
			padding-left: 7%;
			input{
				width: 70%;
				border: 0;
				margin: 0;
				padding-left: 15px !important;
			}
		}
		h3{
			font-size: .14rem;
			color: #999999;
			font-weight: normal;
			line-height: .43rem;
			padding-left: 7%;
		}
		.duration,
		.investTime{
			.itemTit{
				width: 100%;
				height: .45rem;
				font-size: .17rem;
				color: #333333;
				line-height: .45rem;
				padding-left: 7%;
				background: #FFFFFF;
				span{
					font-size: .11rem;
					color: #999999;
					margin-left: .12rem;
					b{
						color: #FF6666;
						font-weight: normal;
					}
				}
				.choice{
					width: .17rem;
					height: .17rem;
					float: right;
					margin: .14rem 7%;
					background: url('../assets/success_ok copy2@2x.png') no-repeat;
					background-size: 100% 100%;
				}
				.choiced{
					background: url('../assets/success_ok copy@2x.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			.itemList{
				width: 100%;
				height: 1.5rem;
				background: #FFFFFF;
				ul{
					width: 100%;
					padding-left: 7%;
					overflow: hidden;
					li{
						width: 1.55rem;
						height: .3rem;
						font-size: .13rem;
						line-height: .3rem;
						text-align: center;
						border: 1px solid #999999;
						background: #FFFFFF;
						float: left;
						margin-right: .15rem;
						margin-top: .15rem;
					}
					.checked{
						background: #4A77A6;
						color: #FFFFFF;
					}
				}
				span{
					font-size: .13rem;
					color: #999999;
					display: block;
					width: 1.55rem;
					height: .14rem;
					line-height: .14rem;
					float: left;
					margin-left: 7%;
					margin-top: .26rem;
				}
			}
		}
		.investTime{
			border-top: 1px solid #D7D7D7;
			.itemList{
				height: 1.95rem;
				input{
					width: 3.25rem;
					height: .3rem;
					background: #F1F1F1;
					text-align: center;
					margin: 0;
					padding: 0;
					float: left;
					margin: .15rem 0 0 7%;
					font-size: .13rem;
				}
			}
		}
		p{
			font-size: .11rem;
			color: #999999;
			padding-left: 7%;
			margin-top: .11rem;
			line-height: .25rem;
		}
	}
	button{
		float: left;
		width: 94%;
		height: .45rem;
		background: #FFC266;
		font-size: .18rem;
		color: #FFFAF2;
		border: 0;
		padding: 0;
		line-height: .45rem;
		position: fixed;
		bottom: .15rem;
		left: 3%;
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
