function JBIwallet() {

     this.callbackId= 0;
     this.callbackArray = [];

}
JBIwallet.prototype = {

   GetAccounts:function() {
       var jsonObj =  new Object();
       jsonObj.method = "GetAccounts";
       var str = JSON.stringify(jsonObj);
       window.postMessage(str)
   },
   
   GetAccountsCallBack:function(callback) {
       var jsonObj =  new Object();
       jsonObj.method = "GetAccounts";
       jsonObj.callbackId= this.callbackId;
       this.callbackArray[this.callbackId++] = callback;
       var str = JSON.stringify(jsonObj);
       window.postMessage(str)
      
   },

   exeCallback:function(param) {
      var jsonObj = JSON.parse(param);
      var callback = this.callbackArray[param.callbackId];
      if(callback && typeof(callback) === "function") {
         callback(param.data);
      }
   }
   
}


window.document.addEventListener('message',function(e) {
   var jsonObj = JSON.parse(e.data);
   if(jsonObj.method == 'GetAccounts') {
       var event = new CustomEvent('GetAccounts', { detail: jsonObj.data });
       document.dispatchEvent(event)
   }
  

})
