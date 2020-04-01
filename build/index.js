"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    function Sorter(collection) {
        this.collection = collection;
    }
    // What if collection is a string?  Strings are immutable?
    Sorter.prototype.sort = function () {
        // const length = this.collection.length;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j <= length - i - 1; j++) {
                //All of this only works if collection is nummber[]
                //Ifcollection is an array of nunbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
console.log("before", sorter.collection);
sorter.sort();
console.log("after", sorter.collection);
