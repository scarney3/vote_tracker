$(document).ready(function() {

'use strict';
// Waiting for vote state
var photoArray = [];
var Chart = console.log();

$.ajax({
	url: 'https://api.imgur.com/3/album/DDoWy',
	method: 'GET',
	headers: {
		'Authorization': 'Client-ID 2415c6c9580a62d'
	}
})

.done(function(res) {
	photoArray = res.data.images;

	for (var i = 0; i < photoArray.length; i++) {
		photoArray[i].path = photoArray[i].link;
	}
	getImgurPhoto();
})

function getImgurPhoto() {
	var randomPhoto = Math.floor(Math.random() * photoArray.length + 1);
	var displayPhoto = '<img src="' + photoArray[randomPhoto].link + '">';
	$('#photoContainer').html(displayPhoto);
}

$('newRandom').click(function() {
	getImgurPhoto();
});

var Photo = function(fileLocation) {
	this.fileLocation = fileLocation;
	this.votes = 1;
	this.index = [];
};

var Tracker = function() {
	this.photoArray = [];
	this.leftPhoto = '';
	this.rightPhoto = '';
};

Tracker.prototype.getPhoto = function() {
	this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	this.rightPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	console.log(this.rightPhoto);
	while (this.rightPhoto === this.leftPhoto) {
		this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	}
};

Tracker.prototype.renderPhotos = function() {
	rphoto.attributes[1].value = this.rightPhoto.fileLocation;
	lphoto.attributes[1].value = this.leftPhoto.fileLocation;
};

Tracker.prototype.leftphoto = function() {
	console.log ("left was clicked");
	console.log("left is " + vote.leftPhoto.fileLocation);
	vote.leftPhoto.votes++;
	console.log("left has " + vote.leftPhoto.votes);
	results.innerHTML = ('Left has ' + vote.leftPhoto.votes + ' and right has '
+ vote.rightPhoto.votes);
	vote.createChart();
	$('#nextbutton').show();
};

Tracker.prototype.rightphoto = function() {
	console.log ("right was clicked");
	console.log("right is " + vote.rightPhoto.fileLocation);
	vote.rightPhoto.votes++;
	console.log("right has " + vote.rightPhoto.votes);
	results.innerHTML = ('Left has ' + vote.leftPhoto.votes + ' and right has '
+ vote.rightPhoto.votes);
	vote.createChart();
	$('#nextbutton').show();
};

Tracker.prototype.createChart = function() {
	var ctx = document.getElementById('createChart').getContext('2d');
	var myDoughnutChart = new Chart(ctx).Doughnut(data)([{
		value: 1,
		color: "green"
	}, {
		value: 1,
		color: "yellow"
	}]);
};

Tracker.prototype.incrementKittens = function(photo) {
	var index = this.leftphoto(photo);
	var index = this.rightphoto(photo);
	this.photoArray[index][1]++;
};

var vote = new Tracker();

vote.photoArray.push(new Photo('http://i.imgur.com/pPA0iM0.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/7ykJ1xi.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/n91EiPd.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/LDiTFeQ.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/ywavhKp.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/9Fg6CZS.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/leaDJOY.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/XA0PRs2.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/rkO8XVX.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/QBZjjMe.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/aGJW6lS.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/60maZWt.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/u9wzm0f.jpg'));
vote.photoArray.push(new Photo('http://i.imgur.com/vyz8MGP.jpg'));

var lphoto = document.getElementById('leftphoto');
var rphoto = document.getElementById('rightphoto');
var results = document.getElementById('results');
var nextbutton = document.getElementById('nextbutton');

rphoto.addEventListener('click', vote.rightphoto);
lphoto.addEventListener('click', vote.leftphoto);
nextbutton.addEventListener('click', function (){
	vote.getPhoto();
	vote.renderPhotos();
	vote.createChart();
	$('#nextbutton').hide();
});

vote.getPhoto();
vote.renderPhotos();
vote.createChart();
$('#nextbutton').hide();

});


	// var leftVotes = vote.leftPhoto.votes;
	// var rightVotes = vote.rightPhoto.votes;
