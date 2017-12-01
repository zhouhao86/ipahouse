function JBIwallet() {


}
JBIwallet.prototype = {

   GetAccounts:function() {
       window.postMessage("GetAccounts")
   }
}


window.document.addEventListener('message',function(e) {
   alert(e.data)
   var event = new Event('GetAccounts');
   document.dispatchEvent(event)

})
