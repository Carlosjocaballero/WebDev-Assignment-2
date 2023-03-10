/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
	// the mapped array
	let mappedArray = [];
	for (let i = 0; i < this.length; i++) {
		let value = this[i];
		// perform the function on each element 
		if (value !== undefined) mappedArray.push(callbackFn(value, i, this)); 
	}
	return mappedArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
	// The filtered array that will be returned
	let filteredArray = [];
	for(let i = 0; i < this.length; i++){
		// if item in array is undefined, skip
		if(this[i] === undefined) continue;
		
		// callbackfn will return boolean
		if(callbackFn(this[i], i, this)){
			// if true, push item to filtered array
			filteredArray.push(this[i]);
		}
	}
	return filteredArray;

};

// SOME //
Array.prototype.mySome = function(callbackFn) {
	for (let i = 0; i < this.length; i++) {
		let value = this[i];
		// perform the function on each element 
		if (value !== undefined) {
			// if one value satisifes the function, return true
			if (callbackFn(value, i, this)) return true; 
		}
	}
	return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
	for(let i = 0; i < this.length; i++){
		if(this[i] === undefined) continue;
		// callbackFn return boolean
		if(!callbackFn(this[i], i, this)){
			return false;	
		}
	}
	return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
	// if the array length is zero, return null
	if (this.length === 0) return null;
	// the accumulated value
	let accValue = this[0];
	for (let i = 1; i < this.length; i++) {
		let nextValue = this[i];
		// perform the function on each element 
		if (nextValue !== undefined) accValue = callbackFn(accValue, nextValue, i, this); 
	}
	return accValue;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
	for(let i = 0; i < this.length; i++) if(this[i] == searchElement) return true;
	return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
	for (let i = 0; i < this.length; i++) {
		if(this[i] === searchElement) return i;
	}
	return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
	for(let i = this.length - 1; i >= 0; i--){
		if(this[i] === searchElement) return i;
	}
	return -1;
};

// KEYS //
Object.myKeys = function(object) {
	let objectKeys = [];
	// iterate over the object and get all keys
	for(key in object) objectKeys.push(key);
	return objectKeys;
};

// VALUES //
Object.myValues = function(object) {
	let objectValues = [];
	// iterate over the object and get all values
	for(i in object) objectValues.push(object[i]);
	return objectValues;
};

