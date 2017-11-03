<template>
  <div class="invest" v-title data-title="投资">
  	<div class="top">
  		<ul>
  			<!--<li v-bind:class="{active:classify==0}" @click="tab(0)">自动投标</li>-->
  			<li v-bind:class="{active:classify==1}" @click="tab(1)">散标计划</li>
  		</ul>
  	</div>
    <div class="content">
    	<!--<div id="Tab0" class="regular mescroll" v-show="classify==0">
    		<ul id="dataList0">
    			<li class="saling" @click="regular()">
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>进行中</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">33%</b>
    			</li>
    			<li class="willsale">
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>进行中</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">0%</b>
    			</li>
    			<li class="saled" v-for="p in datalist0">
    				<div class="item-title">
    					<h3>信用贷款计划{{p}}</h3><span>已抢完</span>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">100%</b>
    			</li>
    		</ul>
    	</div>-->
			<div id="Tab1" class="unregular mescroll" v-show="classify==1">
				<ul id="dataList1">
    			<li class="saling" @click="unregular()">
    				<div class="item-title">
    					<h3>散标20102期</h3>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">33%</b>
    			</li>
    			<li class="saled" v-for="p in datalist1">
    				<div class="item-title">
    					<h3>散标20102期2{{p}}</h3>
    				</div>
    				<div class="goodsInfo">
    					<dl style="width: 36%;">
	    					<dt class="cssd0566bb63175d2 shibor">10.0<span>%</span></dt>
	    					<dd>预计年化利率</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">10<span>天</span></dt>
	    					<dd>投资期限</dd>
	    				</dl>
	    				<dl>
	    					<dt class="cssd0566bb63175d2">120<span>万</span></dt>
	    					<dd>剩余金额</dd>
	    				</dl>
    				</div>
    				<div class="progress"></div>
    				<b class="cssd0566bb63175d2">已满标</b>
    			</li>
    		</ul>
			</div>
    </div>
  	<div class="bottom">
	  	<ul>
	    	<li @click='dianji(1)'>
	    		<img src="../assets/index_nomal@2x.png"/>
	    		<p>首页</p>
	    	</li>
	    	<li class='active' @click='dianji(2)'>
	    		<img src="../assets/financial_active@2x.png"/>
	    		<p>投资</p>
	    	</li>
	    	<li @click='dianji(3)'>
	    		<img src="../assets/me_active copy@2x.png"/>
	    		<p>我的</p>
	    	</li>
	    </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'invest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      classify: 1,					//tab切换
      mescrollArr: [],			//上拉加载下拉刷新实例化
      //datalist0: [],					//定期标数据
      datalist1: [] 					//散标数据
    }
  },
  methods: {
  	dianji(index){
  		this.isLight = index;
  		console.log(this.isLight)
  		if(this.isLight == 1){
  			this.$router.push({path: '/'})
  		}else if(this.isLight == 2){
  			this.$router.push({path: '/invest'})
  		}else if(this.isLight == 3){
  			this.$router.push({path: '/personal'})
  		}
  	},
  	tab(index){	//tab切换
  		this.classify = index;
  		if(this.mescrollArr[index]==null){
  			this.mescrollArr[index]=this.initMescroll("Tab"+index, "dataList"+index);
  		} 
  	},
  	regular(){
  		this.$router.push({
  			//name: 'regular',
  			path: '/regular'//,
  			//params: { userId: 123 }
  		})
  	},
  	unregular(){
  		this.$router.push({path: '/unregular'})
  	},
  	initMescroll(mescrollId,clearEmptyId){
			//创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
			var mescroll = new MeScroll(mescrollId, {
				//上拉加载的配置项
				up: {
					callback: this.getListData, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
					noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					empty: {
						icon: "../res/img/mescroll-empty.png", //图标,默认null
						tip: "暂无相关数据~", //提示
						btntext: "去逛逛 >", //按钮,默认""
						btnClick: function(){//点击按钮的回调,默认null
							alert("点击了按钮,具体逻辑自行实现");
						} 
					},
					//clearEmptyId: clearEmptyId, //相当于同时设置了clearId和empty.warpId; 简化写法;默认null
				}
			});
			return mescroll;
		},
		getListData: function(page){
			console.log(page);
			var that = this;
			console.log(page.num + '   ' + page.size);
			getListDataFromNet(page.num, page.size, function(curPageData) {
				//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
				if(that.classify == 0){
					//如果是第一页需手动制空列表
					if(page.num == 1){
						that.datalist0 = [];
					} 
					//更新列表数据
					that.datalist0 = that.datalist0.concat(curPageData);
				}else if(that.classify == 1){
					//如果是第一页需手动制空列表
					if(page.num == 1){
						that.datalist1 = [];
					} 
					//更新列表数据
					that.datalist1 = that.datalist1.concat(curPageData);
				}
				
				console.log('curPageData:   '+curPageData.length)
				//console.log(that.datalist0)
				console.log(that.datalist1)
				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
				//   console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", that.datalist0.length==" + that.datalist0.length);
				console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", that.datalist1.length==" + that.datalist1.length);
				
				//方法一(推荐): 后台接口有返回列表的总页数 totalPage
				//that.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
				
				//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
				//that.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
				
				//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
				//that.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
				
				//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
				that.mescrollArr[that.classify].endSuccess(curPageData.length);
			
			}, function() {
				//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
				that.mescrollArr[that.classify].endErr();
			});
		},
		shuchu(){
			console.log('123')
		}
  },
  mounted: function(){
  	this.mescrollArr[this.classify]=this.initMescroll("Tab"+this.classify, "dataList"+this.classify);
  	console.log(this.mescrollArr)
  }
}
/*联网加载列表数据*/
function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
	//延时一秒,模拟联网
	setTimeout(function () {
//         axios.get("xxxxxx", {
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
			]; // 模拟数据: 
		var listData=[];//模拟分页数据
		console.log('pageNum:'+pageNum)
		for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
			if(i==data.length) break;
			listData.push(data[i]);
			console.log(i)
		}
		successCallback(listData);//成功回调
