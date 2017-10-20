<template>
	<div class="ranklist" v-title data-title="已投资列表">
	 	<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>已投资列表</p>
		</div>
		<!--下拉刷新容器-->
		<div id="refreshContainer" class="mui-content mui-scroll-wrapper">
		  <div class="mui-scroll">
		    <!--数据列表-->
		    <ul class="mui-table-view mui-table-view-chevron">
		      <li>1</li>
		      <li>1</li>
		      <li>1</li>
		      <li>1</li>
		      <li>1</li>
		      <li>1</li>
		      <li>1</li>
		    </ul>
		  </div>
		</div>
		<ul class="rankList">
			<li>
				<div class="rank"><img src="../assets/1奖牌@2x.png"/></div>
				<dl>
					<dt>186 **** 6293</dt>
					<dd>2017-10-19 16:35</dd>
				</dl>
				<span class="cssd0566bb63175d2 fc9800">100000.00元</span>
			</li>
			<li>
				<div class="rank"><img src="../assets/2奖牌@2x.png"/></div>
				<dl>
					<dt>186 **** 6293</dt>
					<dd>2017-10-19 16:35</dd>
				</dl>
				<span class="cssd0566bb63175d2 fc9800">100000.00元</span>
			</li>
			<li>
				<div class="rank"><img src="../assets/3奖牌@2x.png"/></div>
				<dl>
					<dt>186 **** 6293</dt>
					<dd>2017-10-19 16:35</dd>
				</dl>
				<span class="cssd0566bb63175d2 fc9800">100000.00元</span>
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
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'ranklist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang='scss' scoped>
.ranklist{
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
	.rankList{
		width: 100%;
		padding-left: 7%;
		float: left;
		margin-top: .5rem;
		background: #FFFFFF;
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
			.fc9800{
				color: #FC9800;
			}
		}
	}
}
</style>