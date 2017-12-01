<template>
	<div class="buy" v-title data-title="购买">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>购买</p>
		</div>
		<div class="content">
			<h3>剩余可投<span>{{surplusMoney |　number(2)}}元</span></h3>
			<div class="money">
				<div class="balance">
					账户余额
					<span>{{balance | number(2)}}元</span>
					<b><router-link to="/recharge">充值</router-link></b>
				</div>
				<div class="investMoney">投资金额
					<input v-bind:type="typeinput" v-model="investMoney" @focus="typeinput='text'" @blur="filterNum" placeholder="100起投 100的整数" />
				</div>
			</div>
			<p>预计收益： <span>{{earnings | number(2)}}</span>元</p>
			<button @click="pay">{{payWord}}</button>
			<div class="mostAmount" v-if="mostAmount!=0">最高可投 <span>{{mostAmount |　number(2)}} </span>元</div>
		</div>
		<div class="bottom">购买即视为同意《赵云理财协议》</div>
		<transition name="fade">
			<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		</transition>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
		<div class='paypsd' v-if='paypsdStatus'>
			<div class="psdContent">
				<div class="psdHeader">
					<img src="../assets/Path 145 Copy 3@2x.png" alt="" @click="close" />
					<p>输入支付密码</p>
				</div>
				<div class="sixPassword">
					<input type="tel" value="" v-model="sixPsd" v-focus maxlength="6" />
					<div class="passBox" v-for="item in sixPsdStatus" v-bind:class="{active:item}"><span></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'setPayPsd',
		data() {
			return {
				balance: 0.001,				//账户余额
				payWord: '购买',				//购买、充值转换
				investMoney: null,			//投资金额
				typeinput: 'number',		//input输入框类型
				sixPsd: null,				//支付密码
				sixPsdStatus: [false, false, false, false, false, false],		//支付密码输入状态
				tipsstatus: false,			//提示框显隐
				tips: '提示框',				//提示框内容
				huanchongStatus: false,		//缓冲框显隐
				paypsdStatus: false,		//支付密码显隐
				surplusMoney: null,			//剩余可投
				apr: null,					//利率
				numberOfDays: null,			//投资期限
				earnings: 0,				//预计收益
				mostAmount: null			//最高可投
			}
		},
		directives: {
			focus: {
				// 自动获得焦点
				inserted: function(el) {
					el.focus()
				}
			}
		},
		watch: {
			sixPsd: function() {				//支付密码输入框改变
				for(let i = 0; i < this.sixPsdStatus.length; i++) {
					if(i < this.sixPsd.length) {
						this.sixPsdStatus[i] = true;
					} else {
						this.sixPsdStatus[i] = false;
					}
				}
				if(this.sixPsd.length == this.sixPsdStatus.length) {
					this.$router.push({
						path: '/buyResult'
					});
				}
			},
			investMoney: function(){			//判断余额是否充足，动态改变预计收益
			   	this.investMoney = this.moneyType(this.investMoney);
				if(this.investMoney > this.balance) {
					this.payWord = '余额不足,请充值';
				} else {
					this.payWord = '购买';
				}
				this.earnings = this.investMoney * this.apr * this.numberOfDays / 36000;
			}
		},
		methods: {
			goBack() {	//后退
				this.$router.go(-1)
			},
			postcall( url, params, target){  	//JS模拟提交表单
			    var tempform = document.createElement("form");  
			    tempform.action = url;  
			    tempform.method = "post";  
			    tempform.style.display="none";
			    //tempform.enctype = "multipart/form-data";
			    if(target) {  
			      tempform.target = target;
			    }  
			  
			    for (var x in params) {  
		        var opt = document.createElement("input");  
		        opt.name = x;  
		        opt.value = params[x];  
		        tempform.appendChild(opt);  
			    }  
			  
			    var opt = document.createElement("input");  
			    opt.type = "submit";  
			    tempform.appendChild(opt);  
			    document.body.appendChild(tempform);  
			    tempform.submit();  
			    document.body.removeChild(tempform);  
			},  
			pay() {	//点击购买or余额不足按钮
				if(!this.investMoney) {
					this.tipsstatus = true;
					this.tips = '请输入金额';
					let that = this;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}
				if(this.balance < this.investMoney) {
					this.$router.push({
						path: '/recharge'
					});
				}else if(this.investMoney % 100 !=0){
					this.tipsstatus = true;
					this.tips = '请输入100的整数';
					let that = this;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}else if(this.investMoney > this.mostAmount && this.mostAmount != 0){
					this.tipsstatus = true;
					this.tips = '超过最高可投金额';
					let that = this;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}else if(this.investMoney) {
					//this.$router.push({path: '/buyResult'});
					//this.paypsdStatus = true;
					let that = this;
					//点击购买，提交表单跳转三方
					mui.ajax(baseURL + '/api/borrow/tender?borrowId='+ that.$route.params.borrowId +'&money=' + that.investMoney,{
						dataType:'json',//服务器返回json格式数据
						type:'post',//HTTP请求类型
						headers:{
							'Content-Type':'application/json',
							'x-auth-token':that.getCookie("tokenZylc")
							/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
						},
						success:function(res){
							if(res.success){
								that.postcall( res.data.postUrl ,{
									merchantID: res.data.merchantID,
									operationType: res.data.operationType,
									request: res.data.request,
									sign: res.data.sign
								})
							}else{
								that.tips = res.errMsg;
								that.tipsstatus = true;
								setTimeout(function() {
									that.tipsstatus = false;
								}, 1500);
							}
						},
						error:function(xhr,type,errorThrown){
							//异常处理；
						}
					});
				}
			},
			close() {	//关闭输入交易密码框
				this.paypsdStatus = false;
				this.sixPsd = null;
				this.sixPsdStatus = [false, false, false, false, false, false];
			},
			filterNum(){		//保留两位小数
		  		this.typeinput = 'number';
		  		this.investMoney = parseFloat(this.investMoney).toFixed(2);
		  	}
		},
		mounted() {
			let that =this;
			if(this.balance <= 0) {
				this.payWord = '余额不足,请充值';
			}
			//标的详情
		  	mui.ajax(baseURL + '/api/noauth/investment_detail?borrowId=' + that.$route.params.borrowId,{
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				headers:{
					'Content-Type':'application/json'
				},
				success:function(res){
					if(res.success){
						that.surplusMoney = res.data.borrowDetail.surplusMoney;
						that.apr = res.data.borrowDetail.apr;
						that.numberOfDays = res.data.borrowDetail.numberOfDays;
						that.mostAmount = res.data.borrowDetail.mostAmount;
					}else{
						that.tips = res.errMsg;
						that.tipsstatus = true;
						setTimeout(function() {
							that.tipsstatus = false;
						}, 1500);
					}
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
				}
			});
			//用户信息
			mui.ajax(baseURL + '/api/user_info',{
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':that.getCookie("tokenZylc")
					/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
				},
				success:function(res){
					//更新本地实名信息
					let realVerify = JSON.parse(that.getCookie('realVerify'));
					/*let realVerify = JSON.parse(sessionStorage.getItem('realVerify'));*/
					realVerify.realVerifyStatus = res.data.userInfo.realVerifyStatus;
					realVerify.emailBindingStatus = res.data.userInfo.emailBindingStatus;
					realVerify.cardBindingStatus = res.data.userInfo.cardBindingStatus;
					that.setCookie('realVerify',JSON.stringify(realVerify),15);
					/*sessionStorage.setItem('realVerify',JSON.stringify(realVerify));*/
					that.balance = res.data.moneyUsable;
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					/*console.log(xhr.status);
					console.log(type);
					console.log(errorThrown);
					console.log('失败')*/
					if(xhr.status == 401){
						that.tips = '请重新登录';
						that.tipsstatus = true;
						that.delCookie("tokenZylc");
						/*sessionStorage.removeItem('tokenZylc');*/
						setTimeout(function() {
							that.tipsstatus = false;
							that.$router.push({path: '/login'})
						}, 1500);
					}
				}
			});
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
	
	.buy {
		width: 100%;
		height: 100%;
		.header {
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.5rem;
			background: #F9F9F9;
			z-index: 2;
			img {
				width: 0.1rem;
				height: 0.16rem;
				position: absolute;
				top: .15rem;
				left: .2rem;
			}
			p {
				width: 100%;
				font-size: 0.19rem;
				text-align: center;
				line-height: 0.5rem;
				color: #333;
			}
		}
		.content {
			padding-top: .5rem;
			h3 {
				width: 100%;
				height: .45rem;
				padding: 0 7%;
				font-size: .15rem;
				color: #999999;
				line-height: .45rem;
				text-align: left;
				font-weight: normal;
				span {
					color: #333333;
					padding-left: .15rem;
				}
			}
			.money {
				width: 100%;
				height: .9rem;
				padding-left: 7%;
				background: #FFFFFF;
				font-size: .15rem;
				color: #333333;
				line-height: .45rem;
				text-align: left;
				.balance {
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					span {
						padding-left: .15rem;
						color: #FF6666;
					}
					b {
						font-weight: normal;
						float: right;
						margin-right: 7%;
						a {
							color: #4A77A6;
						}
					}
				}
				.investMoney {
					input {
						padding: 0;
						margin: 0;
						width: 70%;
						font-size: .15rem;
						border: 0;
						padding-left: .15rem !important;
					}
				}
			}
			p {
				font-size: .11rem;
				line-height: .3rem;
				text-align: left;
				padding-left: 7%;
				margin-bottom: .1rem;
				span {
					font-size: .12rem;
					color: #FF6666;
				}
			}
			button {
				width: 94%;
				height: .45rem;
				background: #FFC266;
				font-size: .18rem;
				color: #FFFAF2;
				border: 0;
				padding: 0;
				line-height: .45rem;
			}
			.mostAmount{
				font-size: .11rem;
				line-height: .3rem;
				color: #999999;
				span {
					font-size: .12rem;
					color: #FF6666;
				}
			}
		}
		.bottom {
			width: 100%;
			text-align: center;
			font-size: .13rem;
			line-height: .13rem;
			color: #999999;
			position: absolute;
			bottom: .15rem;
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
		.paypsd {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(55, 55, 55, .3);
			z-index: 20;
			.psdContent {
				width: 100%;
				position: absolute;
				bottom: 0;
				.psdHeader {
					width: 100%;
					height: .5rem;
					background: #FFFFFF;
					font-size: .19rem;
					line-height: .5rem;
					text-align: center;
					position: relative;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					img {
						width: .07rem;
						position: absolute;
						left: 7%;
						top: .18rem;
					}
					p {
						color: #333333;
					}
				}
				.sixPassword {
					width: 100%;
					height: .8rem;
					padding-top: .19rem;
					padding-left: .26rem;
					background: #FBFBFB;
					position: relative;
					input {
						margin: 0;
						padding: 0;
						position: absolute;
						top: .19rem;
						left: .26rem;
						opacity: 0;
						z-index: 10;
						width: 3.23rem;
						height: .45rem;
					}
					.passBox {
						width: .54rem;
						height: .45rem;
						float: left;
						border: .005rem solid #D7D7D7;
						border-right: 0;
						background: #FFFFFF;
					}
					.active {
						position: relative;
						display: flex;
						span {
							display: block;
							width: .13rem;
							height: .13rem;
							background: #000000;
							border-radius: 50%;
							margin: auto;
						}
					}
					.passBox:nth-last-child(1) {
						border-right: 1px solid #D7D7D7;
						;
					}
				}
			}
		}
	}
</style>