var load = function() {


	var toggleInput = function() {
		$('.input-form').toggle('display');
	};

	$('#editor').on('click', toggleInput); 

	var updateName = function() {
		var x = $('#name').val();
		$('name-info').text(x);
	};
	
	var updateBio = function() {
		var x = $('#bio').val();
		$('bio-info').text(x);
	};	

	var updateBooks = function() {
		var x = $('#books').val();
		$('books-info').text(x);
	};

	var updateLibraries = function() {
		var x = $('libraries').val();
		$('libraries-info').text(x);
	};






	$('#submit-changes').click(function(event) {
		event.preventDefault();

	});




};

$(document).on('ready', load);

// form
// #name
// #bio
// #books
// #libraries

// page
// #name-info
// #bio-inf
// #books-info
// #libraries-info