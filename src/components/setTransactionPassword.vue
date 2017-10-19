<template>
  <div class="setTransactionPassword">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>设置交易密码</p>
		</div>
		<div class='setPassword'>
			<span>交易密码</span>
			<input type="password" placeholder="设置交易密码" />
		</div>
		<div class='tip'>密码由6位数字组成</div>
		<div class='btn'>
			<button>确定</button>
			<button>跳过，我不需要设置交易密码</button>
		</div>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'setTransactionPassword',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false
    }
  },
  methods: {
  	dianji(index){
  	
  	},
  	goBack(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.setTransactionPassword{
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
			margin: 0.15rem 1.1rem 0 0.2rem;
		}
		p{
			float: left;
			font-size: 0.19rem;
			line-height: 0.5rem;
			color: #333;
			margin-bottom: 0;
		}
	}
	.setPassword{
		width: 100%;
		height: 0.5rem;
		margin-top: 0.6rem;
		background: #fff;
		span{
			float: left;
			font-size: 0.17rem;
			color: #333;
			line-height: 0.5rem;
			margin-left: 0.3rem;
		}
		input{
			float: right;
			width: 2.4rem;
			height: 0.5rem;
			font-size: 0.17rem;
			line-height: 0.5rem;
			padding: 0;
			text-align: right;
			padding-right: 0.28rem;
			margin-bottom: 0;
			border: none;
		}
	}
	.tip{
		font-size: 0.13rem;
		line-height: 0.39rem;
		color: #999;
		text-align: left;
		padding-left: 0.28rem;
	}
	.btn{
		width: 100%;
		height: 1rem;
		button{
			width: 3.22rem;
			height: 0.43rem;
			border-radius: 0.03rem;
			line-height: 0.43rem;
			padding: 0;
		}
		button:nth-child(1){
			color: #fff;
			background: #FFC266;
			font-size: 0.18rem;
			border: 1px solid #FFC266;
		}
		button:nth-child(2){
			color: #4A77A6;
			background: #fff;
			font-size: 0.12rem;
			border: 1px solid #D7D7D7;
			margin-top:0.15rem;
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
