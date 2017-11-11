<template>
  <div class="recharge" v-title data-title="银行卡充值">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>银行卡充值</p>
		</div>
		<div class="content">
			<!--<div class="bankcard">
				<div class="cardnum">
					<img src="../assets/1@2x.png"/>
					招商银行 尾号0102
				</div>
				<p>单笔限额5万,每日限额20万</p>
			</div>-->
			<div class="money">
				<label for="money">充值金额</label>
				<input v-bind:type="typeinput" v-model="rechargeMoney" @focus="typeinput='text'" @blur="filterNum" id="money" placeholder="10元起充" />
			</div>
		</div>
		<button v-bind:class="{disable : disable}" v-bind:disabled="disable" @click="recharge">充值</button>
		<transition name="fade">
			<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		</transition>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
		<!--<form style="display: none;" name="form1" v-bind:action="postUrl" method="post">
			<input type="text" name="merchantID" v-bind:value="merchantID" />
			<input type="text" name="operationType" v-bind:value="operationType" />
			<input type="text" name="request" v-bind:value="request" />
			<input type="text" name="sign" v-bind:value="sign" />
			<input type="submit" value="提交"/>
		</form>-->
  </div>
</template>

<script>
export default {
  name: 'recharge',
  data () {
    return {
      typeinput: 'number',				//input输入框类型
      rechargeMoney: null,				//充值金额
      disable: true,							//充值按钮是否禁用
      tipsstatus: false,					//提示框显隐
      tips: '提示框',							//提示框内容
      huanchongStatus: false,			//缓冲框显隐
      postUrl: null,					//三方链接
      merchantID: null,				//传递三方信息
      operationType: null,		//传递三方信息
      request: null,					//传递三方信息
      sign: null							//传递三方信息
    }
  },
  watch: {
  	rechargeMoney: function(){
	    this.rechargeMoney = this.moneyType(this.rechargeMoney);		//moneyType公共方法，变为金钱格式
	    if(parseFloat(this.rechargeMoney) >= 10){
	    	this.disable = false;
	    }else{
	    	this.disable = true;
	    }
  	}
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	},
  	postcall( url, params, target){  
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
  	recharge(){
  		let that = this;
  		mui.ajax(baseURL + '/api/deposit?trdAmt='+ that.rechargeMoney +'&depositType=1&bankCode=1103&merFee=0&taker=2',{
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':sessionStorage.getItem("tokenZylc")
				},
				success:function(res){
					console.log(res);
					if(res.success){
						that.postcall( res.data.postUrl, {
							merchantID: res.data.merchantID,
							operationType: res.data.operationType,
							request: res.data.request,
							sign: res.data.sign
						});
						/*that.merchantID = res.data.merchantID;
						that.operationType = res.data.operationType;
						that.request = res.data.request;
						that.sign = res.data.sign;
						that.postUrl = res.data.postUrl;*/
						/*setTimeout(function(){
							document.form1.submit()
						},100)*/
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
					console.log(type);
				}
			});
  	},
  	filterNum(){
  		this.typeinput = 'number';
  		this.rechargeMoney = parseFloat(this.rechargeMoney).toFixed(2);
  	}
  },
  mounted() {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.recharge{
	width: 100%;
	height: 100%;
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.5rem;
		background: #F9F9F9;
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
	.content{
		padding-top: .62rem;
		text-align: left;
		overflow: hidden;
		.bankcard{
			width: 100%;
			height: .8rem;
			padding: 0 7%;
			background: #FFFFFF;
			margin-bottom: .12rem;
			.cardnum{
				font-size: .18rem;
				height: .5rem;
				line-height: .5rem;
				color: #333333;
				img{
					display: block;
					float: left;
					width: .28rem;
					margin: .11rem .11rem 0 0;
				}
			}
			p{
				font-size: .15rem;
				line-height: .3rem;
				color: #999999;
				padding-left: .39rem;
				margin: 0;
			}
		}
		.money{
			width: 100%;
			height: .45rem;
			padding: 0 7%;
			background: #FFFFFF;
			font-size: .15rem;
			line-height: .45rem;
			color: #333333;
			margin-bottom: .2rem;
			input{
				padding: 0;
				margin: 0;
				width: 70%;
				font-size: .15rem;
				border: 0;
				padding-left: .1rem !important;
			}
		}
	}
	button{
		float: left;
		width: 94%;
		height: .45rem;
		background: #FFC266;
		margin-left: 3%;
		font-size: .18rem;
		color: #FFFAF2;
		border: 0;
		padding: 0;
		line-height: .45rem;
	}
	.disable{
		background: #E0E0E0;
		opacity: 1;
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
