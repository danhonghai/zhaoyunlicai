<template>
  <div class="investRecord" v-title data-title="投资记录">
    <div class='header'>
			<img src="../assets/Path 145@2x.png" alt="" @click='goBack' />
    		<p>投资记录</p>
		</div>
		<div class='title'>
			<span :class='{bcolor:isSelect==0}' @click='select(0)'>投资中</span>
			<span :class='{bcolor:isSelect==1}' @click='select(1)'>已结算</span>
		</div>
		<div class='resultDetail'>
			<div id="Tab0" class="mescroll" v-show='selectStatus1'>
				<div class="empty" v-if="datalist0.length == 0">
					<img src="../assets/empy@2x.png"/>
				</div>
				<ul class='ing' id="dataList0">
				 <!--<li @click="Goto(info.tenderId)" v-for="info in datalist0">-->
				 <li v-for="info in datalist0">
				 	<div class='top'>
				 		<span>{{info.borrowName}}</span>
				 		<span>预计年化利率：{{info.apr}}%</span>
				 	</div>
				 	<div class='center'>
				 		<span class='cssd0566bb63175d2'>{{info.money|number(2)}}</span>
				 		<span>元</span>
				 		<span>预计收益：{{info.repaymentAccount | number(2)}}元</span>
				 	</div>
				 	<div class='bottom'>
				 		<span>起息日：{{info.interestTime}}</span>
				 		<span>回款日：{{info.backAccountTime}}</span>
				 	</div>
				 </li>
				</ul>
			</div>
			<div id="Tab1" class="mescroll" v-show='selectStatus2'>
				<div class="empty" v-if="datalist1.length == 0">
					<img src="../assets/empy@2x.png"/>
				</div>
				<ul class='already' id="dataList1">
				 <li v-for="info in datalist1">
				 <!--<li @click="Goto(info.tenderId)" v-for="info in datalist1">-->
				 	<div class='titles'>
				 		{{info.borrowName}}
				 	</div>
				 	<div class='left'>
				 		<span>投资金额</span>
				 		<span class='cssd0566bb63175d2'>{{info.money |　number(2)}}<p>元</p></span>
				 		<span>计息天数：{{info.numberOfDays}}天</span>
				 	  <span>起息日：{{info.interestTime}}</span>
				 	</div>
				 	<div class='right'>
				 		<span>到期收益</span>
				 		<span class='cssd0566bb63175d2'>{{info.income | number(2)}}<p>元</p></span>
				 		<span>预计年化利率:{{info.apr}}%</span>
				 	  <span>回款日：{{info.backAccountTime}}</span>
				 	</div>
				 </li>
				</ul>
			</div>
		</div>
		
		<!--<button>确定</button>-->
		
		<div class='tips' v-if='tipsstatus' v-text='tips'></div>
		<div class='haunchong' v-if='huanchongStatus'>
			<img src="../assets/loading.gif" alt="" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'investRecord',
  data () {
    return {
      tipsstatus: false,					//提示框显隐
      tips: '提示框',							//提示框内容
      huanchongStatus: false,			//缓冲显隐
      cashPsdStatus: false,				
      isSelect: 0,								//tab切换
      selectStatus1: true,				//选项卡切换
      selectStatus2: false,				//选项卡切换
      mescrollArr: [],						//上拉加载下拉刷新实例化
      datalist0: [],							//投资中数据
      datalist1: [] 							//已结算数据
    }
  },
  methods: {
  	goBack(){
  		this.$router.go(-1)
  	},
  	Goto(tenderId){				//跳转到投资详情
  		this.$router.push({path: '/investRecordDetail/' + tenderId})
  	},
  	select(index){//tab切换
  		this.isSelect = index;
  		if(this.mescrollArr[index]==null){
  			this.mescrollArr[index]=this.initMescroll("Tab"+index, "dataList"+index);
  		}
  		console.log(this.mescrollArr[1])
  		if(this.isSelect == 0){
  			this.selectStatus1 = true;
      	this.selectStatus2 = false;
  		}else if(this.isSelect == 1){
  			this.selectStatus1 = false;
      	this.selectStatus2 = true;
  		}
  	},
  	initMescroll(mescrollId,clearEmptyId){
			//创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
			console.log(mescrollId+ '  ' +clearEmptyId)
			var mescroll = new MeScroll(mescrollId, {
				//上拉加载的配置项
				up: {
					page: {size:10},
					callback: this.getListData, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
					noMoreSize: 4 //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				}
			});
			return mescroll;
		},
		getListData: function(page){			//上拉回调
			console.log(page);
			var that = this;
			console.log(page.num + '   ' + page.size);
			getListDataFromNet(that,that.isSelect+1,page.num, page.size, function(curPageData) {
				if(that.isSelect == 0){
					//如果是第一页需手动制空列表
					if(page.num == 1){
						that.datalist0 = [];
					} 
					//更新列表数据
					that.datalist0 = that.datalist0.concat(curPageData.content);
				}else if(that.isSelect == 1){
					//如果是第一页需手动制空列表
					if(page.num == 1){
						that.datalist1 = [];
					} 
					//更新列表数据
					that.datalist1 = that.datalist1.concat(curPageData.content);
				}
				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
				
				//方法一(推荐): 后台接口有返回列表的总页数 totalPage
				//that.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
				that.mescrollArr[that.isSelect].endByPage(curPageData.content.length,curPageData.totalPages);
			
			}, function() {
				//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
				that.mescrollArr[that.isSelect].endErr();
			});
		}
  },
  mounted: function(){
  	this.mescrollArr[this.isSelect]=this.initMescroll("Tab"+this.isSelect, "dataList"+this.isSelect);
  	console.log(this.mescrollArr)
  }
}
/*联网加载列表数据*/
function getListDataFromNet(that,statusType,pageNum,pageSize,successCallback,errorCallback) {
	let page = pageNum-1;
	mui.ajax(baseURL + '/api/noauth/invest_list?type=' + statusType + '&page=' + page + '&size=' + pageSize,{
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		headers:{
			'Content-Type':'application/json',
			'x-auth-token':that.getCookie("tokenZylc")
			/*'x-auth-token':sessionStorage.getItem("tokenZylc")*/
		},
		success:function(res){
			console.log(res);
			if(res.success){
				console.log('投资记录成功')
				successCallback(res.data);//成功回调
			}else{
				console.log('投资记录失败')
				errorCallback&&errorCallback()//失败回调
			}
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
		}
	});
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.investRecord{
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: .5rem;
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.5rem;
		background: #F9F9F9;
		img{
			float: left;
			width: 0.1rem;
			height: 0.16rem;
			margin: 0.15rem 1.3rem 0 0.2rem;
		}
		p{
			float: left;
			font-size: 0.19rem;
			line-height: 0.5rem;
			color: #333;
			margin-bottom: 0;
		}
	}
	.title{
		width: 100%;
		height: 0.45rem;
		background: #fff;
		position: fixed;
		top: .5rem;
		span{
			display: block;
			float: left;
			width: 1.87rem;
			font-size: 0.15rem;
			line-height: 0.43rem;
			color: #666;
			border-bottom: 2px solid #999;
		}
	}
	.bcolor{
		border-bottom: 2px solid #FC9800!important;
		color: #FC9800!important;
	}
	.resultDetail{
		width: 100%;
		
	}
	.mescroll{
		position: fixed;
		top: .95rem;
		bottom: 0;
		height: auto;
		.empty{
			img{
				width: 50%;
				margin-top: .8rem;
			}
		}
	}
	.ing{
			width: 100%;
			li{
				background: #fff;
				height: 1.15rem;
				margin-bottom: 0.02rem;
				padding-left: 0.26rem;
				padding-right: 0.26rem;
				.top,.center,.bottom{
					width: 100%;
					height: 0.45rem;
					span{
						display: block;
						line-height: 0.45rem;
						color: #333;
						font-size: 0.15rem;
						float: left;
					}
					span:nth-child(2){
						float: right;
						font-size: 0.13rem;
					}
				}
				.center{
					height: 0.25rem;
					span{
						display: block;
						font-size: 0.25rem;
						line-height: 0.25rem;
						color: #FC9800;
					}
					span:nth-child(1){
						float: left;
					}
					span:nth-child(2){
						float: left;
						font-size: 0.13rem;
						line-height: 0.13rem;
						margin-top: 0.08rem;
					}
					span:nth-child(3){
						float: right;
						font-size: 0.13rem;
						line-height: 0.13rem;
						margin-top: 0.08rem;
					}
				}
				.bottom{
					span{
						font-size: 0.13rem;
						color: #999;
					}
				}
			}
	}
	.already{
		width: 100%;
		li{
			background: #fff;
			height: 1.5rem;
			margin-bottom: 0.02rem;
			padding-left: 0.26rem;
			padding-right: 0.26rem;
			.titles{
				font-size: 0.15rem;
				line-height: 0.45rem;
				color: #333;
				text-align: left;
			}
			.left,.right{
				float: left;
				span{
					display: block;
					text-align: left;
					font-size: 0.13rem;
					line-height: 0.13rem;
					color: #666;
				}
				span:nth-child(1){
					font-size: 0.13rem;
					line-height: 0.13rem;
					color: #666;
				}
				span:nth-child(2){
					font-size: 0.25rem;
					line-height: 0.4rem;
					color: #FC9800;
					p{
						display: inline-block;
						font-size: 0.13rem;
						line-height: 0.13rem;
						margin-top: 0.08rem;
						color: #FC9800;
					}
				}
				span:nth-child(3){
					color: #333;
				}
				span:nth-child(4){
					font-size: 0.13rem;
					line-height: 0.33rem;
					color: #999;
				}
			}
			.right{
				margin-left: 0.6rem;
			}
		}
	}
	
	button{
		width: 3.51rem;
		height:0.45rem;
		background: #FFC266;
		font-size: 0.18rem;
		line-height: 0.45rem;
		color: #fff;
		border-radius: 0.03rem;
		border: none;
		padding: 0;
		margin-top: 0.1rem;
	}
	
	
	.tips{
		position: absolute;
		left: 0.8rem;
		top: 0.5rem;
		width: 2rem;
		font-size: 0.15rem;
		color: #fff;
		line-height: 0.3rem;
		background: rgba(55,55,55,.8);
		padding-left: 0.07rem;
		padding-right: 0.07rem;
		z-index: 100;
	}
	.haunchong{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(55,55,55,.3);
		z-index: 20;
		img{
			position: absolute;
			left: 1.5rem;
			top: 2rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 0.06rem;
		}
	}
}
</style>
