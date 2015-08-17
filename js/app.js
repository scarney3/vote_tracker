
'use strict'
// Waiting for vote state
var Photo = function(fileLocation) { //constructor
	this.fileLocation = fileLocation;
	this.votes = 1;
	this.index = [];
}

var Tracker = function () {
	this.leftPhoto = {};
	this.rightPhoto = {};
	this.photoArray = [];
}

Tracker.prototype.getPhoto = function() {
	this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	this.rightPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];

	while (this.rightPhoto === this.leftPhoto) {
		this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];

	}
Tracker.prototype.renderPhotos = function() {
	var lphoto= document.getElementById('leftphoto');
	var rphoto = document.getElementById('rightphoto');
	rphoto.attributes[1].value = this.rightPhoto.fileLocation;
	lphoto.attributes[1].value = this.leftPhoto.fileLocation;
	}
};

var vote = new Tracker();

vote.photoArray.push(new Photo('img/kittens/cat1.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat2.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat3.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat4.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat5.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat6.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat7.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat8.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat9.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat10.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat11.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat12.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat13.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat14.jpg'));

vote.getPhoto();
vote.renderPhotos();
console.dir(vote);

// Photo.prototype.highlight = function() {
// 	var getPhoto = document.getElementById('photos');
// 	newDiv.
// };

// Tracker.prototype.waitingForVote = function() {
// 	for (var i = 1; i < 14; i++) { //method for vote tally goes here
// 	highlight() // CSS for highlight later
// }
	//drawTheChart()?
	//giveUserOptionToVoteAgain()?

// };

// Tracker.prototype.getRandomInt = function() {
// 	return Math.floor(Math.random() * (this.Photo));

// };

// Tracker.prototype.displayPhotos = function() {
// 	//display random photos
// 	//prevent same photo displayed for both choices
// 	//if photo1 === photo2 then re-roll
// }

// Display Winner State

// Tracker.prototype.displayWinner = function() {
// 	action4()
// 	action5()
// 	action6()
// }

// voteButton.addEventListener('click', waitingForVote);
//some 'document.getElementById' variables to access and manipulate document
