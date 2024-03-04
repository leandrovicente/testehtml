
(function () {
   (function (w, d, s, l, i) {
     w[l] = w[l] || [];
     w[l].push({
       "gtm.start": new Date().getTime(),
       event: "gtm.js",
     });
     var f = d.getElementsByTagName(s)[0],
       j = d.createElement(s),
       dl = l != "dataLayer" ? "&l=" + l : "";
     j.async = true;
     j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
     f.parentNode.insertBefore(j, f);
   })(window, document, "script", "dataLayer", "GTM-PT45X2P");
  
   (function (w, d, s, l, i) {
     w[l] = w[l] || [];
     w[l].push({
       "gtm.start": new Date().getTime(),
       event: "gtm.js",
     });
     var f = d.getElementsByTagName(s)[0],
       j = d.createElement(s),
       dl = l != "dataLayer" ? "&l=" + l : "";
     j.async = true;
     j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
     f.parentNode.insertBefore(j, f);
   })(window, document, "script", "dataLayer", "GTM-NQGV93X3");
  
  try {
    var receiveMessage = function(event) {
      try {
        if(event && typeof event.data != 'undefined') {
          
          var message = JSON.parse(event.data);
          
          if(message && typeof message.event != 'undefined' && message.event.indexOf('iframe') >= 0) {
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