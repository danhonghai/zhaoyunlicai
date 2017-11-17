<template>
  <div class="accountSet" v-title data-title="账户设置">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>账户设置</p>
		</div>
		<ul class='accountDetails'>
			<li>
				<div class='title'>实名认证</div>
				<div class='details'>
					<span>{{name}}</span>
					<span>{{IDnum}}</span>
				</div>
			</li>
			<li>
				<div class='title'>手机绑定</div>
				<div class='details'>
					<span>{{telNum}}</span>
				</div>
			</li>
			<!--<li  @click="Goto('myBankcard')">
				<div class='title'>银行卡</div>
				<div class='details'>
					<span>{{bankName}}</span>
					<span>{{bankCard}}</span>
				</div>
			</li>-->
		</ul>
		<ul class='modify'>
			<li  @click="Goto('modifyLoginPsdA')">
				<span>修改登录密码</span>
				<img src="../assets/Path 145 Copy 2@2x.png" alt="" />
			</li>
			<!--<li @click="Goto('modifyPayPsdA')">
				<span>修改交易密码</span>
				<img src="../assets/Path 145 Copy 2@2x.png" alt="" />
			</li>-->
		</ul>
		<span id="btn" @click="logOff">退出登录</span>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
		<div class="bottom">
			<p>客服电话：</p>
			<a href="tel:4008818815">400-881-8815</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'accountSet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false,
      name: '张三',
      IDnum: '341558526541258965',
      telNum: '15658965412'/*,
      bankName: '中国银行',
      bankCard: '5896547854123654'*/
    }
  },
  methods: {
  	Goto(str){
  		this.$router.push({path: '/'+str});
  	},
  	goBack(){
  		this.$router.go(-1)
  	},
  	logOff() {//退出登录
  		let that = this;
  		that.huanchongStatus = true;
  		mui.ajax(baseURL + '/api/logout',{
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				//timeout:10000,//超时时间设置为10秒；
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':sessionStorage.getItem("tokenZylc")
				},
				success:function(res){
					//服务器返回响应，根据响应结果，分析是否登录成功；
					console.log(res);
					that.huanchongStatus = false;
					if( res.success == true ){
						that.tipsstatus = true;
						that.tips = res.data;
						sessionStorage.removeItem("tokenZylc");
						setTimeout(function() {
							that.tipsstatus = false;
						}, 1500);
						that.$router.push({path: '/'});
					}else{
						that.tipsstatus = true;
						that.tips = res.errMsg;
						setTimeout(function() {
							that.tipsstatus = false;
						}, 1500);
						sessionStorage.removeItem("tokenZylc");
						that.$router.push({path: '/'});
					}
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					console.log(type);
				}
			});
  	}
  },
  mounted() {
    this.IDnum = (this.IDnum).replace(/^(\d{4})\d+(\d{4})$/, "$1********$2");//身份证号
    this.telNum = (this.telNum).replace(/^(\d{3})\d+(\d{4})$/, "$1****$2");//手机号
    //this.bankCard = (this.bankCard).replace(/^(\d{4})\d+(\d{4})$/, "$1********$2");//银行卡号
    
		/*console.log(JSON.parse(sessionStorage.getItem('realVerify')) )
		let realVerify = JSON.parse(sessionStorage.getItem('realVerify'));
		if(!realVerify.realVerifyStatus){
			this.$router.push({path: '/certification'});
		}else{*/
			let that = this;
			mui.ajax(baseURL + '/api/user_info',{					//个人信息
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':sessionStorage.getItem("tokenZylc")
				},
				success:function(res){
					console.log(res);
					that.name = res.data.userInfo.userName;
					that.IDnum = res.data.userInfo.idCard;
					that.telNum = res.data.userInfo.mobile;
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					console.log(type);
					if(xhr.status == 401){
						that.tips = '请重新登录';
						that.tipsstatus = true;
						sessionStorage.removeItem('tokenZylc');
						setTimeout(function() {
							that.tipsstatus = false;
							that.$router.push({path: '/login'})
						}, 1500);
					}
				}
			});
		/*}*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.accountSet{
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 0.5rem;
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
	.accountDetails{
		width: 100%;
		background: #fff;
		padding-left: 0.26rem;
		li{
			border-bottom: 1px solid #E0E0E0;
			padding-right: 0.27rem;
			height: 0.45rem;
			.title{
				float: left;
				font-size: 0.14rem;
				line-height: 0.45rem;
				color: #333;
			}
			.details{
				float: right;
				text-align: right;
				margin-top: 0.06rem;
				span{
					display: block;
					font-size: 0.12rem;
					line-height: 0.17rem;
					color: #999;
				}
			}
		}
		li:last-child{
			border: none;
		}
		li:nth-child(2){
			span{
				line-height: 0.35rem;
			}
		}
	}
	.modify{
		width: 100%;
		background: #fff;
		padding-left: 0.26rem;
		margin-top: 0.1rem;
		li{
			border-bottom: 1px solid #E0E0E0;
			padding-right: 0.27rem;
			height: 0.45rem;
			span{
				float: left;
				display: block;
				font-size: 0.14rem;
				line-height: 0.45rem;
				color: #666;
			}
			img{
				float: right;
				width: 0.08rem;
				margin-top: 0.15rem;
			}
		}
		li:last-child{
			border: none;
		}
	}
	#btn{
		display: block;
		width: 100%;
		height: 0.45rem;
		background: #fff;
		font-size: 0.16rem;
		line-height: 0.45rem;
		color: #FF6666;
		margin-top: 0.1rem;
		border: none;
		padding: 0;
	}
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		p {
			font-size: .13rem;
			line-height: .13rem;
		}
		a {
			display: block;
			width: 1.1rem;
			font-size: .16rem;
			line-height: .16rem;
			margin: .07rem 0 .17rem 1.33rem;
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
