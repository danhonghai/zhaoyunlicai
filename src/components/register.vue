<template>
	<div class="register" v-title data-title="注册">
		<div class='header'>
			<img src="../assets/Combined Shape Copy1@2x.png" alt="" @click='goBack' />
		</div>
		<div class="content">
			<h3>注册</h3>
			<div class="codeRegister">
				<input type="tel" v-model="phoneNum" v-on:focus="" class="phoneNum" maxlength="11" placeholder="手机号" />
				<img v-show="clearStatus" @click="clear" src="../assets/Combined Shape Copy@2x.png" />
				<input type="tel" v-model="code" class="code" maxlength="6" placeholder="验证码" />
				<div class="getCode" @click="getCode">{{codeContent}}</div>
				<p>验证码错误</p>
			</div>
			<button>确定</button>
			<span>已有账号？<router-link v-bind:to="'login'">登录</router-link></span>
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
		name: 'register',
		data() {
			return {
				codeContent: '获取验证码',		//获取验证码
				wait: 60, 						//获取验证码倒计时
				getCodeStatus: true, 			//获取验证码状态
				clearStatus: false,				//清楚手机号X显隐
				phoneNum: null,					//手机号
				code: null,						//验证码
				codestatus: true,				//验证码错误显隐
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
			goBack() {	//后退
				var opened = window.open('about:blank', '_self');
				opened.opener = null;
				opened.close();
			},
			clear() {	//手机号码清除
				this.phoneNum = null;
			},
			getCode() {	//获取验证码
				let that = this;
				let regphone = /^1[34578]\d{9}$/;
				if(!regphone.test(that.phoneNum)){
					that.tipsstatus = true;
					that.tips = '请输入正确的手机号';
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}else if(that.getCodeStatus) {
					that.getCodeStatus = false;
					let timer = setInterval(function() {
						if(that.wait == 0) {
							console.log('重新获取验证码')
							that.codeContent = '获取验证码'
							that.wait = 60;
							that.getCodeStatus = true;
							clearInterval(timer);
						} else {
							that.codeContent = that.wait + "s后重试";
							that.wait--;
						}
					}, 1000);
				}
			}
		},
		mounted() {
			document.body.style.background = '#FFFFFF';
		},
		beforeRouteLeave(to, from, next) {
			document.body.style.background = '#F6F6F6';
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
	
	.register {
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
			h3{
				font-size: .27rem;
				color: #333333;
				line-height: .27rem;
				font-weight: normal;
				text-align: left;
				margin: 0;
			}
			.codeRegister {
				float: left;
				width: 100%;
				position: relative;
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
					line-height: .45rem;
				}
				.phoneNum {
					margin-top: .3rem;
					margin-bottom: .15rem;
				}
				p {
					font-size: .14rem;
					color: #FF6666;
					line-height: .3rem;
					text-align: left;
					margin: 0;
				}
				img {
					width: .1rem;
					position: absolute;
					top: .47rem;
					right: .23rem;
				}
				.getCode {
					font-size: .15rem;
					line-height: .15rem;
					color: #4A77A6;
					position: absolute;
					top: 1.05rem;
					right: .17rem;
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
				width: 100%;
				margin: .2rem 0;
				text-align: center;
				font-size: .14rem;
				line-height: .14rem;
				color: #666666;
				a {
					color: #F5BA4E;
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