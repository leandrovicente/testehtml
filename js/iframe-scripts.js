function post_message(mx_event, data){
	try {
		console.log( 'post');
		if(typeof parent != "undefined" && parent != window) {
			if(typeof parent.postMessage != "undefined") {
				var message = {};
				message["origin"] = {
					"type" : "iframe",
					"host" : window.location.hostname,
				};
				var event = "custom.postMessage";
				// Add description of the event
				event += "." + mx_event;
				message["event"] = event;
				
				//console.log(typeof data);
				// Add custom data
				if( typeof data !== 'undefined' ) {
					message["custom_data"] = data;
					//message["custom_data"].push(this);
				}
				message["action"] = mx_event;
				// Convent message into a string
				var messageJSON = JSON.stringify(message);
				//Send message to parent
				parent.postMessage(messageJSON, "*");
			}
		}
	} catch(err){if(true) console.log(err);};
}
