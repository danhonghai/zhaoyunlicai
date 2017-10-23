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
				<input type="tel" class="code" maxlength="6" placeholder="验证码" />
				<div class="getCode" @click="getCode">{{codeContent}}</div>
				<p>验证码错误</p>
			</div>
			<button>确定</button>
			<span>已有账号？<router-link v-bind:to="'login'">登录</router-link></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				codeContent: '获取验证码',
				wait: 60, //获取验证码倒计时
				getCodeStatus: true, //获取验证码状态
				clearStatus: false,
				phoneNum: null
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
			goBack() {
				var opened = window.open('about:blank', '_self');
				opened.opener = null;
				opened.close();
			},
			clear() {
				this.phoneNum = null;
			},
			getCode() {
				var that = this;
				if(that.getCodeStatus) {
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
	}
</style>