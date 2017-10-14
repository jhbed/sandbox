//connected with hodDoI.html

/*

picture input section
<input type="file" name="user_pic" accept="image/*" />
<input type="button" id="fbutton" value="validate" />

*/

$(document).ready(function(){
	var size = 0;

	$('input[name="user_pic"]').on('change', function(){
		size = this.files[0].size;
	});

	$('#fbutton').on('click', function(){
		if(size == 0) {
			alert("Please select a file.");
			return;
		}
		if(size/1000 > 1000) {
			alert("File too big, 1MB Max.");
			return;
		}
		alert("File is OK to upload");
	});

	/*
	handling check boxes
	<input type="checkbox" name="languages" value="C++" />C++
	<input type="checkbox" name="languages" value="Java" />Java
	<input type="checkbox" name="languages" value="Python" />Python
	*/
	$('#cboxbutton').on('click', function(){
		var values = "";
		var cbox = $('input[name="languages"]');
		$.each(cbox, function(k,v){
			if(this.checked)
				values += v.value + " ";
		});
		if(values){
			alert(values);
		}
		else{
			alert("you didn't check anything");
		}
	});


	//radio buttons
	// <input type="radio" name="age" value="child" />Child
	// <input type="radio" name="age" value="Adult" />Adult
	$('#agebutton').on('click', function(){
		var choice = $('input[name="age"]');
		var selected;
		$.each(choice, function(k,v){
			if(this.checked)
				selected = v.value;
		});
		if(selected)
			alert(selected);
		else
			alert("no category indicated");
	})

	//dropdown
	/*
	<select id="dropdown" name="student">
		<option value ="bad">---</option>
		<option value="freshman">freshman</option>
		<option value="Sophmore">Sophmore</option>
		<option value="Junior">Junior</option>
		<option value="Senior">Senior</option>
	</select>
	<input type="button" id="levelbutton" value="Show Level" />
	*/
	$('#levelbutton').on('click', function(){
		var selection = $('#dropdown:selected').val(); //would .value work here?, you also can do .text to get the actual stuff in the tags
		if(selection == "bad")
			alert("you didn't select a level");
		else
			alert("you are a " + selection);
	});

});
