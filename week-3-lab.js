// JSON object 
			var ad_metadata = {
				'ad0' : "Fill your house with new carpet from Empire today",
				'ad1' : "Get a new guitar from Guitar Center today",
				'ad2' : "Click for all your Torrent needs today",
				'ad3' : 'Go to school at <a href="http://neit.edu">NEIT.edu</a> today',
				'ad4' : "Create your own ads at AdCreator today"			
			};
			
			function rand_ad_display(){
				var ad_div = document.getElementById("ad"); // gets the div for ad
				var ad_keys = [];	// this is the array
				var ad_key = ""; // used to fill the array in the for in loop
				
				// this is filling the array
				for(ad_key in ad_metadata) {
					ad_keys.push(ad_key);
				}
				
				var ad_keys_len = ad_keys.length // this is a variable that is filled with the length of the array
				var rand_ad_key = getRandAdKey(ad_keys_len); // variable filled with a random ad key by the math function
				var ad_key_value = ad_keys[rand_ad_key]; // variable filled with the index value of one of the keys
				var ad_metadata_value = ad_metadata[ad_key_value]; // variable filled with the value of a key in the object
				
				ad_div.innerHTML = ad_metadata_value; // changes the ad that is displayed
				document.title = ad_metadata_value.substr(0,15); // changes the title of the page with the first 15 charecters of the value in the object
			}
			
			function getRandAdKey( len ){
				// gets random number from 0 to len(passed in)
				return Math.floor(Math.random()* len);
			}
			
			rand_ad_display(); // calls the function to change the ad and title
			
