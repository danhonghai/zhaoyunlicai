<template>
	<div class="myCoupon" v-title data-title="我的优惠券">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>我的优惠券</p>
		</div>
		<div class="content">
			<ul>
				<li>
					<h2>国庆狂欢加息卷</h2>
					<div class="money cssd0566bb63175d2">+ <span>2</span> %</div>
					<p>生效日期：2017.08.08 18:56</p>
					<p>失效日期：2017.08.08 18:56</p>
					<div class="sort">加息卷</div>
				</li>
				<li>
					<h2>国庆狂欢大红包</h2>
					<div class="money cssd0566bb63175d2">￥ <span>10</span></div>
					<p>生效日期：2017.08.08 18:56</p>
					<p>失效日期：2017.08.08 18:56</p>
					<div class="sort">红包</div>
				</li>
				<li>
					<h2>国庆狂欢加息卷</h2>
					<div class="money cssd0566bb63175d2">+ <span>2</span> %</div>
					<p>生效日期：2017.08.08 18:56</p>
					<p>失效日期：2017.08.08 18:56</p>
					<div class="sort">加息卷</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myCoupon',
		data() {
			return {

			}
		},
		methods: {
			goBack(){
		  		this.$router.go(-1)
		  	}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.myCoupon {
		width: 100%;
		height: 100%;
		position: relative;
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
		.content {
			padding-top: .5rem;
			ul{
				li{
					width: 3.5rem;
					height: 1.2rem;
					background: url(../assets/mycoupon.png) no-repeat;
					background-size: 100% 100%;
					margin: .1rem 0 0 .12rem;
					position: relative;
					h2{
						width: 2.44rem;
						font-size: .16rem;
						color: #fff9f9;
						font-weight: normal;
						float: left;
						margin-top: .33rem;
						margin-bottom: .15rem;
					}
					p{
						width: 2.44rem;
						text-align: center;
						font-size: .1rem;
						line-height: .1rem;
						color: #dbdbdb;
						float: left;
						margin-bottom: .06rem;
					}
					.money{
						width: 1.06rem;
						font-size: .13rem;
						color: #ffc800;
						float: right;
						margin-top: .43rem;
						span{
							font-size: .36rem;
							line-height: .36rem;
						}
					}
					.sort{
						width: .4rem;
						text-align: center;
						font-size: .12rem;
						line-height: .12rem;
						color: #FFFFFF;
						position: absolute;
						top: .13rem;
						right: 0;
						transform: rotate(45deg);
					}
				}
			}
		}
	}
</style>