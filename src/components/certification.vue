<template>
  <div class="certification" v-title data-title="认证">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>认证</p>
		</div>
		<div class='importantMsg'>应监管要求，需要进行实名认证才可以进行投资,充值,提现</div>
		<div class='idCard'>
			<h3>身份信息</h3>
			<div class='identifyInfo'>
				<div class='idcardName'>
					<span>姓名</span>
					<input type="text" v-model="name" placeholder="请输入姓名" />
				</div>
				<div class='idcardNum'>
					<span>身份证</span>
					<input type="number" v-model="identNo" placeholder="请输入身份证号码" />
				</div>
			</div>
		</div>
		<!--<div class='bankCard'>
			<h3>银行卡信息</h3>
			<div class='identifyInfo'>
				<div class='bankcardName' id='showUserPicker'>
					<span>选择开户行</span>
					<p id='userResult'></p>
				</div>
				<div class='bankcardNum'>
					<span>银行卡号</span>
					<input type="number" placeholder="请输入银行卡号" />
				</div>
			</div>
		</div>-->
		<div class='btn'>
			<span id="btn" @click="nextStep">确定</span>
		</div>
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
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
  name: 'certification',
  data () {
    return {
      tipsstatus: false,
      tips: '提示框',
      huanchongStatus: false,
      name: null,							//姓名
      identNo: null,					//身份证信息
      postUrl: null,					//三方链接
      merchantID: null,				//传递三方信息
      operationType: null,		//传递三方信息
      request: null,					//传递三方信息
      sign: null							//传递三方信息
    }
  },
  methods: {
  	postcall( url, params, target){  //模拟form表单提交
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
  	goBack(){
  		this.$router.go(-2);
  	},
  	nextStep(){		//点击下一步
  		let that = this;
  		if(that.name && that.identNo){
  			that.huanchongStatus = true;
  			//实名认证
	  		mui.ajax(baseURL + '/api/realname_verify?mobileNo='+ sessionStorage.getItem('phoneNum') +'&identNo='+ that.identNo +'&realName='+ that.name +'&userType=1',{
					dataType:'json',//服务器返回json格式数据
					type:'post',//HTTP请求类型
					headers:{
						'Content-Type':'application/json',
						'x-auth-token':sessionStorage.getItem("tokenZylc")
					},
					success:function(res){
						that.huanchongStatus = false;
						if(res.success){
							that.postcall( res.data.postUrl ,{
								merchantID: res.data.merchantID,
								operationType: res.data.operationType,
								request: res.data.request,
								sign: res.data.sign
							})
							/*that.merchantID = res.data.merchantID;
							that.operationType = res.data.operationType;
							that.request = res.data.request;
							that.sign = res.data.sign;
							that.postUrl = res.data.postUrl;
							setTimeout(function(){
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
  		}else{
  			that.tips = '请填写完整信息';
				that.tipsstatus = true;
				setTimeout(function() {
					that.tipsstatus = false;
				}, 1500);
  		}
  		
  	}
  },
  mounted() {
  	let that = this;
  	mui.ajax(baseURL + '/api/user_info',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			headers:{
				'Content-Type':'application/json',
				'x-auth-token':sessionStorage.getItem("tokenZylc")
			},
			success:function(res){
				//更新本地实名信息
				let realVerify = JSON.parse(sessionStorage.getItem('realVerify'));
				realVerify.realVerifyStatus = res.data.userInfo.realVerifyStatus;
				realVerify.emailBindingStatus = res.data.userInfo.emailBindingStatus;
				realVerify.cardBindingStatus = res.data.userInfo.cardBindingStatus;
				sessionStorage.setItem('realVerify',JSON.stringify(realVerify));
				if(res.data.userInfo.realVerifyStatus){
					that.$router.push({path: '/personal'})
				}
				console.log(res);
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
  	
//	setTimeout(function(){
//		
//		(function($, doc) {
//					$.init();
//					$.ready(function() {
//						/**
//						 * 获取对象属性的值
//						 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
//						 * @param {Object} obj 对象
//						 * @param {String} param 属性名
//						 */
//						var _getParam = function(obj, param) {
//							return obj[param] || '';
//						};
//						var userPicker = new $.PopPicker();
//						userPicker.setData([{
//							value: 'zhongguoyinhang',
//							text: '中国银行'
//						}, {
//							value: 'zhaoshangyinhang',
//							text: '招商银行'
//						}, {
//							value: 'gongshangyinhang',
//							text: '中国工商银行'
//						}, {
//							value: 'nonghang',
//							text: '中国农业银行'
//						}, {
//							value: 'xingyeyihang',
//							text: '兴业银行'
//						}]);
//						var showUserPickerButton = doc.getElementById('showUserPicker');
//						var userResult = doc.getElementById('userResult');
//						showUserPickerButton.addEventListener('tap', function(event) {
//							userPicker.show(function(items) {
//								userResult.innerText = items[0].text;
//								//返回 false 可以阻止选择框的关闭
//								//return false;
//							});
//						}, false);
//					});
//				})(mui, document);
//				
//	},100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.certification{
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
			margin: 0.15rem 1.5rem 0 0.2rem;
		}
		p{
			float: left;
			font-size: 0.19rem;
			line-height: 0.5rem;
			color: #333;
			margin-bottom: 0;
		}
	}
	.importantMsg{
		width: 100%;
		padding-top: 0.5rem;
		background: #FF6666;
		font-size: 0.13rem;
		line-height: 0.29rem;
		color: #fff;
	}
	.idCard,.bankCard{
		width: 100%;
		h3{
			height: 0.43rem;
			background: #F6F6F6;
			font-size: 0.14rem;
			color: #999;
			line-height: 0.43rem;
			text-align: left;
			padding-left: 0.3rem;
			margin: 0;
		}
		.identifyInfo{
			width: 100%;
			padding-left: 0.13rem;
			background: #F0F0F0;
		}
		.idcardName,.idcardNum,.bankcardName,.bankcardNum{
			height: 0.43rem;
			border-bottom: 1px solid #E0E0E0;
			span{
				float: left;
				font-size: 0.17rem;
				color: #333;
				line-height: 0.43rem;
				margin-left: 0.18rem;
			}
			input,p{
				float: right;
				width: 2.4rem;
				height: 0.42rem;
				font-size: 0.17rem;
				line-height: 0.42rem;
				padding: 0;
				text-align: right;
				padding-right: 0.28rem !important;
				margin-bottom: 0;
				border: none;
				background: #F0F0F0;
			}
		}
		.idcardNum,.bankcardNum{
			border: none;
		}
		.bankcardName{
			p{
				background: url('../assets/Path 145 Copy 2@2x.png') no-repeat 2rem;
				background-size: 0.09rem;
				padding-right: 0.45rem;
			}
		}
	}
	.btn{
		width: 100%;
		height: 0.45rem;
		margin-top: 0.2rem;
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
