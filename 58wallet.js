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
   var event = new CustomEvent('GetAccounts', { detail: e.data });
   document.dispatchEvent(event)

})
