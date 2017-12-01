// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from './common/common'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(common);

Vue.directive('title', {
  inserted: function (el, binding) {
  	if(el.dataset.title != "赵云理财"){
    	document.title = el.dataset.title+"_赵云理财"
  	}
  }
})

Vue.filter('number',function(value,num){//四舍五入保留多位小数
	let result = parseFloat(value).toFixed(num+1);
	result = String(result).substring(0,result.length-1);
	return result;
})
Vue.filter('moneyshow',function(value,num){//大于num以万为单位，小于num以元为单位
	return value<num?value:parseFloat(value/10000).toFixed(1);
})
Vue.filter('getdate',function(score){//时间戳转为时间
	var now = new Date(score),
	y = now.getFullYear(),
	m = now.getMonth() + 1,
	d = now.getDate();
  return y + "-" + m + "-" + d + " " + now.toTimeString().substr(0, 8);
})
Vue.filter('mphone', function(value) {    //手机号过滤器，隐藏中间4位
		if(!value) return '';
		var mphone = value.substr(0, 3) + '****' + value.substr(7);
		return mphone;
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
