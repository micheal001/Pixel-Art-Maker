
$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid){
		$('table tr').remove();
		// the rowValues and colValues fetches the user value for height and width respectively
		const rowValues = $('#inputHeight').val();
		const colValues = $('#inputWeight').val();
		
		// the for loop allows the generation of the table cells
		// the let keyword allows the value to accesible with the scope of the loop.
		for (let i = 1; i <= rowValues; i++){
			$('table').append('<tr></tr>');
			
			for (let j = 1; j <= colValues; j++){
				$('tr:last').append('<td></td>');
				$('td').attr("class",'cells');
			}
		}
		//grid.preventDefault stops the default action action of the element to take place.
		//it allows the table created to display.
		grid.preventDefault();
		
		
		/*
			this code allows user to pick a particular color to paint
			their table cell
		*/
		$('.cells').click(function (event){
			const paintCells = $('#colorPicker').val();
			$(event.target).css('background-color', paintCells);
		});
	});
	
});