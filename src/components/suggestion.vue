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
			<button>提交</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'suggestion',
		data() {
			return {
				word: null,			//输入内容
				wordlength: 0		//输入长度
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
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
			margin-top: .5rem;
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
	}
</style>