<template>
	<div class="sort1" v-title data-title="新手指引">
		<!--<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>新手指引</p>
		</div>-->
		<div class="content">
			<img src="../assets/sort.png"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sort1',
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
	.sort1 {
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
		.content {
			/*padding-top: .5rem;*/
			img{
				display: block;
				width: 90%;
				margin: 0 auto;
			}
		}
	}
</style>