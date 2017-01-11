function toTwenty() {
	Array.call(this);
}

toTwenty.prototype = Object.create(Array.prototype);
toTwenty.prototype.constructor = toTwenty;

var oneToTwenty = new toTwenty();
for (var i=1; i<=20; i++) {
	oneToTwenty.push(i);
}


function toForty() {
	Array.call(this);
}

toForty.prototype = Object.create(Array.prototype);
toForty.prototype.constructor = toForty;

var twoToForty = new toForty();
for (var i=2; i<=40; i+=2) {
	twoToForty.push(i);
}
