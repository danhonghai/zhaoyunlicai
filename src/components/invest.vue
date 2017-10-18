<template>
  <div class="invest">
    <h1>{{ msg }}</h1>
    <h2>欢迎来到赵云理财的时代平平平靖</h2>
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
      msg: 'Welcome to Your Vue.js App'
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
  			this.$router.push({path: '/three'})
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.invest{
	width: 100%;
	height: 100%;
	position: relative;
	.bottom{
		ul{
			width: 100%;
			background: #FFFFFF;
			position: fixed;
			bottom: 0;
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
