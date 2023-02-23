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
		if (value !== undefined) mappedArray.push(callbackFn(value)); 
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
  // Place your code here.
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
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
	for(let i = 0; i < this.length; i++) if(this[i] == searchElement) return true;
	return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
	for(let i = this.length - 1; i > 0; i--){
		if(this[i] == searchElement) return i;
	}
	return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  objectKeys = [];

  for(i in object){
	objectKeys.push(object[i]);
  }

  return objectKeys;
};

