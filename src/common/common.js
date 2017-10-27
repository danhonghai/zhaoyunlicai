export default{
  install(Vue,options)
  {
    Vue.prototype.moneyType = function (num) {
      	var reg = num.toString().match(/\d+\.?\d{0,2}/);
	    var txt = '';
	    if (reg != null) {
	        txt = reg[0];
	        if(txt[0] == 0 && txt[1] != '.'){
	        	txt = parseFloat(txt);
	        }
	    }else{
	    	txt = parseFloat(num).toFixed(2)
	    }
	    if(isNaN(txt)){
	    	txt = ''
	    }
	    return txt;
    }
  }
}