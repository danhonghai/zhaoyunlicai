<template>
	<div class="moneyRecord" v-title data-title="资金流水记录">
		<div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
			<p>资金流水记录</p>
		</div>
		<div class="content mescroll" id="mescroll">
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
			<ul class="rankList" id="rankList">
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
				<li v-for="p in pdlist">
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
				pdlist: []
			}
		},
		methods: {
			goBack() { //后退
				this.$router.go(-1)
			},
			upCallback: function(page) {
				console.log(page)
				var self = this;
				console.log(page.num + '   ' + page.size);
				getListDataFromNet(page.num, page.size, function(curPageData) {
					//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
					//如果是第一页需手动制空列表
					if(page.num == 1) self.pdlist = [];
					
					//更新列表数据
					self.pdlist = self.pdlist.concat(curPageData);
					console.log(self.pdlist)
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);
					
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
					
					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
					
					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
					
					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
					self.mescroll.endSuccess(curPageData.length);
				
				}, function() {
					//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
					self.mescroll.endErr();
				});
			}
		},
		mounted: function() {
			//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
			//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
			var self = this;
			self.mescroll = new MeScroll("mescroll", {
				/*down: {
					callback: self.downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
					
				},*/
				up: {
					callback: self.upCallback, //上拉回调
					//以下参数可删除,不配置
					//page:{size:3}, //可配置每页8条数据,默认10
					/*toTop:{ //配置回到顶部按钮
						src : "../res/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
						//offset : 1000
					},
					empty:{ //配置列表无任何数据的提示
						warpId:"dataList",
						icon : "../res/img/mescroll-empty.png" , 
//						  	tip : "亲,暂无相关数据哦~" , 
//						  	btntext : "去逛逛 >" , 
//						  	btnClick : function() {
//						  		alert("点击了去逛逛按钮");
//						  	} 
					}*/
				}
			});
			
			//初始化vue后,显示vue模板布局
			document.getElementById("rankList").style.display="block";
		}
	}
	/*联网加载列表数据*/
	function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
		//延时一秒,模拟联网
        setTimeout(function () {
//          	axios.get("xxxxxx", {
//					params: {
//						num: pageNum, //页码
//						size: pageSize //每页长度
//					}
//				})
//				.then(function(response) {
				var data=['1','2','3','5','5','6','7','8','9','10',
				'1','2','3','5','5','6','7','8','9','10',
				'1','2','3','5','5','6','7','8','9','10',
				'1','2','3','5','5','6','7','8','9','10'
				]; // 模拟数据: ../res/pdlist1.js
            	var listData=[];//模拟分页数据
            	console.log('pageNum:'+pageNum)
				for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
            		if(i==data.length) break;
            		listData.push(data[i]);
            		console.log(i)
            	}
            	successCallback&&successCallback(listData);//成功回调
//				})
//				.catch(function(error) {
//					errorCallback&&errorCallback()//失败回调
//				});
        },500)
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
		.mescroll{
			position: fixed;
			top: .5rem;
			bottom: 0;
			height: auto;
		}
		.content {
			width: 100%;
			padding-left: 7%;
			padding-top: .15rem;
			text-align: left;
			background: #FFFFFF;
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