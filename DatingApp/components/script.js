var users = [
{
name: 'Katia',
gender: 'F',
hobby: 'books',
avatar:	'avatar1.jpg',
},
{
name: 'Gena',
gender: 'M',
hobby: 'job',
avatar:	'avatar2.jpg',
},
{
name: 'Dima',
gender: 'M',
hobby: 'music',
avatar:	'avatar.jpg',
}
];

window.addEventListener('load', function(){
	var results = document.getElementById('results');

	// console.log("the page loaded");
	
	// console.log(search);
	function search1(){	

		//	get hobby
		var hobbyField = document.getElementById('hobby');
		var hobby = hobbyField.value;
		// console.log(hobby);

		// get gender
		var genderField = document.getElementById('gender');
		var selected = genderField.selectedIndex;
		var gender = genderField.options[selected].value;
		// console.log(gender);

		var resultsHtml = '';
		var usersLength = users.length;

		// console.log("the page loaded1");

		// for(var i =0; i<usersLength; i++){
		// 	// chech gender
		// 	if (gender =='A'|| gender == users[i].gender){			
		// 		// chech hobby
		// 		if (hobby == '' || hobby == users[i].hobby){
		// 			resultsHtml = resultsHtml +'<div class="person-row">\
		// 					<div class="person-info">\
		// 					<img class="image" src="images/' + users[i].avatar + '"  />\
		// 					<div>' + users[i].name + '</div>\
		// 					<div>' + users[i].hobby + '</div></div>\
		// 					<button>Add as friend</button></div>';
		// 						}
		// 						}
		// 						};

		// results.innerHTML = resultsHtml;
	};
	var search = document.getElementById('search');
	search.addEventListener('click',search1);
});

