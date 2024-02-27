/* Load into parent frame
 * Listens for events sent by iframes
 */

(function(){
  try {
    var receiveMessage = function(event) {
      try {
        if(event && typeof event.data != 'undefined') {
          
          var message = JSON.parse(event.data);
          
          if(message && typeof message.event != 'undefined' && message.event.indexOf('custom.postMessage') >= 0) {
            console.log('custom event: ' + "\n", message);
            if( typeof notify !== 'undefined') {
	            notify(message);
            } 
            if(dataLayer) {
              dataLayer.push(message);
            }
            
          }
        }
      } catch(err) {};
    };
    if(typeof window.addEventListener !== 'undefined') {
      window.addEventListener('message', function(e) {
        receiveMessage(e);
      });
    } else if (typeof window.attachEvent !== 'undefined') {
      window.attachEvent('on' + 'message', function(e) {
        receiveMessage(e);
      });
    }
  } catch(err){if(true) console.log(err);};
  })();