//				})
//				.catch(function(error) {
//					errorCallback&&errorCallback()//失败回调
//				});
	},500)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h3{
	margin: 0;
	padding: 0;
	font-weight: normal;
}
.invest{
	width: 100%;
	height: 100%;
	position: relative;
	.top{
		position: fixed;
		top: 0;
		z-index: 2;
		width: 100%;
		height: .45rem;
		background: url(../assets/title@2x.png) no-repeat;
		background-size: 100% 100%;
		ul{
			li{
				font-size: .19rem;
				color: #FEEACA;
				line-height: .4rem;
				float: left;
			}
			li:nth-child(1){
				margin: 0 39%;
			}
			.active{
				color: #FFFFFF;
				border-bottom: .02rem solid #FFFFFF;
			}
		}
	}
	.content{
		padding-top: .45rem;
		.mescroll{
			position: fixed;
			top: .5rem;
			bottom: .5rem;
			height: auto;
		}
		.regular,
		.unregular{
			ul{
				text-align: left;
				li{
					width: 100%;
					background: #FFFFFF;
					overflow: hidden;
					position: relative;
					margin-bottom: .1rem;
					.item-title{
						width: 100%;
						height: .46rem;
						padding: 0 7%;
						h3{
							display: block;
							height: .46rem;
							font-size: .15rem;
							line-height: .46rem;
							float: left;
						}
						span{
							display: block;
							float: left;
							padding: 0 .1rem;
							font-size: .13rem;
							line-height: .2rem;
							color: #FFFFFF;
							border-radius: .2rem;
							margin-left: .28rem;
							margin-top: .11rem;
						}
					}
					.goodsInfo{
						padding: 0 7%;
						dl{
							width: 32%;
							float: left;
							margin-bottom: .15rem;
							dt{
								height: .4rem;
								font-size: .2rem;
								line-height: .55rem;
								span{
									font-size: .13rem;
									line-height: .13rem;
								}
							}
							dd{
								padding-top: .08rem;
								font-size: .13rem;
								line-height: .13rem;
								color: #999999;
							}
							.shibor{
								font-size: .4rem;
								line-height: .4rem;
								span{
									font-size: .15rem;
									line-height: .15rem;
								}
							}
						}
					}
					.progress{
						position: absolute;
						bottom: 0;
						width: 33%;
						height: .02rem;
					}
					b{
						font-size: .12rem;
						line-height: .12rem;
						position: absolute;
						bottom: .1rem;
						right: .15rem;
					}
				}
				.willsale{
					.item-title{
						h3{
							color: #333333;
						}
						span{
							background: #FF6666;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #D7D7D7;
							}
							.shibor{
								color: #FC9800;
							}
						}
					}
					.progress{
						width: 100%;
						background: #D7D7D7;
					}
					b{
						color: #D7D7D7;
					}
				}
				.saling{
					.item-title{
						h3{
							color: #333333;
						}
						span{
							background: #FC9800;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #666666;
							}
							.shibor{
								color: #FC9800;
							}
						}
					}
					.progress{
						background: #FC9800;
					}
					b{
						color: #FFC266;
					}
				}
				.saled{
					.item-title{
						h3{
							color: #D7D7D7;
						}
						span{
							background: #D7D7D7;
						}
					}
					.goodsInfo{
						dl{
							dt{
								color: #D7D7D7;
							}
							.shibor{
								color: #D7D7D7;
							}
						}
					}
					.progress{
						width: 100%;
						background: #D7D7D7;
					}
					b{
						color: #D7D7D7;
						font-weight: normal;
					}
				}
			}
		}
	}
	.bottom{
		position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background: #FFFFFF;
    box-shadow: inset 0 1px 1px -1px #D8D8D8;
    ul{
      width: 100%;
      background: #FFFFFF;
			li{
				float: left;
				width: 33%;
				height: .5rem;
				float: left;
				font-size: .1rem;
				line-height: .1rem;
				img{
					display: block;
					width: .2rem;
					height: .2rem;
					margin: .08rem auto .05rem;
				}
				p{
					margin: 0;
					color: #BCBCBC;
				}
			}
		}
		.active{
			p{
				color: #FC9800;
			}
		}
	}
	
}
</style>
