function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       window.postMessage("GetAccounts")
   }
}


window.document.addEventListener('message',function(e) {
   var event = new CustomEvent('GetAccounts', { detail: { a: 1, b: 2} });
   document.dispatchEvent(event)

})
