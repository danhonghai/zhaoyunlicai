<template>
  <div class="buyResult" v-title data-title="结果">
    <div class='header'>
		<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
		<p>结果</p>
	</div>
	<div class="content">
		<div class="progress">
			<div class="left">
				<div class="line"><p></p></div>
			</div>
			<dl>
				<dt class="active">申购产品成功,申购金额100000.00</dt>
				<dd>2017－04－01 14:01</dd>
			</dl>
			<dl>
				<dt>交易处理中</dt>
				<dd>2017－04－01 14:01</dd>
			</dl>
			<dl>
				<dt>开始计息</dt>
				<dd>2017－04－01 14:01</dd>
			</dl>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'buyResult',
  data () {
    return {
      
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	}
  },
  mounted() {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.buyResult{
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
		margin-top: .5rem; 
		padding-top: .12rem;
		text-align: left;
		.progress{
			width: 100%;
			height: 2.25rem;
			background: #FFFFFF;
			.left{
				width: 10%;
				height: 100%;
				float: left;
				.line{
					width: .01rem;
					height: 64%;
					background: #E0E0E0;
					margin: .33rem 0 0 50%;
					p{
						width: 100%;
						height: 50%;
						background: #FC9800;
					}
				}
			}
			dl{
				width: 90%;
				float: left;
				dt{
					font-size: .17rem;
					color: #666666;
					line-height: .17rem;
					margin: .2rem 0 .12rem;
				}
				dd{
					font-size: .14rem;
					color: #999999;
					line-height: .14rem;
					margin-bottom: .06rem;
				}
				.active{
					color: #FC9800;
				}
			}
		}
	}
}
</style>
