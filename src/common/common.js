export default{
  install(Vue,options)
  {
    Vue.prototype.moneyType = function (num) {				//使输入框输入为金额
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
    Vue.prototype.setCookie = function (c_name,value,expiredays){
			var exdate=new Date()
			exdate.setDate(exdate.getDate()+expiredays)
			document.cookie=c_name+ "=" +escape(value)+
			((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
		}
    Vue.prototype.getCookie = function (c_name){
			if (document.cookie.length>0)
			  {
			  var c_start=document.cookie.indexOf(c_name + "=")
			  if (c_start!=-1)
			    { 
			    c_start=c_start + c_name.length+1 
			    var c_end=document.cookie.indexOf(";",c_start)
			    if (c_end==-1) c_end=document.cookie.length
			    return unescape(document.cookie.substring(c_start,c_end))
			    } 
			  }
			return ""
		}
    Vue.prototype.delCookie = function (name) { 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() - 1); 
	    var cval=this.getCookie(name); 
	    if(cval!=null) 
	        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
		} 
  }
}