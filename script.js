 function checkValidity(domain) {
		  	 		 	
		  	 		var xml = new XMLHttpRequest();

		  	 		xml.open('GET', `https://website-contacts.whoisxmlapi.com/api/v1?apiKey=at_EaiTH6UmfjgnKe0h96lVd95l3ki7h&domainName=${domain}`);
		  	 		xml.responseType = 'json'

		  	 		xml.onload = function () {
		  	 				
		  	 				if (xml.readyState == 4  && xml.status == 200) {
			  	 								console.log( this.response)
			  	 						if (this.response.websiteResponded ) {
			  	 							result.innerHTML = 'Valid Domain Name';
			  	 						} else{
			  	 								result.innerHTML = 'Invalid Domain name';
			  	 						}
			  	 		 	}
		  	 		}

		  	 		xml.send()
  	 		 }

  	 		check.onblur = function () {
  	 			 checkValidity(this.value);
  	 		}
