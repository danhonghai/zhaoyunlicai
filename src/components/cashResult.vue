<template>
	<div class="cashResult" v-title data-title="结果">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>结果</p>
		</div>
		<div class="content">
			<div class="progress">
				<div class="left">
					<img src="../assets/Oval 2@2x.png" />
					<img src="../assets/Oval 2@2x.png" />
					<img src="../assets/Oval 2@2x.png" />
					<div class="line">
						<p></p>
					</div>
				</div>
				<dl>
					<dt class="active">申请提现申请成功,金额100000.00</dt>
					<dd>2017-04-01 14:01</dd>
				</dl>
				<dl>
					<dt>银行通道审核中</dt>
					<dd>2017-04-01 14:01</dd>
				</dl>
				<dl>
					<dt>提现成功</dt>
					<dd>2017-04-01 14:01</dd>
				</dl>
			</div>
			<p>工作日提现,与周末或节假日需顺延至下个工作日</p>
			<!--修改提示语-->
			<button @click="finish">完成</button>
		</div>
		<div class="bottom">
			<p>客服电话：</p>
			<a href="tel:0571-1929293">0571-1929293</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cashResult',
		data() {
			return {

			}
		},
		methods: {
			goBack() {	//后退
				this.$router.go(-1)
			},
			finish() {	//点击完成
				this.$router.push({
					path: '/regular'
				});
			}
		},
		mounted() {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.cashResult {
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
			margin-top: .5rem;
			padding-top: .12rem;
			text-align: left;
			.progress {
				width: 100%;
				height: 2.25rem;
				background: #FFFFFF;
				.left {
					width: 10%;
					height: 100%;
					float: left;
					position: relative;
					.line {
						width: .01rem;
						height: 64%;
						background: #E0E0E0;
						margin: .33rem 0 0 50%;
						p {
							width: 100%;
							height: 50%;
							background: #FC9800;
						}
					}
					img {
						width: .12rem;
						position: absolute;
						left: 50%;
						margin-left: -.06rem;
						margin-top: -.06rem;
					}
					img:nth-child(1) {
						top: .33rem;
					}
					img:nth-child(2) {
						top: 48%;
					}
					img:nth-child(3) {
						bottom: 18%;
					}
				}
				dl {
					width: 90%;
					float: left;
					dt {
						font-size: .17rem;
						color: #666666;
						line-height: .17rem;
						margin: .2rem 0 .12rem;
					}
					dd {
						font-size: .14rem;
						color: #999999;
						line-height: .14rem;
						margin-bottom: .06rem;
					}
					.active {
						color: #FC9800;
					}
				}
			}
			p {
				font-size: .11rem;
				color: #999999;
				line-height: .11rem;
				margin: 0;
				margin-top: .12rem;
				padding-left: 7%;
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
				margin: .2rem 3% 0;
			}
		}
		.bottom{
			width: 100%;
			position: fixed;
			bottom: 0;
			p{
				font-size: .13rem;
				line-height: .13rem;
			}
			a{
				display: block;
				width: 1.1rem;
				font-size: .16rem;
				line-height: .16rem;
				margin: .07rem 0 .17rem 1.33rem;
			}
		}
	}
</style>