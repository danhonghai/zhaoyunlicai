<template>
	<div class="moneyRecord" v-title data-title="资金流水记录">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>资金流水记录</p>
		</div>
		<div class="content">
			<div class="total">
				<dl>
					<dt>总充值金额(元)</dt>
					<dd class="cssd0566bb63175d2">22.00</dd>
				</dl>
				<dl>
					<dt>总提现金额(元)</dt>
					<dd class="cssd0566bb63175d2">2200000.00</dd>
				</dl>
			</div>
			<ul class="rankList">
				<li>
					<dl>
						<dt>充值</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2 fc9800">+100000.00元</span>
				</li>
				<li>
					<dl>
						<dt>充值</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2 fc9800">+100000.00元</span>
				</li>
				<li>
					<dl>
						<dt>充值</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2 fc9800">+100000.00元</span>
				</li>
				<li>
					<dl>
						<dt>充值</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2 fc9800">+100000.00元</span>
				</li>
				<li>
					<dl>
						<dt>充值</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2 fc9800">+100000.00元</span>
				</li>
				<li>
					<dl>
						<dt>提现</dt>
						<dd>2017-10-19 16:35</dd>
					</dl>
					<span class="cssd0566bb63175d2">-100000.00元</span>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'moneyRecord',
		data() {
			return {

			}
		},
		methods: {
			goBack() { //后退
				this.$router.go(-1)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.moneyRecord {
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
			padding-left: 7%;
			margin-top: .53rem;
			padding-top: .12rem;
			text-align: left;
			background: #FFFFFF;
			overflow: hidden;
			.total {
				width: 89%;
				height: .81rem;
				background: url(../assets/Rectangle3.png) no-repeat;
				background-size: 100% 100%;
				dl {
					width: 50%;
					float: left;
					text-align: center;
					dt {
						font-size: .13rem;
						color: #999999;
						line-height: .19rem;
						margin-top: .175rem;
					}
					dd {
						font-size: .25rem;
						color: #FC9800;
						line-height: .25rem;
						margin-top: .03rem;
					}
				}
			}
			.rankList {
				width: 100%;
				float: left;
				margin-top: .05rem;
				background: #FFFFFF;
				li {
					width: 100%;
					height: .68rem;
					box-shadow: inset 0 -1px 1px -1px #E0E0E0;
					dl {
						text-align: left;
						float: left;
						dt {
							font-size: .17rem;
							line-height: .14rem;
							margin: .15rem 0 .1rem;
							color: #333;
						}
						dd {
							font-size: .14rem;
							line-height: .14rem;
							color: #999999;
						}
					}
					span {
						font-size: .17rem;
						line-height: .68rem;
						color: #4AA69A;
						float: right;
						margin-right: 7%;
					}
					.fc9800 {
						color: #FC9800;
					}
				}
			}
		}
	}
</style>