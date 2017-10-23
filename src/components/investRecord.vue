<template>
  <div class="investRecord">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>投资记录</p>
		</div>
		<div class='title'>
			<span :class='{bcolor:isSelect==0}' @click='select(0)'>投资中</span>
			<span :class='{bcolor:isSelect==1}' @click='select(1)'>已结算</span>
		</div>
		<div class='resultDetail'>
			<ul class='ing' v-if='selectStatus1'>
				 <li>
				 	<div class='top'>
				 		<span>信用贷款计划</span>
				 		<span>预计年化利率：10%</span>
				 	</div>
				 	<div class='center'>
				 		<span class='cssd0566bb63175d2'>1000.00</span>
				 		<span>计息天数：7天</span>
				 	</div>
				 	<div class='bottom'>
				 		<span>起息日：2017-04-01</span>
				 		<span>回款日：2017-04-02</span>
				 	</div>
				 </li>
				 <li>
				 	<div class='top'>
				 		<span>信用贷款计划</span>
				 		<span>预计年化利率：10%</span>
				 	</div>
				 	<div class='center'>
				 		<span class='cssd0566bb63175d2'>1000.00</span>
				 		<span>计息天数：7天</span>
				 	</div>
				 	<div class='bottom'>
				 		<span>起息日：2017-04-01</span>
				 		<span>回款日：2017-04-02</span>
				 	</div>
				 </li>
			</ul>
			<ul class='already' v-if='selectStatus2'>
				 <li>
				 	<div class='titles'>
				 		信用贷款计划
				 	</div>
				 	<div class='left'>
				 		<span>投资金额</span>
				 		<span class='cssd0566bb63175d2'>1000.00</span>
				 		<span>计息天数：7天</span>
				 	  <span>起息日：2017-04-01</span>
				 	</div>
				 	<div class='right'>
				 		<span>到期收益</span>
				 		<span class='cssd0566bb63175d2'>50.00</span>
				 		<span>预计年化利率:10%</span>
				 	  <span>回款日：2017-04-02</span>
				 	</div>
				 </li>
			</ul>
		</div>
		
		<!--<button>确定</button>-->
		
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'investRecord',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false,
      cashPsdStatus: false,
      isSelect: 0,
      selectStatus1: true,
      selectStatus2: false
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	},
  	select(index){
  		this.isSelect = index;
  		if(this.isSelect == 0){
  			this.selectStatus1 = true;
      	this.selectStatus2 = false;
  		}else if(this.isSelect == 1){
  			this.selectStatus1 = false;
      	this.selectStatus2 = true;
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.investRecord{
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
			margin: 0.15rem 1.3rem 0 0.2rem;
		}
		p{
			float: left;
			font-size: 0.19rem;
			line-height: 0.5rem;
			color: #333;
			margin-bottom: 0;
		}
	}
	.title{
		margin-top: 0.5rem;
		width: 100%;
		height: 0.45rem;
		background: #fff;
		span{
			display: block;
			float: left;
			width: 1.87rem;
			font-size: 0.15rem;
			line-height: 0.43rem;
			color: #666;
			border-bottom: 2px solid #999;
		}
	}
	.bcolor{
		border-bottom: 2px solid #FC9800!important;
		color: #FC9800!important;
	}
	.resultDetail{
		width: 100%;
		
	}
	.ing{
			width: 100%;
			li{
				background: #fff;
				height: 1.15rem;
				margin-bottom: 0.02rem;
				padding-left: 0.26rem;
				padding-right: 0.26rem;
				.top,.center,.bottom{
					width: 100%;
					height: 0.45rem;
					span{
						display: block;
						line-height: 0.45rem;
						color: #333;
						font-size: 0.15rem;
						float: left;
					}
					span:nth-child(2){
						float: right;
						font-size: 0.13rem;
					}
				}
				.center{
					height: 0.25rem;
					span{
						font-size: 0.25rem;
						line-height: 0.25rem;
						color: #FC9800;
					}
				}
				.bottom{
					span{
						font-size: 0.13rem;
						color: #999;
					}
				}
			}
	}
	.already{
		width: 100%;
		li{
			background: #fff;
			height: 1.5rem;
			margin-bottom: 0.02rem;
			padding-left: 0.26rem;
			padding-right: 0.26rem;
			.titles{
				font-size: 0.15rem;
				line-height: 0.45rem;
				color: #333;
				text-align: left;
			}
			.left,.right{
				float: left;
				span{
					display: block;
					text-align: left;
					font-size: 0.13rem;
					line-height: 0.13rem;
					color: #666;
				}
				span:nth-child(1){
					font-size: 0.13rem;
					line-height: 0.13rem;
					color: #666;
				}
				span:nth-child(2){
					font-size: 0.25rem;
					line-height: 0.4rem;
					color: #FC9800;
				}
				span:nth-child(3){
					color: #333;
				}
				span:nth-child(4){
					font-size: 0.13rem;
					line-height: 0.33rem;
					color: #999;
				}
			}
			.right{
				margin-left: 0.6rem;
			}
		}
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
