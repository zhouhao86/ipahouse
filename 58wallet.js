function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       window.postMessage("GetAccounts")
   }
}


window.document.addEventListener('message',function(e) {
   var event = new CustomEvent('GetAccounts', { detail: e.data });
   document.dispatchEvent(event)

})
