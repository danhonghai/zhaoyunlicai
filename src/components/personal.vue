<template>
  <div class="personal" v-title data-title="我的">
  	<div class='top'>
  		<div class='personInfo'>
  			<div class='logo'></div>
	    	<span>{{userinfo.userInfo.mobile}}</span>
	    	<div @click="Goto('accountSet')" class='goUserSet'>设置</div>
  		</div>
	  	<div class='income'>
	  		<div class='left'>
	  			<span>昨日收益(元)</span>
	  			<span class='cssd0566bb63175d2'>{{userinfo.account?userinfo.account.toFixed(2):'0.00'}}</span>
	  		</div>
	  		<div class='right'>
	  			<div class='rightT'>
	  				<span>累计收益(元)</span>
	  				<span class='cssd0566bb63175d2'>{{userinfo.profitsTotal.toFixed(2)}}</span>
	  			</div>
	  			<div class='rightB'>
	  				<span>总资产(元)</span>
	  				<span class='cssd0566bb63175d2'>{{userinfo.moneyTotal.toFixed(2)}}</span>
	  			</div>
	  		</div>
	  	</div>
    </div>
  	<div class='changeSum'>
  		<span>可用余额：</span>
  		<span>{{userinfo.moneyUsable.toFixed(2)}}元</span>
  		<button :class='{btnBackground:isYellow==0}' @click="Goto('recharge')">充值</button>
  		<button :class='{btnBackground:isYellow==1}' @click="Goto('cashCommission')">提现</button>
  	</div>
  	<ul class='record'>
  		<li @click="Goto('investRecord')">
  			<img src="../assets/record@2x.png" alt="" />
  			<span>投资记录</span>
  		</li>
  		<li @click="Goto('moneyRecord')">
	  			<img src="../assets/money@2x.png" alt="" />
	  			<span>资金流水记录</span>
  		</li>
  		<!--<li @click="Goto('myBankcard')">-->
  		<li @click="accountLogin">
  			<img src="../assets/card@2x.png" alt="" />
  			<span>我的账户详情</span>
  		</li>
  	</ul>
  	<ul class='service'>
  		<li>
  			<img src="../assets/security@2x.png" alt="" />
  			<span>安全保障</span>
  		</li>
  		<li>
  			<img src="../assets/phone@2x.png" alt="" />
  			<span>客服电话</span>
  			<span><a href="tel:4008818815">400-881-8815</a></span>
  		</li>
  		<li @click="Goto('suggestion')">
  			<img src="../assets/opinion@2x.png" alt="" />
  			<span>意见反馈</span>
  		</li>
  	</ul>
  	<div class="bottom">
      <ul>
        <li @click='dianji(1)'>
          <img src="../assets/index_nomal@2x.png"/>
          <p>首页</p>
        </li>
        <li @click='dianji(2)'>
          <img src="../assets/financial_nomal@2x.png"/>
          <p>投资</p>
        </li>
        <li class='active' @click='dianji(3)'>
          <img src="../assets/me_active@2x.png"/>
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      isYellow: 0,
      yesIncome: 22,
      allIncome: 25,
      totalMoney: 30,
      userinfo: {								//用户信息
      	account:0,							//昨日收益
      	moneyTotal:0,						//总资产
      	moneyUsable:0,					//可用余额
      	profitsTotal:0,					//累计收益
      	userInfo: {
      		mobile:0							//用户手机号
      	}
      }		
    }
  },
  methods: {
  	dianji(index){
  		this.isLight = index;
  		console.log(this.isLight)
  		if(this.isLight == 1){
  			this.$router.push({path: '/'})
  		}else if(this.isLight == 2){
  			this.$router.push({path: '/invest'})
  		}else if(this.isLight == 3){
  			this.$router.push({path: '/personal'})
  		}
  	},
  	Goto(str){			//跳转页面
  		if(str == 'accountSet' || str == 'recharge' ||　str == 'cashCommission'){
  			if(this.userinfo.userInfo.realVerifyStatus){
  				this.$router.push({path: '/'+str});
  			}else{
  				this.$router.push({path: '/certification'})
  			}
  		}else{
  			this.$router.push({path: '/'+str});
  		}
  	},
  	goAccountSet() {//去个人账户设置中心需要判断是否已实名认证，若未实名则不允许进入
  		if('已实名'){//进入账户设置页面
  			this.$router.push({path: '/accountSet'})
  		}
  		if('未实名'){//进入实名认证页面
  			this.$router.push({path: '/certification'})
  		}
  	},
  	yellow(index){
  		this.isYellow = index
  	},
  	postcall( url, params, target){  //自动构建form表单提交
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
  	accountLogin(){		//登陆三方账户
  		let that = this;
  		if(that.userinfo.userInfo.realVerifyStatus){
  			mui.ajax(baseURL + '/api/account_info',{
					dataType:'json',
					type:'get',
					headers:{
						'Content-Type':'application/json',
						'x-auth-token':sessionStorage.getItem("tokenZylc")
					},
					success:function(res){
						console.log(res);
						that.postcall( res.data.postUrl, {
							merchantId: res.data.merchantId,
							userName: res.data.userName
						});
					},
					error:function(xhr,type,errorThrown){
						//异常处理；
						console.log(type);
					}
				});
  		}else{
  			that.$router.push({path: '/certification'})
  		}
  	}
  },
  mounted() {
  	let that = this;
  	if(!sessionStorage.getItem("tokenZylc")){		//判断是否登录
    	this.$router.push({name: 'login',params: { From: 'personal' }});
    }else{
    	mui.ajax(baseURL + '/api/user_info',{				//请求个人信息
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':sessionStorage.getItem("tokenZylc")
				},
				success:function(res){
					that.userinfo = res.data;
					//更新本地实名信息
					let realVerify = JSON.parse(sessionStorage.getItem('realVerify'));
					realVerify.realVerifyStatus = res.data.userInfo.realVerifyStatus;
					realVerify.emailBindingStatus = res.data.userInfo.emailBindingStatus;
					realVerify.cardBindingStatus = res.data.userInfo.cardBindingStatus;
					sessionStorage.setItem('realVerify',JSON.stringify(realVerify));
					console.log(res);
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
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.personal{
	width: 100%;
	height: 100%;
	padding-bottom: 0.5rem;
	.top{
		width: 100%;
		height: 1.84rem;
		background: #FC9800;
		/*background: linear-gradient(left, #FFC266, #FC9800);*/
		padding-top: 0.3rem;
		padding-left: 0.26rem;
		padding-right: 0.26rem;
		overflow: hidden;
		.personInfo{
			width: 100%;
			height: 0.34rem;
		}
		.logo{
			float: left;
			width: 0.34rem;
			height: 0.34rem;
			border-radius: 50%;
			background: #fff url('../assets/me_active copy@2x.png') no-repeat center;
			background-size: 0.3rem;
		}
		span{
			float: left;
			font-size: 0.15rem;
			line-height: 0.34rem;
			color: #fff;
			margin-left: 0.1rem;
		}
		.goUserSet{
			float: right;
			font-size: 0.15rem;
			line-height: 0.34rem;
			color: #fff;
		}
	}
	.income{
		margin-top: 0.15rem;
		.left{
			float: left;
			width: 1rem;
			height: 1rem;
			span:nth-child(1){
				display: block;
				color: #FFF6EA;
				font-size: 0.13rem;
				line-height: 0.2rem;
			}
			span:nth-child(2){
				display: block;
				color: #fff;
				font-size: 0.3rem;
				line-height: 0.4rem;
			}
		}
		.right{
			float: left;
			width: 1rem;
			height: 2rem;
			margin-left: 0.7rem;
			.rightT,.rightB{
				width: 1rem;
				height: 0.45rem;
				span:nth-child(1){
					display: block;
					height: 0.2rem;
					color: #FFF6EA;
					font-size: 0.12rem;
					line-height: 0.2rem;
				}
				span:nth-child(2){
					display: block;
					height: 0.2rem;
					color: #fff;
					font-size: 0.15rem;
					line-height: 0.2rem;
				}
			}
			.rightB{
				margin-top: 0.05rem;
			}
		}
	}
	.changeSum{
		width: 100%;
		height: 0.6rem;
		background: #fff;
		padding-left: 0.26rem;
		padding-right: 0.26rem;
		overflow: hidden;
		span:nth-child(1){
			float: left;
			display: block;
			font-size: 0.14rem;
			line-height: 0.6rem;
			color: #999;
		}
		span:nth-child(2){
			float: left;
			display: block;
			font-size: 0.14rem;
			line-height: 0.6rem;
			color: #333;
		}
		button{
			float: right;
			width: 0.52rem;
			height: 0.26rem;
			margin-top: 0.17rem;
			font-size: 0.12rem;
			line-height: 0.26rem;
			color: #FFC266;
			border: 1px solid #FFC266;
			border-radius: 0.03rem;
			padding: 0;
			margin-left: 0.2rem;
		}
	}
	.btnBackground{
		background: #FFC266;
		color: #fff!important;
	}
	.record,.service{
		width: 100%;
		height: 1.2rem;
		background: #fff;
		padding-left: 0.26rem;
		margin-top: 0.1rem;
		li{
			height: 0.4rem;
			border-bottom: 1px solid #F1F1F1;
			background: url('../assets/Path 145 Copy 2@2x.png') no-repeat 3.13rem;
			background-size: 0.08rem;
			img{
				width: 0.2rem;
				height: 0.2rem;
				float: left;
				margin-top: 0.1rem;
				margin-right: 0.1rem;
			}
			span{
				float: left;
				display: inline-block;
				font-size: 0.14rem;
				line-height: 0.4rem;
				color: #666;
			}
		}
		li:last-child{
			border: none;
		}
	}
	.service{
		li:nth-child(2){
			background: none;
			span:last-child{
				float: left;
				margin-left: 1.45rem;
			}
		}
	}
	.bottom{
		position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background: #FFFFFF;
    box-shadow: inset 0 1px 1px -1px #D8D8D8;
    ul{
      width: 100%;
      background: #FFFFFF;
			li{
				float: left;
				width: 33%;
				height: .5rem;
				float: left;
				font-size: .1rem;
				line-height: .1rem;
				img{
					display: block;
					width: .2rem;
					height: .2rem;
					margin: .08rem auto .05rem;
				}
				p{
					margin: 0;
					color: #BCBCBC;
				}
			}
		}
		.active{
			p{
				color: #FC9800;
			}
		}
	}
}
</style>
