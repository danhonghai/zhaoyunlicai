<template>
  <div class="modifyPayPsdA">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>修改交易密码</p>
		</div>
		<div class='newLoginPsd'>
			<span>手机号</span>
			<input type="text" placeholder="输入手机号" />
		</div>
		<div class='codeDetail'>
			<span>验证码</span>
			<input type="text" placeholder="输入短信验证码" />
			<span class='getCodebtn'>获取验证码</span>
		</div>
		<button>下一步</button>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'modifyPayPsdA',
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
.modifyPayPsdA{
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
	.newLoginPsd{
		width: 100%;
		height: 0.46rem;
		margin-top: 0.5rem;
		background: #fff;
		padding-left: 0.26rem;
		border-top: 1px solid #E0E0E0;
		span{
			float: left;
			display: block;
			font-size: 0.14rem;
			line-height: 0.45rem;
			color: #333;
		}
		input{
			float: left;
			width: 2.5rem;
			height: 0.45rem;
			font-size: 0.14rem;
			line-height: 0.45rem;
			color: #333;
			margin-left: 0.2rem;
			border: none;
			margin-bottom: 0;
		}
		
	}
	.codeDetail{
		width: 100%;
		height: 0.46rem;
		background: #fff;
		padding-left: 0.26rem;
		border-top: 1px solid #E0E0E0;
		padding-right: 0.27rem;
		span:nth-child(1){
			float: left;
			display: block;
			font-size: 0.14rem;
			line-height: 0.45rem;
			color: #333;
		}
		input{
			float: left;
			width: 1.5rem;
			height: 0.45rem;
			font-size: 0.14rem;
			line-height: 0.45rem;
			color: #333;
			margin-left: 0.2rem;
			border: none;
			margin-bottom: 0;
		}
		.getCodebtn{
			float: right;
			width: 1rem;
			height: 0.45rem;
			font-size: 0.15rem;
			line-height: 0.45rem;
			color: #4A77A6;
		}
	}
	button{
		width: 3.23rem;
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
