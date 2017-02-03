class GuessingGame {
    constructor() {
    	this._min = null;
    	this._max = null;
    }

    setRange(min, max) {
    	this._min = min;
    	this._max = max;
    }

    guess() {
    	let current = Math.round((this._min+this._max)/2);
    	return current;
    }

    lower() {
    	this._max = Math.round((this._min+this._max)/2);
    }

    greater() {
    	this._min = Math.round((this._min+this._max)/2);
    }
}

module.exports = GuessingGame;
