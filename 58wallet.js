function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       var jsonObj =  new Object();
       jsonObj.method = "GetAccounts";
       var str = JSON.stringify(jsonObj);
       window.postMessage(str)
   }
}


window.document.addEventListener('message',function(e) {
   var jsonObj = JSON.parse(e.nativeEvent.data);
   if(jsonObj.method == 'GetAccounts') {
       var event = new CustomEvent('GetAccounts', { detail: jsonObj.data });
       document.dispatchEvent(event)
   }
  

})
