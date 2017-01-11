function toTwenty() {
	Array.call(this);
}

toTwenty.prototype = Object.create(Array.prototype);
toTwenty.prototype.constructor = toTwenty;

toTwenty.prototype.search = function(data) {

	var upperBound = this.length-1;
    var lowerBound = 0;
    var count = 0;
    var index;
    var mObj = {};

    while (lowerBound <= upperBound) {
    	
    	var mid = Math.floor((upperBound + lowerBound) / 2);
    	if (this[mid] < data) {
			lowerBound = mid + 1;
		}

		else if (this[mid] > data) {
			upperBound = mid - 1;
		}

		else if (this[mid] === data) {

			index = mid;
			break
		}
		count += 1;
    }

    mObj['count'] = count;
    mObj['index'] = index;
    mObj['length'] = this.length;
    return mObj;

}


var oneToTwenty = new toTwenty();
for (var i=1; i<=20; i++) {
	oneToTwenty.push(i);
}


function toForty() {
	Array.call(this);
}

toForty.prototype = Object.create(Array.prototype);
toForty.prototype.constructor = toForty;

toForty.prototype.search = function(data) {
	var upperBound = this.length-1;
    var lowerBound = 0;
    var count = 0;
    var mObj = {};

    while (lowerBound <= upperBound) {
    	
    	var mid = Math.floor((upperBound + lowerBound) / 2);
    	if (this[mid] < data) {
			lowerBound = mid + 1;
		}

		else if (this[mid] > data) {
			upperBound = mid - 1;
		}

		else {
			break;
		}

		count += 1;
    }
    mObj['count'] = count;
    mObj['index'] = mid;
    mObj['length'] = this.length;
    return mObj;

}



var twoToForty = new toForty();
for (var i=2; i<=40; i+=2) {
	twoToForty.push(i);
}

function toOneThousand() {
	Array.call(this);
}

toOneThousand.prototype = Object.create(Array.prototype);
toOneThousand.prototype.constructor = toOneThousand;

toOneThousand.prototype.search = function(data) {

	var upperBound = this.length-1;
    var lowerBound = 0;
    var count = 0;
    var mObj = {};

    while (lowerBound <= upperBound) {
    	
    	var mid = Math.floor((upperBound + lowerBound) / 2);
    	if (this[mid] < data) {
			lowerBound = mid + 1;
		}

		else if (this[mid] > data) {
			upperBound = mid - 1;
		}

		else {
			break;
		}

		count += 1;
    }

    mObj['count'] = count;
    mObj['index'] = mid;
    mObj['length'] = this.length;
    return mObj;

}



var tenToOneThousand = new toOneThousand();

for (var i=10; i<=1000; i+=10) {
	tenToOneThousand.push(i);
}

console.log(oneToTwenty.search(44));

