
var callbackId;
var callbackArray;
function JBIwallet() {
   
    callbackId = 0;
    callbackArray= [];
    
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
       jsonObj.method = "GetAccountsCallback";
       jsonObj.callbackId= callbackId;
       callbackArray[callbackId++] = callback;
       var str = JSON.stringify(jsonObj);
       window.postMessage(str)
      
   }
   
}

JBIwallet.exeCallback= function(param) {
      var jsonObj = JSON.parse(param);
      var callback = callbackArray[jsonObj.callbackId];
      if(callback && typeof(callback) === "function") {
         callback(jsonObj.data);
      }
 }


window.document.addEventListener('message',function(e) {
   var jsonObj = JSON.parse(e.data);
   if(jsonObj.method == 'GetAccounts') {
       var event = new CustomEvent('GetAccounts', { detail: jsonObj.data });
       document.dispatchEvent(event)
   }
  

})
