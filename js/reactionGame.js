
			var start = new Date().getTime();
			
			var listTimeTaken = [];
	
			var avg = 0;

			var arrayOfAvgTimes = [];
	
			var times = 0;
			
			var endOfRoundMessage = "";
			
			
			function getRandomColor() {
    			var letters = '0123456789ABCDEF';
				
    			var color = '#';
				
    			for (var i = 0; i < 6; i++ ) {
					
        			color += letters[Math.floor(Math.random() * 16)];
					
    				}
				
    			return color;
			}
			
			function makeShapeAppear () {
				
				var top = Math.random() * 400;
				
				var left =Math.random() * 600;
				
				var width = (Math.random() * 200) + 100;
				
				if (Math.random() > 0.50) {
					
					document.getElementById("shape").style.borderRadius = "50%";
				
				} else
					
					document.getElementById("shape").style.borderRadius = "0%";
			
				
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				
				document.getElementById("shape").style.top = top + "px";
				
				document.getElementById("shape").style.left = left + "px";
				
				document.getElementById("shape").style.width = width + "px";
				
				document.getElementById("shape").style.height = width + "px";
				
				document.getElementById("shape").style.display = "block";
				
				start = new Date().getTime();
				
				
				
			}
			
			function appearAfterDelay () {
				
				setTimeout(makeShapeAppear, Math.random() * 2000);
			
			}
			
			appearAfterDelay();
				
			
			document.getElementById("shape").onclick = function() {
				
				document.getElementById("shape").style.display = "none";
				
				var end = new Date().getTime();
				
				var timeTaken = (end - start) / 1000;
				
				// stores the time it takes to click in this array.
				listTimeTaken.push(timeTaken);
				
				//alert(listTimeTaken);
				
				
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				
				
				// Using a loop to add the time it takes for a click.
				
				
				for(var i = 0; i < listTimeTaken.length; i++) {
					
    				times += listTimeTaken[i];
					
					}
				//after the loop, figuring the average.
				avg = Math.round((times / listTimeTaken.length) * 100) / 100;
				
				var bestTime = Math.min.apply(null, listTimeTaken);
				
				
				
				document.getElementById("avgTime").innerHTML = avg + "s";
				
				
				document.getElementById("bestTime").innerHTML = bestTime + "s";
					
				
				function stopAfterTenClicks () {
				
					if((listTimeTaken.length)>=5){
						document.getElementById("avgForRound").innerHTML = (endOfRoundMessage+=("This is your average time after that round: " + avg +"s"));
						alert("Click OK to start a new round.")
						if (endOfRoundMessage =("This is your average time after that round: " + avg+"s")) {
							listTimeTaken.length = 0; 
							endOfRoundMessage = "";
							avg = 0;
							times=0;
						}
					}
					
				}
			
				stopAfterTenClicks();
				
				
				
				

				
				
				
			
				//makes shape appear after delay.
				appearAfterDelay();
				
			}
			
			
			/*
			function determineBestTime () {
				
				
					for(var i = 0; i < arrayOfAvgTimes.lenth; i++) {
						avg += arrayOfAvgTimes[i];
						
					}
				
					//arrayOfAvgTimes.push(avg);
					
					bestAverageTime = Math.min.apply(Math, arrayOfAvgTimes);
					
					return bestAverageTime;
				
					
					
				}
				
				determineBestTime();
			
		*/

			



			