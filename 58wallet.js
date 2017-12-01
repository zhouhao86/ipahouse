function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       window.postMessage("GetAccounts")
   }
}


window.document.addaddEventListener('message',function(e) {
   var event = new Event('GetAccounts');
   document.dispatchEvent(event)

})
