// EventListener for submit which will call all functions needed for Pixel Art Maker
document.getElementById("sizePicker").addEventListener("submit", function(event) {
	// Not trigger the default action of the submit form
	event.preventDefault();
	// Reset the previous grid for user to submit gridheight and gridwitdh for new grid
	resetGrid();
	// Save the height and the width value when user submit them
	let gridHeight = document.getElementById("input_height").value;
	let gridWidth = document.getElementById("input_width").value;
	// Call makegrid with passing gridHeigt, gridWidth which user just submitted
	makeGrid(gridHeight, gridWidth);
	// EventListener to check if any pixel on the grid is clicked and change the color to what user selected
	document.getElementById("pixel_canvas").addEventListener("click", function(event) {
		// the updated version to get the color and apply the colort to the table 
		var pixelColor = document.getElementById("colorPicker").value;
		event.target.style.backgroundColor = pixelColor; 
	}); 	
		/* the first version
		if (document.getElementsByTagName("tr").length !== 0) {
		  	for (let i =0; i < document.getElementsByTagName("td").length ; i++) {
				document.getElementsByTagName("td")[i].addEventListener("click", function(event) {
					// Save the color value when clicking just happened 
					var pixelColor = document.getElementById("colorPicker").value;
					// EventListener to check if user chages the color for pixel
					document.getElementById("colorPicker").addEventListener("change", function(){
						pixelColor = document.getElementById("colorPicker").value;
					});
					// Change the color of the pixel clicked through .style.backgroundColor
					this.style.backgroundColor = pixelColor; 
				}); 
			}
		}*/
});

// Function to make grid according to the height and the width from user submit passed through paraameters
function makeGrid(gridHeight, gridWidth) {
	var table = document.getElementById("pixel_canvas");
	for (let i = 0 ; i < gridHeight ; i++) {	
		let tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		for (let j = 0 ; j < gridWidth ; j++) {
			let lastTableRow = table.lastChild; 
			let tableData = document.createElement("td");
			lastTableRow.appendChild(tableData);
		}
	}
}

// Function to reset grid
function resetGrid() {
// second version
	if (document.getElementsByTagName("tr").length !== 0){
		document.getElementById("pixel_canvas").innerHTML = "";
	}
 /*	first version
 if (document.getElementsByTagName("tr").length !== 0){
		var tableNode = document.getElementById("pixel_canvas");
		tableNode.parentNode.removeChild(tableNode);
		var newTableNode = document.createElement("table");
		newTableNode.id = "pixel_canvas";
		document.body.appendChild(newTableNode);
	}*/
}
