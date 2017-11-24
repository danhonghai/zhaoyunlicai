<template>
	<div class="login" v-title data-title="登录">
		<div class='header'>
			<img src="../assets/Combined Shape Copy1@2x.png" alt="" @click='goBack' />
		</div>
		<div class="content">
			<div class="tabs" v-bind:class="{active:classify==0}" @click="tab(0)">手机验证码登录</div>
			<div class="tabs" v-bind:class="{active:classify==1}" @click="tab(1)">密码登录</div>
			<div class="codeLogin" v-show="classify==0">
				<input type="tel" v-model="phoneNum" v-on:focus="changeStyleF('phoneNum')" v-on:blur="changeStyleB('phoneNum')" id="phoneNum" class="phoneNum" maxlength="11" placeholder="手机号" />
				<div class="clear" v-show="clearStatus" @click="clear">
					<img src="../assets/Combined Shape Copy@2x.png" />
				</div>
				<input type="tel" v-model="code" v-on:focus="changeStyleF('code')" v-on:blur="changeStyleB('code')" id="code" maxlength="6" placeholder="验证码" />
				<div class="getCode" @click="getCode">{{codeContent}}</div>
				<p v-show="codestatus">验证码错误</p>
			</div>
			<div class="psdLogin" v-show="classify==1">
				<input type="tel" v-model="phoneNum" v-on:focus="changeStyleF('phoneNum2')" v-on:blur="changeStyleB('phoneNum2')" id="phoneNum2" class="phoneNum" maxlength="11" placeholder="手机号" />
				<div class="clear" v-show="clearStatus" @click="clear">
					<img src="../assets/Combined Shape Copy@2x.png" />
				</div><input type="password" v-model="psd" v-on:focus="changeStyleF('psd')" v-on:blur="changeStyleB('psd')" id="psd" placeholder="密码" />
				<p v-show="psdstatus">登录名或密码错误</p>
			</div>
			<button @click="submit">确定</button>
			<span><router-link to="register">注册</router-link></span>
		</div>
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
		name: 'login',
		data() {
			return {
				classify: 0,					//tab切换
				codeContent: '获取验证码',		//获取验证码内容
				wait: 59, 						//获取验证码倒计时
				getCodeStatus: true, 			//获取验证码状态
				clearStatus: false,				//清除手机号码X显隐
				phoneNum: null,					//手机号码
				code: null,						//验证码
				codestatus: false,				//验证码错误显隐
				psd: null,						//密码
				psdstatus: false,				//密码错误显隐
				tipsstatus: false,				//提示框显隐
				tips: '提示框',					//提示框内容
				huanchongStatus: false,			//缓冲框显隐
			}
		},
		watch: {
			phoneNum: function() {
				if(this.phoneNum) {
					this.clearStatus = true;
				} else {
					this.clearStatus = false;
				}
			}
		},
		methods: {
			goBack() {	//关闭窗口
				/*var opened = window.open('about:blank', '_self');
				opened.opener = null;
				opened.close();*/
				if(this.$route.params.From){
					this.$router.go(-2);
				}else{
					this.$router.go(-1);
				}
			},
			tab(index) {	//tab切换
				this.classify = index;
			},
			clear() {		//清除手机号
				this.phoneNum = null;
			},
			changeStyleF(ID) {		//获取焦点后
				document.getElementById(ID).style.border = '1px solid #FF6666';
				if(ID == 'code'){
					this.codestatus = false;
				}
				if(ID == 'psd'){
					this.psdstatus = false;
				}
			},
			changeStyleB(ID) {		//失去焦点后
				document.getElementById(ID).style.border = '1px solid #e0e0e0';
			},
			getCode() {			//获取验证码
				let that = this;
				let regphone = /^1[34578]\d{9}$/;
				if(!regphone.test(that.phoneNum)){
					that.tipsstatus = true;
					that.tips = '请输入正确的手机号';
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}else if(that.getCodeStatus){
					that.getCodeStatus = false;
					ajax({//请求手机验证码
						type:'POST',
						url: baseURL + '/api/noauth/send_verify_code?mobile=' + that.phoneNum,
						success:function(res){
							console.log(res)
							if( res.success == true ){
								that.codeContent = that.wait + "s后重试";
								that.wait--;
								let timer = setInterval(function() {
									if(that.wait == 0) {
										console.log('重新获取验证码')
										that.codeContent = '获取验证码'
										that.wait = 59;
										that.getCodeStatus = true;
										clearInterval(timer);
									} else {
										that.codeContent = that.wait + "s后重试";
										that.wait--;
									}
								}, 1000);
							}else{
								that.tipsstatus = true;
								that.tips = res.errMsg;
								setTimeout(function() {
									that.tipsstatus = false;
								}, 1500);
							}
						}
					})
				}
			},
			submit() {		//登录
				let that = this;
				if((that.phoneNum && that.code && that.classify == 0)|| (that.phoneNum && that.psd && that.classify == 1)){
					that.huanchongStatus = true;
					if(that.classify == 0){
						console.log('验证码登录')
						mui.ajax(baseURL + '/api/noauth/login_by_code?mobile='+ that.phoneNum +'&code=' + that.code,{
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							//timeout:10000,//超时时间设置为10秒；
							//headers:{'Content-Type':'application/json'},	              
							success:function(res,text,xhr){
								//服务器返回响应，根据响应结果，分析是否登录成功；
								console.log(xhr.getResponseHeader('x-auth-token'))
								that.huanchongStatus = false;
								if( res.success == true ){
									/*sessionStorage.setItem('tokenZylc',xhr.getResponseHeader('x-auth-token'));
									sessionStorage.setItem('realVerify',JSON.stringify(res.data));
									sessionStorage.setItem('phoneNum',that.phoneNum);*/
									that.setCookie('tokenZylc',xhr.getResponseHeader('x-auth-token'),15);
									that.setCookie('realVerify',JSON.stringify(res.data),15);
									that.setCookie('phoneNum',that.phoneNum,15);
									that.tipsstatus = true;
									that.tips = '登录成功';
									setTimeout(function() {
										that.tipsstatus = false;
									}, 1500);
									/*if(!res.data.realVerifyStatus){
								    	that.$router.push({path: '/certification'});
								    }else */if(that.$route.params.unregularId){
								    	that.$router.push({path: '/unregular/' + that.$route.params.unregularId});
								    }else{
								    	that.$router.push({path: '/personal'});
								    }
								}else{
									that.codestatus = true;
								}
							},
							error:function(xhr,type,errorThrown){
								//异常处理；
								console.log(type);
							}
							
						});
					}
					if(that.classify == 1){
						console.log('密码登录')
						mui.ajax(baseURL + '/api/noauth/login_by_password?mobile='+ that.phoneNum +'&password=' + that.psd,{
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							//timeout:10000,//超时时间设置为10秒；
							headers:{'Content-Type':'application/json'},	              
							success:function(res,text,xhr){
								console.log(xhr.getResponseHeader('x-auth-token'))
								/*sessionStorage.setItem('tokenZylc',xhr.getResponseHeader('x-auth-token'));
								sessionStorage.setItem('realVerify',JSON.stringify(res.data));
								sessionStorage.setItem('phoneNum',that.phoneNum);*/
								that.setCookie('tokenZylc',xhr.getResponseHeader('x-auth-token'),15);
								that.setCookie('realVerify',JSON.stringify(res.data),15);
								that.setCookie('phoneNum',that.phoneNum,15);
								that.huanchongStatus = false;
								if( res.success == true ){
									that.tipsstatus = true;
									that.tips = '登录成功';
									setTimeout(function() {
										that.tipsstatus = false;
									}, 1500);
									if(!res.data.realVerifyStatus){
								    	that.$router.push({path: '/certification'});
								    }else{
								    	that.$router.push({path: '/'});
								    }
								}else{
									that.psdstatus = true;
								}
							},
							error:function(xhr,type,errorThrown){
								//异常处理；
								console.log(type);
							}
							
						});
					}
				}else{
					that.tipsstatus = true;
					that.tips = '请填写完整信息';
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}
			}
		},
		mounted() {
			document.body.style.background = '#FFFFFF';
			if(/*sessionStorage.getItem('tokenZylc')*/this.getCookie('tokenZylc')){
				this.$router.push({path: '/personal'});
			}
			console.log(this.$route.params.unregularId)
		},
		beforeRouteLeave(to, from, next) {		//路由离开前
			document.body.style.background = '#F6F6F6';
			this.phoneNum = null;
			this.psd = null;
			next();
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
	
	::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #999;
	}
	
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999;
	}
	
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999;
	}
	
	:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #999;
	}
	
	.login {
		width: 100%;
		height: 100%;
		.header {
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.5rem;
			background: #FFFFFF;
			z-index: 2;
			img {
				width: 0.15rem;
				height: 0.15rem;
				position: absolute;
				top: .15rem;
				left: .12rem;
			}
		}
		.content {
			width: 100%;
			padding: .5rem 7% 0;
			overflow: hidden;
			.tabs {
				font-size: .12rem;
				color: #FFC266;
				width: 50%;
				height: .29rem;
				line-height: .29rem;
				float: left;
				margin-top: .15rem;
				border: 1px solid #FFC266;
				&.active {
					color: #FFFFFF;
					background: #FFC266;
				}
			}
			.codeLogin,
			.psdLogin {
				float: left;
				width: 100%;
				position: relative;
				padding-bottom: .3rem;
				input {
					width: 100%;
					height: .45rem;
					border: 1px solid #E0E0E0;
					background: #F7F7F7;
					text-align: center;
					margin-bottom: 0;
					float: left;
					padding: 0;
					font-size: .15rem;
				}
				.phoneNum {
					margin-top: .2rem;
					margin-bottom: .15rem;
				}
				p {
					font-size: .14rem;
					color: #FF6666;
					line-height: .3rem;
					text-align: left;
					margin: 0;
					position: absolute;
					bottom: 0;
				}
				.clear{
					position: absolute;
					top: .29rem;
					right: .13rem;
					padding: .1rem;
					img {
						display: block;
						width: .1rem;
					}
				}
				.getCode {
					font-size: .15rem;
					line-height: .15rem;
					color: #4A77A6;
					position: absolute;
					top: .85rem;
					right: .07rem;
					padding: .1rem;
				}
			}
			button {
				width: 100%;
				height: .45rem;
				background: #FFC266;
				color: #FFFFFF;
				font-size: .18rem;
				line-height: .45rem;
				margin: 0;
				padding: 0;
				border: 0;
			}
			span {
				display: block;
				width: .3rem;
				margin: .2rem 1.47rem;
				text-align: center;
				font-size: .14rem;
				line-height: .14rem;
				a {
					color: #666666;
				}
			}
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
	}
</style>