<template>
	<div class="suggestion" v-title data-title="问题反馈">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>问题反馈</p>
		</div>
		<div class="content">
			<div class="wordarea">
				<textarea maxlength="200" v-model="word"></textarea>
				<span>{{wordlength}}/200</span>
			</div>
			<button @click="submit">提交</button>
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
		name: 'suggestion',
		data() {
			return {
				word: null,						//输入内容
				wordlength: 0,					//输入长度
				tipsstatus: false,				//提示框显隐
				tips: '提示框',					//提示框内容
				huanchongStatus: false,			//缓冲框显隐
			}
		},
		watch: {
			word: function(){
				this.wordlength = this.word.length;
			}
		},
		methods: {
			goBack() { //后退
				this.$router.go(-1)
			},
			submit(){
				let that = this;
				if(that.wordlength==0){
					that.tips = '请输入反馈内容';
					that.tipsstatus = true;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);
				}else{
					that.huanchongStatus = true;
					mui.ajax(baseURL + '/api/feedback?content=' + that.word,{
						dataType:'json',//服务器返回json格式数据
						type:'post',//HTTP请求类型
						headers:{
							'Content-Type':'application/json',
							'x-auth-token':sessionStorage.getItem("tokenZylc")
						},
						success:function(res){
							that.huanchongStatus = false;
							console.log(res);
							if(res.success){
								that.tips = "提交成功";
								that.tipsstatus = true;
								setTimeout(function() {
									that.tipsstatus = false;
								}, 1500);
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
	.suggestion {
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
			padding-top: .5rem;
			overflow: hidden;
			position: relative;
			.wordarea{
				width: 86%;
				height: 1.7rem;
				float: left;
				margin: .2rem 7%;
				background: #FFFFFF;
				border-radius: 5px;
				border: 1px solid #E0E0E0;
				textarea{
					width: 100%;
					height: 1.37rem;
					border: 0;
					margin: 0;
				}
				span{
					font-size: .14rem;
					color: #999999;
					line-height: .33rem;
					display: block;
					width: 100%;
					height: .33rem;
					text-align: right;
					padding-right: .18rem;
				}
			}
			
			button {
				width: 86%;
				height: .45rem;
				background: #FFC266;
				color: #FFFFFF;
				font-size: .18rem;
				line-height: .45rem;
				margin: 0;
				padding: 0;
				border: 0;
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