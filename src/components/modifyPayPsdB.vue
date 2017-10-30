<template>
  <div class="modifyPayPsdB">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>修改交易密码</p>
		</div>
		<div class='newLoginPsd'>
			<span>新密码</span>
			<input type="text" placeholder="输入密码" v-model='newPsd' maxlength="6" />
		</div>
		<button>确定</button>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'modifyPayPsdB',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false,
      newPsd: ''
    }
  },
  methods: {
  	modyfyPsd() {
//  this.huanchongStatus = true;
//	var that = this;
//	ajax({
//			type:'post',
//			url: baseURL + '/auth/get-fee?token='+ Token,
//			success:function(res){
//				that.huanchongStatus = false;
//				var res = res;
//				console.log(res)
//				if(res.success == 'true'){
//					//接参数
//					that.$router.push({path: '/login'});
//					
//				}else{
//					//提示信息
//					that.huanchongStatus = false;
//					that.tipsstatus = true;
//			  		that.tips = res.errMsg;
//			  		setTimeout(function(){
//			  			that.tipsstatus = false
//			  			that.tips = ''
//							that.$router.push({path: '/modifyPayPsdA'})
//			  		},300)
//				}
//			}
//		})
	  },
  	goBack(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.modifyPayPsdB{
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
		height: 0.45rem;
		margin-top: 0.5rem;
		background: #fff;
		padding-left: 0.26rem;
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
