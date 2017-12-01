function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       window.postMessage("GetAccounts")
   }
}


window.document.addEventListener('message',function(e) {
   var event = new Event('GetAccounts');
   document.dispatchEvent(event,{a:1,b:2})

})
