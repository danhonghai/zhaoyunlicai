<template>
	<div class="inviteFriends" v-title data-title="邀请好友">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>邀请好友</p>
		</div>
		<div class="invite">
			<div class="inviteTitle animated zoomIn">
				<img src="../assets/加入赵云理财@2x.png"/>
			</div>
			<div class="whoSend">
				您的好友,手机号码186****6293 <span>发送一条邀请</span>
			</div>
			<div class="inviteInfo">
				<p>好友投资，推荐人返利1%</p>
				<form>
					<input type="tel" id="phoneNum" v-model="phoneNum" maxlength="11" placeholder="请输入您的手机号码"/>
					<input type="tel" id="code" v-model="code" maxlength="6" placeholder="请输入验证码" />
					<button type="button" class="sendCode" @click="getCode">{{codeContent}}</button>
					<button type="button" class="sub" @click="submit">立即注册</button>
				</form>
			</div>
		</div>
		<transition name="fade">
			<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'inviteFriends',
		data() {
			return {
				phoneNum: null,					//手机号
				code: null,						//验证码
				codeContent: '验证码',			//验证码内容
				tipsstatus: false,				//提示框显隐
				tips: '提示框',					//提示框内容
				wait: 59, 						//获取验证码倒计时
				getCodeStatus: true, 			//获取验证码状态
			}
		},
		methods: {
			goBack(){
		  		this.$router.go(-1)
		  	},
			getCode(){
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
					
					that.codeContent = that.wait + "s";
					that.wait--;
					let timer = setInterval(function() {
						if(that.wait == 0) {
							that.codeContent = '获取验证码'
							that.wait = 59;
							that.getCodeStatus = true;
							clearInterval(timer);
						} else {
							that.codeContent = that.wait + "s";
							that.wait--;
						}
					}, 1000);
						
				} 	
			},
			submit(){
				let that = this;
				if(that.phoneNum && that.code){
					
				}else{
					that.tipsstatus = true;
					that.tips = '请填写完整信息';
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}
			}
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
	{
		opacity: 0
	}
	
	.inviteFriends {
		width: 100%;
		height: 100%;
		position: relative;
		background: #ff5742;
		padding-top: .5rem;
		.header{
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.5rem;
			background: #F9F9F9;
			border-bottom: 1px solid #e0e0e0;
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
		.invite{
			width: 100%;
			height: 6.15rem;
			background: url(../assets/邀请好友背景@2x.png) no-repeat;
			background-size: 100% 100%;
			overflow: hidden;
			.inviteTitle{
				width: 100%;
				margin-top: .95rem;
				img{
					width: 3.2rem;
				}
			}
			.whoSend{
				width: 3.05rem;
				height: .28rem;
				font-size: .13rem;
				color: #f8f46a;
				line-height: .28rem;
				border-radius: .05rem;
				text-align: center;
				background: #56344a;
				margin: .62rem auto .12rem;
				span{
					font-size: .15rem;
					color: #f08cba;
				}
			}
			.inviteInfo{
				width: 2.9rem;
				height: 2.7rem;
				background: url(../assets/打印机@2x.png) no-repeat;
				background-size: 100% 100%;
				margin: auto;
				overflow: hidden;
				p{
					font-size: .18rem;
					color: #ff9800;
					margin-top: .45rem;
					margin-bottom: 0;
					font-weight: bold;
				}
				form{
					overflow: hidden;
					#phoneNum{
						width: 2rem;
						height: .44rem;
						border: 1px solid #333333;
						border-radius: .05rem;
						font-size: .14rem;
					}
					#code{
						width: 1.25rem;
						height: .44rem;
						border: 1px solid #333333;
						border-radius: .05rem;
						float: left;
						margin-left: .45rem;
						font-size: .14rem;
					}
					.sendCode{
						width: .7rem;
						height: .44rem;
						border: 1px solid #333333;
						border-radius: .05rem;
						float: left;
						margin-left: .05rem;
						background: #FF9800;
						color: #FFFFFF;
					}
					.sub{
						float: left;
						margin-left: .45rem;
						width: 2rem;
						height: .44rem;
						border: 1px solid #333333;
						border-radius: .05rem;
						font-size: .14rem;
						background: #FF9800;
						color: #FFFFFF;
					}
				}
			}
		}
		.tips {
			position: absolute;
			left: 0.8rem;
			top: 1.5rem;
			width: 2rem;
			font-size: 0.15rem;
			color: #fff;
			line-height: 0.3rem;
			background: rgba(55, 55, 55, .8);
			padding-left: 0.07rem;
			padding-right: 0.07rem;
			z-index: 100;
		}
	}
</style>