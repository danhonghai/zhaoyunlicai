<template>
  <div class="invest">
  	<div class="top">
  		<ul>
  			<li v-bind:class="{active:classify==0}" @click="tab(0)">定期</li>
  			<li v-bind:class="{active:classify==1}" @click="tab(1)">散标</li>
  		</ul>
  	</div>
    <div class="content">
    	<div class="regular">
    		<ul>
    			<li>
    				<div class="item-title">
    					<h3>信用贷款计划</h3><span>进行中</span>
    				</div>
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
      classify: 0
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
  	tab(index){
  		this.classify = index;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h3{
	margin: 0;
	padding: 0;
	font-weight: 100;
}
.invest{
	width: 100%;
	height: 100%;
	position: relative;
	.top{
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
				margin: 0 13.5% 0 33%;
			}
			.active{
				color: #FFFFFF;
				border-bottom: .02rem solid #FFFFFF;
			}
		}
	}
	.content{
		.regular{
			ul{
				text-align: left;
				li{
					width: 100%;
					background: #FFFFFF;
					padding: 0 7%;
					overflow: hidden;
					.item-title{
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
							background: #FC9800;
							font-size: .13rem;
							line-height: .2rem;
							color: #FFFFFF;
							border-radius: .2rem;
							margin-left: .28rem;
							margin-top: .11rem;
						}
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
    ul{
      width: 100%;
      background: #FFFFFF;
      box-shadow: inset 0 1px 1px -1px #D8D8D8;
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
