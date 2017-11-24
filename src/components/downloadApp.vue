<template>
	<div class="downloadApp" v-title data-title="App下载">
		<!--即将跳转到下载页面-->
	</div>
</template>

<script>
	export default {
		name: 'downloadApp',
		data() {
			return {

			}
		},
		methods: {
			
		},
		mounted(){
			var u = navigator.userAgent, app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if(isiOS){
				alert("iOS版本即将上线，敬请期待！");
			}else{
				window.location = "http://www.zhaoyunlicai.com/app/ZhaoYun_huawei_1.0.0.apk";
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.downloadApp {
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>