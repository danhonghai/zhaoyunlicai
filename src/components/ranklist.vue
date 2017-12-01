<template>
	<div class="ranklist" v-title data-title="已投资列表">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>已投资列表</p>
		</div>
		<div id="mescroll" class="mescroll">
			<!--展示上拉加载的数据列表-->
			<ul id="rankList" class="rankList">
				<li v-for="(list,index) in pdlist">
					<div class="rank" v-if="index==0"><img src="../assets/1奖牌@2x.png"/></div>
					<div class="rank" v-if="index==1"><img src="../assets/2奖牌@2x.png"/></div>
					<div class="rank" v-if="index==2"><img src="../assets/3奖牌@2x.png"/></div>
					<div class="rank cssd0566bb63175d2" v-if="index > 2 && index < 10">第 {{ index+1 }} 名</div>
					<dl>
						<dt>{{list.mobile}}</dt>
						<dd>{{list.createdTime}}</dd>
					</dl>
					<span class="cssd0566bb63175d2" v-bind:class="{fc9800: index<3}">{{list.account | number(2)}}元</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ranklist',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				pdlist: []
			}
		},
		mounted: function() {
			//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
			//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
			var that = this;
			that.mescroll = new MeScroll("mescroll", {
				up: {
					page: {size:10},
					callback: that.upCallback, //上拉回调
					noMoreSize: 10
				}
			});
			
			//初始化vue后,显示vue模板布局
			document.getElementById("rankList").style.display="block";
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			upCallback: function(page) {
				var that = this;
				getListDataFromNet(this.$route.params.pushBorrowId,page.num, page.size, function(curPageData) {
					//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
					//如果是第一页需手动制空列表
					if(page.num == 1) that.pdlist = [];
					
					//更新列表数据
					that.pdlist = that.pdlist.concat(curPageData.content);
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//that.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
					that.mescroll.endByPage(curPageData.content.length,curPageData.totalPages);
				
				}, function() {
					//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
					that.mescroll.endErr();
				});
			}
		}
	}
	/*联网加载列表数据*/
	function getListDataFromNet(pushBorrowId,pageNum,pageSize,successCallback,errorCallback) {
		//标的投资排行
	  	mui.ajax(baseURL + '/api/noauth/invest_rank?pushBorrowId=' + pushBorrowId,{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			headers:{
				'Content-Type':'application/json'
			},
			success:function(res){
				if(res.success){
					successCallback(res.data);//成功回调
				}else{
					errorCallback&&errorCallback()//失败回调
					/*that.tips = res.errMsg;
					that.tipsstatus = true;
					setTimeout(function() {
						that.tipsstatus = false;
					}, 1500);*/
				}
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
			}
		});
	}
</script>

<style lang='scss' scoped>
	.ranklist {
		width: 100%;
		height: 100%;
		position: relative;
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
		.mescroll{
			position: fixed;
			top: .5rem;
			bottom: 0;
			height: auto;
			background: #FFFFFF;
		}
		.rankList {
			width: 100%;
			padding-left: 7%;
			float: left;
			background: #FFFFFF;
			li {
				width: 100%;
				height: .5rem;
				box-shadow: inset 0 -1px 1px -1px #E0E0E0;
				.rank {
					width: .56rem;
					float: left;
					margin: .05rem 0 0 .02rem;
					font-size: .17rem;
					line-height: .38rem;
					text-align: left;
					img {
						display: block;
						width: .345rem;
					}
				}
				dl {
					font-size: .12rem;
					line-height: .12rem;
					text-align: left;
					float: left;
					dt {
						margin: .1rem 0 .065rem;
						color: #333;
					}
					dd {
						color: #999999;
					}
				}
				span {
					font-size: .17rem;
					line-height: .5rem;
					color: #878787;
					float: right;
					margin-right: 7%;
				}
				.fc9800 {
					color: #FC9800;
				}
			}
		}
	}
</style>