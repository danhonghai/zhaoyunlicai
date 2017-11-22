<template>
	<div class="unregular" v-title v-bind:data-title="title">
	    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>{{title}}</p>
		</div>
		<div class="content">
			<div class="goodInfo">
				<dl>
					<dt class="cssd0566bb63175d2">{{investDetail.apr | number(1)}}<span> %</span> </dt>
					<dd>利率</dd>
				</dl>
				<dl>
					<dt class="cssd0566bb63175d2">{{investDetail.numberOfDays}}<span> 天</span> </dt>
					<dd>投资期限<span>到期还本付息</span></dd>
				</dl>
				<div class="progress">
   					<span v-bind:style="{width:investDetail.proportion*100 +'%'}"></span>
   				</div>
   				<p>项目总额<span>{{investDetail.account | moneyshow(100000)}}{{investDetail.account<100000?'元':'万'}}</span></p>
   				<p>剩余可投<span>{{investDetail.surplusMoney | moneyshow(100000)}}{{investDetail.surplusMoney<100000?'元':'万'}}</span></p>
   				<b>{{investDetail.proportion*100 | number(2)}}%</b>
			</div>
			<div class="borrowerInfo">
				<h3>借款人信息</h3>
				<ul>
					<li>
						<img src="../assets/success_ok@2x.png"/>身份证认证
					</li>
					<li>
						<img src="../assets/success_ok@2x.png"/>手机认证
					</li>
					<li>
						<span>姓名:</span>{{investDetail.realName}}
					</li>
					<li>
						<span>年龄:</span>{{investDetail.age}}岁
					</li>
					<li>
						<span>职业:</span>{{investDetail.occupation}}
					</li>
					<li>
						<span>性别:</span>{{investDetail.gender == 1 ? '男' : '女'}}
					</li>
				</ul>
				<h3>信用记录</h3>
				<ul>
					<li>
						<span>芝麻信用:</span>{{investDetail.sesameCredit}}分
					</li>
					<li>
						<span>逾期次数:</span>{{investDetail.overdueTimes}}次
					</li>
					<li>
						<span>借款次数:</span>{{investDetail.loanTimes}}次
					</li>
				</ul>
			</div>
			<div class="list">
				<h3>已投资列表</h3>
				<ul class="ranklist" v-if="ranklist.length>0">
					<li v-for="(list,index) in ranklist" v-if="index<5">
						<div class="rank" v-if="index==0"><img src="../assets/1奖牌@2x.png"/></div>
						<div class="rank" v-if="index==1"><img src="../assets/2奖牌@2x.png"/></div>
						<div class="rank" v-if="index==2"><img src="../assets/3奖牌@2x.png"/></div>
						<div class="rank cssd0566bb63175d2" v-if="index>2">第 {{ index+1 }} 名</div>
						<dl>
							<dt>{{list.mobile}}</dt>
							<dd>{{list.createdTime}}</dd>
						</dl>
						<span class="cssd0566bb63175d2">{{list.account|number(2)}}元</span>
					</li>
					<!--<li>
						<div class="rank"><img src="../assets/2奖牌@2x.png"/></div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank"><img src="../assets/3奖牌@2x.png"/></div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank cssd0566bb63175d2">第 4 名</div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>
					<li>
						<div class="rank cssd0566bb63175d2">第 5 名</div>
						<dl>
							<dt>186 **** 6293</dt>
							<dd>2017-10-19 16:35</dd>
						</dl>
						<span class="cssd0566bb63175d2">100000.00元</span>
					</li>-->
					<b v-if="ranklist.length>4" @click="goRanklist">点击查看更多</b>
				</ul>
				<div class="emptyData" v-else>
					<img src="../assets/empy@2x.png"/>
				</div>
			</div>
		</div>
		<div class="buy">
			<p>1万元收益约<span>{{earnings | number(2)}}元</span></p>
			<button @click="buy" v-bind:class="{disable: investDetail.status!=2}">{{buyStatus}}</button>
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
  	name: 'unregular',
  	data () {
	    return {
	      	title: null,					//标题
	      	tipsstatus: false,				//提示框显隐
			tips: '提示框',					//提示框内容
			huanchongStatus: false,			//缓冲框显隐
			investDetail:{					//散标详情
				apr: null,					//利率
				numberOfDays: null,			//投资天数
				proportion: null,			//进度
				account: null,				//项目总额
				surplusMoney: null,			//剩余可投
				proportion: null,			//进度
				realName: null,				//借款人姓名
				occupation: null,			//借款人职业
				age: null,					//借款人年龄
				gender: null,				//借款人年龄
				sesameCredit: null,			//借款人芝麻信用
				overdueTimes: null,			//借款人逾期次数
				loanTimes: null,			//借款次数
				status: null				//标的状态
			},
			earnings: 0,					//预计收益
			ranklist:[],					//投资排行
			moneyUsable: null,				//用户剩余可用金额
			realVerifyStatus: null,			//是否实名认证
			buyStatus: '立即投资',			//购买状态
			buyStatusList: {
				0: '待初审',
				1: '待复审',
				2: '立即投资',
				3: '满标待审',
				4: '终审通过',
				5: '还款中',
				6: '已还款',
				7: '已经过期',
				11: '完成',
				41: '初审不通过',
				42: '复审不通过',
				43: '终审不通过',
				44: '流标'
			},
			loginStatus:null				//登录状态
	    }
  	},
  	methods: {
	  	goBack(){
	  		this.$router.go(-1)
	  	},
	  	buy(){		//购买
	  		/*let realVerify = JSON.parse(sessionStorage.getItem('realVerify'));*/
	  		/*if(!sessionStorage.getItem("tokenZylc") || !this.loginStatus){		//是否登录
		    	sessionStorage.removeItem("tokenZylc");*/
	  		if(!this.getCookie("tokenZylc") || !this.loginStatus){		//是否登录
		    	this.delCookie("tokenZylc");
		    	this.$router.push({
		    		name: 'login',
		    		params: {
		    			unregularId:this.$route.params.id
		    		}
		    	});
		   }else if(!this.realVerifyStatus){		//是否实名
		    	this.$router.push({path: '/certification'});
		   }else if(this.investDetail.status==2){		//是否为募集中
	  			this.$router.push({path: '/buy/'+ this.$route.params.id});
		    }
	  	},
	  	goRanklist(){		//跳转投资排行
	  		this.$router.push({path: '/ranklist/'+ this.$route.params.id})
	  	}
  	},
  	mounted: function(){
  		setTimeout(function(){
  			mui.ajax(baseURL + '/api/noauth/investment_detail?borrowId='+investId,{
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':that.getCookie("tokenZylc")
					/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
				},
				success:function(res){
					console.log(res);
					if(res.success){
						console.log('散标详情成功');
						that.title = res.data.borrowDetail.borrowName;
	    				document.title = that.title;
	    				that.investDetail = res.data.borrowDetail;
	    				that.earnings = 10000 * res.data.borrowDetail.apr * res.data.borrowDetail.numberOfDays / 36000;
						that.realVerifyStatus = res.data.realVerifyStatus;
						that.buyStatus = that.buyStatusList[res.data.borrowDetail.status];
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
  		},200)
  		console.log('123')
  		let that = this;
  		let investId = that.$route.params.id;
  		//标的详情
	  	mui.ajax(baseURL + '/api/noauth/investment_detail?borrowId='+investId,{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			headers:{
				'Content-Type':'application/json',
				'x-auth-token':that.getCookie("tokenZylc")
				/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
			},
			success:function(res){
				console.log(res);
				if(res.success){
					console.log('散标详情成功');
					that.title = res.data.borrowDetail.borrowName;
    				document.title = that.title;
    				that.investDetail = res.data.borrowDetail;
    				that.earnings = 10000 * res.data.borrowDetail.apr * res.data.borrowDetail.numberOfDays / 36000;
					that.realVerifyStatus = res.data.realVerifyStatus;
					that.loginStatus = res.data.loginStatus;
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
		//标的投资排行
	  	mui.ajax(baseURL + '/api/noauth/invest_rank?pushBorrowId='+investId,{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			headers:{
				'Content-Type':'application/json'
			},
			success:function(res){
				console.log(res);
				if(res.success){
					console.log('散标投资排行成功')
					that.ranklist = res.data.content;
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
  	}
}
</script>

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
.unregular{
	width: 100%;
	height: 100%;
	position: relative;
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
		padding-top: .5rem;
		.goodInfo{
			width: 100%;
			padding: 0 7%;
			background: #FFFFFF;
			overflow: hidden;
			position: relative;
			dl{
				width: 50%;
				float: left;
				text-align: left;
				margin-top: .15rem;
				margin-bottom: .2rem;
				dt{
					font-size: .5rem;
					line-height: .5rem;
					color: #FC9800;
					span{
						font-size: .25rem;
					}
				}
				dd{
					font-size: .13rem;
					line-height: .13rem;
					color: #999999;
					span{
						font-size: .11rem;
						float: right;
					}
				}
			}
			.progress{
				width: 100%;
				height: .06rem;
				background: #F1F1F1;
				float: left;
				box-shadow: inset 0 1px 3px 0 #E5DAC9;
				border-radius: 8px;
				position: relative;
				margin-bottom: .1rem;
				span{
					width: 23%;
					height: .06rem;
					position: absolute;
					top: 0;
					left: 0;
					background: -webkit-linear-gradient(top,#FFC266,#FC9800);
					border-radius: 8px;
				}
			}
			p{
				width: 45%;
				float: left;
				font-size: .11rem;
				color: #999;
				text-align: left;
				span{
					padding: 0 .06rem;
					color: #333333;
				}
			}
			b{
				font-size: .11rem;
				color: #333333;
				text-align: right;
				font-weight: normal;
				width: 10%;
				float: left;
			}
		}
		.borrowerInfo{
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			h3{
				width: 100%;
				height: .43rem;
				background: #F6F6F6;
				padding: 0 7%;
				font-size: .14rem;
				color: #999999;
				font-weight: normal;
				line-height: .43rem;
				text-align: left;
				margin: 0;
			}
			ul{
				padding: 0 7%;
				background: #FFFFFF;
				overflow: hidden;
				li{
					font-size: .15rem;
					color: #333333;
					line-height: .45rem;
					text-align: left;
					float: left;
					img{
						width: .17rem;
						display: block;
						margin: .14rem .08rem 0 0;
						float: left;
					}
					span{
						color: #999999;
						padding-right: .15rem;
					}
				}
				li:nth-child(odd){
					width: 60%;
				}
				li:nth-child(even){
					width: 40%;
				}
			}
		}
		.list{
			width: 100%;
			overflow: hidden;
			background: #FFFFFF;
			h3{
				width: 100%;
				height: .43rem;
				background: #F6F6F6;
				padding: 0 7%;
				font-size: .14rem;
				color: #999999;
				font-weight: normal;
				line-height: .43rem;
				text-align: left;
				margin: 0;
			}
			.ranklist{
				width: 100%;
				padding-left: 7%;
				float: left;
				li{
					width: 100%;
					height: .5rem;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					.rank{
						width: .56rem;
						float: left;
						margin: .05rem 0 0 .02rem;
						font-size: .17rem;
						line-height: .38rem;
						text-align: left;
						img{
							display: block;
							width: .345rem;
						}
					}
					dl{
						font-size: .12rem;
						line-height: .12rem;
						text-align: left;
						float: left;
						dt{
							margin: .1rem 0 .065rem;
							color: #333;
						}
						dd{
							color: #999999;
						}
					}
					span{
						font-size: .17rem;
						line-height: .5rem;
						color: #878787;
						float: right;
						margin-right: 7%;
					}
				}
				b{
					display: block;
					width: 25%;
					font-size: .12rem;
					color: #4A77A6;
					line-height: .12rem;
					font-weight: normal;
					margin: .18rem 3% .11rem 34%;
				}
			}
			.emptyData{
				width: 100%;
				float: left;
				img{
					width: 1.5rem;
					margin: .7rem;
				}
			}
		}
	}
	.buy{
		background: #FFFFFF;
		overflow: hidden;
		p{
			font-size: .11rem;
			color: #535353;
			margin-top: .1rem;
			span{
				color: #FC4D54;
			}
		}
		button{
			width: 94%;
			height: .45rem;
			background: #FFC266;
			border: 0;
			color: #FFFAF2;
			font-size: .18rem;
			padding: 0;
			line-height: .45rem;
			margin-bottom: .15rem;
		}
		.disable{
			background: #E0E0E0;
			opacity: 1;
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