<template>
  <div class="modifyLoginPsdB" v-title data-title="修改登录密码">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>修改登录密码</p>
		</div>
		<div class='newLoginPsd'>
			<span>新密码</span>
			<input type="text" placeholder="输入密码" v-model='newPsd' maxlength="16" />
		</div>
		<span id="btn" @click="modyfyPsd">确定</span>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'modifyLoginPsdB',
  data () {
    return {
      tipsstatus: false,					//提示框显隐
      tips: '提示框',							//提示框内容
      huanchongStatus: false,			//缓冲显隐
      newPsd: null								//新密码
    }
  },
  methods: {
  	modyfyPsd() {
	    this.huanchongStatus = true;
			var that = this;
			mui.ajax(baseURL + '/api/change_password?password='+ that.newPsd +'&authToken='+ that.$route.params.authToken,{
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':sessionStorage.getItem("tokenZylc")
				},
				success:function(res){
					that.huanchongStatus = false;
					console.log(res);
					if(res.success){
						sessionStorage.removeItem("tokenZylc");
						that.$router.push({path: '/login'});
					}else{
						that.tips = res.errMsg;
						that.tipsstatus = true;
						setTimeout(function() {
							that.tipsstatus = false;
							that.$router.push({path: '/modifyLoginPsdA'});
						}, 1500);
					}
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					console.log(type);
				}
			});
  	},
  	goBack(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.modifyLoginPsdB{
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
			color: #333;
			margin-left: 0.2rem;
			border: none;
		}
	}
	#btn{
		display: block;
		margin-left: .26rem;
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
