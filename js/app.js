
'use strict'

var photoArray; //array of photo objects that carry the path and the vote tally, perhaps the name, too
[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

var Photo = function(fileLocation) { //constructor
	this.path = fileLocation;
	this.votes = 1;
	this.index = [];
}

// Hella photos
var photo1 = new Photo('img/cat1.jpg');
var photo2 = new Photo('img/cat2.jpg');
var photo3 = new Photo('img/cat3.jpg');
var photo4 = new Photo('img/cat4.jpg');
var photo5 = new Photo('img/cat5.jpg');
var photo6 = new Photo('img/cat6.jpg');
var photo7 = new Photo('img/cat7.jpg');
var photo8 = new Photo('img/cat8.jpg');
var photo9 = new Photo('img/cat9.jpg');
var photo10 = new Photo('img/cat10.jpg');
var photo11= new Photo('img/cat11.jpg');
var photo12 = new Photo('img/cat12.jpg');
var photo13 = new Photo('img/cat13.jpg');
var photo14 = new Photo('img/cat14.jpg');


var Tracker = function() {
	this.leftPhoto
	this.rightPhoto
	
}

Photo.prototype.highlight = function() {
	var getPhoto = document.getElementById('photos');
	newDiv.id = this.fileLocation;
	
};

Tracker.prototype.waitingForVote = function() {
	//receive click
	//increment vote count
	//event Listener on each photo
	//highlight()?
	//drawTheChart()?
	//giveUserOptionToVoteAgain()?
	
};

Tracker.prototype.getRandomInt = function() {
	return Math.floor(Math.random() * (this.Photo);
	
};

Tracker.prototype.displayPhotos = function() {
	//display random photos
	//prevent same photo displayed for both choices
	//if photo1 === photo2 then re-roll
}

Tracker.prototype.waitingForVote = function() {
	action1()
	action2()
	action3()
}

Tracker.prototype.displayWinner = function() {
	action4()
	action5()
	action6()
}

//some 'document.getElementById' variables to access and manipulate document