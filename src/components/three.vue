<template>
  <div class="three">
    <h1>{{ msg }}</h1>
    <h2>欢迎来到赵云理财的时代圈圈圈圈</h2>
  	<ul>
    	<li @click='dianji(1)'>首页</li>
    	<li @click='dianji(2)'>投资</li>
    	<li class='heightLight' @click='dianji(3)'>我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'three',
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
.three{
	width: 100%;
	height: 100%;
	ul{
		width: 100%;
		background: pink;
		position: fixed;
		bottom: 0;
		
	}
	li{
		float: left;
		line-height: 1rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		font-size: 0.2rem;
	}
	.heightLight{
		color: red;
	}
}
</style>
