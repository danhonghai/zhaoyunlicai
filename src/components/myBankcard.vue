<template>
	<div class="myBankcard" v-title data-title="我的银行卡">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>我的银行卡</p>
		</div>
		<div class="content">
			<div class="bankcard">
				<div class="cardnum">
					<img src="../assets/1@2x.png"/>
					招商银行 尾号0102
				</div>
				<p>单笔限额5万,每日限额20万</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myBankcard',
		data() {
			return {
				
			}
		},
		methods: {
			goBack() { //后退
				this.$router.go(-1)
			}
		},
		mounted: function(){
			mui.ajax(baseURL + '/api/card_list',{
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				headers:{
					'Content-Type':'application/json',
					'x-auth-token':that.getCookie("tokenZylc")
					/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
				},
				success:function(res){
					if(res.success){
						
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
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.myBankcard {
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
			width: 100%;
			padding-top: .53rem;
			text-align: left;
			overflow: hidden;
			.bankcard{
				width: 100%;
				height: .8rem;
				padding-left: 7%;
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
		}
	}
</style>